const { src, dest, parallel, watch, series } = require('gulp');
const package = require('./package.json');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const browserSync = require('browser-sync').create();

// function css() {
//     return src('src/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(concat(`css/${package.name}.css`))
//         .pipe(sourcemaps.write())
//         .pipe(dest('dist'))
// }
// function cssMin() {
//     return src('src/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(concat(`css/${package.name}.min.css`))
//         .pipe(sourcemaps.write())
//         .pipe(dest('dist'))
//         .pipe(browserSync.reload({ stream: true }));
// }

function js() {
    return src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat(`js/${package.name}.js`))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
}

function jsMin() {
    return src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat(`js/${package.name}.min.js`))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
}

function watching() {
    js();
    // css();
    watch('src/**/*.ts', js);
    // watch('src/**/*.scss', css);
}

function browser() {
    return browserSync.init({ port: 3333, server: { index: './demo/index.html' } });
}

exports.watch = parallel(watching, browser);
exports.default = series(jsMin, js);