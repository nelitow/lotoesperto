const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .scripts(['resources/js/jquery.js','resources/js/home.js'], 'public/js/home.js').sourceMaps()
   .scripts(['resources/js/jquery.js','resources/js/jsfunctions.js'], 'public/js/jsfunctions.js').sourceMaps()
   .scripts(['resources/js/jquery.js','resources/js/megasena.js'], 'public/js/megasena.js')
   .scripts(['resources/js/jquery.js','resources/js/lotofacil.js'], 'public/js/lotofacil.js')
   .scripts(['resources/js/jquery.js','resources/js/quina.js'], 'public/js/quina.js')
   .scripts(['resources/js/jquery.js','resources/js/timemania.js'], 'public/js/timemania.js')
   .scripts(['resources/js/jquery.js','resources/js/lotomania.js'], 'public/js/lotomania.js')
   .scripts(['resources/js/jquery.js','resources/js/duplasena.js'], 'public/js/duplasena.js')
   .sass('resources/sass/app.scss', 'public/css');
 mix.styles(['resources/css/addtohomescreen.css'], 'public/css/compiled.css');
 mix.js('resources/js/addtohomescreen.js', 'public/js').sourceMaps();
 mix.js('resources/js/bootstrap.js', 'public/js').sourceMaps();
