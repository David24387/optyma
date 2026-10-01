import React, { ReactElement, useEffect } from "react";

const STORAGE_KEY = "optymaLaunchPopupShown";
const OVERLAY_ID = "optyma-launch-overlay";
const OPTYMA_URL = "https://optyma.euromaster.com";

export const OptymaPopup = (): ReactElement | null => {
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (document.getElementById(OVERLAY_ID)) return;

    const style = document.createElement("style");
    style.id = "optyma-popup-styles";
    style.textContent = `
      #${OVERLAY_ID}{position:fixed;inset:0;z-index:2147483647;background:rgba(9,24,51,.58);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:22px;font-family:Montserrat,Arial,sans-serif;color:#17243d}
      #optyma-popup{position:relative;width:min(880px,100%);max-height:92vh;overflow:auto;background:#fff;border-radius:22px;box-shadow:0 24px 70px rgba(0,0,0,.28)}
      .optyma-hero{background:linear-gradient(135deg,#164194 0%,#0c2b68 100%);padding:34px 42px 30px;color:#fff;border-radius:22px 22px 0 0;position:relative;overflow:hidden}
      .optyma-hero:after{content:"";position:absolute;width:240px;height:240px;border-radius:50%;background:#009640;opacity:.17;right:-80px;top:-100px}
      .optyma-kicker{display:inline-flex;align-items:center;gap:8px;background:#FEDD00;color:#17243d;font-weight:800;font-size:13px;padding:7px 12px;border-radius:999px;margin-bottom:15px;text-transform:uppercase;letter-spacing:.04em}
      .optyma-hero h2{font-size:34px;line-height:1.08;margin:0 45px 9px 0;font-weight:800}.optyma-hero p{margin:0;font-size:17px;line-height:1.5;max-width:680px;opacity:.96}
      .optyma-close{position:absolute;right:18px;top:16px;width:38px;height:38px;border:0;border-radius:50%;background:rgba(255,255,255,.16);color:#fff;font-size:27px;line-height:38px;cursor:pointer;z-index:2}.optyma-close:hover{background:rgba(255,255,255,.26)}
      .optyma-body{padding:28px 42px 34px}.optyma-intro{font-size:15px;line-height:1.62;margin:0 0 23px;color:#40506b}.optyma-intro strong{color:#164194}
      .optyma-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:22px}.optyma-card{border:1px solid #e5eaf2;background:#f8fafc;border-radius:14px;padding:15px 16px;display:flex;gap:12px;align-items:flex-start}.optyma-icon{width:39px;height:39px;flex:0 0 39px;border-radius:10px;background:#FEDD00;display:grid;place-items:center;font-size:20px}.optyma-card h3{font-size:14px;margin:1px 0 4px;color:#164194}.optyma-card p{font-size:12.5px;line-height:1.45;margin:0;color:#59677d}
      .optyma-actions{display:flex;gap:11px;align-items:center;flex-wrap:wrap;border-top:1px solid #edf0f5;padding-top:20px}.optyma-primary{display:inline-flex;align-items:center;justify-content:center;background:#009640;color:#fff!important;text-decoration:none!important;font-weight:800;border-radius:10px;padding:12px 19px}.optyma-primary:hover{filter:brightness(.94)}.optyma-support{font-size:13px;color:#59677d}.optyma-support strong{color:#164194}
      @media(max-width:650px){#${OVERLAY_ID}{padding:10px;align-items:flex-end}#optyma-popup{max-height:94vh;border-radius:18px 18px 0 0}.optyma-hero{padding:27px 22px 24px;border-radius:18px 18px 0 0}.optyma-hero h2{font-size:27px}.optyma-hero p{font-size:15px}.optyma-body{padding:22px}.optyma-grid{grid-template-columns:1fr}.optyma-actions{align-items:stretch;flex-direction:column}.optyma-primary{width:auto}}
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "optyma-popup-title");
    overlay.innerHTML = `
      <div id="optyma-popup">
        <div class="optyma-hero">
          <button class="optyma-close" type="button" aria-label="Schließen">×</button>
          <div class="optyma-kicker">Neu bei Euromaster</div>
          <h2 id="optyma-popup-title">Optyma ist da!</h2>
          <p><strong>Die neue Ära im B2B- & Flotten-Service.</strong><br>Einfach. Intuitiv. 360°-Service-Management bei Euromaster.</p>
        </div>
        <div class="optyma-body">
          <p class="optyma-intro"><strong>Eine Plattform für den gesamten B2B-Service:</strong> Optyma ersetzt schrittweise TyreCheck (Incenter 2.0) und bündelt die Prozesse für Light- bis Heavy-Vehicles in einer zentralen, von Euromaster entwickelten europäischen Lösung.</p>
          <div class="optyma-grid">
            <div class="optyma-card"><div class="optyma-icon">📱</div><div><h3>Mobile Inspektionen</h3><p>Checks direkt am Fahrzeug durchführen – dank Offline-Modus auch ohne Verbindung.</p></div></div>
            <div class="optyma-card"><div class="optyma-icon">📶</div><div><h3>Automatische Messwerte</h3><p>Bluetooth-Anbindung für ATEQ VT-Truck 2.0 und TyreCheck-Gauges.</p></div></div>
            <div class="optyma-card"><div class="optyma-icon">🛠️</div><div><h3>360° Job-Management</h3><p>Von der Mängelerfassung bis zum Arbeitsauftrag und zur Abrechnung.</p></div></div>
            <div class="optyma-card"><div class="optyma-icon">📊</div><div><h3>Portal & Reporting</h3><p>Fuhrparkdaten, Fahrzeug-Checks und PowerBI-Reporting zentral im Blick.</p></div></div>
            <div class="optyma-card"><div class="optyma-icon">🔐</div><div><h3>Einfacher Login</h3><p>Sicher und schnell anmelden über das gewohnte OKTA Single-Sign-On.</p></div></div>
            <div class="optyma-card"><div class="optyma-icon">🎓</div><div><h3>Schulung & Support</h3><p>Schulungsmaterialien findest du im Masternet. Bei Fragen hilft der lokale Support.</p></div></div>
          </div>
          <div class="optyma-actions"><a class="optyma-primary" href="${OPTYMA_URL}" target="_blank" rel="noopener noreferrer">Optyma öffnen →</a><span class="optyma-support"><strong>Für Techniker & Service-Teams:</strong> Die mobile App ist auch im Google Play Store und Apple App Store verfügbar.</span></div>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const close = () => { sessionStorage.setItem(STORAGE_KEY, "true"); overlay.remove(); style.remove(); };
    overlay.querySelector(".optyma-close")?.addEventListener("click", close);
    overlay.querySelector(".optyma-primary")?.addEventListener("click", () => sessionStorage.setItem(STORAGE_KEY, "true"));
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); overlay.remove(); style.remove(); };
  }, []);
  return null;
};
