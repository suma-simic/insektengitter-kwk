<!-- =========================================================
  Landingpage Variante 1 (Empfehler füllt Formular selbst aus)
  URL: https://insektengitter.at/empfehlung-direkt/

  - liest Ref-ID aus ?ref=... oder aus #REF-....
  - optionales Medium aus ?m=crm | ?m=mail | ?m=wa | sonst share
  - übergibt ref an Zoho-Form (Feldalias im Form: ref)
  - UTM Tracking an Zoho-Form
========================================================= -->

<div style="max-width:900px;margin:0 auto;">
  <h1 style="margin:10px 0 8px; line-height:1.2;"></h1>

  <p style="margin:0 0 14px;">
    Bitte tragen Sie hier die Person ein, die Sie empfehlen möchten. Wir melden uns zeitnah bei der empfohlenen Person.
  </p>

  <div style="background:#f6f7f9;border-radius:14px;padding:14px 16px;margin:18px 0 22px;">
    <div style="font-weight:700;margin-bottom:6px;">Wichtig</div>
    <ul style="margin:0; padding-left:18px;">
      <li>Bitte nur empfehlen, wenn die Person damit einverstanden ist.</li>
      <li>Die Daten werden ausschließlich zur Bearbeitung der Anfrage verwendet.</li>
    </ul>
  </div>

  <!-- Zoho Form Container (ID aus dem ORIGINAL-Zoho-Embed) -->
  <div id="zf_div_PUFchy7RBYwfe2GZpTxtYOafext3t3q5JuUgxM57VIw"></div>

  <!-- Optionaler Fallback-Link (falls Iframe blockiert) -->
  <p style="margin:12px 0 0;color:#666;font-size:14px;">
    Falls das Formular nicht angezeigt wird, öffnen Sie es hier:
    <a id="fallbackLink" href="#" target="_blank" rel="noopener">Formular öffnen</a>
  </p>
</div>

<script>
(function () {

  function getQueryParam(name) {
    try {
      var qs = new URLSearchParams(window.location.search);
      return (qs.get(name) || "").trim();
    } catch (e) { return ""; }
  }

  // Ref-ID: entweder ?ref=REF-05036 oder #REF-05036 oder #ref=REF-05036
  var refFromQuery = getQueryParam("ref");

  var hashRaw = (window.location.hash || "").replace("#", "").trim();
  var refFromHash = "";

  if (hashRaw) {
    // Fall 1: #REF-05036
    if (/^REF-\d+/i.test(hashRaw)) {
      refFromHash = hashRaw;
    } else {
      // Fall 2: #ref=REF-05036
      var m = hashRaw.match(/ref=([^&]+)/i);
      if (m && m[1]) refFromHash = decodeURIComponent(m[1]).trim();
    }
  }

  var ref = (refFromQuery || refFromHash || "").trim();

  // Optional: Normalisieren (falls jemand ref klein schreibt)
  if (ref) {
    // Nur akzeptieren, wenn es wie REF-12345 aussieht
    if (!/^REF-\d+$/i.test(ref)) {
      ref = "";
    } else {
      ref = ref.toUpperCase();
    }
  }

  // Medium: ?m=crm | mail | wa | share
  var mParam = (getQueryParam("m") || "").toLowerCase();
  var utmMedium = "share";
  if (mParam === "wa") utmMedium = "whatsapp";
  if (mParam === "mail") utmMedium = "email";
  if (mParam === "crm") utmMedium = "crm";

  // Attempt-Token erzeugen: REF-xxxxx|<timestamp>-<random>
  function makeAttemptToken(refVal) {
    var ts = Date.now(); // ms timestamp
    var rnd = Math.random().toString(36).slice(2, 8).toUpperCase(); // 6 chars
    return refVal + "|" + ts + "-" + rnd;
  }

  var kwkTokenInput = "";
  if (ref) {
    kwkTokenInput = makeAttemptToken(ref);
  }

  // Zoho Forms Iframe SRC (Basis)
  var IFRAME_BASE =
    "https://forms.zohopublic.eu/gruenefeldt/form/Kundenempfehlungeinreichen/formperma/PUFchy7RBYwfe2GZpTxtYOafext3t3q5JuUgxM57VIw?zf_rszfm=1";

  // Iframe URL bauen
  var ifrmSrc = IFRAME_BASE;

  // Bestehendes Prefill (bleibt)
  if (ref) {
    ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?") + "ref=" + encodeURIComponent(ref);
  }

  // NEU: KWK_Token_Input Prefill (Alias ist case-sensitive und bei dir exakt "KWK_Token_Input")
  if (kwkTokenInput) {
    ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?") + "KWK_Token_Input=" + encodeURIComponent(kwkTokenInput);
  }

  // UTM Tracking
  ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?")
          +  "utm_source=referral"
          +  "&utm_medium=" + encodeURIComponent(utmMedium)
          +  "&utm_campaign=empfehlung_direkt";

  // Fallback Link
  var fallback = document.getElementById("fallbackLink");
  if (fallback) {
    fallback.href = ifrmSrc;
  }

  // Iframe einfügen
  var container = document.getElementById("zf_div_PUFchy7RBYwfe2GZpTxtYOafext3t3q5JuUgxM57VIw");
  if (!container) return;

  container.innerHTML = "";

  var f = document.createElement("iframe");
  f.src = ifrmSrc;
  f.style.border = "none";
  f.style.width = "100%";
  f.style.maxWidth = "900px";
  f.style.height = "1400px"; // Startwert, wird durch Auto-Resize korrigiert
  f.style.transition = "all 0.5s ease";
  f.setAttribute("aria-label", "Kundenempfehlung einreichen");

  container.appendChild(f);

  // Auto-Resize (Zoho postMessage)
  window.addEventListener("message", function (event) {
    var evntData = event && event.data;
    if (evntData && typeof evntData === "string") {
      var zf_ifrm_data = evntData.split("|");
      if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
        var zf_perma = zf_ifrm_data[0];
        var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
        var iframe = container.getElementsByTagName("iframe")[0];

        if (iframe && iframe.src.indexOf("formperma") > 0 && iframe.src.indexOf(zf_perma) > 0) {
          var prev = iframe.style.height;
          var needsScroll = (zf_ifrm_data.length === 3);

          if (needsScroll) iframe.scrollIntoView({behavior:"smooth", block:"start"});

          if (prev !== zf_ifrm_ht_nw) {
            if (needsScroll) {
              setTimeout(function(){ iframe.style.height = zf_ifrm_ht_nw; }, 500);
            } else {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      }
    }
  }, false);

})();
</script>