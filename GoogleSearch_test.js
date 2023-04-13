Feature('GoogleSearch');

Scenario('Search for CodeceptJS', ( { I, Playwright, Puppeteer } ) => {
  // Search for CodeceptJS using Playwright
  Playwright.amOnPage('https://google.com');
  Playwright.fillField('q', 'CodeceptJS');
  Playwright.press('Enter');
  Playwright.wait('2');
  Playwright.waitForNavigation();

  const title = Playwright.getTitle();
  Playwright.see('CodeceptJS', title);

  // Search for CodeceptJS using Puppeteer
  Puppeteer.amOnPage('/');
  Puppeteer.fillField('q', 'CodeceptJS');
  Puppeteer.press('Enter');
  Puppeteer.wait('2');
  Puppeteer.waitForNavigation();

  const title2 = Puppeteer.getTitle();
  Puppeteer.see('CodeceptJS', title2);
});





//Scenario('Search for CodeceptJS', ( { I, Playwright, Puppeteer } ) => {
  //Puppeteer.amOnPage('/');
  //Puppeteer.wait(3);
  //Puppeteer.press('Gmail');


//Scenario('test something-2',  ( { I , Playwright } ) => {
    //Playwright.amOnPage('/');
    //Playwright.wait(3);
    //Playwright.press('About');
//});




//Scenario('Search for CodeceptJS using Playwright', ( { I, Playwright } ) => {
  //I.amOnPage('/');
  //I.fillField('q', 'CodeceptJS');
  //I.press('Enter');
  //I.waitForNavigation();

  //const title =  Playwright.title();
  //I.see('CodeceptJS', title);
//});

//Scenario('Search for CodeceptJS using Puppeteer', ( { I, Puppeteer } ) => {
  //I.amOnPage('/');
  //I.fillField('q', 'CodeceptJS');
  //I.press('Enter');
  //I.waitForNavigation();

  //const title =  Puppeteer.title();
  //I.see('CodeceptJS', title);
//});
