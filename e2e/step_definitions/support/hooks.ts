import {browser} from "protractor";
export  = function () {
    const DEFAULT_STEP_TIMEOUT = 360 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);

    this.After((scenario, done) => {
            browser.takeScreenshot().then(base64png => {
                let decodedImage = new Buffer(base64png, 'base64');
                scenario.attach(decodedImage, 'image/png');
            })
            .then(done);
    });
}