import * as gulp from "gulp"
import * as less from "gulp-less"
// import * as sourcemaps from 'gulp-sourcemaps'
const cleanCss = require("gulp-clean-css")
import * as jspm from "jspm"
import * as hash from "gulp-hash-filename"
import * as clean from "gulp-clean"

export function test(done) {
    done();
}

export function css() {
    return gulp
        .src(["wwwroot/css/xania.less"])
        // .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(less())
        .pipe(cleanCss())
        // .pipe(sourcemaps.write({ includeContent: false, addComment: false, sourceRoot: '/css' }))
        .pipe(gulp.dest("wwwroot/css"))
        ;
}

function restoreLibraries(done) {
    return jspm.install(true).then(done)
};

function cleanBundles() {
    return gulp
        .src("wwwroot/bundles/*.js")
        .pipe(clean());
}

function generateBundles(done) {
    const jspmBundles = Promise.all([
        jspm.bundle("vendor", "wwwroot/bundles/vendor-bundle.js"),
        jspm.bundle("app - vendor - jquery", "wwwroot/bundles/app-bundle.js")
    ]);

    return jspmBundles.then(() => {
        return gulp
            .src('./wwwroot/bundles/*.js')
            .pipe(clean())
            .pipe(hash())
            .pipe(gulp.dest("./wwwroot/bundles"));
    });
}

//gulp.src('./js/**/*.js')
//    .pipe(hash()) // Add hashes to the files' names
//    .pipe(gulp.dest('public/js')) // Write the renamed files
//    .pipe(hash.manifest('public/assets.json', { // Generate the manifest file
//        deleteOld: true,
//        sourceDir: __dirname + '/public/js'
//    }))
//    .pipe(gulp.dest('.'));

export const js = gulp.series([cleanBundles, restoreLibraries, generateBundles]);

export default function (done) {
    done();
}