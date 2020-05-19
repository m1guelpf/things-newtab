require('dotenv').config()
let mix = require('laravel-mix')
let tailwind = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
	.js('src/js/app.js', 'newTab/js')
	.sass('src/sass/index.scss', 'newTab/css')
	.options({ processCssUrls: false, postCss: [ tailwind() ] })
	.webpackConfig(webpack => ({ plugins: [
		new webpack.DefinePlugin({ 'process.env': {
			THINGS_TOKEN: JSON.stringify(process.env.THINGS_TOKEN),
			THINGS_SERVER: JSON.stringify(process.env.THINGS_SERVER),
		}})
	]}))