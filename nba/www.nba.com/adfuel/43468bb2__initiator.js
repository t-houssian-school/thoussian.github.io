/**
 * https://bitbucket.org/nbadwandmartech/user-consent/src/master/
 * 
 * NO - the latest updated was requested by Dave Maloney in
 * ticket LG-4990. 
 */

// Sourcepoint Ad Blocker Detection Service Script - See Laura Deangelis for Details

( function () {
  var _sp_=function(n){function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=n,t.c=o,t.i=function(n){return n},t.d=function(n,o,e){t.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=2)}([function(n,t){function o(n,t){e&&console[n].apply(console,["[bootstrap]"].concat(Array.prototype.slice.call(t)))}var e=!1;n.exports={debug:function(){o("debug",arguments)},info:function(){o("info",arguments)},time:function(){o("time",arguments)},warn:function(){o("warn",arguments)},error:function(){o("error",arguments)},useDefaults:function(){e=!0},DEBUG:1}},function(n,t,o){"use strict";function e(){S||(S=!0,D=b.config=b.config||{},s(),F=D.bootstrap&&D.bootstrap.contentControlCallback||D.content_control_callback,q=D.accountId||D.account_id||D.client_id||window.sp_cid,N=D.beacon&&D.beacon.contentControlEndpoint||D.content_control_beacon_endpoint||v.a,D.debug_level&&"OFF"!==D.debug_level.toString().toUpperCase()||D.debug&&D.debug.level&&"OFF"!==D.debug.level.toString().toUpperCase()?j=!0:window.location.search&&null!=window.location.search.match(/_sp_debug_level=(?!off|OFF)/)&&(j=!0),j&&m.useDefaults({defaultLevel:m.DEBUG}))}function r(n,t,e){function r(o,e){var r=new Image;r.src="//"+N+"/cct?v="+encodeURIComponent(v.b)+"&ct="+h+"&cid="+encodeURIComponent(q)+"&l="+encodeURIComponent(n.toString())+"&rc="+encodeURIComponent(t)+(o?"&d1="+encodeURIComponent(o):"")+(null==e?"":"&d2="+encodeURIComponent(e)),g.info("sending beacon: "+r.src),a&&a()}var i=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments[4]),a=arguments[5];if(i){var c=e.lastIndexOf("."),d=e.lastIndexOf("/"),u=-1===c||d>c?e+".png":e.substring(0,c)+".png",s=new Image;s.addEventListener("load",function(){r("1",u)}),s.addEventListener("error",function(){o.i(f.a)(u,function(n,t,o){r("0",u+"::"+o)})}),s.src=u}else r()}function i(n,t,o,e){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=function(){i(n,t,o,e,r,!0)};n(t,a?o:c,e,r)}function a(n,t,o,e){function r(o,r){t(o,n,r,e.enableImageLoad)}function i(t,r){o(t,n,r,e.enableImageLoad),e.onError&&e.onError(r)}var a=document.createElement("script");a.src=n,a.onload=function(){e.onLoad&&e.onLoad()},a.onerror=function(){function t(n){return o.indexOf(n)>-1}var o=(navigator.userAgent||navigator.vendor||window.opera).toLowerCase();t("mobi")||t("ipad")||t("android")||t("iphone")?i(L):t("exabot")?i(O):t("bingbot")||t("bingpreview")?i(k):t("googlebot")||t("adsbot-google")||t("mediapartners-google")?i(C):t("googleweblight")?i(E):window.location.host===w?i(x):t("msie 10")||t("msie 9")||t("msie 8")?i(I):c(n,r,i)},document.head.appendChild(a)}function c(n,t,e){o.i(f.a)(n,function(o,r,i,a){(o||r?t:e)(a,n+"::"+i)})}function d(n,t,o,e){if(R)return void u(U+"::"+n,o);r(y,n,t,o,e,function(){if(F){if(j){g.error("bootstrap locking",y,n,t,o,e);debugger}setTimeout(function(){F()},250)}})}function u(n,t,o,e){r(_,n,t,o,e)}function s(){b._networkListenerData||(b._networkListenerData=o.i(p.a)())}function l(n,t){e(),g.info("bootstrap called with",n,t),i(a,n,d,u,t)}Object.defineProperty(t,"__esModule",{value:!0});var f=o(4),p=o(5),v=o(3),g=o(0),m=void 0;m=o(0);var w=["w","e","b","c","a","c","h","e",".","g","o","o","g","l","e","u","s","e","r","c","o","n","t","e","n","t",".","c","o","m"].join(""),b=window._sp_||{},h=1,_=0,y=1,L="m",C="g",x="gw",E="gl",I="i",k="b",O="e",U="n",S=!1,R=!1,j=!1,D=void 0,F=void 0,q=void 0,N=void 0;window.addEventListener("beforeunload",function(){R=!0}),window._sp_=b,b.setupNetworkListeners=s,b.bootstrap=l,window.spBootstrap=l,t["default"]=b},function(n,t,o){o(0);n.exports=o(1)["default"]},function(n,t,o){"use strict";function e(n){return n.join("")}o.d(t,"b",function(){return r}),o.d(t,"a",function(){return i});var r=(o(0),"2.0.1196"),i=(e(["w","w","w",".","s","u","m","m","e","r","h","a","m","s","t","e","r",".","c","o","m"]),e(["w","w","w",".","r","o","o","s","t","e","r","f","i","r","e","w","o","r","k",".","c","o","m"]));e(["/","/","f","s","m","1","0","1","9",".","g","l","o","b","a","l",".","s","s","l",".","f","a","s","t","l","y",".","n","e","t","/","f","s","m","/","d","s"]),e(["h","t","t","p","s",":","/","/","d","2","z","v","5","r","k","i","i","4","6","m","i","q",".","c","l","o","u","d","f","r","o","n","t",".","n","e","t","/","0","/","2",".","0",".","1","1","9","6","/","r","e","c","o","v","e","r","y","_","d","f","p","_","i","n","t","e","r","n","a","l","-","v","2",".","0",".","1","1","9","6",".","j","s"]),e(["h","t","t","p","s",":","/","/","d","2","z","v","5","r","k","i","i","4","6","m","i","q",".","c","l","o","u","d","f","r","o","n","t",".","n","e","t","/","0","/","2",".","0",".","1","1","9","6","/","r","e","c","o","v","e","r","y","_","l","i","b","_","a","p","i","_","i","f","r","a","m","e","-","v","2",".","0",".","1","1","9","6",".","h","t","m","l"]),e(["h","t","t","p","s",":","/","/","d","2","z","v","5","r","k","i","i","4","6","m","i","q",".","c","l","o","u","d","f","r","o","n","t",".","n","e","t","/","0","/","2",".","0",".","1","1","9","6","/","r","e","c","o","v","e","r","y","_","l","i","b","_","r","i","d","_","i","f","r","a","m","e","-","v","2",".","0",".","1","1","9","6",".","h","t","m","l"])},function(n,t,o){"use strict";function e(n,t){function o(n){try{return n&&n.timeStamp?n.timeStamp:window.performance.now()}catch(n){return Date.now()}}var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.navigator,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},p=document.createElement("a");if(p.href=n,"https:"===e.protocol&&p.protocol&&p.protocol!==e.protocol)return r.debug("location.protocol",e.protocol),r.error("protocol mismatch in https environment, standing down"),void t(!1,!1,p.protocol,u);var v=new XMLHttpRequest,g=f.withCredentials;null!=g&&(v.withCredentials=g);try{v.open(f.method||"GET",n)}catch(n){return void t(!0,!1,n.toString(),c,v)}if(null!=f.headers){var m=f.headers;Object.keys(m).forEach(function(n){v.setRequestHeader(n,m[n])})}var w=void 0,b=void 0;v.onloadstart=function(n){w=o(n)},v.onreadystatechange=function(n){if(4===this.readyState){b=o(n)-w;var e=0===this.status&&!1!==l.onLine,r="2"===this.status.toString()[0],c=void 0;return c=r?a:!1===l.onLine?s:i,void t(e,r,this.status+"::"+b,c,v)}};try{v.send(f.body)}catch(n){return void t(!0,!1,n.toString(),d,v)}}t.a=e;var r=o(0),i="n",a="nx",c="xo",d="xs",u="p",s="of"},function(n,t,o){"use strict";function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[],o=[],e=r.bind(null,t),i=r.bind(null,o);return n.addEventListener("load",e,!0),n.addEventListener("error",i,!0),{load:{events:t,listener:e},error:{events:o,listener:i}}}function r(n,t){if(t.target){var o="string"==typeof t.target.tagName?t.target.tagName.toLowerCase():"",e="string"==typeof t.target.src?t.target.src:"";"iframe"!==o&&n.push({tagName:o,src:e})}}t.a=e;o(0)}]);
  //# sourceMappingURL=https://s3.amazonaws.com/d3jlsadfjkuern/2.0.1196/Ym9vdHN0cmFwLmpz.map
  
  // standard configuration parameters for sourcepoint						
  window._sp_ = window ._sp_ || _sp_;
  window._sp_.config = window ._sp_.config || {};
              
  window._sp_.config.account_id = 113;
  window._sp_.config.content_control_callback = function () { } ;						
  window._sp_.config.mms_domain = 'sp.nba.com' ; // replace with your messaging domain
              
  // messaging-specific configuration
  window._sp_.mms = window._sp_.mms || {};
  window._sp_.mms.cmd = window._sp_.mms.cmd || [];
              
  window._sp_.config.mms_client_data_callback = function (o) {
     console.log("data callback json: " + JSON.stringify(o));
  };
  
  window._sp_.config.mms_choice_selected_callback = function (choiceID) { 
    console.log( "Choice : id=" + choiceID);
  } ; 
              
  // example usage of setting a targeting parameter 
  window._sp_.mms.cmd.push( function () {
     window._sp_.mms.setTargeting( "color_preference" , "blue" );
  });
              
  // tell the messaging library that all params are set and it can proceed 
  window._sp_.mms.cmd.push( function () {
     window ._sp_.mms.startMsg();
  });
              
  // use the sourcepoint bootstrap code (inlined above) to load			
  // the main messaging library
  window._sp_.bootstrap("https://cdn.nba.com/sp/sp.js"); })();
  
  
  


document.addEventListener('DOMContentLoaded', function () {

  function addUserConsentScript () {
    return new Promise (function (resolve) {
      var script = document.createElement('script');
      script.src = "https://cdn.nba.com/user-consent/index.min.js";
      script.async = true;
      script.onload = function () {
        resolve();
      }
      document.body.appendChild(script);
    });
  }

  function initUserConsent () {
    if (window.WM && window.WM.UserConsent) {
      window.WM.UserConsent.init({
        brand: "NBA",
        cookieDomain: ".nba.com",
        domId: "d0494fd0-8921-497a-8323-e3d29775ce1b",
        src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
        countryCode: window._esi ? window._esi.country : "US",
      });
      return Promise.resolve();
    } else {
      return Promise.reject('WM.UserConsent does not exist');
    }
  }

  function addAisScript () {
    return new Promise (function (resolve) {
      var script = document.createElement('script');
      script.src = "https://i.cdn.turner.com/ads/adfuel/ais/2.1/nba3-ais.js";
      script.async = true;
      script.onload = function () {
        resolve();
      }
      document.body.appendChild(script);
    });
  }
  
  function addAdFuelScript () {
    return new Promise (function (resolve) {
      var script = document.createElement('script');
      script.src = "https://i.cdn.turner.com/ads/adfuel/adfuel-2.1.51.min.js";
      script.async = true;
      script.onload = function () {
        resolve();
      }
      document.body.appendChild(script);
    });
  }

  function triggerAdComponent () {
    return new Promise (function (resolve, reject) {
      // initialize count of 0 on attempts to mount ads
      var attempts = 0;
      function tryAndMountAds() {
        // if we dont have the global object yet, increment count and call function again after 1 second
        if (!window.initNBAWMAFL){
          attempts += 1;
          // if we tried 5 times (5 seconds), call it quits and just return out
          if (attempts === 5) {
            return reject("Ad Initialization Failure")
          }
          setTimeout(function(){ 
            tryAndMountAds()
          }, 1000)
        }
        // if we do have the init function accessible, call it and resolve out of the function
        else {
          window.initNBAWMAFL();
          return resolve();
        }
      }
      //initial call
      tryAndMountAds()
    });
  }

  // lets kick it
    addUserConsentScript()
    .then(initUserConsent)
    .then(addAisScript)
    .then(addAdFuelScript)
    .then(triggerAdComponent)
    .catch(function (error) {
      console.warn(error);
    })

}, false);


/*!
* AerWebCopy Engine [version 6.3.0]
* Copyright Aeroson Systems & Co.
* File mirrored from https://www.nba.com/adfuel/initiator.js
* At UTC time: 2021-03-18 23:05:00.344973
*/
