// const chromeLauncher = require('chrome-launcher');
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            // use results.lhr for the JS-consumeable output
            // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
            // use results.report for the HTML/JSON/CSV output as a string
            // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
            return chrome.kill().then(() => results.lhr)
        });
    });
}

const opts = {
    chromeFlags: ['--show-paint-rects']
};

export function pwa(done) {
    // Usage:
    launchChromeAndRunLighthouse('https://localhost', opts)
        .then(results => {
            // Use results!    
            let audits = results.audits;

            console.log(audits['works-offline'])

            // let worksOffline = audits['is-on-https']['works-offline'];
            // console.log(worksOffline.warnings);
            done();
        })
        .catch(done);
}
