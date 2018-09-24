import * as gulp from "gulp";
import * as less from "gulp-less";
// import * as sourcemaps from 'gulp-sourcemaps'
const cleanCss = require("gulp-clean-css");
import * as jspm from "jspm";
import * as hash from "gulp-hash";
import * as clean from "gulp-clean";

//var ts = require("gulp-typescript");

//export function build() {
//    return Promise.all([tsc("wwwroot"), tsc("service-worker")]);
//}

//function tsc(folder: string) {
//    console.log("tsc: " + folder);
//    var tsProject = ts.createProject(folder + "\\tsconfig.json");
//    return tsProject.src()
//        .pipe(tsProject())
//        .js.pipe(gulp.dest(folder));
//}

export function css(done) {
    let appCss = gulp
        .src(["wwwroot/css/xania.less"])
        // .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(less())
        .pipe(cleanCss())
        // .pipe(sourcemaps.write({ includeContent: false, addComment: false, sourceRoot: '/css' }))
        .pipe(gulp.dest("wwwroot/css"))
        ;

    let vendorCss = gulp
        .src(["wwwroot/vendor/css/all.less"])
        // .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(less())
        .pipe(cleanCss())
        // .pipe(sourcemaps.write({ includeContent: false, addComment: false, sourceRoot: '/css' }))
        .pipe(gulp.dest("wwwroot/vendor/css"))
        ;

    let fontsTasks = gulp
        .src(["wwwroot/jspm_packages/npm/@coreui/icons@0.3.0/fonts/*"])
        .pipe(gulp.dest("wwwroot/vendor/fonts/"))
        ;

    return Promise.all([vendorCss, appCss, fontsTasks]);
}

function generateBundles(done) {
    const jspmBundles = Promise.all([
        gulp.src("wwwroot/bundles/*.js").pipe(clean()),
        jspm.bundle("vendor - jquery", "wwwroot/bundles/vendor-bundle.js", { minify: true }),
        jspm.bundle("app - vendor - jquery", "wwwroot/bundles/app-bundle.js", { minify: true })
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
export const js = generateBundles;

export function copySystemJS() {
    return gulp.src(["wwwroot/jspm_packages/system.js"])
        .pipe(gulp.dest("wwwroot/vendor/"))
        ;
}

export const releaseBuild = gulp.parallel([copySystemJS, js, css])
