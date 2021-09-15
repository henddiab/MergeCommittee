'use strict'

var vars = require('./gulp-dev/constants');

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	atImport = require('postcss-import'),
	autoprefixer = require('autoprefixer'),
	uglifycss = require('gulp-uglifycss'),
	cssnano = require('cssnano'),
	rtlcss = require('gulp-rtlcss'),
	rename = require('gulp-rename'),
	newer = require('gulp-newer'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglify'),
	nunjucksRender = require('gulp-nunjucks-render'),
	merge = require('merge-stream'),
	browserSync = require('browser-sync').create();


var defaultApp = require('./gulp-dev/gulp.config');
var commiteApp = require('./gulp-dev/gulp-config.commite');

var CONFIGS = [ defaultApp, commiteApp ]

console.log( 'app name: ', CONFIGS[1].app.name)

var pkg = require('./package.json')
console.log('pkg:  ', pkg)
var devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');

/*
	process css task  here
*/
function styles() {
	var plugins = [
		atImport,
		autoprefixer,
		cssnano
	  ]
	const tasks = CONFIGS.map(config => {
		return gulp.src(config.css.sourcePaths, {allowEmpty: true })
			.pipe(sourcemaps.init())
         .pipe(sass(config.css.thirdParty.sassOptions)
      	.on('error', sass.logError))
         //.pipe(postcss(plugins))
         .pipe(concat('style.css'))
         .pipe(uglifycss(config.css.thirdParty.uglifyCssOptions))
         .pipe(gulp.dest(config.css.exportPath))
         .pipe(browserSync.stream())

         // rtl style
         .pipe(rtlcss())
			.pipe(rename({ suffix: '-rtl' }))
			.pipe(gulp.dest(config.css.exportPath))
			.pipe(browserSync.stream());
	});

 	return merge(tasks);
}

/*
	process javascript task  here
*/
function scripts() {
	const tasks = CONFIGS.map(config => {
     	return gulp.src(config.js.sourcePaths, { allowEmpty: true })
     		.pipe(sourcemaps.init())

     		.pipe(uglify())
     		.pipe(gulp.dest(config.js.exportPath))
     		.pipe(browserSync.stream());
 	});

 	return merge(tasks);
}

function jsVendors() {
	const tasks = CONFIGS.map(config => {
     	return gulp
     		.src(config.js.vendors.sourcePaths, { allowEmpty: true })
     		//.pipe(concat('vendors.js'))
     		.pipe(uglify())
     		.pipe(gulp.dest(config.js.exportPath))
     		.pipe(browserSync.stream());
 	});

 	return merge(tasks);
}

/*
	fonts task  here
*/
function fonts() {
	const tasks = CONFIGS.map(config => {
     	return gulp.src(config.fonts.sourcePaths, { allowEmpty: true })
     		.pipe(newer(config.fonts.exportPath))
     		.pipe(gulp.dest(config.fonts.exportPath))
     		.pipe(browserSync.stream());
 	});

 	return merge(tasks);
}
 
/*
	process html task  here
*/ 
function html() {
	const tasks = CONFIGS.map(config => {
     	return gulp.src(config.html.pages, {allowEmpty: true })
     		.pipe(nunjucksRender({
				path: [config.html.templates],
				data: {
					project: config.app.name
				}
			}))
			.pipe(gulp.dest(config.html.exportPath))
			.pipe(browserSync.stream());
 	});

 	return merge(tasks);
}

/*
	process images task  here
*/
function images() {
	const tasks = CONFIGS.map(config => {
     	return gulp.src(config.images.sourcePaths, {allowEmpty: true })
     		.pipe(imagemin())
     		.pipe(gulp.dest(config.images.exportPath))
     		.pipe(browserSync.stream());
 	});

 	return merge(tasks);
}

/*
	browsersyncTask  here
*/
function browsersyncTask () {
	browserSync.init({
		server: {
			baseDir : vars.dest
		},
		open: true,
		notify: true
	})
}


/*
	watching... tasks
*/
function watch() {
	CONFIGS.forEach((item, i) => {
     	gulp.watch(item.css.watch, styles);
		gulp.watch(item.js.watch, scripts);
		gulp.watch(item.fonts.watch, fonts);
		gulp.watch(item.html.watch, html).on('change', browserSync.reload);
		gulp.watch(item.images.sourcePaths, images);
 	});
}

var build = gulp.parallel(html, fonts, styles, jsVendors, scripts, images, browsersyncTask, watch)

// creates default task
gulp.task('default', build);

