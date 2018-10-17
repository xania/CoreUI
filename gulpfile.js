"use strict";

var release = require('./gulp-tasks/release');
var pwa = require('./gulp-tasks/pwa');

Object.assign(exports, release, pwa);

const b = () => {


    fetch({
        mode: "same-origin"
    })

}