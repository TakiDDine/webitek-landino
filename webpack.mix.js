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

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

    mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    // .sass('resources/sass/_sidebar.scss', 'public/css')
    // .sass('resources/sass/_dashboard.scss', 'public/css')
    // .sass('resources/sass/_templates.scss', 'public/css')
    // .sass('resources/sass/_projects.scss', 'public/css')
    // .sass('resources/sass/_profile.scss', 'public/css');