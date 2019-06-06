require('chromedriver');
const assert = require('assert');
const { ignore, suite } = require('selenium-webdriver/testing');
const { Browser, By, Key, until, done } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

suite(function(crm) {
  describe('Google Search', function() {
    let driver;

    this.timeout(20000);
    before(async function() {
      let options = new chrome.Options();
      options.addArguments(['start-maximized']);

      driver = await crm
        .builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

      // driver.manage().setTimeouts({ implicit: 5000 });
    });

    it('empty input field v1', async function () {
     
      await driver.get('https://rozetka.com.ua/');
   
      let awButtn = driver.wait(until.elementLocated(By.css('a.header-topline__user-link')), 4000);
      await awButtn.click();
      let loginBttn = driver.wait(until.elementLocated(By.css('button.auth-modal__login-button'), 5000));
      await loginBttn.click();
      
      await driver.findElement(By.css('#auth_email.form_state_error'));
    });
    it('empty input field v2', async function () {
      driver.manage().setTimeouts({ implicit: 10000 });
      await driver.get('https://rozetka.com.ua/');
      await driver.findElement(By.css('a.header-topline__user-link')).click();
      
      await driver.findElement(By.css('button.auth-modal__login-button')).click();

      await driver.findElement(By.css('#auth_email.form_state_error'));
    });
    

    after(() => driver && driver.quit());
  });
});
