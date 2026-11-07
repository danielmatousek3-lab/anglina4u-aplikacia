/* Poradie prídavných mien (plugin pre app.js): pravidlo OSASCOMP + cvičenie na skladanie */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, shuffle, say, toast, addXP, save, go, unlock } = api;
const CATS = { opinion: ["Názor", "lovely, ugly, nice"], size: ["Veľkosť", "big, small, tall"], age: ["Vek", "old, new, young"], shape: ["Tvar", "round, square"], colour: ["Farba", "red, blue"], origin: ["Pôvod", "French, Swiss"], material: ["Materiál", "wooden, silk"], purpose: ["Účel", "sleeping, dining"] };
const ORDER = Object.keys(CATS);
// riadok: člen|prídavné:kategória,...|podstatné meno|preklad|úroveň
const RAW = `
a|beautiful:opinion,old:age|house|krásny starý dom|A2
a|big:size,brown:colour|dog|veľký hnedý pes|A2
a|small:size,round:shape|table|malý okrúhly stôl|A2
an|old:age,blue:colour|bike|starý modrý bicykel|A2
a|nice:opinion,new:age|jacket|pekná nová bunda|A2
a|tall:size,young:age|man|vysoký mladý muž|A2
a|new:age,red:colour|car|nové červené auto|A2
a|long:size,black:colour|coat|dlhý čierny kabát|A2
a|funny:opinion,little:size|cat|vtipná malá mačka|A2
a|small:size,wooden:material|spoon|malá drevená lyžica|A2
a|large:size,white:colour|bag|veľká biela taška|A2
a|cheap:opinion,plastic:material|toy|lacná plastová hračka|A2
a|round:shape,red:colour|ball|okrúhla červená lopta|A2
a|brown:colour,leather:material|wallet|hnedá kožená peňaženka|A2
an|old:age,German:origin|car|staré nemecké auto|A2
a|small:size,silver:colour|ring|malý strieborný prsteň|A2
a|pretty:opinion,gold:material|ring|pekný zlatý prsteň|A2
a|young:age,French:origin|teacher|mladý francúzsky učiteľ|A2
a|tiny:size,old:age|village|maličká stará dedinka|A2
a|wonderful:opinion,Italian:origin|restaurant|úžasná talianska reštaurácia|A2
a|lovely:opinion,old:age,wooden:material|chair|krásna stará drevená stolička|B1
a|big:size,round:shape,glass:material|table|veľký okrúhly sklenený stôl|B1
a|beautiful:opinion,small:size,Swiss:origin|village|krásna malá švajčiarska dedinka|B1
an|expensive:opinion,new:age,black:colour|laptop|drahý nový čierny notebook|B1
a|small:size,old:age,brown:colour|suitcase|malý starý hnedý kufor|B1
a|nice:opinion,long:size,red:colour|dress|pekné dlhé červené šaty|B1
a|famous:opinion,old:age,Italian:origin|singer|slávny starý taliansky spevák|B1
a|large:size,round:shape,yellow:colour|cushion|veľký okrúhly žltý vankúš|B1
a|cheap:opinion,white:colour,plastic:material|chair|lacná biela plastová stolička|B1
a|tiny:size,grey:colour,woollen:material|hat|maličká sivá vlnená čiapka|B1
a|lovely:opinion,long:size,silk:material|scarf|krásny dlhý hodvábny šál|B1
a|huge:size,old:age,stone:material|castle|obrovský starý kamenný hrad|B1
a|big:size,new:age,blue:colour|bus|veľký nový modrý autobus|B1
a|tall:size,young:age,French:origin|waiter|vysoký mladý francúzsky čašník|B1
a|pretty:opinion,small:size,silver:colour|necklace|pekný malý strieborný náhrdelník|B1
a|scruffy:opinion,small:size,brown:colour|dog|strapatý malý hnedý pes|B1
a|rectangular:shape,black:colour,leather:material|bag|obdĺžniková čierna kožená taška|B1
a|comfortable:opinion,old:age,leather:material|sofa|pohodlná stará kožená sedačka|B1
a|large:size,round:shape,wooden:material|bowl|veľká okrúhla drevená miska|B1
a|dirty:opinion,old:age,grey:colour|towel|špinavý starý sivý uterák|B1
a|lovely:opinion,small:size,old:age,wooden:material|cabin|krásna malá stará drevená chata|B2
a|beautiful:opinion,big:size,round:shape,blue:colour|pool|krásny veľký okrúhly modrý bazén|B2
an|ugly:opinion,huge:size,old:age,brown:colour|sofa|škaredá obrovská stará hnedá sedačka|B2
a|nice:opinion,small:size,old:age,Japanese:origin|car|pekné malé staré japonské auto|B2
a|stunning:opinion,long:size,red:colour,silk:material|dress|úchvatné dlhé červené hodvábne šaty|B2
a|rare:opinion,old:age,Chinese:origin,porcelain:material|vase|vzácna stará čínska porcelánová váza|B2
a|lovely:opinion,tiny:size,round:shape,silver:colour|button|krásny maličký okrúhly strieborný gombík|B2
a|fantastic:opinion,new:age,Italian:origin,leather:material|jacket|fantastická nová talianska kožená bunda|B2
an|enormous:size,old:age,grey:colour,stone:material|bridge|obrovský starý sivý kamenný most|B2
a|small:size,round:shape,brown:colour,wooden:material|box|malá okrúhla hnedá drevená škatuľa|B2
a|beautiful:opinion,old:age,Greek:origin,marble:material|statue|krásna stará grécka mramorová socha|B2
a|tiny:size,old:age,Swiss:origin,wooden:material|chalet|maličká stará švajčiarska drevená chata|B2
a|comfortable:opinion,blue:colour,sleeping:purpose|bag|pohodlný modrý spací vak|B2
a|large:size,round:shape,wooden:material,dining:purpose|table|veľký okrúhly drevený jedálenský stôl|C1
a|small:size,black:colour,leather:material,travelling:purpose|bag|malá čierna kožená cestovná taška|C1
a|lovely:opinion,old:age,wooden:material,rocking:purpose|chair|krásne staré drevené hojdacie kreslo|C1
a|big:size,red:colour,plastic:material,shopping:purpose|basket|veľký červený plastový nákupný košík|C1
a|useful:opinion,small:size,metal:material,cooking:purpose|pot|užitočný malý kovový hrniec na varenie|C1
a|elegant:opinion,tall:size,glass:material,wine:purpose|cabinet|elegantná vysoká sklenená vitrína na víno|C1
a|lovely:opinion,old:age,silver:colour,French:origin|clock|krásne staré francúzske strieborné hodiny|C1
`;
const ITEMS = RAW.trim().split("\n").filter(l => l.trim()).map(l => {
  const [det, adjs, noun, sk, lv] = l.split("|");
  return { det, adjs: adjs.split(",").map(x => { const [w, c] = x.split(":"); return { w, c }; }), noun, sk, lv };
});
const st = { lv: "" };
const ST = () => { const S = api.S; S.adj ||= { ok: 0 }; return S.adj; };

function hub() {
  $("#main").innerHTML = `<h1>Poradie <em>prídavných mien</em></h1>
  <p class="muted" style="margin:6px 0 18px;max-width:720px">Keď je pred podstatným menom viac prídavných mien, v angličtine majú pevné poradie. Slovenčina to nepozná, preto sa to treba naučiť.</p>
  <div class="card" style="max-width:820px;margin-bottom:20px"><h3>Pravidlo</h3>
  <div class="row" style="flex-wrap:wrap;gap:8px;margin:12px 0">${ORDER.map((c, i) => `<div style="text-align:center"><span class="lvl-badge" style="min-width:34px">${i + 1}</span><div style="font-weight:700;margin-top:4px">${CATS[c][0]}</div><div class="small muted">${CATS[c][1]}</div></div>${i < ORDER.length - 1 ? '<span style="align-self:center;margin:0 4px">→</span>' : ""}`).join("")}<span style="align-self:center;margin:0 4px">→</span><div style="text-align:center"><span class="lvl-badge" style="min-width:34px;background:var(--navy,#1b2a5c)">N</span><div style="font-weight:700;margin-top:4px">Podstatné meno</div></div></div>
  <p class="small" style="margin-top:8px"><b>Pomôcka:</b> názor, veľkosť, vek, tvar, farba, pôvod, materiál, účel. Napríklad: <i>a lovely small old round brown French wooden dining table</i>. V praxi dávame najviac 3 až 4 prídavné mená.</p></div>
  <div class="seg" id="al" style="margin:0 0 16px">${[["", "Všetko"], ["A2", "A2 (2 prídavné)"], ["B1", "B1 (3 prídavné)"], ["B2", "B2 (4 prídavné)"], ["C1", "C1 (s účelom)"]].map(([k, t]) => `<button class="${st.lv === k ? "on" : ""}" data-l="${k}">${t}</button>`).join("")}</div>
  <button class="btn" id="go">Začať cvičenie (10 príkladov)</button><p class="small muted" id="cn" style="margin-top:10px"></p>`;
  $("#cn").textContent = `Správne zložených doteraz: ${ST().ok}`;
  $("#al").onclick = e => { const b = e.target.closest("button"); if (b) { st.lv = b.dataset.l; hub(); } };
  $("#go").onclick = start;
}

function start() {
  const pool = ITEMS.filter(i => !st.lv || i.lv === st.lv), qs = shuffle(pool).slice(0, 10);
  let n = 0, right = 0;
  const ask = () => {
    if (n >= qs.length) return end();
    const q = qs[n], words = shuffle(q.adjs.map((a, i) => ({ ...a, i })));
    let pick = [], done = false;
    $("#main").innerHTML = `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>Poradie prídavných mien</h2></div><p class="muted small" style="margin-bottom:10px">Príklad ${n + 1} / ${qs.length}</p>
    <div class="card" style="max-width:760px"><p class="muted" style="margin-bottom:6px">Poskladaj správne poradie:</p><p style="margin-bottom:14px"><b>${esc(q.sk)}</b></p>
    <div class="row" style="gap:8px;flex-wrap:wrap;align-items:center;min-height:56px;border-bottom:2px dashed var(--line);padding-bottom:12px;margin-bottom:14px"><span class="prompt" style="font-size:26px">${q.det}</span><span id="sl" style="display:flex;gap:8px;flex-wrap:wrap"></span><span class="prompt" style="font-size:26px">${esc(q.noun)}</span></div>
    <div class="chips" id="ch"></div><div id="fb" style="min-height:24px;margin:12px 0"></div><div class="row" id="ac" style="gap:12px;flex-wrap:wrap"><button class="btn" id="chk" disabled>Skontrolovať</button><button class="btn ghost" id="rs">Znova</button></div></div>`;
    $("#bk").onclick = hub;
    const draw = () => {
      $("#sl").innerHTML = pick.map((w, k) => `<button class="chip" data-p="${k}" style="font-size:22px">${esc(w.w)}</button>`).join("");
      $("#ch").innerHTML = words.map((w, k) => `<button class="chip" data-w="${k}" style="font-size:22px;${pick.includes(w) ? "opacity:.2;pointer-events:none" : ""}">${esc(w.w)}</button>`).join("");
      $("#sl").querySelectorAll("[data-p]").forEach(b => b.onclick = () => { if (done) return; pick.splice(+b.dataset.p, 1); draw(); });
      $("#ch").querySelectorAll("[data-w]").forEach(b => b.onclick = () => { if (done) return; pick.push(words[+b.dataset.w]); draw(); });
      $("#chk").disabled = pick.length !== words.length;
    };
    $("#rs").onclick = () => { if (done) return; pick = []; draw(); };
    $("#chk").onclick = () => {
      if (done || pick.length !== words.length) return; done = true;
      const good = pick.every((w, k) => w.i === k); if (good) { right++; ST().ok++; }
      $("#fb").innerHTML = `<p style="color:var(${good ? "--green,#1b8a4b" : "--red,#b3261e"})"><b>${good ? "✓ Správne!" : "Správne poradie:"}</b> ${q.det} ${q.adjs.map(a => `<span class="pill" title="${CATS[a.c][0]}">${esc(a.w)} <small class="muted">${CATS[a.c][0]}</small></span>`).join(" ")} <b>${esc(q.noun)}</b></p>`;
      $("#ac").innerHTML = `<button class="btn" id="nx">${n + 1 >= qs.length ? "Výsledok" : "Ďalej →"}</button>`; $("#nx").onclick = () => { n++; ask(); }; $("#nx").focus();
      say(`${q.det} ${q.adjs.map(a => a.w).join(" ")} ${q.noun}`);
    };
    draw();
  };
  const end = () => {
    const xp = right * 3 + (right === qs.length ? 6 : 0); addXP(xp); save(); if (ST().ok >= 20) unlock("adj20");
    $("#main").innerHTML = `<div class="row" style="margin-bottom:18px"><button class="btn ghost" id="bk">←</button><h2>Poradie prídavných mien</h2></div><div class="card" style="text-align:center;padding:36px;max-width:560px"><div style="font-size:72px">${right >= 8 ? "🏆" : "🎉"}</div><h2>${right} z ${qs.length}</h2><p style="margin:14px 0 18px"><span class="pill">+${xp} XP</span></p><div class="row" style="justify-content:center;gap:12px"><button class="btn" id="again">Znova</button><button class="btn ghost" id="hb">Späť</button></div></div>`;
    $("#bk").onclick = hub; $("#hb").onclick = hub; $("#again").onclick = start; api.renderRight();
  };
  if (qs.length < 3) { toast("Pre tento výber je málo príkladov."); return hub(); }
  ask();
}

api.routes.adj = hub;
const gi = api.nav.findIndex(x => x[0] === "games");
api.nav.splice(gi < 0 ? api.nav.length : gi, 0, ["adj", "🔢", "Prídavné mená"]);
window.ACHIEVEMENTS.push({ id: "adj20", e: "🔢", t: "Majster poradia", d: "Správne poskladaj 20 skupín prídavných mien" });
});
