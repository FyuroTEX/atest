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

    it('empty input field', async function () {
      driver.manage().setTimeouts({ implicit: 5000 });
      await driver.get('https://rozetka.com.ua/');
      await driver.findElement(By.css('a.header-topline__user-link')).click();

      // await driver.wait(until.elementLocated(By.css('button.auth-modal__login-button'), 5000)).click();

      // await driver.wait(until.elementLocated(By.css('#auth_email.form_state_error'), 5000));

      await driver.findElement(By.css('button.auth-modal__login-button')).click();

      await driver.findElement(By.css('#auth_email.form_state_error'));
    });
    // it('invalid email', async function() {
    //   await driver.get('https://rozetka.com.ua/');
    //   await driver.findElement(By.css('.header-topline__user-link')).click();
    //   await driver
    //     .findElement(By.id('#auth_email'))
    //     .sendKeys('0000@gmail.com', Key.RETURN);

    //   await driver
    //     .wait(
    //       until.elementLocated(By.css('button.auth-modal__login-button'), 4000)
    //     )
    //     .click();
    //     await driver.wait(
    //       until.elementLocated(By.css('#auth_pass.form_state_error'), 1000)
    //     );
    // });

    // it('webdriver - Google Search', async function() {
    //   await driver.get('https://www.google.com/ncr');
    //   await driver.findElement(By.name('q')).sendKeys('webdriver');
    //   await driver.findElement(By.name('btnK')).click();
    //   // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //   await driver.getTitle('webdriver - Google Search');
    // });

    // ignore(crm.browsers(Browser.CHROME)).
    // it('demo 2', async function() {
    //   await driver.get('http://www.google.com/ncr');
    //   let url = await driver.getCurrentUrl();
    //   assert.equal(url, 'https://www.google.com/');
    // });

    after(() => driver && driver.quit());
  });
});
