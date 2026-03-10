<div id="zf_div_vgEBhro5Az8Efi838yWgHdDfTHnw6sAmP7Bnyi0zt5A"></div>

<script type="text/javascript">
(function() {
  try{
    var f = document.createElement("iframe");

    // ---------------------------------------------------------
    // 1) Basis iFrame URL (dein Original)
    // ---------------------------------------------------------
    var ifrmSrc ="https://forms.zohopublic.eu/gruenefeldt/form/KundenempfehlungHomepage1/formperma/vgEBhro5Az8Efi838yWgHdDfTHnw6sAmP7Bnyi0zt5A?zf_rszfm=1&utm_source=homepage&utm_medium=form1_empfehler&utm_campaign=kunden_werben_kunden";

    // ---------------------------------------------------------
    // 2) KWK_Token: global eindeutig + lesbar
    //    Format: TXN-YYYYMMDD-HHMMSSmmm-RANDOMHEX
    // ---------------------------------------------------------
    var KWK_PARAM = "kwk_token"; // MUSS exakt dem Field-Alias entsprechen (lowercase!)

    function pad2(n){ return String(n).padStart(2,"0"); }
    function pad3(n){ return String(n).padStart(3,"0"); }

    function randomHex(len){
      // len = Anzahl HEX-Zeichen
      try{
        var bytes = new Uint8Array(Math.ceil(len/2));
        crypto.getRandomValues(bytes);
        var hex = Array.from(bytes).map(function(b){
          return b.toString(16).padStart(2,"0");
        }).join("").toUpperCase();
        return hex.slice(0, len);
      }catch(e){
        return Math.random().toString(16).slice(2, 2+len).toUpperCase();
      }
    }

    function buildGlobalUniqueToken(){
      var d = new Date();
      var y = d.getFullYear();
      var m = pad2(d.getMonth()+1);
      var da = pad2(d.getDate());
      var h = pad2(d.getHours());
      var mi = pad2(d.getMinutes());
      var s = pad2(d.getSeconds());
      var ms = pad3(d.getMilliseconds());
      var rnd = randomHex(10); // 10 HEX = 40 Bit random
      return "TXN-" + (""+y+m+da) + "-" + (""+h+mi+s+ms) + "-" + rnd;
    }

    var kwkToken = buildGlobalUniqueToken();

    // KWK Token an Zoho Forms URL anhängen (Prefill über Field Alias)
    ifrmSrc += (ifrmSrc.indexOf("?") > -1 ? "&" : "?") + KWK_PARAM + "=" + encodeURIComponent(kwkToken);

    // ---------------------------------------------------------
    // 3) Dein Original-UTM/Zoho Tracking Append (unverändert)
    // ---------------------------------------------------------
    try{
      if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
        for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
          var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
          utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
          var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ) {
              if(ifrmSrc.indexOf('?') > 0){
                ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
              }else{
                ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
              }
            }
          }
        }
      }
      if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
        for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
          var utmPm = ZFLead.utmPNameArr[ prmIdx ];
          var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ){
              if(ifrmSrc.indexOf('?') > 0){
                ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;//No I18N
              }else{
                ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;//No I18N
              }
            }
          }
        }
      }
    }catch(e){}

    // ---------------------------------------------------------
    // 4) iFrame rendern (leicht robuster)
    // ---------------------------------------------------------
    f.src = ifrmSrc;
    f.style.border="none";
    f.style.height="750px";     // Startwert
    f.style.width="90%";
    f.style.transition="all 0.5s ease";
    f.setAttribute("aria-label", "Kundenempfehlung Homepage 1");
    f.setAttribute("scrolling", "no");

    // Fallback: nach jedem Load erstmal großzügig hoch (Form2 ist oft höher),
    // danach kommt Zoho Resize und setzt korrekt runter/hoch.
    f.addEventListener("load", function(){
      f.style.height = "1600px";
    });

    var d = document.getElementById("zf_div_vgEBhro5Az8Efi838yWgHdDfTHnw6sAmP7Bnyi0zt5A");
    d.innerHTML = "";
    d.appendChild(f);

    // ---------------------------------------------------------
    // 5) Auto-Resize (Zoho postMessage) – sauber mit event param
    // ---------------------------------------------------------
    window.addEventListener("message", function (event){
      var evntData = event && event.data;
      if( evntData && evntData.constructor == String ){
        var zf_ifrm_data = evntData.split("|");
        if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
          var zf_perma = zf_ifrm_data[0];
          var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
          var iframe = document.getElementById("zf_div_vgEBhro5Az8Efi838yWgHdDfTHnw6sAmP7Bnyi0zt5A").getElementsByTagName("iframe")[0];

          if ( iframe && iframe.src && (iframe.src).indexOf("formperma") > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
            var prevIframeHeight = iframe.style.height;
            var needsScroll = ( zf_ifrm_data.length == 3 );

            if( needsScroll ) {
              iframe.scrollIntoView();
            }

            if ( prevIframeHeight != zf_ifrm_ht_nw ) {
              if( needsScroll ) {
                setTimeout(function(){
                  iframe.style.height = zf_ifrm_ht_nw;
                }, 500);
              } else {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }
    }, false);

  }catch(e){}
})();
</script>