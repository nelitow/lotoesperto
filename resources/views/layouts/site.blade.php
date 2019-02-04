<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>{{config('app.name', 'LaraKiui')}}</title>
    <script type="text/javascript" src="{{asset('js/jq.js')}}"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=bOMEO7WqBK">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=bOMEO7WqBK">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=bOMEO7WqBK">
    <link rel="manifest" href="/favicons/site.webmanifest?v=bOMEO7WqBK">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=bOMEO7WqBK" color="#5bbad5">
    <link rel="shortcut icon" href="/favicons/favicon.ico?v=bOMEO7WqBK">
    <meta name="apple-mobile-web-app-title" content="LotoEsperto">
    <meta name="application-name" content="LotoEsperto">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=bOMEO7WqBK">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar ">
    @include("incs.app-header")
      <div class="app-main">
        @include("incs.sidebar")
        <div class="app-main__outer">
        @yield('content')
<div class="app-wrapper-footer">
  <div class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer-left">
        <ul class="nav">
          <li class="nav-item">
            <a href="https://go.hotmart.com/L11280144G" target="_blank" class="nav-link">
              FECHAMENTOS OTIMIZADOS
            </a>
          </li>
          <li class="nav-item">
            <a href="/blog" class="nav-link">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div class="app-footer-right">
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
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
</body>

</html>
