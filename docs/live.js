/* Živá angličtina: frázy, idiómy a slang podľa úrovne (plugin pre app.js; dáta v live-data.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, shuffle, say, toast, addXP, save, go, unlock, fold } = api;
const ST = () => { const S = api.S; S.live ||= { known: {}, ok: {} }; S.live.ok ||= {}; return S.live; };
const TYPES = [
  { k: "F", e: "💬", t: "Frázy", one: "Fráza", d: "Čo povedať v bežných situáciách, v práci aj na cestách." },
  { k: "I", e: "🧠", t: "Idiómy", one: "Idióm", d: "Ustálené výrazy, ktoré sa nedajú prekladať doslova." },
  { k: "S", e: "😎", t: "Slang a skratky", one: "Slang", d: "Neformálna reč a skratky ako BTW, ASAP, FYI: tak, ako ľudia naozaj píšu a hovoria." }
];
const TYPE = Object.fromEntries(TYPES.map(x => [x.k, x]));
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const ITEMS = window.LIVE_RAW.split("\n").filter(l => l.trim() && l.split("|").length >= 6).map(l => {
  const [t, lv, en, sk, ex, exsk, note] = l.split("|");
  return { t, lv, en, sk, ex, exsk, note: note || "", id: t + lv + en.toLowerCase().replace(/[^a-z]/g, "").slice(0, 30) };
}).filter((i, n, a) => a.findIndex(x => x.id === i.id) === n);
const view = { t: "", lv: "", q: "", sub: "", n: 60 };
const isAbbr = i => i.t === "S" && /^Skratka/.test(i.note);
const pool = () => ITEMS.filter(i => (!view.t || i.t === view.t) && (!view.lv || i.lv === view.lv) && (view.t !== "S" || !view.sub || (view.sub === "a") === isAbbr(i)));
const knownN = () => ITEMS.filter(i => ST().known[i.id]).length;
const badge = i => `<span class="pill">${TYPE[i.t].e} ${isAbbr(i) ? "Skratka" : TYPE[i.t].one}</span><span class="lvl-badge sm">${i.lv}</span>`;
function mark(i, yes) {
  const s = ST(); if (yes) s.known[i.id] = api.today(); else delete s.known[i.id];
  save(); const n = knownN(); if (n >= 10) unlock("live10"); if (n >= 50) unlock("live50");
}
const back = () => `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>🗣️ Živá angličtina</h2></div>`;

/* ---------- úvod ---------- */
function hub() {
  const p = pool(), k = p.filter(i => ST().known[i.id]).length;
  $("#main").innerHTML = `<h1>Živá <em>angličtina</em></h1>
  <p class="muted" style="margin:6px 0 20px;max-width:720px">Frázy, idiómy, slang a skratky podľa úrovne: tak, ako Briti a Američania naozaj hovoria a píšu. ${ITEMS.length} výrazov s prekladom, príkladom a výslovnosťou.</p>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(230px,1fr));margin-bottom:22px">${TYPES.map(x => `<button class="card" data-t="${x.k}" style="text-align:left;cursor:pointer;${view.t === x.k ? "border:2px solid var(--crimson)" : ""}"><div style="font-size:34px">${x.e}</div><h3 style="margin:6px 0 4px">${x.t}</h3><p class="small muted">${x.d}</p><p class="small" style="margin-top:8px"><b>${ITEMS.filter(i => i.t === x.k).length}</b> výrazov · vieš ${ITEMS.filter(i => i.t === x.k && ST().known[i.id]).length}</p></button>`).join("")}</div>
  <div class="row" style="flex-wrap:wrap;gap:14px;margin-bottom:8px"><div class="seg" id="lt" style="margin:0">${["", "F", "I", "S"].map(t => `<button class="${view.t === t ? "on" : ""}" data-t="${t}">${t ? TYPE[t].t : "Všetko"}</button>`).join("")}</div>
  ${view.t === "S" ? `<div class="seg" id="ls" style="margin:0">${[["", "Slang aj skratky"], ["w", "Len slang"], ["a", "Len skratky"]].map(([k, t]) => `<button class="${view.sub === k ? "on" : ""}" data-s="${k}">${t}</button>`).join("")}</div>` : ""}<div class="seg" id="ll" style="margin:0">${["", ...LEVELS].map(l => `<button class="${view.lv === l ? "on" : ""}" data-l="${l}">${l || "Všetky úrovne"}</button>`).join("")}</div></div>
  <div class="card" style="max-width:760px;margin-top:14px"><div class="row between"><b>Vieš ${k} z ${p.length}</b><span class="muted small">${p.length ? Math.round(k * 100 / p.length) : 0} %</span></div><div class="bar" style="margin:10px 0 18px"><i style="width:${p.length ? k * 100 / p.length : 0}%"></i></div>
  <div class="row" style="flex-wrap:wrap;gap:12px"><button class="btn" id="m-cards">🃏 Karty</button><button class="btn" id="m-quiz">🎯 Kvíz</button><button class="btn ghost" id="m-list">📖 Zoznam</button></div></div>`;
  $("#main").querySelectorAll("button.card[data-t]").forEach(b => b.onclick = () => { view.t = view.t === b.dataset.t ? "" : b.dataset.t; view.sub = ""; hub(); });
  $("#lt").onclick = e => { const b = e.target.closest("button"); if (b) { view.t = b.dataset.t; view.sub = ""; hub(); } };
  $("#ll").onclick = e => { const b = e.target.closest("button"); if (b) { view.lv = b.dataset.l; hub(); } };
  if ($("#ls")) $("#ls").onclick = e => { const b = e.target.closest("button"); if (b) { view.sub = b.dataset.s; hub(); } };
  $("#m-cards").onclick = cards; $("#m-quiz").onclick = quiz; $("#m-list").onclick = list;
}

/* ---------- zoznam ---------- */
function list() {
  $("#main").innerHTML = back() + `<input class="input" id="lq" placeholder="Hľadaj výraz… napr. piece of cake, kamoš, delay" value="${esc(view.q)}" autocomplete="off" style="margin-bottom:14px"><p class="muted small" id="lc" style="margin-bottom:10px"></p><div id="lr"></div><div id="lm" style="margin:14px 0"></div>`;
  $("#bk").onclick = hub;
  const draw = () => {
    const q = fold(view.q.trim());
    let r = pool(); if (q) r = r.filter(i => fold(i.en).includes(q) || fold(i.sk).includes(q) || fold(i.ex).includes(q));
    $("#lc").textContent = `${r.length} výrazov`;
    const all = r; r = r.slice(0, view.n);
    $("#lm").innerHTML = all.length > r.length ? `<button class="btn ghost" id="more">Zobraziť ďalších (${all.length - r.length})</button>` : "";
    if ($("#more")) $("#more").onclick = () => { view.n += 60; draw(); };
    $("#lr").innerHTML = r.map((i, n) => `<div class="de"><button class="x" data-s="${n}" title="Vypočuj">🔊</button><div style="flex:1"><div class="row" style="gap:8px;flex-wrap:wrap"><b class="dw">${esc(i.en)}</b>${badge(i)}</div><div class="dk">${esc(i.sk)}</div><div class="small" style="margin-top:6px"><i>${esc(i.ex)}</i><br><span class="muted">${esc(i.exsk)}</span></div>${i.note ? `<div class="small muted" style="margin-top:6px">ℹ️ ${esc(i.note)}</div>` : ""}</div><button class="btn ghost" data-k="${n}" style="align-self:flex-start;padding:8px 14px">${ST().known[i.id] ? "✓ Viem" : "Viem?"}</button></div>`).join("") || `<p class="muted">Nič sa nenašlo.</p>`;
    $("#lr").querySelectorAll("[data-s]").forEach(b => b.onclick = () => say(r[+b.dataset.s].en));
    $("#lr").querySelectorAll("[data-k]").forEach(b => b.onclick = () => { const i = r[+b.dataset.k]; mark(i, !ST().known[i.id]); b.textContent = ST().known[i.id] ? "✓ Viem" : "Viem?"; });
  };
  $("#lq").oninput = e => { view.q = e.target.value; view.n = 60; draw(); };
  draw();
}

/* ---------- karty ---------- */
function cards() {
  let deck = shuffle(pool().filter(i => !ST().known[i.id])); if (!deck.length) deck = shuffle(pool());
  if (!deck.length) { toast("Pre tento výber nie sú žiadne výrazy."); return hub(); }
  deck = deck.slice(0, 15); let n = 0, got = 0, shown = false;
  const show = () => {
    if (n >= deck.length) return end();
    const i = deck[n]; shown = false;
    $("#main").innerHTML = back() + `<p class="muted small" style="margin-bottom:10px">Karta ${n + 1} / ${deck.length}</p><div class="card" style="max-width:640px;text-align:center;padding:34px"><div style="margin-bottom:12px">${badge(i)}</div><div class="prompt" style="margin-bottom:14px">${esc(i.en)}</div><button class="x" id="sp" title="Vypočuj" style="font-size:26px">🔊</button><div id="bk2" style="margin-top:20px;text-align:left"></div><div class="row" id="ac" style="justify-content:center;gap:12px;margin-top:22px"><button class="btn" id="rv">Ukáž význam</button></div></div>`;
    $("#bk").onclick = hub; $("#sp").onclick = () => say(i.en); say(i.en);
    $("#rv").onclick = () => {
      shown = true;
      $("#bk2").innerHTML = `<div class="dk" style="font-size:22px;text-align:center">${esc(i.sk)}</div><div class="small" style="margin-top:12px"><i>${esc(i.ex)}</i><br><span class="muted">${esc(i.exsk)}</span></div>${i.note ? `<div class="small muted" style="margin-top:8px">ℹ️ ${esc(i.note)}</div>` : ""}`;
      $("#ac").innerHTML = `<button class="btn ghost" id="no">Ešte nie</button><button class="btn" id="yes">Už viem ✓</button>`;
      $("#no").onclick = () => { n++; show(); };
      $("#yes").onclick = () => { mark(i, true); got++; n++; show(); };
    };
  };
  const end = () => {
    const xp = got * 2; if (xp) addXP(xp);
    $("#main").innerHTML = back() + `<div class="card" style="text-align:center;padding:40px;max-width:560px"><div style="font-size:72px">🎉</div><h2>Hotovo</h2><p class="muted" style="margin:8px 0 14px">Už vieš ${got} z ${deck.length} kariet.</p><p style="margin-bottom:18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px"><button class="btn" id="again">Ďalšie karty</button><button class="btn ghost" id="hb">Späť</button></div></div>`;
    $("#bk").onclick = hub; $("#hb").onclick = hub; $("#again").onclick = cards; api.renderRight();
  };
  show();
}

/* ---------- kvíz ---------- */
function quiz() {
  const p = pool();
  if (p.length < 4) { toast("Na kvíz treba aspoň 4 výrazy: vyber širší výber."); return hub(); }
  const qs = shuffle(p).slice(0, 10).map(i => {
    const rev = Math.random() < .4, others = shuffle(p.filter(x => x.id !== i.id && (rev ? x.en : x.sk) !== (rev ? i.en : i.sk)));
    const opts = shuffle([i, ...others.slice(0, 3)]);
    return { i, rev, opts };
  });
  let n = 0, right = 0;
  const ask = () => {
    if (n >= qs.length) return end();
    const { i, rev, opts } = qs[n];
    $("#main").innerHTML = back() + `<p class="muted small" style="margin-bottom:10px">Otázka ${n + 1} / ${qs.length}</p><div class="card" style="max-width:720px"><p class="muted" style="margin-bottom:8px">${rev ? "Ako sa to povie po anglicky?" : "Čo to znamená?"}</p><div class="prompt" style="margin-bottom:18px">${esc(rev ? i.sk : i.en)}</div><div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(rev ? o.en : o.sk)}</button>`).join("")}</div><div id="fb" style="margin-top:16px"></div></div>`;
    $("#bk").onclick = hub; if (!rev) say(i.en);
    let done = false;
    $("#main").querySelectorAll(".opt").forEach(b => b.onclick = () => {
      if (done) return; done = true; const o = opts[+b.dataset.k], ok = o.id === i.id, s = ST();
      b.classList.add(ok ? "ok" : "bad"); if (!ok) $("#main").querySelectorAll(".opt")[opts.findIndex(x => x.id === i.id)].classList.add("ok");
      if (ok) { right++; s.ok[i.id] = (s.ok[i.id] || 0) + 1; if (s.ok[i.id] >= 2) mark(i, true); } else s.ok[i.id] = 0;
      save();
      $("#fb").innerHTML = `<p><b>${esc(i.en)}</b>: ${esc(i.sk)}</p><p class="small" style="margin-top:6px"><i>${esc(i.ex)}</i><br><span class="muted">${esc(i.exsk)}</span></p><button class="btn" id="nx" style="margin-top:14px">${n + 1 >= qs.length ? "Výsledok" : "Ďalej →"}</button>`;
      $("#nx").onclick = () => { n++; ask(); }; $("#nx").focus();
    });
  };
  const end = () => {
    const xp = right * 3 + (right === qs.length ? 10 : 0); addXP(xp);
    $("#main").innerHTML = back() + `<div class="card" style="text-align:center;padding:40px;max-width:560px"><div style="font-size:72px">${right >= 8 ? "🏆" : "🎉"}</div><h2>${right} z ${qs.length}</h2><p class="muted" style="margin:8px 0 14px">${right >= 8 ? "Výborne, to je pravá angličtina!" : right >= 5 ? "Dobré, ešte si precvič karty." : "Skús ešte raz, pomôžu ti karty a zoznam."}</p><p style="margin-bottom:18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px"><button class="btn" id="again">Znova</button><button class="btn ghost" id="hb">Späť</button></div></div>`;
    $("#bk").onclick = hub; $("#hb").onclick = hub; $("#again").onclick = quiz; api.renderRight();
  };
  ask();
}

api.routes.live = hub;
const gi = api.nav.findIndex(x => x[0] === "games");
api.nav.splice(gi < 0 ? api.nav.length : gi, 0, ["live", "🗣️", "Živá angličtina"]);
window.ACHIEVEMENTS.push({ id: "live10", e: "🗣️", t: "Rečník", d: "Nauč sa 10 fráz, idiómov, slangových výrazov alebo skratiek" }, { id: "live50", e: "🎤", t: "Pravá angličtina", d: "Nauč sa 50 výrazov v Živej angličtine" });
});
