'use strict';

let gulp = require('gulp');
let del = require('del');
let tsc = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let tsProject = tsc.createProject('tsconfig.json');
let tslint = require('gulp-tslint');

/**
 * Remove dist directory.
 */
gulp.task('clean', (cb) => {
    return del(['dist'], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in dist directory.
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task('resources', () => {
    return gulp.src(['src/**/*', '!**/*.ts'])
        .pipe(gulp.dest('dist'));
});

/**
 * Copy all required libraries into dist directory.
 */
gulp.task('libs', () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'angular2/es6/dev/src/testing/shims_for_IE.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js'
        ], {cwd: 'node_modules/**'}) /* Glob required here. */
        .pipe(gulp.dest('dist/lib'));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(['src/**/*.ts'], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(['src/**/*.html', 'src/**/*.css'], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs'], () => {
    console.log('Building the project ...');
});