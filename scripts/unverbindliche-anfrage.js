<!-- =========================================================
  Landingpage Interessent (WP): https://insektengitter.at/unverbindliche-anfrage/
  - liest Ref-ID aus ?ref=... oder aus #REF-....
  - optionales Medium aus ?m=mail | ?m=wa | sonst share
  - übergibt ref an Zoho-Form (Feldalias im Form: ref)
  - UTM Tracking an Zoho-Form
========================================================= -->

<div style="max-width:900px;margin:0 auto;">
  <!-- <h1 style="margin:10px 0 8px; line-height:1.2;">Unverbindliche Anfrage</h1> -->

  <p style="margin:0 0 14px;">
    Bitte füllen Sie das Formular kurz aus – wir melden uns zeitnah bei Ihnen.
  </p>

  <!-- Hinweis-Box (wie zuvor, angepasst für Interessenten) -->
  <div style="background:#f6f7f9;border-radius:14px;padding:14px 16px;margin:18px 0 22px;">
    <div style="font-weight:700;margin-bottom:6px;">So geht’s weiter</div>
    <ol style="margin:0; padding-left:18px;">
      <li>Formular kurz ausfüllen</li>
      <li>Wir melden uns telefonisch oder per E-Mail</li>
      <li>Sie erhalten eine passende Beratung</li>
    </ol>
    <p style="margin:10px 0 0;color:#555;font-size:14px;">
      Hinweis: Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
    </p>
  </div>

  <!-- Zoho Form Container -->
  <div id="zf_div_AiFyYZV01ASUnAQgS_kgMBIF7Qk0qZHr_cH9PBA9xa4"></div>
</div>

<script>
(function () {

  // ==========================
  // Zoho Embed Parameter
  // ==========================
  var CONTAINER_ID = "zf_div_AiFyYZV01ASUnAQgS_kgMBIF7Qk0qZHr_cH9PBA9xa4";
  var IFRAME_BASE  = "https://forms.zohopublic.eu/gruenefeldt/form/UnverbindlicheAnfrage/formperma/AiFyYZV01ASUnAQgS_kgMBIF7Qk0qZHr_cH9PBA9xa4?zf_rszfm=1";
  var ARIA_LABEL   = "Unverbindliche Anfrage";

  // ==========================
  // Helpers
  // ==========================
  function getQueryParam(name) {
    try {
      var qs = new URLSearchParams(window.location.search);
      return (qs.get(name) || "").trim();
    } catch (e) {
      return "";
    }
  }

  // Ref-ID: ?ref=REF-05036 oder #REF-05036 oder #ref=REF-05036
  var refFromQuery = getQueryParam("ref");

  var hashRaw = (window.location.hash || "").replace("#", "").trim();
  var refFromHash = "";

  if (hashRaw) {
    // Fall 1: #REF-05036
    if (/^REF-\d+/i.test(hashRaw)) {
      refFromHash = hashRaw;
    } else {
      // Fall 2: #ref=REF-05036
      var mHash = hashRaw.match(/ref=([^&]+)/i);
      if (mHash && mHash[1]) refFromHash = decodeURIComponent(mHash[1]).trim();
    }
  }

  var ref = (refFromQuery || refFromHash || "").trim();

  // Normalisieren/Validieren
  if (ref) {
    if (!/^REF-\d+$/i.test(ref)) {
      ref = "";
    } else {
      ref = ref.toUpperCase();
    }
  }

  // Medium: ?m=mail oder ?m=wa oder ?m=share
  var m = (getQueryParam("m") || "").toLowerCase();
  var utmMedium = "share";
  if (m === "wa") utmMedium = "whatsapp";
  if (m === "mail") utmMedium = "email";
  if (m === "crm") utmMedium = "crm";

  // Attempt-Token: REF-xxxxx|<timestamp>-<random>
  function makeAttemptToken(refVal) {
    var ts = Date.now();
    var rnd = Math.random().toString(36).slice(2, 8).toUpperCase();
    return refVal + "|" + ts + "-" + rnd;
  }

  var kwkTokenInput = "";
  if (ref && ref.length > 0) {
    kwkTokenInput = makeAttemptToken(ref);
  }

  // ==========================
  // Zoho Iframe SRC bauen
  // ==========================
  var ifrmSrc = IFRAME_BASE;

  // ref übergeben (wenn ihr es im Form weiterhin nutzt)
  if (ref && ref.length > 0) {
    ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?") + "ref=" + encodeURIComponent(ref);
  }

  // NEU: KWK_Token_Input übergeben (Alias ist case-sensitive und bei dir exakt "KWK_Token_Input")
  if (kwkTokenInput && kwkTokenInput.length > 0) {
    ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?") + "KWK_Token_Input=" + encodeURIComponent(kwkTokenInput);
  }

  // Tracking
  ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?")
          +  "utm_source=referral"
          +  "&utm_medium=" + encodeURIComponent(utmMedium)
          +  "&utm_campaign=unverbindliche_anfrage";

  // ==========================
  // Iframe einfügen
  // ==========================
  var container = document.getElementById(CONTAINER_ID);
  if (!container) return;

  container.innerHTML = "";

  var f = document.createElement("iframe");
  f.src = ifrmSrc;
  f.style.border = "none";
  f.style.width = "100%";
  f.style.maxWidth = "900px";
  f.style.height = "1200px"; // Startwert
  f.style.transition = "all 0.5s ease";
  f.setAttribute("aria-label", ARIA_LABEL);

  container.appendChild(f);

  // ==========================
  // Auto-Resize (Zoho postMessage)
  // ==========================
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
