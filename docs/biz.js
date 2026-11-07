/* Business English A1–C1: 20 jednotiek, každá so 4 lekciami, dialógom a úlohou (plugin pre app.js; dáta v biz-data.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, shuffle, say, toast, addXP, save, go, unlock, srsAdd } = api;
const SS = () => { const S = api.S; S.biz ||= { done: {} }; S.biz.done ||= {}; S.biz.known ||= {}; return S.biz; };
const U = window.BIZ, ALLW = U.flatMap(u => u.words);
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const LVL_NAME = { A1: "Začiatočník", A2: "Mierne pokročilý", B1: "Stredne pokročilý", B2: "Vyššie pokročilý", C1: "Pokročilý" };
const LESSONS = [["w1", "Slová 1", "🔤"], ["w2", "Slová 2", "🧩"], ["ph", "Frázy", "✍️"], ["mix", "Test jednotky", "🏆"]];
const lid = (u, k) => `${u.id}.${k}`;
const stars = (u, k) => SS().done[lid(u, k)] || 0;
const unitDone = u => LESSONS.every(([k]) => stars(u, k));
const view = { lv: "", list: "", q: "", n: 80 };

/* ---------- kroky lekcie (rovnaké typy ako v hlavnej ceste) ---------- */
let curPool = ALLW;
const distract = (correct, key) => shuffle(curPool.map(w => w[key]).filter(x => x !== correct)).slice(0, 3);
const stPickSk = w => ({ k: "pick", p: `Čo znamená „${w.en}“?`, say: w.en, o: shuffle([w.sk, ...distract(w.sk, "sk")]), a: w.sk });
const stPickEn = w => ({ k: "pick", p: `Ako sa povie „${w.sk}“ po anglicky?`, o: shuffle([w.en, ...distract(w.en, "en")]), a: w.en, sayAfter: w.en });
const stListen = w => ({ k: "pick", listen: w.en, p: "Čo počuješ?", o: shuffle([w.sk, ...distract(w.sk, "sk")]), a: w.sk });
const stType = w => ({ k: "type", listen: w.en, p: "Napíš, čo počuješ", a: w.en });
const stMatch = ws => ({ k: "match", p: "Spoj páry", pairs: ws.map(w => [w.en, w.sk]) });
const stBuild = ph => ({ k: "build", p: `Zostav vetu: „${ph.sk}“`, a: ph.en, words: shuffle(ph.en.split(" ")) });
const stGap = g => ({ k: "pick", p: "Doplň chýbajúce slovo", sentence: g.t, o: shuffle(g.o), a: g.a, sayAfter: g.t.replace("___", g.a) });
const stSpeak = (t, sk) => ({ k: "speak", p: "Povedz nahlas", a: t, sk });
function steps(u, kind) {
  const W = u.words, lower = U.filter(x => LEVELS.indexOf(x.lvl) <= LEVELS.indexOf(u.lvl)).flatMap(x => x.words); curPool = lower.length >= 12 ? lower : ALLW;
  if (kind === "w1" || kind === "w2") {
    const ws = kind === "w1" ? W.slice(0, 4) : W.slice(4);
    return [...ws.map(stPickSk), stMatch(ws), ...ws.map(stListen), stPickEn(ws[0]), stType(ws[1]), stPickEn(ws[2]), stType(ws[3]), stSpeak(ws[0].en, ws[0].sk), stSpeak(ws[2].en, ws[2].sk)];
  }
  if (kind === "ph") return [...u.phrases.map(stBuild), ...u.gaps.map(stGap), ...u.phrases.slice(0, 2).map(p => stSpeak(p.en, p.sk)), ...u.phrases.slice(2).map(p => ({ k: "type", listen: p.en, p: "Napíš vetu, ktorú počuješ", a: p.en }))];
  const pool = shuffle(W);
  return shuffle([...pool.slice(0, 4).map(stListen), ...pool.slice(4).map(stPickEn), stMatch(pool.slice(0, 5)), ...u.phrases.slice(0, 3).map(stBuild), ...u.gaps.map(stGap), stType(pool[0]), stSpeak(u.phrases[0].en, u.phrases[0].sk)]);
}
function startLesson(u, kind, name) {
  api.runSteps({ title: `${u.title} – ${name}`, steps: steps(u, kind), onDone: r => {
    const st = r.wrong === 0 ? 3 : r.wrong <= 2 ? 2 : 1, xp = 10 + r.right * 2 + (r.wrong === 0 ? 10 : 0), S = SS(), was = unitDone(u);
    S.done[lid(u, kind)] = Math.max(S.done[lid(u, kind)] || 0, st);
    srsAdd((kind === "w2" ? u.words.slice(4) : kind === "w1" ? u.words.slice(0, 4) : kind === "mix" ? u.words : []).map(w => ({ en: w.en, sk: w.sk, e: "💼" })));
    addXP(xp); if (r.wrong === 0) unlock("perfect");
    let extra = 0; if (!was && unitDone(u)) { extra = 20; addXP(extra); toast(`💼 Jednotka dokončená: ${u.title}`); }
    const n = U.filter(unitDone).length; if (n >= 1) unlock("biz1"); if (n >= 5) unlock("biz5"); save();
    return { xp: xp + extra, stars: st };
  } });
}

/* ---------- obrazovky ---------- */
function hub() {
  const levels = LEVELS.filter(l => !view.lv || l === view.lv), done = U.filter(unitDone).length;
  $("#main").innerHTML = `<h1>Business <em>English</em></h1>
  <p class="muted" style="margin:6px 0 18px;max-width:720px">Angličtina do práce od úplných začiatkov po pokročilú úroveň: 20 jednotiek, v každej slová, frázy, dialóg a písomná úloha. Dokončené jednotky: <b>${done} z ${U.length}</b>.</p>
  <button class="card" id="vocab" style="text-align:left;cursor:pointer;margin:0 0 20px;max-width:820px;width:100%"><div class="row between"><div><div style="font-size:30px">📚</div><h3 style="margin:6px 0 2px">Slovná zásoba Business English</h3><p class="small muted">${WORDS.length} slov a výrazov z troch zoznamov: zoznam s vyhľadávaním, karty a kvíz.</p></div><span class="pill">${WORDS.filter(w => SS().known[w.id]).length} / ${WORDS.length} viem</span></div></button>
  <div class="seg" id="bl" style="margin:0 0 20px">${["", ...LEVELS].map(l => `<button class="${view.lv === l ? "on" : ""}" data-l="${l}">${l || "Všetky úrovne"}</button>`).join("")}</div>
  ${levels.map(l => `<div class="lvl-div"><span class="lvl-badge">${l}</span><div><b>${LVL_NAME[l]}</b><div class="small muted">${U.filter(u => u.lvl === l).length} jednotiek</div></div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(250px,1fr));margin-bottom:22px">${U.filter(u => u.lvl === l).map(u => { const n = LESSONS.filter(([k]) => stars(u, k)).length; return `<button class="card" data-u="${u.id}" style="text-align:left;cursor:pointer"><div style="font-size:34px">${u.emoji}</div><h3 style="margin:6px 0 2px">${esc(u.title)}</h3><p class="small muted">${esc(u.sk)}</p><p class="small" style="margin-top:8px">${n === 4 ? "✅ Hotové" : `Lekcie: ${n} / 4`}</p></button>`; }).join("")}</div>`).join("")}`;
  $("#vocab").onclick = vhub;
  $("#bl").onclick = e => { const b = e.target.closest("button"); if (b) { view.lv = b.dataset.l; hub(); } };
  $("#main").querySelectorAll("button.card[data-u]").forEach(b => b.onclick = () => unit(U.find(u => u.id === b.dataset.u)));
}

function unit(u) {
  $("#main").innerHTML = `<div class="row" style="margin-bottom:6px"><button class="btn ghost" id="bk">←</button><h2>${u.emoji} ${esc(u.title)}</h2><span class="lvl-badge" style="margin-left:8px">${u.lvl}</span></div><p class="muted" style="margin:0 0 18px 4px">${esc(u.sk)}</p>
  <div class="card" style="max-width:820px;margin-bottom:18px"><h3 style="margin-bottom:12px">Lekcie</h3><div class="row" style="gap:12px;flex-wrap:wrap">${LESSONS.map(([k, t, ic]) => `<button class="btn ${stars(u, k) ? "" : "ghost"}" data-k="${k}">${ic} ${t} ${stars(u, k) ? "★".repeat(stars(u, k)) : ""}</button>`).join("")}</div></div>
  <div class="card" style="max-width:820px;margin-bottom:18px"><h3 style="margin-bottom:10px">Slovná zásoba</h3>${u.words.map((w, i) => `<div class="de"><button class="x" data-w="${i}" title="Vypočuj">🔊</button><div style="flex:1"><b class="dw">${esc(w.en)}</b><div class="dk">${esc(w.sk)}</div></div></div>`).join("")}</div>
  <div class="card" style="max-width:820px;margin-bottom:18px"><h3 style="margin-bottom:10px">Užitočné frázy</h3>${u.phrases.map((p, i) => `<div class="de"><button class="x" data-p="${i}" title="Vypočuj">🔊</button><div style="flex:1"><b>${esc(p.en)}</b><div class="dk">${esc(p.sk)}</div></div></div>`).join("")}</div>
  <div class="card" style="max-width:820px;margin-bottom:18px"><div class="row between" style="margin-bottom:10px"><h3>Dialóg</h3><button class="btn ghost" id="tr">Zobraziť preklad</button></div>${u.dialogue.map((d, i) => `<div style="display:flex;gap:10px;margin:10px 0;${d.who === "me" ? "flex-direction:row-reverse" : ""}"><button class="x" data-d="${i}" title="Vypočuj">🔊</button><div style="max-width:80%;padding:10px 14px;border-radius:16px;background:${d.who === "me" ? "#EAF0FF" : "#F4F5F9"}"><div>${esc(d.en)}</div><div class="small muted tr" hidden>${esc(d.sk)}</div></div></div>`).join("")}</div>
  <div class="card" style="max-width:820px;margin-bottom:30px"><h3 style="margin-bottom:8px">✍️ Úloha</h3><p style="margin-bottom:10px">${esc(u.task.sk)}</p><textarea class="input" id="tk" rows="4" placeholder="Napíš svoju odpoveď po anglicky…" style="font-size:17px"></textarea><div class="row" style="gap:12px;margin-top:12px"><button class="btn ghost" id="mdl">Ukáž vzorovú odpoveď</button></div><div id="md" style="margin-top:12px"></div><p class="small muted" style="margin-top:10px">Svoj text môžeš poslať lektorke na kontrolu.</p></div>`;
  $("#bk").onclick = hub;
  $("#main").querySelectorAll("[data-k]").forEach(b => b.onclick = () => startLesson(u, b.dataset.k, LESSONS.find(l => l[0] === b.dataset.k)[1]));
  $("#main").querySelectorAll("[data-w]").forEach(b => b.onclick = () => say(u.words[+b.dataset.w].en));
  $("#main").querySelectorAll("[data-p]").forEach(b => b.onclick = () => say(u.phrases[+b.dataset.p].en));
  $("#main").querySelectorAll("[data-d]").forEach(b => b.onclick = () => say(u.dialogue[+b.dataset.d].en));
  let shown = false; $("#tr").onclick = () => { shown = !shown; $("#main").querySelectorAll(".tr").forEach(e => e.hidden = !shown); $("#tr").textContent = shown ? "Skryť preklad" : "Zobraziť preklad"; };
  $("#mdl").onclick = () => { $("#md").innerHTML = `<div class="small muted">Vzorová odpoveď:</div><p style="margin-top:4px"><i>${esc(u.task.model)}</i></p><button class="x" id="mdsay" title="Vypočuj">🔊</button>`; $("#mdsay").onclick = () => say(u.task.model); };
}


/* ---------- slovná zásoba zo zoznamov od lektorky ---------- */
const WORDS = (window.BIZ_LISTS || []).flatMap((L, li) => L.raw.split("\n").filter(l => l.includes("|")).map(l => { const [en, sk] = l.split("|"); return { l: li + 1, en, sk, id: "w" + (li + 1) + en.toLowerCase().replace(/[^a-z]/g, "").slice(0, 28) }; }));
const wpool = () => WORDS.filter(w => !view.list || String(w.l) === view.list);
const known = () => (SS().known ||= {});
const vback = fn => `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>📚 Slovná zásoba Business English</h2></div>`;
function vhub() {
  const p = wpool(), k = p.filter(w => known()[w.id]).length;
  $("#main").innerHTML = `<div class="row" style="margin-bottom:6px"><button class="btn ghost" id="bk">←</button><h1 style="margin:0 0 0 10px">Slovná zásoba <em>Business English</em></h1></div>
  <p class="muted" style="margin:6px 0 18px 4px;max-width:720px">${WORDS.length} slov a výrazov z troch zoznamov (anglicky a slovensky). Prezeraj, trénuj na kartách alebo si urob kvíz.</p>
  <div class="seg" id="vl" style="margin:0 0 16px">${[["", "Všetky"], ["1", "Zoznam 1"], ["2", "Zoznam 2"], ["3", "Zoznam 3"]].map(([k, t]) => `<button class="${view.list === k ? "on" : ""}" data-l="${k}">${t} (${k ? WORDS.filter(w => String(w.l) === k).length : WORDS.length})</button>`).join("")}</div>
  <div class="card" style="max-width:760px"><div class="row between"><b>Vieš ${k} z ${p.length}</b><span class="muted small">${p.length ? Math.round(k * 100 / p.length) : 0} %</span></div><div class="bar" style="margin:10px 0 18px"><i style="width:${p.length ? k * 100 / p.length : 0}%"></i></div>
  <div class="row" style="flex-wrap:wrap;gap:12px"><button class="btn" id="vc">🃏 Karty</button><button class="btn" id="vq">🎯 Kvíz</button><button class="btn ghost" id="vs">📖 Zoznam</button></div></div>`;
  $("#bk").onclick = hub; $("#vl").onclick = e => { const b = e.target.closest("button"); if (b) { view.list = b.dataset.l; vhub(); } };
  $("#vc").onclick = vcards; $("#vq").onclick = vquiz; $("#vs").onclick = vlist;
}
function vlist() {
  $("#main").innerHTML = vback() + `<input class="input" id="vq2" placeholder="Hľadaj anglicky alebo po slovensky…" value="${esc(view.q)}" autocomplete="off" style="margin-bottom:12px"><p class="muted small" id="vc2" style="margin-bottom:10px"></p><div id="vr"></div><div id="vm" style="margin:14px 0"></div>`;
  $("#bk").onclick = vhub;
  const fold = api.fold, draw = () => {
    const q = fold(view.q.trim()); let r = wpool(); if (q) r = r.filter(w => fold(w.en).includes(q) || fold(w.sk).includes(q));
    $("#vc2").textContent = r.length + " výrazov"; const all = r; r = r.slice(0, view.n);
    $("#vm").innerHTML = all.length > r.length ? `<button class="btn ghost" id="more">Zobraziť ďalších (${all.length - r.length})</button>` : "";
    if ($("#more")) $("#more").onclick = () => { view.n += 80; draw(); };
    $("#vr").innerHTML = r.map((w, i) => `<div class="de"><button class="x" data-s="${i}" title="Vypočuj">🔊</button><div style="flex:1"><b class="dw">${esc(w.en)}</b><div class="dk">${esc(w.sk)}</div></div><button class="btn ghost" data-k="${i}" style="padding:8px 14px">${known()[w.id] ? "✓ Viem" : "Viem?"}</button><button class="btn ghost" data-a="${i}" title="Pridať do opakovania" style="padding:8px 12px">➕🃏</button></div>`).join("") || '<p class="muted">Nič sa nenašlo.</p>';
    $("#vr").querySelectorAll("[data-s]").forEach(b => b.onclick = () => say(r[+b.dataset.s].en));
    $("#vr").querySelectorAll("[data-k]").forEach(b => b.onclick = () => { const w = r[+b.dataset.k]; if (known()[w.id]) delete known()[w.id]; else known()[w.id] = api.today(); save(); b.textContent = known()[w.id] ? "✓ Viem" : "Viem?"; });
    $("#vr").querySelectorAll("[data-a]").forEach(b => b.onclick = () => { const w = r[+b.dataset.a]; srsAdd([{ en: w.en, sk: w.sk, e: "💼" }]); toast("Pridané do opakovania: " + w.en); });
  };
  $("#vq2").oninput = e => { view.q = e.target.value; view.n = 80; draw(); }; draw();
}
function vcards() {
  let deck = shuffle(wpool().filter(w => !known()[w.id])); if (!deck.length) deck = shuffle(wpool());
  deck = deck.slice(0, 20); let n = 0, got = 0;
  const show = () => {
    if (n >= deck.length) return end(); const w = deck[n];
    $("#main").innerHTML = vback() + `<p class="muted small" style="margin-bottom:10px">Karta ${n + 1} / ${deck.length}</p><div class="card" style="max-width:640px;text-align:center;padding:34px"><div class="prompt" style="margin-bottom:14px">${esc(w.en)}</div><button class="x" id="sp" style="font-size:26px" title="Vypočuj">🔊</button><div id="bk2" style="margin-top:20px"></div><div class="row" id="ac" style="justify-content:center;gap:12px;margin-top:22px"><button class="btn" id="rv">Ukáž význam</button></div></div>`;
    $("#bk").onclick = vhub; $("#sp").onclick = () => say(w.en); say(w.en);
    $("#rv").onclick = () => { $("#bk2").innerHTML = `<div class="dk" style="font-size:24px">${esc(w.sk)}</div>`; $("#ac").innerHTML = `<button class="btn ghost" id="no">Ešte nie</button><button class="btn" id="yes">Už viem ✓</button>`; $("#no").onclick = () => { n++; show(); }; $("#yes").onclick = () => { known()[w.id] = api.today(); got++; n++; show(); }; };
  };
  const end = () => { const xp = got * 2; if (xp) addXP(xp); save(); $("#main").innerHTML = vback() + `<div class="card" style="text-align:center;padding:40px;max-width:560px"><div style="font-size:72px">🎉</div><h2>Hotovo</h2><p class="muted" style="margin:8px 0 14px">Už vieš ${got} z ${deck.length} kariet.</p><p style="margin-bottom:18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px"><button class="btn" id="again">Ďalšie karty</button><button class="btn ghost" id="hb">Späť</button></div></div>`; $("#bk").onclick = vhub; $("#hb").onclick = vhub; $("#again").onclick = vcards; api.renderRight(); };
  show();
}
function vquiz() {
  const p = wpool(); if (p.length < 4) { toast("Pre tento výber je málo slov."); return vhub(); }
  const qs = shuffle(p).slice(0, 10).map(w => { const rev = Math.random() < .5, others = shuffle(p.filter(x => x.id !== w.id && (rev ? x.en : x.sk) !== (rev ? w.en : w.sk))); return { w, rev, opts: shuffle([w, ...others.slice(0, 3)]) }; });
  let n = 0, right = 0;
  const ask = () => {
    if (n >= qs.length) return end(); const { w, rev, opts } = qs[n];
    $("#main").innerHTML = vback() + `<p class="muted small" style="margin-bottom:10px">Otázka ${n + 1} / ${qs.length}</p><div class="card" style="max-width:720px"><p class="muted" style="margin-bottom:8px">${rev ? "Ako sa to povie po anglicky?" : "Čo to znamená?"}</p><div class="prompt" style="margin-bottom:18px">${esc(rev ? w.sk : w.en)}</div><div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(rev ? o.en : o.sk)}</button>`).join("")}</div><div id="fb" style="margin-top:16px"></div></div>`;
    $("#bk").onclick = vhub; if (!rev) say(w.en); let done = false;
    $("#main").querySelectorAll(".opt").forEach(b => b.onclick = () => { if (done) return; done = true; const o = opts[+b.dataset.k], ok = o.id === w.id; b.classList.add(ok ? "ok" : "bad"); if (!ok) $("#main").querySelectorAll(".opt")[opts.findIndex(x => x.id === w.id)].classList.add("ok"); if (ok) { right++; known()[w.id] = known()[w.id] || api.today(); } save(); $("#fb").innerHTML = `<p><b>${esc(w.en)}</b>: ${esc(w.sk)}</p><button class="btn" id="nx" style="margin-top:12px">${n + 1 >= qs.length ? "Výsledok" : "Ďalej →"}</button>`; $("#nx").onclick = () => { n++; ask(); }; $("#nx").focus(); });
  };
  const end = () => { const xp = right * 3 + (right === qs.length ? 10 : 0); addXP(xp); $("#main").innerHTML = vback() + `<div class="card" style="text-align:center;padding:40px;max-width:560px"><div style="font-size:72px">${right >= 8 ? "🏆" : "🎉"}</div><h2>${right} z ${qs.length}</h2><p style="margin:14px 0 18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px"><button class="btn" id="again">Znova</button><button class="btn ghost" id="hb">Späť</button></div></div>`; $("#bk").onclick = vhub; $("#hb").onclick = vhub; $("#again").onclick = vquiz; api.renderRight(); };
  ask();
}

api.routes.biz = hub;
const gi = api.nav.findIndex(x => x[0] === "live");
api.nav.splice(gi < 0 ? api.nav.length : gi, 0, ["biz", "💼", "Business"]);
window.ACHIEVEMENTS.push({ id: "biz1", e: "💼", t: "Do práce", d: "Dokonči prvú jednotku Business English" }, { id: "biz5", e: "📈", t: "Obchodník", d: "Dokonči 5 jednotiek Business English" });
});
