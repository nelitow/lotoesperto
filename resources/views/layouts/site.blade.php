<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  @include("incs.head")
</head>
<body>
    @include("incs.app-header")
    @include("incs.sidebar")
    <div class="container">
      @yield('content')
    </div>
    @include("incs.footer")
    @include("incs.scripts")
</body>

</html>
