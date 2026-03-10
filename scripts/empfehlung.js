<!-- ===== Empfehlungs-Landingpage (Empfehler) ===== -->
<div id="refShareBox">
  <p style="margin:0 0 18px;">
    Hallo <span id="greetingName" style="font-weight: bold;">...</span>, hier finden Sie Ihren persönlichen Empfehlungs-Link.
  </p>

  <div style="background:#f6f7f9;border-radius:14px;padding:18px 18px 16px;margin:18px 0 24px;">
    <div style="font-weight:700;margin-bottom:10px;font-size:18px;">Ihr persönlicher Empfehlungs-Link</div>

    <a id="refLink"
       href="#"
       target="_blank"
       rel="noopener"
       style="display:block;word-break:break-word;margin:0 0 14px;text-decoration:underline;">
      ...
    </a>

    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:12px;">
      <a id="btnEmail"
         href="#"
         style="background:#1976d2;color:#fff;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:600;">
        ✉️ E-Mail senden
      </a>

      <a id="btnGmail"
         href="#"
         target="_blank"
         rel="noopener"
         style="background:#EA4335;color:#fff;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:600;">
        📧 Mit Gmail senden
      </a>

      <a id="btnWhatsApp"
         href="#"
         target="_blank"
         rel="noopener"
         style="background:#25D366;color:#fff;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:600;">
        💬 WhatsApp senden
      </a>
    </div>

    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <button id="btnCopy"
              type="button"
              style="background:#fff;border:1px solid #cfd6df;padding:12px 18px;border-radius:12px;font-weight:600;cursor:pointer;">
        📋 Link kopieren
      </button>

      <button id="btnCopyText"
              type="button"
              style="background:#fff;border:1px solid #cfd6df;padding:12px 18px;border-radius:12px;font-weight:600;cursor:pointer;">
        📝 E-Mail-Text kopieren
      </button>
    </div>

    <p style="margin:14px 0 0;color:#555;font-size:14px;">
      💡 <strong>Tipp:</strong> Bei Webmail (Gmail, Outlook.com, Zoho) nutzen Sie „Mit Gmail senden“ oder „E-Mail-Text kopieren“ für beste Formatierung.
    </p>

    <p id="refMissingHint" style="margin:10px 0 0;color:#b42318;display:none;">
      Hinweis: Es wurde keine Ref-ID übergeben. Bitte öffnen Sie die Seite mit <strong>?ref=REF-xxxxx</strong>.
    </p>

    <p style="margin:10px 0 0;color:#555;">
      Bitte empfehlen Sie uns nur Personen, die damit einverstanden sind. Vielen Dank! 🙌
    </p>
  </div>
</div>

<script>
(function () {
  var initialized = false;

  function getQueryParam(name) {
    var qs = new URLSearchParams(window.location.search);
    return (qs.get(name) || "").trim();
  }

  function safeText(el, value) {
    if (el) el.textContent = value;
  }

  function setHref(el, value) {
    if (el) el.setAttribute("href", value);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function(resolve) {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      resolve();
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;

    // Empfehlerdaten aus URL (empfehlung/?ref=REF-...&fn=...&ln=...)
    var ref = (getQueryParam("ref") || "").trim();
    var fn  = (getQueryParam("fn") || "").trim();
    var ln  = (getQueryParam("ln") || "").trim();
    var senderName = (fn + " " + ln).trim();

    // Zielseite für Interessenten (mit Zoho-Forms eingebettet)
    var targetBase = "https://insektengitter.at/unverbindliche-anfrage/";

    var hashRef = ref ? ("#" + encodeURIComponent(ref)) : "";

    // ✅ Medium immer setzen
    var shareLinkPlain = targetBase + "?m=share" + hashRef; // sichtbar + Copy
    var shareLinkMail  = targetBase + "?m=mail"  + hashRef; // E-Mail
    var shareLinkWa    = targetBase + "?m=wa"    + hashRef; // WhatsApp

    // UI Elemente
    var greetingEl = document.getElementById("greetingName");
    var refLinkEl  = document.getElementById("refLink");
    var hintEl     = document.getElementById("refMissingHint");

    safeText(greetingEl, senderName || "und herzlich willkommen");

    if (refLinkEl) {
      refLinkEl.textContent = shareLinkPlain;
      refLinkEl.href = shareLinkPlain;
    }

    if (!ref && hintEl) {
      hintEl.style.display = "block";
    }

    // E-Mail Text (neutral & passt immer)
    var subject = "Meine Empfehlung: Grünefeldt Insektengitter";
    var EOL = "\r\n";

    var emailBody = [
      "Hallo,",
      "",
      "kurzer Tipp: Grünefeldt Insektengitter – ich bin mit dem Insektenschutz sehr zufrieden.",
      "",
      "Hier können Sie unverbindlich anfragen:",
      shareLinkMail,
      "",
      "Viele Grüße",
      senderName || ""
    ].filter(Boolean).join(EOL);

    // mailto
    var mailtoHref = "mailto:?"
      + "subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(emailBody);

    setHref(document.getElementById("btnEmail"), mailtoHref);

    // Gmail Compose
    var gmailHref = "https://mail.google.com/mail/?view=cm&fs=1"
      + "&su=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(emailBody);

    setHref(document.getElementById("btnGmail"), gmailHref);

    // WhatsApp
    var waText = [
      "Hey!",
      "",
      "Kurzer Tipp: Grünefeldt Insektengitter – ich bin mit dem Insektenschutz sehr zufrieden.",
      "",
      "Unverbindliche Anfrage:",
      shareLinkWa,
      "",
      "Liebe Grüße",
      senderName || ""
    ].filter(Boolean).join("\n");

    var waHref = "https://wa.me/?text=" + encodeURIComponent(waText);
    setHref(document.getElementById("btnWhatsApp"), waHref);

    // Copy Link (✅ mit m=share)
    var btnCopy = document.getElementById("btnCopy");
    if (btnCopy) {
      btnCopy.addEventListener("click", function () {
        var btn = this;
        copyToClipboard(shareLinkPlain).then(function () {
          btn.textContent = "✅ Link kopiert!";
          setTimeout(function(){ btn.textContent = "📋 Link kopieren"; }, 2000);
        });
      });
    }

    // Copy Email Text
    var btnCopyText = document.getElementById("btnCopyText");
    if (btnCopyText) {
      btnCopyText.addEventListener("click", function () {
        var btn = this;
        var fullText = "Betreff: " + subject + "\n\n" + emailBody;
        copyToClipboard(fullText).then(function () {
          btn.textContent = "✅ Text kopiert!";
          setTimeout(function(){ btn.textContent = "📝 E-Mail-Text kopieren"; }, 2000);
        });
      });
    }
  }

  // Divi-sicher initialisieren
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>
