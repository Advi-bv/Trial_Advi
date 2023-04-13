const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.google.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle',
      waitForAction: 1000
    },
    Puppeteer: {
      url: 'https://www.google.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle',
      waitForAction: 1000
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Trial_Advi'
}
