/* Webová aplikácia (PWA): offline vrstva, tlačidlo Nainštalovať, záloha postupu, malý prehľad XP na mobile (plugin pre app.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, toast, save, go } = api;
const KEY = "anglina4u.v1";
const standalone = () => (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
const isDesktopApp = () => !!window.a4uDesktop;
const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

/* ---------- klávesnica na telefóne: výška okna sleduje viditeľnú plochu, pole sa vždy ukáže ---------- */
(() => {
  const vv = window.visualViewport; if (!vv) return;
  const isField = el => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");
  const sync = () => {
    const kbd = innerHeight - vv.height > 120;
    document.documentElement.style.setProperty("--vvh", vv.height + "px");
    document.body.classList.toggle("kbd", kbd && isField(document.activeElement));
    if (kbd && isField(document.activeElement)) document.activeElement.scrollIntoView({ block: "center" });
  };
  vv.addEventListener("resize", sync); vv.addEventListener("scroll", () => { if (document.body.classList.contains("kbd")) window.scrollTo(0, 0); });
  document.addEventListener("focusin", e => { if (isField(e.target)) setTimeout(() => { sync(); e.target.scrollIntoView({ block: "center" }); }, 300); });
  document.addEventListener("focusout", () => setTimeout(() => { if (!isField(document.activeElement)) document.body.classList.remove("kbd"); }, 100));
})();

/* ---------- offline vrstva ---------- */
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  navigator.serviceWorker.register("sw.js").then(reg => {
    reg.addEventListener("updatefound", () => { const w = reg.installing; if (w) w.addEventListener("statechange", () => { if (w.state === "installed" && navigator.serviceWorker.controller) toast("🔄 Je nová verzia. Zavri a znova otvor aplikáciu."); }); });
  }).catch(() => { });
}

/* ---------- tlačidlo Nainštalovať ---------- */
let deferred = null;
const foot = () => document.querySelector("#side .side-foot");
function installBtn() {
  const f = foot(); if (!f || document.getElementById("pwa-install")) return;
  if (isDesktopApp() || standalone() || !/^https?:$/.test(location.protocol)) return;
  if (!deferred && !isIOS()) return;
  const b = document.createElement("a"); b.id = "pwa-install"; b.href = "#"; b.textContent = "📲 Nainštalovať aplikáciu";
  b.onclick = async e => {
    e.preventDefault();
    if (deferred) { deferred.prompt(); await deferred.userChoice.catch(() => { }); deferred = null; b.remove(); }
    else toast("Na iPhone: ťukni na Zdieľať (štvorec so šípkou) a vyber Pridať na plochu.");
  };
  f.prepend(b);
}
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; installBtn(); });
window.addEventListener("appinstalled", () => { const b = document.getElementById("pwa-install"); b && b.remove(); toast("✅ Aplikácia je nainštalovaná."); });
setTimeout(installBtn, 1200);

/* ---------- inštalačný panel: odkaz z webu vedie na ?install=android | iphone | mac ---------- */
const UA = navigator.userAgent;
const platform = () => /Android/i.test(UA) ? "android" : (/iPhone|iPad|iPod/i.test(UA) || (/Macintosh/i.test(UA) && navigator.maxTouchPoints > 1)) ? "ios" : /Macintosh/i.test(UA) ? "mac" : "other";
const inApp = () => /FBAN|FBAV|Instagram|Messenger|Line\/|Snapchat|TikTok|MicroMessenger/i.test(UA);
const safariDesktop = () => /Safari/i.test(UA) && !/Chrome|Chromium|Edg|OPR|Firefox/i.test(UA);
const wantsInstall = (() => { try { return new URLSearchParams(location.search).get("install"); } catch (e) { return null; } })();
let sheet = null, waitTimer = null;
function sheetBody() {
  const p = platform();
  if (inApp()) return { msg: "Táto aplikácia sa inštaluje cez prehliadač. Ťukni na ⋮ alebo ··· v rohu a vyber **Otvoriť v prehliadači** (Chrome alebo Safari), potom sa sem vráť.", btn: false };
  if (deferred) return { msg: "Ikona sa objaví na ploche a aplikácia pôjde aj bez internetu.", btn: true };
  if (p === "ios") return { msg: "Na iPhone sa inštaluje cez Safari:\n**1.** Ťukni na **Zdieľať** (štvorec so šípkou nahor)\n**2.** Vyber **Pridať na plochu**\n**3.** Potvrď **Pridať**", btn: false };
  if (p === "mac" && safariDesktop()) return { msg: "V Safari: z ponuky **Súbor** vyber **Pridať do Docku**. V Chrome alebo Edge sa objaví tlačidlo Nainštalovať v adresnom riadku.", btn: false };
  if (p === "android") return { msg: "Ťukni na **⋮** vpravo hore a vyber **Nainštalovať aplikáciu** (alebo **Pridať na plochu**). Ak to tam nie je, otvor túto stránku v **Chrome**.", btn: false };
  return { msg: "V Chrome alebo Edge ťukni na ikonu inštalácie v adresnom riadku, alebo v ponuke vyber **Nainštalovať Anglina4U**.", btn: false };
}
const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
function renderSheet(waiting) {
  if (!sheet) return;
  const b = sheetBody();
  sheet.querySelector(".ps-body").innerHTML = waiting && !b.btn ? "Pripravujem inštaláciu…" : md(b.msg);
  const btn = sheet.querySelector(".ps-go"); btn.style.display = b.btn ? "" : "none";
}
function showSheet() {
  if (sheet || isDesktopApp() || standalone()) return;
  sheet = document.createElement("div"); sheet.id = "pwa-sheet";
  sheet.innerHTML = `<div class="ps-card"><img src="assets/icon-192.png" alt="" class="ps-ico"><h2>Nainštaluj si aplikáciu</h2><p class="ps-body"></p><button class="btn ps-go" type="button">📲 Nainštalovať</button><button class="btn ghost ps-later" type="button">Pokračovať v prehliadači</button></div>`;
  document.body.appendChild(sheet);
  sheet.querySelector(".ps-later").onclick = () => { sheet.remove(); sheet = null; clearTimeout(waitTimer); };
  sheet.querySelector(".ps-go").onclick = async () => { if (!deferred) return; deferred.prompt(); try { await deferred.userChoice; } catch (e) { } deferred = null; sheet && sheet.remove(); sheet = null; };
  renderSheet(true);
  waitTimer = setTimeout(() => renderSheet(false), 6000);
}
window.addEventListener("beforeinstallprompt", () => { if (sheet) renderSheet(false); });
window.addEventListener("appinstalled", () => { if (sheet) { sheet.remove(); sheet = null; } });
if (wantsInstall) setTimeout(showSheet, 600);


/* ---------- malý prehľad XP v hornej lište (na mobile je pravý panel skrytý) ---------- */
function stat() {
  const side = document.getElementById("side"); if (!side) return;
  let el = document.getElementById("mstat");
  if (!el) { el = document.createElement("div"); el.id = "mstat"; el.title = "Môj postup a úspechy"; el.onclick = () => go("goals"); side.insertBefore(el, foot()); }
  const S = api.S; el.innerHTML = S.name ? `<span>${S.avatar || "🐶"}</span><span>🔥 ${S.streak || 0}</span><span>⭐ ${S.xp || 0}</span>` : "";
}
new MutationObserver(stat).observe(document.getElementById("main"), { childList: true });
stat();

/* ---------- záloha a obnova postupu ---------- */
const goalsOrig = api.routes.goals;
api.routes.goals = () => {
  goalsOrig();
  $("#main").insertAdjacentHTML("beforeend", `<div class="card" style="max-width:760px;margin-top:22px"><h3 style="margin-bottom:6px">💾 Záloha postupu</h3><p class="muted small" style="margin-bottom:12px">Postup sa ukladá len v tomto zariadení. Ak meníš telefón alebo preinštalúvaš aplikáciu, ulož si ho do súboru a na novom zariadení ho načítaj.</p><div class="row" style="gap:12px;flex-wrap:wrap"><button class="btn ghost" id="bk-save">Uložiť postup do súboru</button><button class="btn ghost" id="bk-load">Načítať postup zo súboru</button></div><input type="file" id="bk-file" accept=".json,application/json" hidden></div>`);
  $("#bk-save").onclick = () => {
    const data = localStorage.getItem(KEY); if (!data) return toast("Zatiaľ nie je čo ukladať.");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], { type: "application/json" })); a.download = `anglina4u-postup-${api.today()}.json`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); toast("✅ Postup je uložený v súbore.");
  };
  $("#bk-load").onclick = () => $("#bk-file").click();
  $("#bk-file").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => {
      let d; try { d = JSON.parse(t); } catch (x) { return toast("Súbor sa nedá prečítať."); }
      if (!d || typeof d !== "object" || typeof d.xp !== "number" || !d.srs) return toast("Toto nie je súbor s postupom z Anglina4U.");
      if (!confirm(`Načítať postup (${d.name || "bez mena"}, ${d.xp} XP)? Terajší postup v tomto zariadení sa prepíše.`)) return;
      localStorage.setItem(KEY, JSON.stringify(d)); location.reload();
    }).catch(() => toast("Súbor sa nedá prečítať."));
  };
};
});
