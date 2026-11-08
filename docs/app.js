/* Anglina4U – platforma na učenie angličtiny (desktop). Bez závislostí, dáta v localStorage. */
(() => {
const $ = (s, el = document) => el.querySelector(s);
const U = window.UNITS, ALLW = U.flatMap(u => u.words);
const DICT = (() => { const d = window.DICT_RAW.trim().split("\n").map(l => { const [en, sk, pos, lvl, ex] = l.split("|"); return { en, sk, pos, lvl, ex }; }); const have = new Set(d.map(x => x.en.toLowerCase())); U.forEach(u => u.words.forEach(w => { if (!have.has(w.en.toLowerCase())) { have.add(w.en.toLowerCase()); d.push({ en: w.en, sk: w.sk, pos: "", lvl: u.lvl, ex: "", e: w.e }); } })); return d.sort((a, b) => a.en.localeCompare(b.en)); })();
const fold = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const today = () => new Date().toISOString().slice(0, 10);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => s.toLowerCase().replace(/[^a-z0-9' ]/g, " ").replace(/\s+/g, " ").trim();
const AVATARS = ["🐶", "🦊", "🐼", "🦁", "🐸", "🐙", "🦄", "🐧"];

/* ---------- stav ---------- */
const KEY = "anglina4u.v1";
let S = JSON.parse(localStorage.getItem(KEY) || "null") || { name: "", avatar: "🐶", goal: 50, xp: 0, streak: 0, last: "", days: {}, done: {}, srs: {}, ach: {}, level: "", saved: {} };
const save = () => localStorage.setItem(KEY, JSON.stringify(S));

function addXP(n) {
  S.xp += n; S.days[today()] = (S.days[today()] || 0) + n;
  const t = today(), y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  if (S.last !== t) { S.streak = S.last === y ? S.streak + 1 : 1; S.last = t; }
  save(); checkAch();
}
function unlock(id) { if (S.ach[id]) return; S.ach[id] = today(); save(); const a = ACHIEVEMENTS.find(x => x.id === id); toast(`${a.e} Nový úspech: ${a.t}`); }
function checkAch() {
  if (S.streak >= 3) unlock("streak3"); if (S.streak >= 7) unlock("streak7");
  if (S.xp >= 100) unlock("xp100"); if (S.xp >= 500) unlock("xp500");
  if (Object.keys(S.srs).length >= 20) unlock("words20");
  if (U.some(u => lessonsOf(u).every(l => S.done[l.id]))) unlock("unit1");
  if (Object.keys(S.done).length) unlock("first");
}
function toast(t) { const el = $("#toast"); el.className = "toast"; el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => el.hidden = true, 3200); }

/* ---------- reč ---------- */
let voice = null;
function pickVoice() { const v = speechSynthesis.getVoices(); voice = v.find(x => /en-GB/i.test(x.lang)) || v.find(x => /^en/i.test(x.lang)) || null; }
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
let ttsWarned = false;
function noTts() { if (ttsWarned) return; ttsWarned = true; toast("🔇 Zvuk sa nepodarilo prehrať. Skontroluj hlasitosť médií a tichý režim. Na Androide: Nastavenia → Prevod textu na reč → nainštaluj angličtinu."); }
/* Chrome na Androide zahodí hlas hneď po cancel(), preto krátka pauza; ak vybraný hlas zlyhá, skúsi sa bez neho */
function say(t, rate = .92, noVoice = false) {
  if (!("speechSynthesis" in window)) return noTts();
  const busy = speechSynthesis.speaking || speechSynthesis.pending; if (busy) speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t); u.lang = "en-GB"; if (voice && !noVoice) u.voice = voice; u.rate = rate;
  let started = false; u.onstart = () => { started = true; };
  u.onerror = e => { if (e.error === "canceled" || e.error === "interrupted") return; noVoice ? noTts() : say(t, rate, true); };
  const run = () => { try { speechSynthesis.resume(); speechSynthesis.speak(u); } catch (e) { return noTts(); } setTimeout(() => { if (!started && !speechSynthesis.speaking && !speechSynthesis.pending) noVoice ? noTts() : say(t, rate, true); else if (!started && noVoice) setTimeout(() => { if (!started) noTts(); }, 1500); }, 1800); };
  busy ? setTimeout(run, 90) : run();
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
/* cb(výsledky | null, dôvod chyby). Vždy sa zavolá práve raz, aj keď nik nič nepovie. */
function listen(cb) {
  if (!SR) return cb(null, "unsupported");
  let done = false; const fin = (r, why) => { if (done) return; done = true; clearTimeout(t); cb(r, why); };
  const r = new SR(); r.lang = "en-GB"; r.maxAlternatives = 3; r.interimResults = false; r.continuous = false;
  const t = setTimeout(() => { try { r.abort(); } catch (e) { } fin(null, "no-speech"); }, 12000);
  r.onresult = e => fin([...e.results[0]].map(x => x.transcript));
  r.onerror = e => fin(null, e.error || "error");
  r.onend = () => fin(null, "no-speech");
  /* najprv si vypýtame mikrofón, aby sa na telefóne zobrazilo povolenie a hneď bolo jasné, či je zablokovaný */
  const go = () => { try { r.start(); } catch (e) { fin(null, "error"); } };
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia({ audio: true }).then(s => { s.getTracks().forEach(x => x.stop()); go(); }).catch(() => fin(null, "not-allowed"));
  else go();
  return r;
}
const micMsg = why => ({
  "not-allowed": "Mikrofón je zablokovaný. Povoľ ho: ťukni na zámok v adresnom riadku (alebo Nastavenia → Aplikácie → Anglina4U → Povolenia → Mikrofón) a skús znova.",
  "service-not-allowed": "Mikrofón je zablokovaný. Povoľ ho v nastaveniach telefónu a skús znova.",
  "audio-capture": "Mikrofón sa nenašiel alebo ho používa iná aplikácia.",
  "network": "Rozpoznávanie reči potrebuje internet. Skontroluj pripojenie.",
  "no-speech": "Nič som nepočul. Ťukni na 🎤 a povedz vetu hneď po pípnutí.",
  "unsupported": "Rozpoznávanie reči tu nie je dostupné (použi Chrome).",
}[why] || "Nepodarilo sa. Skús znova.");

/* ---------- lekcie ---------- */
function lessonsOf(u) {
  return [
    { id: `${u.id}.1`, u, t: "Slová 1", ic: "🔤", kind: "w1" }, { id: `${u.id}.2`, u, t: "Slová 2", ic: "🧩", kind: "w2" },
    { id: `${u.id}.3`, u, t: "Vety", ic: "✍️", kind: "ph" }, { id: `${u.id}.4`, u, t: "Test jednotky", ic: "🏆", kind: "mix" }
  ];
}
const ALL_L = U.flatMap(lessonsOf);
const RANK = window.LVL_RANK || { A0: 0, A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
const LVL_NAME = { A0: "Úplný začiatočník", A1: "Začiatočník", A2: "Mierne pokročilý", B1: "Stredne pokročilý", B2: "Vyššie pokročilý", C1: "Pokročilý" };
// odomknuté: nasleduje po dokončenej lekcii, alebo ide o jednotku na úrovni (alebo pod úrovňou) z testu
const licNow = () => (new Date().getFullYear() - 2026) * 12 + new Date().getMonth() + 1;
const licFull = () => !!(S.lic && (!S.lic.until || licNow() <= S.lic.until));
const unlocked = l => { if (!licFull() && RANK[l.u.lvl] > 0) return false; const i = ALL_L.indexOf(l); if (i === 0 || S.done[ALL_L[i - 1].id]) return true; return S.level && RANK[l.u.lvl] <= RANK[S.level] && (RANK[l.u.lvl] < RANK[S.level] || l.kind === "w1" || S.done[`${l.u.id}.${+l.id.split(".")[1] - 1}`]); };
const currentLesson = () => ALL_L.find(l => !S.done[l.id] && unlocked(l)) || ALL_L[0];

function distract(correct, key, n = 3) { return shuffle(ALLW.map(w => w[key]).filter(x => x !== correct)).slice(0, n); }
const stPickSk = w => ({ k: "pick", e: w.e, p: `Čo znamená „${w.en}“?`, say: w.en, o: shuffle([w.sk, ...distract(w.sk, "sk")]), a: w.sk, w });
const stPickEn = w => ({ k: "pick", e: w.e, p: `Ako sa povie „${w.sk}“ po anglicky?`, o: shuffle([w.en, ...distract(w.en, "en")]), a: w.en, w, sayAfter: w.en });
const stListen = w => ({ k: "pick", listen: w.en, p: "Čo počuješ?", o: shuffle([w.sk, ...distract(w.sk, "sk")]), a: w.sk, w });
const stType = w => ({ k: "type", listen: w.en, p: "Napíš, čo počuješ", a: w.en, w });
const stMatch = ws => ({ k: "match", p: "Spoj páry", pairs: ws.map(w => [w.en, w.sk]), ws });
const stBuild = ph => ({ k: "build", p: `Zostav vetu: „${ph.sk}“`, a: ph.en, words: shuffle(ph.en.split(" ")), ph });
const stGap = g => ({ k: "pick", p: "Doplň chýbajúce slovo", sentence: g.t, o: shuffle(g.o), a: g.a, sayAfter: g.t.replace("___", g.a) });
const stSpeak = (t, sk) => ({ k: "speak", p: "Povedz nahlas", a: t, sk });

function buildSteps(l) {
  const u = l.u, W = u.words;
  if (l.kind === "w1" || l.kind === "w2") {
    const ws = l.kind === "w1" ? W.slice(0, 4) : W.slice(4);
    return [...ws.map(stPickSk), stMatch(ws), ...ws.map(stListen), stPickEn(ws[0]), stType(ws[1]), stPickEn(ws[2]), stType(ws[3]), stSpeak(ws[0].en, ws[0].sk), stSpeak(ws[2].en, ws[2].sk)];
  }
  if (l.kind === "ph") return [...u.phrases.map(stBuild), ...u.gaps.map(stGap), ...u.phrases.slice(0, 2).map(p => stSpeak(p.en, p.sk)), ...u.phrases.slice(2).map(p => ({ k: "type", listen: p.en, p: "Napíš vetu, ktorú počuješ", a: p.en }))];
  const pool = shuffle(W);
  return shuffle([...pool.slice(0, 4).map(stListen), ...pool.slice(4).map(stPickEn), stMatch(pool.slice(0, 5)), ...u.phrases.slice(0, 3).map(stBuild), ...u.gaps.map(stGap), stType(pool[0]), stSpeak(u.phrases[0].en, u.phrases[0].sk)]);
}

/* ---------- SRS (Leitnerove škatuľky) ---------- */
const BOX = [0, 1, 3, 7, 16];
function srsAdd(ws) { ws.forEach(w => { if (!S.srs[w.en]) S.srs[w.en] = { box: 0, due: today(), sk: w.sk, e: w.e }; }); save(); }
const dueList = () => Object.entries(S.srs).filter(([, v]) => v.due <= today());
function srsGrade(en, ok) { const c = S.srs[en]; c.box = ok ? Math.min(4, c.box + 1) : 0; c.due = new Date(Date.now() + BOX[c.box] * 864e5).toISOString().slice(0, 10); save(); }

/* ---------- smerovanie ---------- */
const NAV = [["path", "🗺️", "Cesta"], ["review", "🃏", "Opakovanie"], ["talk", "💬", "Rozhovor"], ["read", "📖", "Čítanie"], ["dict", "🔎", "Slovník"], ["gram", "📐", "Gramatika"], ["games", "🎮", "Hry"], ["test", "🧭", "Test"]];
const ROUTES = { path: vPath, review: vReview, talk: vTalk, read: vRead, dict: vDict, gram: vGram, sprint: vSprint, test: vTest, goals: vGoals };
let route = "path", sub = {};
function go(r, s = {}) { route = r; sub = s; render(); $("#main").scrollTop = 0; }

function render() {
  if (!S.name) return setup();
  $("#nav").innerHTML = NAV.map(([k, i, t]) => `<button class="nav-i ${route === k ? "on" : ""}" data-r="${k}"><span class="i">${i}</span>${t}${k === "review" && dueList().length ? ` <span class="pill" style="margin-left:auto">${dueList().length}</span>` : ""}</button>`).join("");
  $("#nav").querySelectorAll("button").forEach(b => b.onclick = () => go(b.dataset.r));
  if (!licFull() && route !== "activate") route = "activate";
  (ROUTES[route] || vPath)();
  renderRight();
}

function setup() {
  $("#nav").innerHTML = ""; $("#right").innerHTML = "";
  let av = S.avatar, goal = S.goal;
  $("#main").innerHTML = `<div class="setup"><img src="assets/logo.png" style="width:260px;margin:0 auto"><h1>Vitaj v <em>Anglina4U</em></h1><p class="muted">Domáce učenie pre žiakov jazykovej školy Anglina 4U. Postup sa ukladá iba v tomto počítači.</p>
  <input class="input" id="nm" placeholder="Ako ťa voláme?" maxlength="20">
  <div class="emoji-pick" id="avs">${AVATARS.map(a => `<button class="${a === av ? "on" : ""}">${a}</button>`).join("")}</div>
  <div><p class="small muted" style="margin-bottom:8px">Denný cieľ</p><div class="opts" id="gl">${[[20, "Pohoda", "20 XP"], [50, "Bežný", "50 XP"], [100, "Náročný", "100 XP"]].map(([v, t, d]) => `<button class="opt ${v === goal ? "sel" : ""}" data-v="${v}" style="flex-direction:column;gap:0;align-items:center"><b>${t}</b><span class="small muted">${d}</span></button>`).join("")}</div></div>
  <button class="btn" id="go">Začať učenie</button></div>`;
  $("#avs").onclick = e => { if (e.target.tagName === "BUTTON") { av = e.target.textContent; [...$("#avs").children].forEach(b => b.classList.toggle("on", b === e.target)); } };
  $("#gl").onclick = e => { const b = e.target.closest("button"); if (b) { goal = +b.dataset.v; [...$("#gl").children].forEach(x => x.classList.toggle("sel", x === b)); } };
  $("#go").onclick = () => { const n = $("#nm").value.trim(); if (!n) return $("#nm").focus(); S.name = n; S.avatar = av; S.goal = goal; save(); go(licFull() ? "path" : "activate"); };
}

/* ---------- pravý panel ---------- */
function renderRight() {
  const t = today(), xpT = S.days[t] || 0, pct = Math.min(100, xpT / S.goal * 100);
  const wk = [...Array(7)].map((_, i) => { const d = new Date(Date.now() - (6 - i) * 864e5); const k = d.toISOString().slice(0, 10); return { k, v: S.days[k] || 0, l: "NPUSŠPS"[d.getDay()] === "N" ? "Ne" : ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"][d.getDay()] }; });
  const mates = [["Tomáš", "🦊", 180], ["Kika", "🐼", 140], ["Max", "🦁", 95], ["Ema", "🐙", 60]].map(([n, a, x]) => ({ n, a, x }));
  const board = [...mates, { n: S.name, a: S.avatar, x: weekXP(), me: 1 }].sort((a, b) => b.x - a.x);
  $("#right").innerHTML = `
  <div class="card"><div class="row between"><div class="stat">🔥 <b>${S.streak}</b> <span class="small muted">dní v rade</span></div><div class="stat">⭐ <b>${S.xp}</b> <span class="small muted">XP</span></div></div>
    <div class="week">${wk.map((d, i) => `<div class="${i === 6 ? "today" : ""}"><i><b style="height:${Math.min(100, d.v / S.goal * 100)}%"></b></i>${d.l}</div>`).join("")}</div></div>
  <div class="card"><h3>Denný cieľ</h3><div class="bar"><i style="width:${pct}%"></i></div><p class="small muted" style="margin-top:8px">${xpT} / ${S.goal} XP ${xpT >= S.goal ? "– splnené! 🎉" : ""}</p></div>
  <div class="card row"><span class="avatar" style="width:46px;height:46px;font-size:26px">${S.avatar}</span><div><b>${esc(S.name)}</b><div class="small muted">${S.level ? "Úroveň " + S.level : "Úroveň: urob test"}</div></div><button class="x small" style="margin-left:auto" id="ac" title="Úspechy">🏅</button><button class="x small" id="reset" title="Vymazať postup">⟲</button></div>`;
  $("#ac").onclick = () => go("goals");
  $("#reset").onclick = () => { if (confirm("Naozaj vymazať celý postup?")) { localStorage.removeItem(KEY); location.reload(); } };
}
function weekXP() { let s = 0; for (let i = 0; i < 7; i++) s += S.days[new Date(Date.now() - i * 864e5).toISOString().slice(0, 10)] || 0; return s; }

/* ---------- cesta ---------- */
function vPath() {
  const cur = currentLesson(), hr = new Date().getHours();
  const g = hr < 11 ? "Dobré ráno" : hr < 18 ? "Ahoj" : "Dobrý večer";
  $("#main").innerHTML = `<div class="hero"><div><h1>${g}, <em>${esc(S.name)}</em>!</h1><p>Pokračuj: <b>${cur.u.title} – ${cur.t}</b>. Hovoriť začneš už v prvej lekcii.</p><button class="btn" style="margin-top:16px" id="cont">Pokračovať →</button></div><img class="bulldog" src="assets/logo.png"></div>` +
    U.map((u, ui) => `${ui === 0 || U[ui - 1].lvl !== u.lvl ? `<div class="lvl-div"><span class="lvl-badge">${u.lvl}</span><div><b>${LVL_NAME[u.lvl]}</b><div class="small muted">${U.filter(x => x.lvl === u.lvl).length} jednotiek · ${U.filter(x => x.lvl === u.lvl).reduce((a, x) => a + x.words.length, 0)} slovíčok</div></div></div>` : ""}<section class="unit"><div class="unit-head" style="background:${u.color}"><span class="emo">${u.emoji}</span><div><h3>Jednotka ${ui + 1} · ${u.lvl}: ${u.title}</h3><div class="small" style="opacity:.85">${u.sk}</div></div></div><div class="path">${lessonsOf(u).map(l => { const L = ALL_L.find(x => x.id === l.id); const d = S.done[L.id], lk = !unlocked(L); return `<div class="n"><button class="node ${d ? "done" : ""} ${lk ? "lock" : ""}" data-l="${L.id}" style="--c:${u.color}">${d ? "★" : lk ? "🔒" : L.ic}${d ? `<span class="stars">${"★".repeat(d)}</span>` : ""}<small>${L.t}</small></button></div>`; }).join("")}</div></section>`).join("");
  $("#cont").onclick = () => startLesson(cur);
  $("#main").querySelectorAll(".node").forEach(b => b.onclick = () => startLesson(ALL_L.find(l => l.id === b.dataset.l)));
}

/* ---------- prehrávač lekcie ---------- */
function startLesson(l, steps) { runSteps({ title: l.u.title + " – " + l.t, steps: steps || buildSteps(l), onDone: (res) => finishLesson(l, res) }); }
function finishLesson(l, r) {
  const stars = r.wrong === 0 ? 3 : r.wrong <= 2 ? 2 : 1, xp = 10 + r.right * 2 + (r.wrong === 0 ? 10 : 0);
  S.done[l.id] = Math.max(S.done[l.id] || 0, stars); srsAdd(l.u.words.slice(l.kind === "w2" ? 4 : 0, l.kind === "w1" ? 4 : 8));
  addXP(xp); if (r.wrong === 0) unlock("perfect"); checkAch(); save();
  return { xp, stars };
}

function runSteps({ title, steps, onDone }) {
  let i = 0, right = 0, wrong = 0, retry = [];
  const ov = $("#overlay"); ov.hidden = false;
  const close = () => { ov.hidden = true; ov.innerHTML = ""; speechSynthesis && speechSynthesis.cancel(); render(); };
  function frame(bodyFn) {
    const total = steps.length;
    ov.innerHTML = `<div class="l-top"><button class="x" id="cl">✕</button><div class="bar"><i style="width:${i / total * 100}%"></i></div><span class="pill">${esc(title)}</span></div><div class="l-body"><div class="l-inner" id="li"></div></div><div class="foot" id="ft"><button class="btn ghost" id="skip">Preskočiť</button><button class="btn" id="chk" disabled>Skontrolovať</button></div>`;
    $("#cl").onclick = () => confirm("Ukončiť lekciu? Postup v nej sa stratí.") && close();
    bodyFn($("#li"), $("#chk"), $("#skip"));
  }
  function feedback(ok, correct, next) {
    const f = $("#ft"); f.className = "foot " + (ok ? "ok" : "bad");
    f.innerHTML = `<div><div class="fb">${ok ? ["Výborne! 🎉", "Skvelé!", "Presne tak!"][Math.random() * 3 | 0] : "Nie celkom"}</div>${ok ? "" : `<div>Správne: <b>${esc(correct)}</b></div>`}</div><button class="btn ${ok ? "green" : ""}" id="nx">Pokračovať</button>`;
    $("#nx").focus(); $("#nx").onclick = next; ok ? right++ : (wrong++, retry.push(steps[i]));
  }
  function next() { i++; step(); }
  function step() {
    if (i >= steps.length) { if (retry.length && steps.length < 40) { steps = steps.concat(retry.slice(0, 3)); retry = []; return step(); } return done(); }
    const s = steps[i];
    frame((box, chk, skip) => {
      skip.onclick = () => { wrong++; feedback(false, s.a || (s.pairs ? "" : ""), next); };
      if (s.k === "pick") {
        box.innerHTML = `<div class="prompt">${esc(s.p)}</div>${s.e ? `<div class="big-e">${s.e}</div>` : ""}${s.sentence ? `<div class="prompt" style="text-align:center;font-size:40px">${esc(s.sentence)}</div>` : ""}${s.listen ? `<div style="text-align:center"><button class="speak-btn" id="sp">🔊</button></div>` : ""}<div class="opts">${s.o.map((o, n) => `<button class="opt" data-o="${esc(o)}"><kbd>${n + 1}</kbd>${esc(o)}</button>`).join("")}</div>`;
        if (s.listen) { $("#sp").onclick = () => say(s.listen); setTimeout(() => say(s.listen), 250); } else if (s.say) setTimeout(() => say(s.say), 250);
        let sel = null; const ob = [...box.querySelectorAll(".opt")];
        const pick = b => { ob.forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b.dataset.o; chk.disabled = false; };
        ob.forEach(b => b.onclick = () => pick(b));
        chk.onclick = () => { const ok = sel === s.a; ob.forEach(b => { if (b.dataset.o === s.a) b.classList.add("ok"); else if (b.dataset.o === sel) b.classList.add("bad"); }); (s.sayAfter) && say(s.sayAfter); feedback(ok, s.a, next); };
        keys = n => ob[n] && pick(ob[n]);
      }
      if (s.k === "type") {
        box.innerHTML = `<div class="prompt">${esc(s.p)}</div><div style="text-align:center"><button class="speak-btn" id="sp">🔊</button> <button class="btn ghost" id="sl" style="margin-left:10px">🐢 Pomalšie</button></div><input class="input" id="in" autocomplete="off" placeholder="Napíš po anglicky…">`;
        $("#sp").onclick = () => say(s.listen); $("#sl").onclick = () => say(s.listen, .6); setTimeout(() => say(s.listen), 250);
        const inp = $("#in"); inp.focus(); inp.oninput = () => chk.disabled = !inp.value.trim();
        let tries = 0, locked = false;
        const go = () => {
          if (locked || !inp.value.trim()) return; const ok = norm(inp.value) === norm(s.a);
          if (!ok && ++tries < 2) { inp.classList.add("bad"); setTimeout(() => inp.classList.remove("bad"), 600); toast("Skoro. Oprav slovo a skús ešte raz ✏️"); inp.focus(); return; }
          locked = true; inp.readOnly = true; feedback(ok, s.a, next);
        };
        chk.onclick = go; inp.onkeydown = e => e.key === "Enter" && go();
      }
      if (s.k === "build") {
        box.innerHTML = `<div class="prompt">${esc(s.p)}</div><div class="slot" id="sl"></div><div class="chips" id="ch">${s.words.map((w, n) => `<button class="chip" data-n="${n}">${esc(w)}</button>`).join("")}</div>`;
        const sl = $("#sl"), ch = [...box.querySelectorAll(".chip")]; let ans = [];
        const sync = () => { sl.innerHTML = ans.map(n => `<button class="chip" data-n="${n}">${esc(s.words[n])}</button>`).join(""); sl.querySelectorAll(".chip").forEach(c => c.onclick = () => { ans = ans.filter(x => x !== +c.dataset.n); sync(); }); ch.forEach((c, n) => c.classList.toggle("used", ans.includes(n))); chk.disabled = !ans.length; };
        ch.forEach(c => c.onclick = () => { ans.push(+c.dataset.n); say(s.words[+c.dataset.n]); sync(); });
        chk.onclick = () => { const got = ans.map(n => s.words[n]).join(" "), ok = norm(got) === norm(s.a); feedback(ok, s.a, next); say(s.a); };
      }
      if (s.k === "match") {
        const L = shuffle(s.pairs.map(p => p[0])), R = shuffle(s.pairs.map(p => p[1]));
        box.innerHTML = `<div class="prompt">${s.p}</div><div class="match"><div class="grid" id="ml">${L.map(x => `<button class="opt" data-s="l" data-v="${esc(x)}">${esc(x)}</button>`).join("")}</div><div class="grid" id="mr">${R.map(x => `<button class="opt" data-s="r" data-v="${esc(x)}">${esc(x)}</button>`).join("")}</div></div>`;
        $("#ft").innerHTML = `<span class="muted">Klikni na slovo a jeho preklad</span><span></span>`;
        let a = null, left = s.pairs.length, errs = 0;
        box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
          if (b.dataset.s === "l") { say(b.dataset.v); box.querySelectorAll('[data-s="l"]').forEach(x => x.classList.remove("sel")); b.classList.add("sel"); a = b; return; }
          if (!a) return; const ok = s.pairs.some(p => p[0] === a.dataset.v && p[1] === b.dataset.v);
          if (ok) { [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("ok"); setTimeout(() => x.classList.add("gone"), 350); }); a = null; if (!--left) { setTimeout(() => { errs ? wrong++ : right++; next(); }, 600); } }
          else { errs++; b.classList.add("bad"); setTimeout(() => b.classList.remove("bad"), 500); }
        });
      }
      if (s.k === "speak") {
        box.innerHTML = `<div class="prompt">${esc(s.p)}</div><div class="prompt" style="text-align:center;font-size:44px">„${esc(s.a)}“</div><p class="muted" style="text-align:center">${esc(s.sk || "")}</p><div style="text-align:center;display:flex;gap:16px;justify-content:center"><button class="speak-btn" id="sp" title="Vypočuj si">🔊</button><button class="speak-btn" id="mic" title="Nahraj sa">🎤</button></div><p class="small muted" id="hint" style="text-align:center">${SR ? "Stlač 🎤 a povedz vetu." : "Rozpoznávanie reči tu nie je dostupné (použi Chrome alebo Edge). Povedz vetu nahlas a potvrď."}</p>`;
        $("#sp").onclick = () => say(s.a); setTimeout(() => say(s.a), 250);
        const fin = ok => { feedback(ok, s.a, next); };
        chk.disabled = SR ? true : false; chk.textContent = "Povedal som to"; if (!SR) chk.onclick = () => fin(true);
        $("#mic").onclick = () => { const m = $("#mic"); m.classList.add("rec"); $("#hint").textContent = "Počúvam…"; listen((r, why) => { m.classList.remove("rec"); if (!r) { $("#hint").textContent = micMsg(why) + " Alebo vetu potvrď tlačidlom."; chk.disabled = false; chk.textContent = "Povedal som to"; chk.onclick = () => fin(true); return; } const t = norm(s.a).split(" "); const best = Math.max(...r.map(x => { const w = norm(x).split(" "); return t.filter(y => w.includes(y)).length / t.length; })); $("#hint").textContent = `Počul som: „${r[0]}“`; fin(best >= .7); }); };
      }
    });
  }
  let keys = null;
  document.onkeydown = e => { if (ov.hidden) return; if (/^[1-4]$/.test(e.key) && keys && document.activeElement.tagName !== "INPUT") keys(+e.key - 1); if (e.key === "Enter") { const b = $("#nx") || (!$("#chk")?.disabled && $("#chk")); if (b && document.activeElement.tagName !== "INPUT") b.click(); } };
  function done() {
    const res = onDone({ right, wrong }) || { xp: 0, stars: 0 };
    $("#overlay").innerHTML = `<div class="l-body"><div class="l-inner result"><div class="big-e">${res.stars === 3 ? "🏆" : "🎉"}</div><h1>Lekcia <em>hotová</em>!</h1><div class="sum"><div>⭐ <b>+${res.xp}</b>XP</div><div>🎯 <b>${right + wrong ? Math.round(right / (right + wrong) * 100) : 100} %</b>presnosť</div><div>${"★".repeat(res.stars || 0) || "—"}<b></b>hviezdy</div></div><p class="muted">Nové slová pridané do opakovania 🃏</p><button class="btn" id="fin">Pokračovať</button></div></div>`;
    $("#fin").onclick = close;
  }
  step();
}

/* ---------- opakovanie (flashcards) ---------- */
function vReview() {
  const due = dueList(), total = Object.keys(S.srs).length;
  const box = c => Object.values(S.srs).filter(v => v.box === c).length;
  if (!due.length) { $("#main").innerHTML = `<h1>Opakovanie</h1><div class="card" style="margin-top:20px;text-align:center;padding:50px"><div class="big-e">🌟</div><h2>Dnes je všetko zopakované</h2><p class="muted" style="margin:10px 0 22px">${total ? `V zásobníku máš ${total} slov. Ďalšie sa vrátia podľa intervalov.` : "Dokonči prvú lekciu a slovíčka sa tu objavia."}</p><button class="btn" id="g">Na cestu</button></div>`; $("#g").onclick = () => go("path"); return; }
  let q = shuffle(due), n = 0;
  const show = () => {
    if (n >= q.length) { addXP(q.length * 2); toast(`+${q.length * 2} XP za opakovanie`); return go("review"); }
    const [en, v] = q[n];
    $("#main").innerHTML = `<h1>Opakovanie</h1><p class="muted" style="margin:6px 0 20px">Karta ${n + 1} z ${q.length} · škatuľky: ${[0, 1, 2, 3, 4].map(b => box(b)).join(" · ")}</p><div style="max-width:560px"><div class="fc" id="fc"><div><div class="f"><div style="font-size:70px">${v.e}</div><div class="w">${esc(en)}</div><button class="btn ghost" id="s">🔊</button><span class="small muted">Klikni pre otočenie</span></div><div class="b"><div class="w">${esc(v.sk)}</div></div></div></div><div class="row" style="margin-top:20px;justify-content:center" id="gr" hidden><button class="btn ghost" id="no">Nevedel som</button><button class="btn green" id="yes">Vedel som</button></div></div>`;
    $("#fc").onclick = e => { if (e.target.id === "s") return; $("#fc").classList.add("flip"); $("#gr").hidden = false; };
    $("#s").onclick = e => { e.stopPropagation(); say(en); }; say(en);
    $("#yes").onclick = () => { srsGrade(en, true); n++; show(); }; $("#no").onclick = () => { srsGrade(en, false); n++; show(); };
  };
  show();
}

/* ---------- rozhovor s Brunom ---------- */
function vTalk() {
  if (!sub.u) { $("#main").innerHTML = `<h1>Rozhovor s <em>Brunom</em></h1><p class="muted" style="margin:6px 0 22px">Realistické situácie – odpovedáš vlastnými vetami z ponuky, počúvaš a opakuješ.</p><div class="grid g2">${U.map(u => `<button class="card row" data-u="${u.id}" style="text-align:left"><span style="font-size:42px">${u.emoji}</span><div><h3 style="margin:0">${u.title}</h3><span class="small muted">${u.sk}</span></div></button>`).join("")}</div>`; $("#main").querySelectorAll("[data-u]").forEach(b => b.onclick = () => go("talk", { u: U.find(u => u.id == b.dataset.u), i: 0, log: [] })); return; }
  const d = sub.u.dialogue, my = d.filter(x => x.who === "me");
  const render2 = () => {
    const lines = d.slice(0, sub.i); let nxt = d[sub.i];
    $("#main").innerHTML = `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>${sub.u.emoji} ${sub.u.title}</h2></div><div class="chat" id="chat">${lines.map(l => `<div class="${l.who === "bot" ? "av" : ""}">${l.who === "bot" ? `<img src="assets/favicon.png">` : ""}<div class="bub ${l.who}">${esc(l.en)}<small>${esc(l.sk)}</small></div></div>`).join("")}</div><div id="ch" style="margin-top:22px;max-width:640px"></div>`;
    $("#bk").onclick = () => go("talk");
    const ch = $("#ch");
    if (!nxt) { addXP(25); unlock("talk"); ch.innerHTML = `<div class="card" style="text-align:center"><h3>Rozhovor dokončený! 🎉</h3><p class="muted" style="margin:6px 0 14px">+25 XP</p><button class="btn" id="rp">Zopakovať</button></div>`; $("#rp").onclick = () => go("talk", { u: sub.u, i: 0 }); return; }
    if (nxt.who === "bot") { say(nxt.en); setTimeout(() => { sub.i++; render2(); }, 1300); return; }
    const opts = shuffle([nxt, ...shuffle(my.filter(x => x !== nxt)).slice(0, 2)]);
    ch.innerHTML = `<p class="small muted" style="margin-bottom:8px">Vyber správnu odpoveď:</p><div class="grid">${opts.map(o => `<button class="opt" data-e="${esc(o.en)}">${esc(o.en)}</button>`).join("")}</div><p class="small muted" style="margin-top:10px" id="h">Nápoveda: ${esc(nxt.sk)}</p>`;
    ch.querySelectorAll(".opt").forEach(b => b.onclick = () => { if (b.dataset.e === nxt.en) { say(nxt.en); b.classList.add("ok"); setTimeout(() => { sub.i++; render2(); }, 900); } else { b.classList.add("bad"); $("#h").textContent = "Skús inú odpoveď – pozri na nápovedu."; } });
  };
  render2();
}

/* ---------- čítanie ---------- */
function vRead() {
  const u = sub.u || U[0], r = u.reading, dict = {}; ALLW.forEach(w => dict[w.en.toLowerCase()] = w.sk); DICT.forEach(d => dict[d.en.toLowerCase()] ??= d.sk); Object.entries(EXTRA_DICT).forEach(([k, v]) => dict[k] ??= v);
  $("#main").innerHTML = `<h1>Čítanie</h1><div class="seg" style="margin-top:14px">${U.map(x => `<button class="${x.id === u.id ? "on" : ""}" data-u="${x.id}">${x.emoji} ${x.id}</button>`).join("")}</div><div class="card read"><h2 style="margin-bottom:6px">${esc(r.title)}</h2><p class="small muted" style="margin-bottom:14px">Klikni na slovo – zobrazí sa preklad a uloží sa do opakovania.</p><p id="tx">${r.text.split(/(\s+)/).map(t => /\S/.test(t) ? `<span class="w" data-w="${esc(t.toLowerCase().replace(/[^a-z']/g, ""))}">${esc(t)}</span>` : t).join("")}</p><div class="row" style="margin-top:18px"><button class="btn blue" id="pl">🔊 Prečítať</button><button class="btn ghost" id="tr">Zobraziť preklad</button></div><p id="trt" class="muted" hidden style="margin-top:14px"></p></div>`;
  $("#main").querySelectorAll("[data-u]").forEach(b => b.onclick = () => go("read", { u: U.find(x => x.id == b.dataset.u) }));
  $("#pl").onclick = () => say(r.text, .85); $("#tr").onclick = () => { const t = $("#trt"); t.hidden = !t.hidden; t.textContent = r.sk; };
  $("#tx").onclick = e => { const el = e.target.closest(".w"); if (!el) return; const w = el.dataset.w, tr = dict[w]; say(w); const old = $(".tip"); old && old.remove(); const b = el.getBoundingClientRect(), t = document.createElement("div"); t.className = "tip"; t.textContent = `${w} = ${tr || "— (bez prekladu)"}`; t.style.left = b.left + "px"; t.style.top = b.top - 46 + "px"; document.body.appendChild(t); setTimeout(() => t.remove(), 1800); if (tr) { const base = ALLW.find(x => x.en === w); if (base) { srsAdd([base]); el.classList.add("sv"); } else { S.srs[w] ??= { box: 0, due: today(), sk: tr, e: "📝" }; save(); el.classList.add("sv"); } } };
}

/* ---------- päťminútovka ---------- */
function vSprint() {
  $("#main").innerHTML = `<h1>Päťminútovka ⚡</h1><p class="muted" style="margin:6px 0 20px">Rýchle kolá, kde páruješ obrázok so slovom. Za každé správne slovo +1 bod, čas je 60 sekúnd.</p><button class="btn" id="st">Štart</button><div id="gm"></div>`;
  $("#st").onclick = () => {
    $("#st").hidden = true; const learned = Object.keys(S.srs).length >= 6 ? Object.keys(S.srs).map(k => ALLW.find(w => w.en === k)).filter(Boolean) : U.slice(0, 2).flatMap(u => u.words);
    let pts = 0, t = 60, cur; const gm = $("#gm");
    const q = () => { const w = shuffle(learned)[0], o = shuffle([w, ...shuffle(learned.filter(x => x !== w)).slice(0, 3)]); cur = w; gm.innerHTML = `<div class="row between" style="margin:18px 0"><span class="pill">⏱ <span id="tm">${t}</span> s</span><span class="pill">🎯 ${pts}</span></div><div class="big-e">${w.e}</div><div class="opts" style="max-width:560px;margin:20px auto">${o.map(x => `<button class="opt" data-w="${esc(x.en)}" style="justify-content:center">${esc(x.en)}</button>`).join("")}</div>`; gm.querySelectorAll(".opt").forEach(b => b.onclick = () => { if (b.dataset.w === cur.en) { pts++; q(); } else { b.classList.add("bad"); t = Math.max(0, t - 3); } }); };
    q(); const iv = setInterval(() => { if (route !== "sprint") return clearInterval(iv); t--; const tm = $("#tm"); tm && (tm.textContent = t); if (t <= 0) { clearInterval(iv); addXP(pts * 2); gm.innerHTML = `<div class="card" style="text-align:center;margin-top:20px"><div class="big-e">🏁</div><h2>${pts} bodov</h2><p class="muted" style="margin:8px 0 16px">+${pts * 2} XP</p><button class="btn" id="ag">Znova</button></div>`; $("#ag").onclick = () => go("sprint"); renderRight(); } }, 1000);
  };
}

/* ---------- test úrovne ---------- */
function vTest() {
  const T = LEVEL_TEST; let i = 0, score = {};
  const lv = ["A1", "A2", "B1", "B2", "C1"];
  const q = () => {
    if (i >= T.length) { const ok = lv.map(l => T.filter(x => x.l === l).length ? (score[l] || 0) / T.filter(x => x.l === l).length : 0); let lvl = ok[0] < .4 ? "A0" : "A1"; if (lvl !== "A0") for (let k = 0; k < lv.length; k++) { if (ok[k] >= .6) lvl = lv[k]; else break; } S.level = lvl; save(); unlock("test"); addXP(20);
      const rec = lvl === "A0" || lvl === "A1" || lvl === "A2" ? ["Callanova metóda", "assets/logo-callan.png", "Rýchle tempo otázok a odpovedí, hovoríš od prvej hodiny."] : ["Všeobecná angličtina", "assets/logo-general.jpg", "Konverzácia, doučovanie alebo príprava na maturitu."];
      $("#main").innerHTML = `<h1>Tvoja úroveň: <em>${lvl}</em></h1><div class="card" style="margin:20px 0;max-width:640px"><div class="row"><img class="mlogo" src="${rec[1]}"><div><h3 style="margin:0">Odporúčame: ${rec[0]}</h3><p class="muted small">${rec[2]}</p></div></div><p class="small muted" style="margin-top:12px">Podľa výsledku si vyber jednotky na ceste. Test môžeš zopakovať kedykoľvek.</p></div><div class="row"><button class="btn" id="a">Na moju cestu</button></div>`; $("#a").onclick = () => go("path"); return; }
    const t = T[i]; $("#main").innerHTML = `<h1>Test úrovne</h1><div class="bar" style="margin:16px 0 28px;max-width:640px"><i style="width:${i / T.length * 100}%"></i></div><div style="max-width:640px"><p class="small muted">Otázka ${i + 1} / ${T.length}</p><div class="prompt" style="margin:8px 0 20px">${esc(t.q)}</div><div class="grid">${shuffle(t.o.map((o, n) => [o, n])).map(([o, n]) => `<button class="opt" data-n="${n}">${esc(o)}</button>`).join("")}</div><button class="btn ghost" style="margin-top:18px" id="dk">Neviem</button></div>`;
    const nx = ok => { ok && (score[t.l] = (score[t.l] || 0) + 1); i++; q(); };
    $("#main").querySelectorAll(".opt").forEach(b => b.onclick = () => nx(+b.dataset.n === t.a)); $("#dk").onclick = () => nx(false);
  };
  $("#main").innerHTML = `<h1>Test <em>úrovne</em></h1><div class="card" style="max-width:640px;margin-top:18px"><p>15 krátkych otázok od A1 po C1, trvá asi 4 minúty. Ak odpoveď nepoznáš, vyber „Neviem“ – nehádaj.</p><p class="muted small" style="margin:8px 0 16px">${S.level ? "Posledný výsledok: " + S.level : ""}</p><button class="btn" id="b">Začať test</button></div>`; $("#b").onclick = q;
}

/* ---------- úspechy ---------- */
function vGoals() {
  $("#main").innerHTML = `<h1>Úspechy</h1><p class="muted" style="margin:6px 0 20px">${Object.keys(S.ach).length} z ${ACHIEVEMENTS.length} odomknutých</p><div class="grid g2">${ACHIEVEMENTS.map(a => `<div class="ach ${S.ach[a.id] ? "" : "off"}"><span class="e">${a.e}</span><div><b>${a.t}</b><div class="small muted">${a.d}</div></div></div>`).join("")}</div>`;
}


/* ---------- slovník ---------- */
const POS = { n: "podstatné meno", v: "sloveso", adj: "prídavné meno", adv: "príslovka", prep: "predložka", conj: "spojka", pron: "zámeno", phr: "výraz" };
function vDict() {
  const st = sub.d || (sub.d = { q: "", lvl: "", pos: "", n: 60 });
  $("#main").innerHTML = `<h1>Slovník <em>EN ⇄ SK</em></h1><p class="muted" style="margin:6px 0 18px">${DICT.length} hesiel s prekladom, slovným druhom, úrovňou a príkladom. Hľadáš po anglicky aj po slovensky (aj bez diakritiky).</p>
  <input class="input" id="dq" placeholder="Hľadaj slovo… napr. headache, dovolenka, apply" value="${esc(st.q)}" autocomplete="off">
  <div class="row" style="margin:14px 0;flex-wrap:wrap"><div class="seg" id="dl" style="margin:0">${["", "A0", "A1", "A2", "B1", "B2", "C1"].map(l => `<button class="${st.lvl === l ? "on" : ""}" data-l="${l}">${l || "Všetky"}</button>`).join("")}</div>
  <select class="input" id="dp" style="width:auto;font-size:15px;padding:10px 14px"><option value="">Všetky slovné druhy</option>${Object.entries(POS).map(([k, v]) => `<option value="${k}" ${st.pos === k ? "selected" : ""}>${v}</option>`).join("")}</select><span class="muted small" id="dc"></span></div><div id="dr"></div>`;
  const draw = () => {
    const q = fold(st.q.trim());
    let r = DICT.filter(d => (!st.lvl || d.lvl === st.lvl) && (!st.pos || d.pos === st.pos) && (licFull() || RANK[d.lvl] <= 1));
    if (q) { const score = d => { const e = fold(d.en), k = fold(d.sk); if (e === q || k === q) return 0; if (e.startsWith(q) || k.startsWith(q)) return 1; if (e.includes(q) || k.includes(q)) return 2; return 9; }; r = r.filter(d => score(d) < 9).sort((a, b) => score(a) - score(b) || a.en.localeCompare(b.en)); }
    $("#dc").textContent = `${r.length} výsledkov`;
    const shown = r.slice(0, st.n);
    $("#dr").innerHTML = shown.length ? shown.map((d, i) => `<div class="de"><button class="x" data-s="${i}" title="Vypočuj">🔊</button><div style="flex:1"><div class="row" style="gap:8px;flex-wrap:wrap"><b class="dw">${esc(d.en)}</b>${d.pos ? `<span class="pill">${POS[d.pos] || d.pos}</span>` : ""}<span class="lvl-badge sm">${d.lvl}</span></div><div class="dk">${esc(d.sk)}</div>${d.ex ? `<div class="small muted" style="font-style:italic">„${esc(d.ex)}“</div>` : ""}</div><button class="btn ghost" style="padding:8px 14px;font-size:13px" data-a="${i}">${S.srs[d.en] ? "✓ V opakovaní" : "＋ Do opakovania"}</button></div>`).join("") + (r.length > st.n ? `<button class="btn ghost" id="more" style="margin-top:14px">Zobraziť ďalšie (${r.length - st.n})</button>` : "") : `<div class="card" style="text-align:center">Nič sa nenašlo. Skús iný tvar slova alebo odstráň filtre.</div>`;
    $("#dr").querySelectorAll("[data-s]").forEach(b => b.onclick = () => say(shown[+b.dataset.s].en));
    $("#dr").querySelectorAll("[data-a]").forEach(b => b.onclick = () => { const d = shown[+b.dataset.a]; S.srs[d.en] ??= { box: 0, due: today(), sk: d.sk, e: d.e || "📝" }; save(); b.textContent = "✓ V opakovaní"; checkAch(); renderRight(); });
    const m = $("#more"); m && (m.onclick = () => { st.n += 60; draw(); });
  };
  const inp = $("#dq"); inp.oninput = () => { st.q = inp.value; st.n = 60; draw(); };
  $("#dl").onclick = e => { const b = e.target.closest("button"); if (b) { st.lvl = b.dataset.l; [...$("#dl").children].forEach(x => x.classList.toggle("on", x === b)); st.n = 60; draw(); } };
  $("#dp").onchange = e => { st.pos = e.target.value; st.n = 60; draw(); };
  draw(); inp.focus();
}

/* ---------- gramatika ---------- */
function vGram() {
  S.gram ||= {};
  const G = window.GRAMMAR;
  if (sub.t) {
    const t = G.find(x => x.id === sub.t), idx = G.indexOf(t), pr = G[idx - 1], nx = G[idx + 1];
    $("#main").innerHTML = `<div class="row" style="margin-bottom:16px"><button class="btn ghost" id="gb">← Gramatika</button><span class="lvl-badge">${t.lvl}</span><span class="pill">${t.cat}</span></div>
    <h1>${esc(t.t)}</h1><p class="muted" style="margin:6px 0 20px;font-size:18px">${esc(t.sum)}</p>
    <div class="card gbody">${t.body}</div>
    <h3 style="margin:26px 0 12px">Príklady</h3><div class="grid">${t.ex.map((e, i) => `<div class="gex"><button class="x" data-s="${i}">🔊</button><div><b>${esc(e[0])}</b><div class="muted">${esc(e[1])}</div></div></div>`).join("")}</div>
    <h3 style="margin:26px 0 12px">Časté chyby</h3><div class="grid">${t.mist.map(m => `<div class="gmist"><div class="bad">✗ ${esc(m[0])}</div><div class="ok">✓ ${esc(m[1])}</div><div class="small muted">${esc(m[2])}</div></div>`).join("")}</div>
    <h3 style="margin:26px 0 12px">Skús si to</h3><div id="gq" class="card"></div>
    <div class="row between" style="margin-top:26px">${pr ? `<button class="btn ghost" id="gp">← ${esc(pr.t)}</button>` : "<span></span>"}${nx ? `<button class="btn" id="gn">${esc(nx.t)} →</button>` : ""}</div>`;
    $("#gb").onclick = () => go("gram", { f: sub.f }); pr && ($("#gp").onclick = () => go("gram", { t: pr.id, f: sub.f })); nx && ($("#gn").onclick = () => go("gram", { t: nx.id, f: sub.f }));
    $("#main").querySelectorAll("[data-s]").forEach(b => b.onclick = () => say(t.ex[+b.dataset.s][0]));
    let qi = 0, ok = 0;
    const q = () => {
      if (qi >= t.quiz.length) { const first = S.gram[t.id] === undefined; S.gram[t.id] = Math.max(S.gram[t.id] || 0, ok); save(); if (first) addXP(5 + ok * 3); if (Object.keys(S.gram).length >= 5) unlock("gram"); $("#gq").innerHTML = `<div style="text-align:center"><div class="big-e" style="font-size:60px">${ok === t.quiz.length ? "🎉" : "💪"}</div><h3>${ok} / ${t.quiz.length} správne</h3><p class="muted small">${first ? "+" + (5 + ok * 3) + " XP" : ""}</p><button class="btn ghost" id="rt" style="margin-top:8px">Skúsiť znova</button></div>`; $("#rt").onclick = () => { qi = 0; ok = 0; q(); }; renderRight(); return; }
      const [qq, o, a] = t.quiz[qi];
      $("#gq").innerHTML = `<p class="small muted">Otázka ${qi + 1} / ${t.quiz.length}</p><div class="prompt" style="font-size:28px;margin:8px 0 16px">${esc(qq)}</div><div class="opts">${o.map((x, n) => `<button class="opt" data-n="${n}">${esc(x)}</button>`).join("")}</div><div id="gf" style="margin-top:14px"></div>`;
      $("#gq").querySelectorAll(".opt").forEach(b => b.onclick = () => { const good = +b.dataset.n === a; good && ok++; $("#gq").querySelectorAll(".opt").forEach(x => { x.style.pointerEvents = "none"; if (+x.dataset.n === a) x.classList.add("ok"); else if (x === b) x.classList.add("bad"); }); $("#gf").innerHTML = `<button class="btn ${good ? "green" : ""}" id="gnx">Ďalej</button>`; $("#gnx").onclick = () => { qi++; q(); }; });
    };
    q(); return;
  }
  const f = sub.f || (sub.f = { lvl: "", q: "" });
  $("#main").innerHTML = `<h1>Gramatika <em>A1 – C1</em></h1><p class="muted" style="margin:6px 0 18px">${G.length} tém s vysvetlením po slovensky, tabuľkami, príkladmi, častými chybami a cvičením. Splnené: ${Object.keys(S.gram).length} / ${G.length}.</p>
  <input class="input" id="gs" placeholder="Hľadaj tému… napr. past simple, passive, will" value="${esc(f.q)}" autocomplete="off">
  <div class="seg" id="gl" style="margin:14px 0 22px">${["", "A1", "A2", "B1", "B2", "C1"].map(l => `<button class="${f.lvl === l ? "on" : ""}" data-l="${l}">${l || "Všetky"}</button>`).join("")}</div><div id="gr"></div>`;
  const draw = () => {
    const q = fold(f.q.trim()), list = G.filter(t => (!f.lvl || t.lvl === f.lvl) && (!q || fold(t.t + " " + t.sum + " " + t.cat).includes(q)));
    $("#gr").innerHTML = list.length ? ["A1", "A2", "B1", "B2", "C1"].map(l => { const L = list.filter(t => t.lvl === l); return L.length ? `<div class="lvl-div" style="margin:18px 0 10px"><span class="lvl-badge">${l}</span><b>${LVL_NAME[l]}</b></div><div class="grid g2">${L.map(t => `<button class="card gcard" data-t="${t.id}"><div class="row between"><span class="pill">${t.cat}</span>${S.gram[t.id] !== undefined ? `<span style="color:var(--green);font-weight:700">✓ ${S.gram[t.id]}/${t.quiz.length}</span>` : ""}</div><h3 style="margin:10px 0 4px">${esc(t.t)}</h3><p class="muted small">${esc(t.sum)}</p></button>`).join("")}</div>` : ""; }).join("") : `<div class="card" style="text-align:center">Nič sa nenašlo.</div>`;
    $("#gr").querySelectorAll("[data-t]").forEach(b => { const tt = G.find(x => x.id === b.dataset.t); if (!licFull() && RANK[tt.lvl] > 1) { b.style.opacity = .55; b.querySelector("h3").insertAdjacentText("beforeend", " 🔒"); } b.onclick = () => (!licFull() && RANK[tt.lvl] > 1) ? toast("🔒 Plná verzia – aktivačný kód od lektorky") : go("gram", { t: b.dataset.t, f }); });
  };
  $("#gs").oninput = e => { f.q = e.target.value; draw(); };
  $("#gl").onclick = e => { const b = e.target.closest("button"); if (b) { f.lvl = b.dataset.l; [...$("#gl").children].forEach(x => x.classList.toggle("on", x === b)); draw(); } };
  draw();
}

window.A4U = { $, esc, shuffle, norm, say, toast, addXP, save, go, fold, unlock, today, srsAdd, runSteps, startLesson, renderRight, licFull,
  RANK, LVL_NAME, DICT, UNITS: U, ALL_L, routes: ROUTES, nav: NAV, get S() { return S; }, get sub() { return sub; } };
(window.A4U_PLUGINS || []).forEach(p => p(window.A4U));
render();
})();

