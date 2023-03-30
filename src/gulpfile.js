'use strict';
/* ********************************

    CONFIG FILE

********************************** */
// Local project URL of your already running WordPress site.
const projectURL = "http://wordpress-template.test/";
// Theme/Plugin URL. Leave it like it is; since our gulpfile.js lives in the root folder.
const productURL = "../";
const browserAutoOpen = true;
const injectChanges = true;

// Path to main .scss file.
const styleSRC = "assets/scss/**/*.scss";
// Path to place the compiled CSS file. Default set to root folder.
const styleDestination = "../release/css/";

// Path to JS custom scripts folder.
const jsSRC = "assets/js/*.js";
// Path to place the compiled JS custom scripts file.
const jsDestination = "../release/js/";

// Path to img folder.
const imgSRC = "assets/image/**/*";
// Path to place the compiled img file.
const imgDestination = "../release/image/";



/* ********************************

    Watch files paths.

********************************** */
// Path to all PHP files.
const watchPhp = "../**/*.php";
// Path to all *.scss files inside css folder and inside them.
const watchStyles = "assets/scss/**/*.scss";
// Path to all JS files.
const watchJS = "assets/js/*.js";



/* ********************************

    Packages

********************************** */
// Gulp
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
// Browser-sync
var browserSync = require('browser-sync').create();
// CSS related plugins
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
// JS related plugins
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// Image related plugins.
const imagemin = require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images with imagemin.



/* ********************************

    Gulp Functions

********************************** */
const errorHandler = r => {
	notify.onError('\n\n❌  ===> ERROR: <%= error.message %>\n')(r);
	beep();

	// this.emit('end');
};

const browsersync = done => {
	browserSync.init({
		proxy: projectURL,
		open: browserAutoOpen,
		injectChanges: injectChanges,
		watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir']
	});
	done();
};

const reload = done => {
	browserSync.reload();
	done();
};

const minifyStyles = () => {
    return gulp
    .src(styleSRC)
    .pipe(sassGlob())
    .pipe(plumber(errorHandler))
    .pipe(sass({
        outputStyle: 'compressed',
        precision: 10
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(styleDestination))
    .pipe(browserSync.stream())
    .pipe(
        notify({
            message: '\n\n✅  ===> STYLES — completed!\n',
            onLast: true
        })
    );
}

const minifyJS = () => {
    return gulp
    .src(jsSRC)
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDestination))
    .pipe(browserSync.stream())
    .pipe(
        notify({
            message: '\n\n✅  ===> JS — completed!\n',
            onLast: true
        })
    );
}

const minifyIMG = () => {
    return gulp
        .src(imgSRC)
        .pipe(
            cache(
				imagemin([
					imagemin.gifsicle({interlaced: true}),
					imagemin.mozjpeg({quality: 90, progressive: true}),
					imagemin.optipng({optimizationLevel: 3}), // 0-7 low-high.
					imagemin.svgo({
						plugins: [{removeViewBox: true}, {cleanupIDs: false}]
					})
				])
			)
        )
        .pipe(gulp.dest(imgDestination))
        .pipe(browserSync.stream())
        .pipe(
            notify({
                message: '\n\n✅  ===> IMAGES — completed!\n',
				onLast: true
            })
        )
}

gulp.task(
    'watch',
    gulp.parallel(minifyStyles, minifyJS, minifyIMG, browsersync,  () => {
        gulp.watch(watchPhp, reload); // Reload on PHP file changes.
        gulp.watch(watchStyles, gulp.parallel(minifyStyles)); // Reload on SCSS file changes.
        gulp.watch(watchJS, gulp.parallel(minifyJS)); // Reload on JS file changes.
        gulp.watch(imgSRC, gulp.series(minifyIMG, reload)); // Reload on Images file changes.
    })
)

gulp.task('clean', function () {
    return gulp
        .src('../release/*/')
        .pipe(clean({force: true}))
});

gulp.task('build', function (cb) {
    minifyStyles();
    minifyJS();
    minifyIMG();
    // cb();
})