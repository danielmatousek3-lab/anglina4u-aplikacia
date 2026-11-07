/* Hry: slovíčka + gramatika v praxi (plugin pre app.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, shuffle, norm, say, toast, addXP, save, go, fold, unlock, RANK, licFull, DICT, today } = api;
const SS = () => api.S;
const GR = window.GRAMMAR;

api.GAMES = [
  { id: "memory", k: "w", e: "🃏", t: "Pamäť", d: "Nájdi dvojice: anglické slovo a jeho preklad." },
  { id: "hangman", k: "w", e: "🔤", t: "Hádaj slovo", d: "Slovenský preklad ti poradí, písmená hádaš ty." },
  { id: "falling", k: "w", e: "☄️", t: "Slovná lavína", d: "Slová padajú. Napíš anglicky, než dopadnú." },
  { id: "anagram", k: "w", e: "🧩", t: "Zamiešané písmená", d: "Poskladaj slovo zo zmiešaných písmen." },
  { id: "errors", k: "g", e: "🕵️", t: "Lovec chýb", d: "Ktorá veta je gramaticky správna?" },
  { id: "blitz", k: "g", e: "🎯", t: "Gramatická streľba", d: "60 sekúnd rýchlych gramatických otázok." },
  { id: "build", k: "g", e: "🏗️", t: "Zostav vetu", d: "Poskladaj správny slovosled z príkladov." },
  { id: "scenes", k: "g", e: "🎭", t: "Situácie v praxi", d: "Čo povieš v reálnej situácii? Vyber najlepšiu vetu." }
];
const SC = [
  { l: "A1", c: "V kaviarni. Čašník sa pýta, čo si dáš.", o: ["I would like a coffee, please.", "I am coffee.", "Me coffee want."], a: 0, w: "Zdvorilá objednávka: I would like… + please.", t: "have" },
  { l: "A1", c: "Chceš sa predstaviť novému spolužiakovi.", o: ["I am Anna. Nice to meet you.", "I have Anna. Nice to meet you.", "Me Anna is."], a: 0, w: "Meno: I am… (sloveso to be).", t: "be" },
  { l: "A1", c: "Mama sa pýta, čo robíš práve teraz.", o: ["I am doing my homework.", "I do my homework now.", "I am do homework."], a: 0, w: "Dej práve teraz: present continuous (am + -ing).", t: "prescont" },
  { l: "A1", c: "Opisuješ svoj izbu kamarátovi.", o: ["There is a bed and two chairs.", "It is a bed and two chairs.", "Have a bed and two chairs."], a: 0, w: "Čo sa niekde nachádza: there is / there are.", t: "thereis" },
  { l: "A1", c: "Hovoríš, čo robíš každé ráno.", o: ["I get up at seven.", "I am get up at seven.", "I getting up at seven."], a: 0, w: "Zvyky: present simple.", t: "presimple" },
  { l: "A2", c: "Pýtaš sa spolužiaka, čo robil cez víkend.", o: ["What did you do at the weekend?", "What you did at the weekend?", "What did you did at the weekend?"], a: 0, w: "Otázka v past simple: did + základný tvar slovesa.", t: "pastsimple" },
  { l: "A2", c: "Porovnávaš dva telefóny v obchode.", o: ["This phone is cheaper than that one.", "This phone is more cheap than that one.", "This phone is cheapest than that one."], a: 0, w: "Krátke prídavné meno: -er + than.", t: "compar" },
  { l: "A2", c: "Plánuješ, čo urobíš cez leto (máš to rozhodnuté).", o: ["I am going to visit my aunt in Spain.", "I will to visit my aunt in Spain.", "I visit going my aunt in Spain."], a: 0, w: "Rozhodnutý plán: going to.", t: "future1" },
  { l: "A2", c: "Ukazuješ, že niečo je zakázané.", o: ["You mustn't park here.", "You don't have to park here.", "You mustn't to park here."], a: 0, w: "Zákaz: mustn't. Nemusíš = don't have to.", t: "modals1" },
  { l: "A2", c: "Hovoríš, že si v Španielsku ešte nikdy nebol.", o: ["I have never been to Spain.", "I never was in Spain.", "I am never been to Spain."], a: 0, w: "Životná skúsenosť bez času: present perfect + never.", t: "perfect1" },
  { l: "A2", c: "Pýtaš sa v obchode na množstvo vody.", o: ["How much water do you need?", "How many water do you need?", "How much waters do you need?"], a: 0, w: "Nepočítateľné podstatné meno: much.", t: "countable" },
  { l: "B1", c: "Hovoríš o svojom pobyte, ktorý ešte trvá.", o: ["I have lived here for five years.", "I live here since five years.", "I lived here for five years (a stále tu bývam)."], a: 0, w: "Dej trvajúci do dnes: present perfect + for/since.", t: "perfcomp" },
  { l: "B1", c: "Sľubuješ kamarátovi: ak budeš mať čas, pomôžeš.", o: ["If I have time, I will help you.", "If I will have time, I help you.", "If I had time, I will help you."], a: 0, w: "Prvá podmienka: if + prítomný, will + základný tvar.", t: "cond1" },
  { l: "B1", c: "Radíš kamarátovi: keby si bol na jeho mieste…", o: ["If I were you, I would apologise.", "If I was you, I will apologise.", "If I would be you, I apologise."], a: 0, w: "Druhá podmienka: if + were, would + základný tvar.", t: "cond2" },
  { l: "B1", c: "Hovoríš, že oprava auta sa robí v servise (nevieš kto).", o: ["My car was repaired yesterday.", "My car repaired yesterday.", "My car was repair yesterday."], a: 0, w: "Trpný rod: was + 3. tvar slovesa.", t: "passive1" },
  { l: "B1", c: "Prerozprávaš, čo ti učiteľka povedala („I am late“).", o: ["She said that she was late.", "She said that she is late yesterday.", "She said me that she was late."], a: 0, w: "Nepriama reč: čas sa posúva späť.", t: "reported" },
  { l: "B1", c: "Hovoríš o tom, čo si robil ako dieťa, ale už nerobíš.", o: ["I used to play in the garden.", "I use to play in the garden.", "I was used to play in the garden."], a: 0, w: "Kedysi: used to + základný tvar.", t: "usedto" },
  { l: "B2", c: "Ľutuješ, že si sa na skúšku neučil.", o: ["If I had studied, I would have passed.", "If I studied, I would pass.", "If I would have studied, I had passed."], a: 0, w: "Tretia podmienka: had + p.p., would have + p.p.", t: "cond3" },
  { l: "B2", c: "Pri príchode na stanicu ti vlak už odišiel.", o: ["When I arrived, the train had already left.", "When I arrived, the train already left.", "When I arrived, the train has left."], a: 0, w: "Skorší dej v minulosti: past perfect.", t: "pastperf" },
  { l: "B2", c: "Prajete si, aby bolo viac času (ale nie je).", o: ["I wish I had more time.", "I wish I would have more time.", "I wish I have more time."], a: 0, w: "Wish + past simple pre prítomnosť.", t: "wish" },
  { l: "B2", c: "Dáš si opraviť telefón v servise.", o: ["I had my phone repaired.", "I repaired my phone by someone.", "I had repaired my phone myself."], a: 0, w: "Kauzatív: have + predmet + p.p.", t: "causative" },
  { l: "B2", c: "Predpovedáš, že budeš dokončený do piatku.", o: ["By Friday I will have finished.", "By Friday I will finish already.", "By Friday I finished."], a: 0, w: "Future perfect: will have + p.p.", t: "future2" },
  { l: "C1", c: "Formálny e-mail: zdôrazňuješ, že sa niečo nikdy nestalo.", o: ["Never have I seen such a mistake.", "Never I have seen such a mistake.", "Never did I saw such a mistake."], a: 0, w: "Po never na začiatku vety: inverzia.", t: "inversion" },
  { l: "C1", c: "Zdôrazňuješ, čo ťa na práci najviac baví.", o: ["What I enjoy most is the teamwork.", "It what I enjoy most the teamwork.", "What enjoy I most is teamwork."], a: 0, w: "Wh-cleft: What + podmet + sloveso + be.", t: "cleft" },
  { l: "C1", c: "Skracuješ vetu: Keď som dočítal knihu, išiel som spať.", o: ["Having finished the book, I went to bed.", "Finished the book, I went to bed.", "Having the book finished, I went bed."], a: 0, w: "Perfektné príčastie: having + p.p.", t: "participle" },
  { l: "C1", c: "Formálna požiadavka: žiadaš, aby každý prišiel včas.", o: ["It is essential that everyone be on time.", "It is essential that everyone is on time.", "It is essential that everyone will be on time."], a: 0, w: "Subjunktív: základný tvar po essential that.", t: "subjunctive" },
  { l: "C1", c: "Kritizuješ minulé rozhodnutie: bolo to zbytočné.", o: ["You needn't have done it.", "You mustn't have done it.", "You don't need have done it."], a: 0, w: "Needn't have + p.p.: nebolo to potrebné, ale urobil si to.", t: "perfmodal" },
  { l: "C1", c: "Píšeš akademický text a opatrne formuluješ záver.", o: ["The data would appear to suggest a link.", "The data prove a link, absolutely.", "The data is meaning a link."], a: 0, w: "Zmäkčovanie tvrdení (hedging).", t: "hedging" },
  { l: "B1", c: "V e-maile spájaš dve vety s kontrastom (je unavený, ale pracuje).", o: ["Although he was tired, he worked.", "Despite he was tired, he worked.", "Although he was tired, but he worked."], a: 0, w: "Although + veta; nikdy nie although … but.", t: "linkers" },
  { l: "B2", c: "Chceš povedať, že si zabudol na niečo, čo si mal urobiť (zavolať).", o: ["I forgot to call her.", "I forgot calling her.", "I forgot call her."], a: 0, w: "forget to = zabudnúť urobiť.", t: "gerinf2" }
];

/* ---------- pomocné ---------- */
const lvlOK = l => licFull() || RANK[l] <= 1;
const WLV = ["A0", "A1", "A2", "B1", "B2", "C1"], GLV = ["A1", "A2", "B1", "B2", "C1"];
function wordPool(sel) {
  if (sel === "mine") return Object.entries(SS().srs).map(([en, v]) => ({ en, sk: v.sk }));
  return DICT.filter(d => d.lvl === sel);
}
function gramPool(sel) { return GR.filter(t => t.lvl === sel); }
const plainSk = s => s.replace(/\s*\(.*?\)/g, "").split(" / ")[0];
const letters = pool => pool.filter(w => /^[a-z]+$/i.test(w.en) && w.en.length >= 4 && w.en.length <= 10);
function best(id, v) { const h = SS().hs ||= {}; const nb = v > (h[id] || 0); if (nb) h[id] = v; save(); return nb; }
function done(id, score, xp, extra) {
  const S = SS(); S.played = (S.played || 0) + 1; const nb = best(id, score);
  addXP(xp); if (S.played >= 5) unlock("games"); save();
  $("#gm").innerHTML = `<div class="card" style="text-align:center;padding:40px;max-width:560px"><div class="big-e" style="font-size:80px">${nb ? "🏆" : "🎉"}</div><h2>${score} bodov</h2><p class="muted" style="margin:8px 0 4px">${extra || ""}</p><p style="margin:4px 0 18px"><span class="pill">+${xp} XP</span> ${nb ? '<span class="pill" style="background:#FFF4CC">Nový rekord!</span>' : `<span class="muted small">Rekord: ${S.hs[id] || 0}</span>`}</p><div class="row" style="justify-content:center"><button class="btn" id="again">Hrať znova</button><button class="btn ghost" id="hub">Všetky hry</button></div></div>`;
  $("#again").onclick = () => start(id); $("#hub").onclick = () => go("games"); api.renderRight();
}
function frame(game, body) {
  $("#main").innerHTML = `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>${game.e} ${game.t}</h2></div><div id="gm">${body}</div>`;
  $("#bk").onclick = () => go("games");
}
function alive() { return !!$("#gm"); }

/* ---------- hub + výber ---------- */
let cur = { pool: "A1" };
function hub() {
  const S = SS(); S.hs ||= {};
  const card = g => `<button class="card gcard" data-g="${g.id}"><div class="row between"><span style="font-size:38px">${g.e}</span>${S.hs[g.id] ? `<span class="pill">Rekord ${S.hs[g.id]}</span>` : ""}</div><h3 style="margin:10px 0 4px">${g.t}</h3><p class="muted small">${g.d}</p></button>`;
  $("#main").innerHTML = `<h1>Hry <em>na precvičenie</em></h1><p class="muted" style="margin:6px 0 20px">Slovíčka a gramatika hravou formou. Za hry dostaneš XP a započítajú sa aj do domácej úlohy.</p>
  <h3 style="margin:10px 0 12px">🔤 Slovíčka</h3><div class="grid g2">${api.GAMES.filter(g => g.k === "w").map(card).join("")}<button class="card gcard" data-g="sprint"><div class="row between"><span style="font-size:38px">⚡</span></div><h3 style="margin:10px 0 4px">Bleskové kolo</h3><p class="muted small">60 sekúnd: spájaj obrázok so slovom.</p></button></div>
  <h3 style="margin:28px 0 12px">📐 Gramatika v praxi</h3><div class="grid g2">${api.GAMES.filter(g => g.k === "g").map(card).join("")}</div>`;
  $("#main").querySelectorAll("[data-g]").forEach(b => b.onclick = () => b.dataset.g === "sprint" ? go("sprint") : setup(b.dataset.g));
}
function setup(id) {
  const g = api.GAMES.find(x => x.id === id), words = g.k === "w", L = words ? WLV : GLV;
  const mine = Object.keys(SS().srs).length;
  $("#main").innerHTML = `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>${g.e} ${g.t}</h2></div><p class="muted" style="margin-bottom:16px">${g.d}</p><div class="card" style="max-width:640px"><h3>${words ? "Z akých slovíčok?" : "Akú úroveň gramatiky?"}</h3><div class="seg" id="pl" style="margin:14px 0 6px;flex-wrap:wrap">${words ? `<button data-p="mine" class="${cur.pool === "mine" ? "on" : ""}">Moje slová (${mine})</button>` : ""}${L.map(l => `<button data-p="${l}" class="${cur.pool === l ? "on" : ""}">${l}${lvlOK(l) ? "" : " 🔒"}</button>`).join("")}</div><p class="small muted" id="pn"></p><button class="btn" id="go" style="margin-top:12px">Hrať</button></div>`;
  $("#bk").onclick = () => go("games");
  const info = () => { const p = cur.pool; $("#pn").textContent = p === "mine" ? (mine < 6 ? "Zatiaľ máš málo slov v opakovaní – dokonči lekcie alebo pridaj slová zo slovníka." : "Slová, ktoré si sa už učil.") : !lvlOK(p) ? "Táto úroveň je v plnej verzii – aktivuj kód od lektorky." : words ? `${wordPool(p).length} slovíčok` : `${gramPool(p).length} gramatických tém`; };
  if (cur.pool === "mine" && !words) cur.pool = "A1"; if (!words && !GLV.includes(cur.pool)) cur.pool = "A1";
  info();
  $("#pl").onclick = e => { const b = e.target.closest("button"); if (!b) return; cur.pool = b.dataset.p; [...$("#pl").children].forEach(x => x.classList.toggle("on", x === b)); info(); };
  $("#go").onclick = () => { if (cur.pool !== "mine" && !lvlOK(cur.pool)) return toast("🔒 Plná verzia – aktivuj kód od lektorky"); start(id); };
}
function start(id) {
  const g = api.GAMES.find(x => x.id === id);
  const fn = { memory, hangman, falling, anagram, errors, blitz, build, scenes }[id];
  const words = g.k === "w", pool = words ? wordPool(cur.pool) : gramPool(cur.pool);
  if (words && pool.length < 6) { toast("Na túto hru treba aspoň 6 slov – vyber inú úroveň."); return setup(id); }
  fn(g, pool);
}

/* ---------- SLOVÍČKA ---------- */
function memory(g, pool) {
  const ws = shuffle(pool.filter(w => w.en.length < 22 && w.sk.length < 28)).slice(0, 6);
  const cards = shuffle(ws.flatMap(w => [{ k: w.en, t: w.en, en: 1 }, { k: w.en, t: plainSk(w.sk), en: 0 }]));
  let open = [], moves = 0, matched = 0, lock = false;
  frame(g, `<p class="muted" id="mi" style="margin-bottom:14px">Ťahy: 0</p><div class="grid" style="grid-template-columns:repeat(4,1fr);max-width:720px">${cards.map((c, i) => `<button class="opt" data-i="${i}" style="min-height:92px;justify-content:center;text-align:center;font-size:18px">?</button>`).join("")}</div>`);
  const btns = [...$("#gm").querySelectorAll(".opt")];
  btns.forEach(b => b.onclick = () => {
    const i = +b.dataset.i; if (lock || open.includes(i) || b.classList.contains("ok")) return;
    b.textContent = cards[i].t; b.classList.add("sel"); cards[i].en && say(cards[i].t); open.push(i);
    if (open.length === 2) {
      moves++; $("#mi").textContent = "Ťahy: " + moves; const [a, c] = open;
      if (cards[a].k === cards[c].k && cards[a].en !== cards[c].en) { [a, c].forEach(x => { btns[x].classList.remove("sel"); btns[x].classList.add("ok"); }); open = []; if (++matched === 6) setTimeout(() => done(g.id, Math.max(10, 60 - moves * 3), Math.max(8, 30 - moves), `Hotovo na ${moves} ťahov.`), 500); }
      else { lock = true; setTimeout(() => { [a, c].forEach(x => { btns[x].textContent = "?"; btns[x].classList.remove("sel"); }); open = []; lock = false; }, 900); }
    }
  });
}
let hmGuess = null;
document.addEventListener("keydown", e => { if (hmGuess && alive() && $("#hm") && /^[a-z]$/i.test(e.key) && !e.ctrlKey && !e.metaKey) hmGuess(e.key.toLowerCase()); });
function hangman(g, pool) {
  const P = shuffle(letters(pool)); if (P.length < 5) { toast("Málo vhodných slov – vyber inú úroveň."); return setup(g.id); }
  let r = 0, won = 0, w, got, lives;
  const KB = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const round = () => {
    if (r >= 5) return done(g.id, won * 20, won * 6, `Uhádnuté slová: ${won} z 5.`);
    w = P[r].en.toLowerCase(); got = new Set(); lives = 6; draw();
  };
  const show = () => w.split("").map(c => got.has(c) ? c.toUpperCase() : "_").join(" ");
  const draw = () => {
    frame(g, `<p class="muted">Kolo ${r + 1} / 5 · slovo: <b>${esc(plainSk(P[r].sk))}</b></p><div class="prompt" id="hm" style="letter-spacing:.3em;margin:18px 0;font-size:44px">${show()}</div><p id="hl" style="font-size:22px">${"❤️".repeat(lives)}${"🖤".repeat(6 - lives)}</p><div class="chips" style="max-width:640px;margin-top:14px">${KB.map(k => `<button class="chip" data-k="${k.toLowerCase()}" style="min-width:46px;${got.has(k.toLowerCase()) ? "opacity:.3;pointer-events:none" : ""}">${k}</button>`).join("")}</div>`);
    $("#gm").querySelectorAll("[data-k]").forEach(b => b.onclick = () => guess(b.dataset.k));
  };
  const guess = k => {
    if (!$("#hm") || got.has(k)) return; got.add(k);
    if (!w.includes(k)) lives--;
    const solved = w.split("").every(c => got.has(c));
    if (solved || lives <= 0) { if (solved) { won++; say(w); } draw(); $("#hm").textContent = w.toUpperCase().split("").join(" "); $("#hm").style.color = solved ? "var(--green)" : "var(--red)"; $("#gm").querySelectorAll("[data-k]").forEach(b => b.style.pointerEvents = "none"); $("#gm").insertAdjacentHTML("beforeend", `<button class="btn" id="nx" style="margin-top:18px">${r >= 4 ? "Výsledok" : "Ďalšie slovo"}</button>`); $("#nx").onclick = () => { r++; round(); }; }
    else draw();
  };
  hmGuess = guess;
  round();
}
function falling(g, pool) {
  const P = pool.filter(w => /^[a-z ]+$/i.test(w.en) && w.en.length <= 14);
  if (P.length < 6) { toast("Málo vhodných slov – vyber inú úroveň."); return setup(g.id); }
  frame(g, `<div class="row between" style="margin-bottom:10px"><span class="pill" id="fs">Body: 0</span><span id="fh" style="font-size:20px">❤️❤️❤️</span></div><div id="fl" style="position:relative;height:clamp(200px,calc(100vh - 380px),380px);border:1px solid var(--line);border-radius:24px;overflow:hidden;background:linear-gradient(#EEF2FF,#fff)"></div><input class="input" id="fi" placeholder="Napíš anglický preklad a stlač Enter" autocomplete="off" style="margin-top:12px;max-width:560px">`);
  const area = $("#fl"), inp = $("#fi"); inp.focus(); inp.scrollIntoView({ block: "nearest" });
  let items = [], score = 0, lives = 3, last = performance.now(), spawn = 0, speed = 38, t0 = last, over = false;
  const H = area.clientHeight - 40;
  inp.onkeydown = e => { if (e.key !== "Enter") return; const v = norm(inp.value); const hit = items.find(it => norm(it.w.en) === v); if (hit) { say(hit.w.en); hit.el.remove(); items = items.filter(x => x !== hit); score++; $("#fs").textContent = "Body: " + score; speed = Math.min(95, speed + 1.5); } inp.value = ""; };
  const tick = now => {
    if (!alive() || over) return; const dt = (now - last) / 1000; last = now; spawn -= dt;
    if (spawn <= 0) { const w = P[Math.random() * P.length | 0]; const el = document.createElement("div"); el.textContent = plainSk(w.sk); el.style.cssText = `position:absolute;top:0;left:${Math.random() * 55 + 3}%;padding:6px 14px;border-radius:99px;background:var(--ink);color:#fff;font-weight:600;white-space:nowrap`; area.appendChild(el); items.push({ w, el, y: 0 }); spawn = Math.max(1.1, 2.6 - score * 0.05); }
    for (const it of items) { it.y += speed * dt; it.el.style.transform = `translateY(${it.y}px)`; }
    const gone = items.filter(it => it.y > H); gone.forEach(it => { it.el.remove(); lives--; }); items = items.filter(it => it.y <= H);
    if (gone.length) $("#fh").textContent = "❤️".repeat(Math.max(lives, 0)) + "🖤".repeat(3 - Math.max(lives, 0));
    if (lives <= 0 || (now - t0) / 1000 > 90) { over = true; return done(g.id, score, score * 3, "Napísané slová: " + score); }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function anagram(g, pool) {
  const P = shuffle(letters(pool)).slice(0, 8); if (P.length < 4) { toast("Málo vhodných slov – vyber inú úroveň."); return setup(g.id); }
  let r = 0, score = 0;
  const round = () => {
    if (r >= P.length) return done(g.id, score * 10, score * 3, `Správne: ${score} z ${P.length}.`);
    const w = P[r].en.toLowerCase(); let sc = shuffle(w.split("")), tries = 0; while (sc.join("") === w && tries++ < 8) sc = shuffle(w.split(""));
    let ans = [], hint = false;
    frame(g, `<p class="muted">Slovo ${r + 1} / ${P.length} · preklad: <b>${esc(plainSk(P[r].sk))}</b></p><div class="slot" id="as" style="min-height:70px;margin:16px 0;max-width:640px"></div><div class="chips" id="ac" style="max-width:640px"></div><div class="row" style="margin-top:18px"><button class="btn ghost" id="ah">💡 Prvé písmeno</button><button class="btn ghost" id="sk">Preskočiť</button></div>`);
    const sync = () => {
      $("#as").innerHTML = ans.map(n => `<button class="chip" data-n="${n}" style="font-size:22px;min-width:46px">${sc[n].toUpperCase()}</button>`).join("");
      $("#ac").innerHTML = sc.map((c, n) => `<button class="chip" data-n="${n}" style="font-size:22px;min-width:46px;${ans.includes(n) ? "opacity:.2;pointer-events:none" : ""}">${c.toUpperCase()}</button>`).join("");
      $("#as").querySelectorAll(".chip").forEach(b => b.onclick = () => { ans = ans.filter(x => x !== +b.dataset.n); sync(); });
      $("#ac").querySelectorAll(".chip").forEach(b => b.onclick = () => { ans.push(+b.dataset.n); sync(); });
      if (ans.length === sc.length) { const got = ans.map(n => sc[n]).join(""); if (got === w) { say(w); score += hint ? .5 : 1; $("#as").style.borderColor = "var(--green)"; setTimeout(() => { r++; round(); }, 700); } else { $("#as").style.borderColor = "var(--red)"; setTimeout(() => { ans = []; sync(); $("#as").style.borderColor = ""; }, 600); } }
    };
    $("#ah").onclick = () => { hint = true; const n = sc.findIndex((c, i) => c === w[0] && !ans.includes(i)); if (n >= 0 && !ans.length) { ans.push(n); sync(); } };
    $("#sk").onclick = () => { r++; round(); };
    sync();
  };
  round();
}

/* ---------- GRAMATIKA V PRAXI ---------- */
const topicName = id => (GR.find(t => t.id === id) || {}).t || "";
function openTopic(id) { go("gram", { t: id, f: { lvl: "", q: "" } }); }
function errors(g, pool) {
  const items = pool.flatMap(t => t.mist.map(m => ({ w: m[0], r: m[1], why: m[2], t: t.id }))).filter(m => !/[()\/]/.test(m.w + m.r) && m.w !== m.r);
  if (items.length < 4) { toast("Málo príkladov na tejto úrovni – vyber inú."); return setup(g.id); }
  const P = shuffle(items).slice(0, 10); let r = 0, score = 0;
  const round = () => {
    if (r >= P.length) return done(g.id, score * 10, score * 3 + 5, `Správne: ${score} z ${P.length}.`);
    const q = P[r], opts = shuffle([{ s: q.w, ok: false }, { s: q.r, ok: true }]);
    frame(g, `<p class="muted">Otázka ${r + 1} / ${P.length}</p><div class="prompt" style="margin:8px 0 18px">Ktorá veta je správna?</div><div class="grid" style="max-width:680px">${opts.map((o, i) => `<button class="opt" data-i="${i}" style="font-size:20px">${esc(o.s)}</button>`).join("")}</div><div id="gf" style="margin-top:18px;max-width:680px"></div>`);
    $("#gm").querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const o = opts[+b.dataset.i]; if (o.ok) score++;
      $("#gm").querySelectorAll(".opt").forEach(x => { x.style.pointerEvents = "none"; opts[+x.dataset.i].ok ? x.classList.add("ok") : (x === b && x.classList.add("bad")); });
      $("#gf").innerHTML = `<div class="gmist"><div class="small muted">${esc(q.why)}</div><button class="btn ghost" id="tp" style="margin-top:10px;padding:8px 16px;font-size:13px">📐 ${esc(topicName(q.t))}</button></div><button class="btn ${o.ok ? "green" : ""}" id="nx" style="margin-top:14px">${r >= P.length - 1 ? "Výsledok" : "Ďalej"}</button>`;
      $("#nx").onclick = () => { r++; round(); }; $("#tp").onclick = () => openTopic(q.t);
    });
  };
  round();
}
function blitz(g, pool) {
  const items = pool.flatMap(t => t.quiz.map(x => ({ q: x[0], o: x[1], a: x[2], t: t.id })));
  const P = shuffle(items); let i = 0, score = 0, combo = 0, bestC = 0, t = 60, over = false;
  frame(g, `<div class="row between" style="margin-bottom:12px"><span class="pill" id="bt">⏱ 60 s</span><span class="pill" id="bs">Body: 0</span><span class="pill" id="bc"></span></div><div id="bq"></div>`);
  const q = () => {
    const x = P[i % P.length], o = shuffle(x.o.map((s, n) => ({ s, n })));
    $("#bq").innerHTML = `<div class="prompt" style="margin:14px 0 18px;font-size:34px">${esc(x.q)}</div><div class="opts" style="max-width:680px">${o.map(z => `<button class="opt" data-n="${z.n}" style="font-size:20px">${esc(z.s)}</button>`).join("")}</div><div id="bf" class="small" style="margin-top:10px;min-height:22px"></div>`;
    $("#bq").querySelectorAll(".opt").forEach(b => b.onclick = () => {
      if (over) return; const ok = +b.dataset.n === x.a;
      if (ok) { combo++; bestC = Math.max(bestC, combo); score += 1 + (combo >= 3 ? 1 : 0) + (combo >= 6 ? 1 : 0); i++; $("#bs").textContent = "Body: " + score; $("#bc").textContent = combo >= 3 ? `🔥 combo ×${combo}` : ""; q(); }
      else { combo = 0; t = Math.max(0, t - 3); b.classList.add("bad"); $("#bc").textContent = ""; $("#bf").innerHTML = `Správne: <b>${esc(x.o[x.a])}</b> · téma: ${esc(topicName(x.t))} (−3 s)`; $("#bq").querySelectorAll(".opt").forEach(z => z.style.pointerEvents = "none"); setTimeout(() => { if (!over) { i++; q(); } }, 1300); }
    });
  };
  q();
  const iv = setInterval(() => { if (!alive()) return clearInterval(iv); t--; const el = $("#bt"); el && (el.textContent = `⏱ ${Math.max(t, 0)} s`); if (t <= 0) { over = true; clearInterval(iv); done(g.id, score, score * 2 + bestC, `Najdlhšie combo: ${bestC}.`); } }, 1000);
}
function build(g, pool) {
  const items = pool.flatMap(t => t.ex.map(e => ({ en: e[0], sk: e[1], t: t.id }))).filter(e => { const n = e.en.split(" ").length; return n >= 3 && n <= 11; });
  if (items.length < 4) { toast("Málo viet na tejto úrovni – vyber inú."); return setup(g.id); }
  const P = shuffle(items).slice(0, 8); let r = 0, score = 0;
  const round = () => {
    if (r >= P.length) return done(g.id, score * 10, score * 3 + 4, `Správne: ${score} z ${P.length}.`);
    const q = P[r], words = shuffle(q.en.split(" ")); let ans = [], tries = 0;
    frame(g, `<p class="muted">Veta ${r + 1} / ${P.length}</p><div class="prompt" style="margin:8px 0 16px;font-size:30px">${esc(q.sk)}</div><div class="slot" id="bs2" style="max-width:720px"></div><div class="chips" id="bw" style="margin-top:14px;max-width:720px"></div><div id="gf" style="margin-top:16px"></div>`);
    const sync = () => {
      $("#bs2").innerHTML = ans.map(n => `<button class="chip" data-n="${n}">${esc(words[n])}</button>`).join("");
      $("#bw").innerHTML = words.map((w, n) => `<button class="chip" data-n="${n}" style="${ans.includes(n) ? "opacity:.2;pointer-events:none" : ""}">${esc(w)}</button>`).join("");
      $("#bs2").querySelectorAll(".chip").forEach(b => b.onclick = () => { ans = ans.filter(x => x !== +b.dataset.n); sync(); });
      $("#bw").querySelectorAll(".chip").forEach(b => b.onclick = () => { ans.push(+b.dataset.n); sync(); });
      if (ans.length === words.length) {
        const ok = norm(ans.map(n => words[n]).join(" ")) === norm(q.en); if (ok) { score += tries ? .5 : 1; say(q.en); }
        $("#gf").innerHTML = ok ? `<div class="gmist"><div class="ok">✓ ${esc(q.en)}</div><button class="btn ghost" id="tp" style="margin-top:8px;padding:8px 16px;font-size:13px">📐 ${esc(topicName(q.t))}</button></div><button class="btn green" id="nx" style="margin-top:12px">${r >= P.length - 1 ? "Výsledok" : "Ďalej"}</button>` : `<div class="gmist"><div class="bad">✗ Nie celkom</div></div><button class="btn ghost" id="rs" style="margin-top:12px">Skúsiť znova</button>`;
        if (ok) { $("#nx").onclick = () => { r++; round(); }; $("#tp").onclick = () => openTopic(q.t); $("#bw").style.pointerEvents = "none"; } else { tries++; $("#rs").onclick = () => { ans = []; $("#gf").innerHTML = ""; sync(); }; }
      }
    };
    sync();
  };
  round();
}
function scenes(g, pool) {
  const lv = new Set(pool.map(t => t.lvl)); const items = SC.filter(s => lv.has(s.l));
  if (items.length < 3) { toast("Málo situácií na tejto úrovni – vyber inú."); return setup(g.id); }
  const P = shuffle(items).slice(0, 8); let r = 0, score = 0;
  const round = () => {
    if (r >= P.length) return done(g.id, score * 10, score * 4 + 4, `Správne: ${score} z ${P.length}.`);
    const q = P[r], opts = shuffle(q.o.map((s, i) => ({ s, ok: i === q.a })));
    frame(g, `<p class="muted">Situácia ${r + 1} / ${P.length} · ${q.l}</p><div class="card" style="margin:10px 0 18px;max-width:680px;background:#F8F9FC"><div style="font-size:20px">🎭 ${esc(q.c)}</div></div><div class="prompt" style="font-size:28px;margin-bottom:12px">Čo povieš?</div><div class="grid" style="max-width:680px">${opts.map((o, i) => `<button class="opt" data-i="${i}" style="font-size:19px">${esc(o.s)}</button>`).join("")}</div><div id="gf" style="margin-top:16px;max-width:680px"></div>`);
    $("#gm").querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const o = opts[+b.dataset.i]; if (o.ok) { score++; say(o.s); }
      $("#gm").querySelectorAll(".opt").forEach(x => { x.style.pointerEvents = "none"; opts[+x.dataset.i].ok ? x.classList.add("ok") : (x === b && x.classList.add("bad")); });
      $("#gf").innerHTML = `<div class="gmist"><div class="small muted">${esc(q.w)}</div><button class="btn ghost" id="tp" style="margin-top:10px;padding:8px 16px;font-size:13px">📐 ${esc(topicName(q.t))}</button></div><button class="btn ${o.ok ? "green" : ""}" id="nx" style="margin-top:14px">${r >= P.length - 1 ? "Výsledok" : "Ďalej"}</button>`;
      $("#nx").onclick = () => { r++; round(); }; $("#tp").onclick = () => openTopic(q.t);
    });
  };
  round();
}

api.routes.games = hub;
window.ACHIEVEMENTS.push({ id: "games", e: "🎮", t: "Hráč", d: "Zahraj 5 hier" });
});
