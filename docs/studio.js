/* Prístup: aktivačný kód od lektorky. Nič iné lektorka v aplikácii nerieši. (plugin pre app.js) */
(window.A4U_PLUGINS ||= []).push(api => {
const { $, esc, toast, save, go, today, unlock, addXP, licFull } = api;
const CFG = window.CONFIG, SS = () => api.S;

/* ---------- aktivačný kód: A4U-SSEE-CCCC (SS náhodné, EE platnosť v mesiacoch od 1/2026, CCCC kontrola) ---------- */
const AL = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const fnv = s => { let h = 0x811c9dc5; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const enc = (n, len) => { let s = ""; for (let i = 0; i < len; i++) { s = AL[n & 31] + s; n >>= 5; } return s; };
const dec = s => [...s].reduce((a, c) => a * 32 + AL.indexOf(c), 0);
const chk = p => enc(fnv(p + CFG.licenceSecret) & 0xFFFFF, 4);
// Aplikácia je len pre žiakov školy – každý platný kód = žiak školy.
const isSchool = () => licFull();
const monthIdx = () => (new Date().getFullYear() - 2026) * 12 + new Date().getMonth() + 1;
const idxLabel = i => { const y = 2026 + Math.floor((i - 1) / 12), m = ((i - 1) % 12) + 1; return `${m}/${y}`; };
/* odtlačok kódu: SHA-256 (synchrónne), prvých 16 hex znakov; kódy samotné v aplikácii nie sú */
const sha16 = (() => {
  const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  return str => {
    const b = [...str].map(c => c.charCodeAt(0)), l = b.length * 8; b.push(0x80); while (b.length % 64 !== 56) b.push(0);
    for (let i = 7; i >= 0; i--) b.push(i > 3 ? 0 : (l >>> (i * 8)) & 255);
    const h = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19], w = new Array(64), rr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < b.length; o += 64) {
      for (let i = 0; i < 16; i++) w[i] = (b[o + 4*i] << 24) | (b[o + 4*i + 1] << 16) | (b[o + 4*i + 2] << 8) | b[o + 4*i + 3];
      for (let i = 16; i < 64; i++) { const s0 = rr(w[i-15],7) ^ rr(w[i-15],18) ^ (w[i-15] >>> 3), s1 = rr(w[i-2],17) ^ rr(w[i-2],19) ^ (w[i-2] >>> 10); w[i] = (w[i-16] + s0 + w[i-7] + s1) | 0; }
      let [a, bb, c, d, e, f, g, hh] = h;
      for (let i = 0; i < 64; i++) {
        const t1 = (hh + (rr(e,6) ^ rr(e,11) ^ rr(e,25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0, t2 = ((rr(a,2) ^ rr(a,13) ^ rr(a,22)) + ((a & bb) ^ (a & c) ^ (bb & c))) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0;
      }
      [a, bb, c, d, e, f, g, hh].forEach((v, i) => h[i] = (h[i] + v) | 0);
    }
    return h.slice(0, 2).map(v => (v >>> 0).toString(16).padStart(8, "0")).join("");
  };
})();
// Platný je len kód zo zoznamu odtlačkov (codes.js): 12 náhodných znakov, alebo starý 8-znakový kód.
// Na slovenskej klávesnici dá číselný rad bez Shiftu znaky +ľščťžýáíé: berieme ich ako číslice 1234567890.
const SKDIG = { "+": "1", "ľ": "2", "š": "3", "č": "4", "ť": "5", "ž": "6", "ý": "7", "á": "8", "í": "9", "é": "0" };
const normCode = v => v.toLowerCase().replace(/[+ľščťžýáíé]/g, ch => SKDIG[ch]).toUpperCase().replace(/[^A-Z0-9]/g, "");
function parseCode(code) {
  const c = normCode(code);
  if (!/^A4U([A-Z0-9]{8}|[A-Z0-9]{12})$/.test(c)) return { err: "Kód má tvar A4U-XXXX-XXXX-XXXX." };
  const months = (window.A4U_CODES || {})[sha16(c)];
  if (!months) return { err: "Kód nie je platný. Skontroluj, či si ho prepísal správne." };
  const h = sha16(c);
  return { code: "A4U-" + c.slice(3).match(/.{4}/g).join("-"), type: "D", months, until: 0, h, nocheck: (window.A4U_NOCHECK || []).indexOf(h) >= 0 };
}

// Prístup sa začne počítať od prvého použitia kódu: N mesiacov = do konca mesiaca, ktorý je o N mesiacov neskôr (aspoň N mesiacov).
const untilOf = r => r.type === "D" ? (r.months ? monthIdx() + r.months : 0) : r.until;
const grant = r => { const S = SS(); S.lic = { code: r.code, type: r.type, months: r.months || 0, from: today(), until: untilOf(r) }; save(); };

/* ---------- limit zariadení: jeden kód najviac na 2 zariadeniach (online kontrola iba raz, pri aktivácii) ---------- */
let pendingMsg = "";
const devId = () => {
  try {
    let d = localStorage.getItem("a4u.dev");
    if (!/^[0-9a-f]{20}$/.test(d || "")) { d = Array.from(crypto.getRandomValues(new Uint8Array(10))).map(x => x.toString(16).padStart(2, "0")).join(""); localStorage.setItem("a4u.dev", d); }
    return d;
  } catch (e) { return Array.from({ length: 20 }, () => ((Math.random() * 16) | 0).toString(16)).join(""); }
};
const DEV_MSG = {
  limit: "Tento kód je už použitý na 2 zariadeniach. Napíš lektorke, uvoľní ti ho.",
  revoked: "Tento kód bol zrušený. Napíš lektorke.",
  unknown: "Kód nie je platný. Skontroluj, či si ho prepísal správne.",
  net: "Na prvé zadanie kódu treba internet. Pripoj sa a skús to znova.",
  bad: "Kód sa nepodarilo overiť. Skús to znova.",
};
async function checkDevice(r) {
  if (!CFG.activationUrl || r.nocheck) return { ok: true };
  try {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 15000);
    const res = await fetch(CFG.activationUrl + "?h=" + r.h + "&d=" + devId() + "&v=" + encodeURIComponent(CFG.version || ""), { signal: ctl.signal });
    clearTimeout(t);
    const j = await res.json();
    return j && typeof j.ok === "boolean" ? j : { ok: false, reason: "bad" };
  } catch (e) { return { ok: false, reason: "net" }; }
}

/* ---------- automatická aktivácia: kód zo súboru kod.txt vedľa aplikácie (ak tam je) ---------- */
{
  const S = SS(), boot = (window.a4uDesktop && window.a4uDesktop.code) || window.A4U_BOOT_CODE || "";
  const m = String(boot).toUpperCase().match(/A4U[^A-Z0-9]*[A-Z0-9]{4}[^A-Z0-9]*[A-Z0-9]{4}(?:-[A-Z0-9]{4})?/);
  const r = m ? parseCode(m[0]) : { err: 1 };
  const nu = r.err ? 0 : untilOf(r);
  const better = !licFull() || (S.lic.until && (nu === 0 || nu > S.lic.until));
  // ten istý kód sa nikdy nezačína znova (inak by sa dal predlžovať donekonečna)
  if (!r.err && better && !(S.lic && S.lic.code === r.code)) {
    if (!CFG.activationUrl || r.nocheck) grant(r);
    else {
      pendingMsg = "Overujem kód…";
      checkDevice(r).then(c => { if (c.ok) { grant(r); pendingMsg = ""; toast("✅ Hotovo. Vitaj!"); go("path"); } else { pendingMsg = DEV_MSG[c.reason] || DEV_MSG.bad; go("activate"); } });
    }
  }
}

/* ---------- aktivácia (len ak chýba kod.txt alebo kód vypršal) ---------- */
function activate() {
  const S = SS(), expired = S.lic && S.lic.until && S.lic.until < monthIdx();
  $("#main").innerHTML = `<div class="setup" style="max-width:600px"><img src="assets/logo.png" style="width:240px;margin:0 auto">
  <h1>${expired ? "Prístup <em>skončil</em>" : "Ešte jeden <em>krok</em>"}</h1>
  <p class="muted" style="font-size:18px">${expired ? `Tvoj kód platil do ${idxLabel(S.lic.until)}. Nový kód ti dá lektorka ${esc(CFG.teacherName)}. Tvoj postup zostáva uložený.` : `Napíš kód z kartičky od lektorky.`}</p>
  <div style="display:flex;align-items:center;justify-content:center;gap:0"><span style="font-size:26px;letter-spacing:.15em;font-weight:700;color:var(--muted,#5a6274);padding-right:4px">A4U-</span><input class="input" id="lc" placeholder="XXXX-XXXX-XXXX" maxlength="24" autocomplete="off" style="text-align:left;letter-spacing:.15em;font-size:26px;max-width:340px"></div>
  <p class="small" id="lm" style="min-height:22px;color:var(--red)">${esc(pendingMsg)}</p>
  <button class="btn" id="la" style="font-size:18px;padding:16px 40px">Hotovo →</button>
  <p class="small muted" style="margin-top:14px"><a href="#" id="kp">Nepíše klávesnica? Klikaj na znaky myšou</a></p>
  <div id="kpad" hidden style="display:none;flex-wrap:wrap;gap:6px;justify-content:center;max-width:460px;margin:8px auto 0"></div>
  <p class="small muted">Nevieš si rady? <a href="mailto:${esc(CFG.teacherEmail)}?subject=${encodeURIComponent("Kód do aplikácie Anglina4U")}">Napíš lektorke</a> alebo sa opýtaj na hodine.</p></div>`;
  let busy = false;
  const go2 = async () => { if (busy) return; const r = parseCode("A4U" + $("#lc").value); if (r.err) { $("#lm").textContent = r.err; return; }
    if (S.lic && S.lic.code === r.code) { if (!licFull()) { $("#lm").textContent = "Tento kód už vypršal. Požiadaj lektorku o nový kód."; return; } }
    else {
      busy = true; $("#la").disabled = true; $("#lm").style.color = "var(--muted,#5a6274)"; $("#lm").textContent = "Overujem kód…";
      const c = await checkDevice(r);
      busy = false; if ($("#la")) $("#la").disabled = false;
      if (!c.ok) { $("#lm").style.color = "var(--red)"; $("#lm").textContent = DEV_MSG[c.reason] || DEV_MSG.bad; return; }
      grant(r);
    }
    pendingMsg = ""; toast("✅ Hotovo. Vitaj!"); go("path"); };
  // klikacia klávesnica: keby klávesnica v okne nereagovala (alebo sa nedala vložiť)
  const pad = $("#kpad"), lc = $("#lc"), setv = v => { lc.value = v; lc.oninput({ target: lc }); lc.focus(); };
  pad.innerHTML = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789".split("").map(c => `<button type="button" class="btn ghost" data-c="${c}" style="min-width:40px;padding:8px 0;font-size:17px">${c}</button>`).join("") + `<button type="button" class="btn ghost" data-c="<" style="min-width:84px;padding:8px 0;font-size:17px">← zmazať</button>`;
  pad.onclick = e => { const b = e.target.closest("button"); if (!b) return; const c = b.dataset.c, cur = lc.value.replace(/[^A-Z0-9]/g, ""); setv(c === "<" ? cur.slice(0, -1) : cur + c); };
  $("#kp").onclick = e => { e.preventDefault(); const on = pad.style.display === "none"; pad.style.display = on ? "flex" : "none"; };
  $("#la").onclick = go2; $("#lc").onkeydown = e => e.key === "Enter" && go2();
  $("#lc").oninput = e => { let v = normCode(e.target.value); if (v.startsWith("A4U")) v = v.slice(3); v = v.slice(0, 12); e.target.value = v ? v.match(/.{1,4}/g).join("-") : ""; };
  $("#lc").focus();
}

/* ---------- prístup na stránke Úspechy ---------- */
const goalsOrig = api.routes.goals;
api.routes.goals = () => {
  goalsOrig();
  const S = SS(), until = S.lic && S.lic.until;
  $("#main").insertAdjacentHTML("beforeend", `<div class="card" style="margin-top:22px;max-width:520px"><h3>Môj prístup</h3><p style="margin:6px 0 4px"><b>${until ? "Platí do " + idxLabel(until) : "Bez časového obmedzenia"}</b></p><p class="small muted">Kód: ${esc(S.lic.code)}</p><button class="btn ghost" id="lc2" style="padding:9px 18px;font-size:13px;margin-top:10px">Zadať nový kód</button></div>`);
  $("#lc2").onclick = () => go("activate");
};
api.routes.activate = activate;
// spodné tlačidlo v menu: pomoc
const a = $(".side-foot a"); if (a) { a.textContent = "Potrebuješ pomoc?"; a.href = `mailto:${CFG.teacherEmail}?subject=${encodeURIComponent("Pomoc s aplikáciou Anglina4U")}`; a.removeAttribute("target"); }
document.title = "Anglina4U – Domáce učenie";
});

/* Keby sa kliknutím nepodarilo dostať kurzor do poľa: prvý stlačený znak ho tam sám presunie (pole na meno, odpoveď, kód). */
document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
  const a = document.activeElement;
  if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable)) return;
  const inp = [...document.querySelectorAll("#main input")].find(i => i.offsetParent && !i.disabled && !i.readOnly && /^(text|search|)$/.test(i.type));
  if (inp) { inp.focus(); inp.scrollIntoView({ block: "nearest" }); }
}, true);
