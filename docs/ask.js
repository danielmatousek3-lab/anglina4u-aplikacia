/* Tvorba otázok: ku každej vete príbehu alebo článku napíš otázku na zvýraznenú časť (plugin pre app.js; dáta v ask-data.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, say, toast, addXP, save, go, unlock } = api;
const ST = () => { const S = api.S; S.ask ||= { done: {} }; S.ask.done ||= {}; return S.ask; };
const KINDS = [["", "Všetko"], ["story", "Príbehy"], ["gen", "Články"], ["biz", "Business English"]];
const KIND_LABEL = { story: "Príbeh", gen: "Článok", biz: "Business" };
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const view = { kind: "", lv: "" };
const CONTR = [[/\b(what|who|where|when|why|how|there|it|he|she|that)'s\b/g, "$1 is"], [/\bwon't\b/g, "will not"], [/\bcan't\b/g, "can not"], [/\bcannot\b/g, "can not"], [/n't\b/g, " not"], [/'re\b/g, " are"], [/'ve\b/g, " have"], [/'ll\b/g, " will"], [/'d\b/g, " would"], [/'m\b/g, " am"]];
const norm = q => { let s = q.toLowerCase().replace(/[’‘`]/g, "'"); CONTR.forEach(([a, b]) => s = s.replace(a, b)); return s.replace(/[^a-z0-9' ]/g, " ").replace(/'s\b/g, "s").replace(/\s+/g, " ").trim(); };
const plain = s => s.replace(/\[|\]/g, "");
const shown = s => esc(s).replace(/\[(.+?)\]/, '<mark style="background:#FFE9A8;border-radius:6px;padding:2px 6px;font-weight:700">$1</mark>');
const doneOf = id => ST().done[id];
const back = (fn, title) => `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>${title || "❓ Tvorba otázok"}</h2></div>`;

function hub() {
  const list = window.ASK.filter(a => (!view.kind || a.kind === view.kind) && (!view.lv || a.lv === view.lv));
  $("#main").innerHTML = `<h1>Tvorba <em>otázok</em></h1>
  <p class="muted" style="margin:6px 0 20px;max-width:720px">Prečítaj si text a ku každej vete napíš otázku na zvýraznenú časť. Tak si natrénuješ poradie slov, pomocné slovesá a časy: príbehy podľa úrovne, články z bežného života aj z biznisu.</p>
  <div class="row" style="flex-wrap:wrap;gap:14px;margin-bottom:18px"><div class="seg" id="ak" style="margin:0">${KINDS.map(([k, t]) => `<button class="${view.kind === k ? "on" : ""}" data-k="${k}">${t}</button>`).join("")}</div>
  <div class="seg" id="al" style="margin:0">${["", ...LEVELS].map(l => `<button class="${view.lv === l ? "on" : ""}" data-l="${l}">${l || "Všetky úrovne"}</button>`).join("")}</div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">${list.map(a => { const d = doneOf(a.id); return `<button class="card" data-id="${a.id}" style="text-align:left;cursor:pointer"><div class="row" style="gap:8px;margin-bottom:8px"><span class="lvl-badge sm">${a.lv}</span><span class="pill">${KIND_LABEL[a.kind]}</span>${d ? `<span class="pill" style="margin-left:auto">✓ ${d.ok}/${a.s.length}</span>` : ""}</div><h3 style="margin:0 0 4px">${esc(a.t)}</h3><p class="small muted">${esc(a.sk)} · ${esc(a.tense)} · ${a.s.length} viet</p></button>`; }).join("") || '<p class="muted">Pre tento výber zatiaľ nie sú texty. Pribudnú ďalšie.</p>'}</div>`;
  $("#ak").onclick = e => { const b = e.target.closest("button"); if (b) { view.kind = b.dataset.k; hub(); } };
  $("#al").onclick = e => { const b = e.target.closest("button"); if (b) { view.lv = b.dataset.l; hub(); } };
  $("#main").querySelectorAll("button.card[data-id]").forEach(b => b.onclick = () => run(window.ASK.find(a => a.id === b.dataset.id)));
}

function run(a) {
  let n = 0, ok = 0; const log = [];
  const step = () => {
    if (n >= a.s.length) return end();
    const [sent, qs] = a.s[n]; let tries = 0, finished = false;
    $("#main").innerHTML = back() + `<div class="row" style="gap:8px;margin-bottom:10px"><span class="lvl-badge sm">${a.lv}</span><b>${esc(a.t)}</b><span class="muted small">· ${esc(a.tense)} · veta ${n + 1} / ${a.s.length}</span></div>
    ${log.length ? `<div class="card" style="max-width:760px;margin-bottom:14px"><div class="small muted" style="margin-bottom:6px">Doteraz:</div>${log.map(l => `<div class="small" style="margin:2px 0">${esc(plain(l.sent))}</div>`).join("")}</div>` : ""}
    <div class="card" style="max-width:760px"><details style="margin-bottom:12px"><summary class="small muted" style="cursor:pointer">💡 Tip ku gramatike</summary><p class="small" style="margin-top:8px">${esc(a.tip)}</p></details>
    <p class="muted small" style="margin-bottom:6px">Napíš otázku na zvýraznenú časť vety:</p><div class="prompt" style="font-size:28px;margin-bottom:16px">${shown(sent)}</div>
    <input class="input" id="aq" placeholder="Napíš otázku po anglicky…" autocomplete="off" autocapitalize="off" spellcheck="false"><div id="fb" style="min-height:24px;margin:12px 0"></div>
    <div class="row" id="ac" style="gap:12px;flex-wrap:wrap"><button class="btn" id="chk">Skontrolovať</button><button class="btn ghost" id="shw">Ukáž vzor</button></div></div>`;
    $("#bk").onclick = hub; const inp = $("#aq"); inp.focus();
    const next = (good) => { if (good) ok++; log.push({ sent, good }); n++; step(); };
    const reveal = () => {
      finished = true; const entered = inp.value.trim();
      $("#fb").innerHTML = `<p><b>Vzorová otázka:</b> ${esc(qs[0])}</p>${qs.length > 1 ? `<p class="small muted">Ďalšie správne možnosti: ${qs.slice(1).map(esc).join(" · ")}</p>` : ""}`;
      $("#ac").innerHTML = (entered ? `<button class="btn ghost" id="mine">Aj moja otázka je správna</button>` : "") + `<button class="btn" id="nx">${n + 1 >= a.s.length ? "Výsledok" : "Ďalej →"}</button>`;
      if ($("#mine")) $("#mine").onclick = () => next(true);
      $("#nx").onclick = () => next(false); $("#nx").focus(); say(qs[0]);
    };
    const check = () => {
      if (finished) return; const v = inp.value.trim(); if (!v) return;
      if (qs.some(q => norm(q) === norm(v))) {
        finished = true; $("#fb").innerHTML = `<p style="color:var(--green,#1b8a4b)"><b>✓ Správne!</b></p>${qs.length > 1 ? `<p class="small muted">Ďalšie správne možnosti: ${qs.filter(q => norm(q) !== norm(v)).map(esc).join(" · ")}</p>` : ""}`;
        $("#ac").innerHTML = `<button class="btn" id="nx">${n + 1 >= a.s.length ? "Výsledok" : "Ďalej →"}</button>`; $("#nx").onclick = () => next(true); $("#nx").focus(); say(v); return;
      }
      tries++;
      if (tries >= 2) return reveal();
      const first = qs[0].split(" ")[0];
      $("#fb").innerHTML = `<p style="color:var(--red,#b3261e)">Zatiaľ nie. Skús ešte raz. Nápoveda: otázka začína slovom <b>${esc(first)}</b>.</p>`; inp.focus(); inp.select();
    };
    $("#chk").onclick = check; $("#shw").onclick = reveal; inp.onkeydown = e => { if (e.key === "Enter") finished ? ($("#nx") && $("#nx").click()) : check(); };
  };
  const end = () => {
    const S = ST(), prev = S.done[a.id]; if (!prev || ok > prev.ok) S.done[a.id] = { ok, at: api.today() };
    const xp = ok * 2 + (ok === a.s.length ? 6 : 0); addXP(xp); save();
    if (Object.keys(S.done).length >= 5) unlock("ask5");
    $("#main").innerHTML = back() + `<div class="card" style="text-align:center;padding:36px;max-width:620px"><div style="font-size:72px">${ok === a.s.length ? "🏆" : "🎉"}</div><h2>${ok} z ${a.s.length}</h2><p class="muted" style="margin:8px 0 14px">${esc(a.t)} · ${esc(a.tense)}</p><p style="margin-bottom:18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px;flex-wrap:wrap"><button class="btn" id="again">Znova</button><button class="btn ghost" id="hb">Ďalší text</button></div></div>`;
    $("#bk").onclick = hub; $("#hb").onclick = hub; $("#again").onclick = () => run(a); api.renderRight();
  };
  step();
}

api.routes.ask = hub;
const gi = api.nav.findIndex(x => x[0] === "games");
api.nav.splice(gi < 0 ? api.nav.length : gi, 0, ["ask", "❓", "Otázky"]);
window.ACHIEVEMENTS.push({ id: "ask5", e: "❓", t: "Pýtavý", d: "Dokonči 5 textov v Tvorbe otázok" });
});
