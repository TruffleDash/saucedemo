const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    authPage: './pages/authPage.js',
    productPage: './pages/productPage.js',
    checkoutStepPage: './pages/checkoutStepPage.js',
    cartPage: './pages/cartPage.js',
    checkoutStep2Page: './pages/checkoutStep2Page.js',
    checkoutCompletePage: './pages/checkoutCompletePage.js'
  },
  name: 'saucedemo'
}