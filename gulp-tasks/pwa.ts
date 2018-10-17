// const chromeLauncher = require('chrome-launcher');
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import * as CDP from 'chrome-remote-interface'

declare const window: any;

async function launchChromeAndRunLighthouse(url, opts, config = null) {
    let chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags, startingUrl: url })

    opts.port = chrome.port;
    const protocol = await CDP({
        port: chrome.port
    });

    const { Page, Runtime } = protocol;

    await Page.enable();
    await Page.loadEventFired();
    console.log("page loaded")
    const result = await Runtime.evaluate({
        expression: `(${browserCode})()`
    });
    console.log(result.result);

    // use results.lhr for the JS-consumeable output
    // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
    // use results.report for the HTML/JSON/CSV output as a string
    // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
    protocol.close();
    let results = await lighthouse(url, opts, config);

    await chrome.kill().then(() => report(results.lhr))
    console.log("end");
}

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}
function pageReady(Page) {
    return new Promise( (resolve) => {
        Page.loadEventFired(resolve)
    });
}

const opts = {
    chromeFlags: ['--show-paint-rects']
};

function report(results) {
    // Use results!    
    let audits = results.audits;
    // let worksOffline = audits['is-on-https']['works-offline'];
    // console.log(worksOffline.warnings);
    // console.log(audits['works-offline'])
}
export function pwa(done) {
    // Usage:
    launchChromeAndRunLighthouse('https://alfapronext.nl/', opts)
        .then(done)
        .catch(done);
}

function browserCode() {
    let tokenElt = window.document.querySelector("[name='__RequestVerificationToken']")

    if (tokenElt && tokenElt.value) {
        var formData = new window.FormData();
        formData.append('Input.UserName', 'webclient');
        formData.append('Input.Password', '5656');
        formData.append('__RequestVerificationToken', tokenElt.value);

        return window.fetch("/Identity/Account/Login", {
            method: "POSt",
            mode: "same-origin",
            body: formData
        });
    }
}

