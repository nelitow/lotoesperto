<script>
(function(w, d, t, r, u) {
var f, n, i;
w[u] = w[u] || [], f = function() {
var o = {
ti: "25035917"
};
o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
}, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
var s = this.readyState;
s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
}, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
})(window, document, "script", "//bat.bing.com/bat.js", "uetq");

</script>
<!-- Hotjar Tracking Code for lotoesperto.com -->
<script>
(function(h, o, t, j, a, r) {
h.hj = h.hj || function() {
(h.hj.q = h.hj.q || []).push(arguments)
};
h._hjSettings = {
hjid: 1163803,
hjsv: 6
};
a = o.getElementsByTagName('head')[0];
r = o.createElement('script');
r.async = 1;
r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script type="text/javascript">
(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
;r.type="text/javascript";r.async=true
;r.src="https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js"
;r.onload=function(){if(e.amplitude.runQueuedFunctions){
e.amplitude.runQueuedFunctions()}else{
console.log("[Amplitude] Error: could not load SDK")}}
;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
;function s(e,t){e.prototype[t]=function(){
this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
var o=function(){this._q=[];return this}
;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
;return this}
;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
;function v(e){function t(t){e[t]=function(){
e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
e=(!e||e.length===0?"$default_instance":e).toLowerCase()
;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
;e.amplitude=n})(window,document);
amplitude.getInstance().init("2d8e638b11b6ac75b1677e849ca350bc");
  amplitude.getInstance().logEvent('Page Loaded', {
    'page': window.location.pathname.substring(1,window.location.pathname.length-1)
  });
 jQuery(document).ready(function($) {
   $("a").click(function () {
     amplitude.getInstance().logEvent('clicked', {
       'text': $(this).text(),
       'href': $(this).attr("href")
     });
   });
 });
</script>
