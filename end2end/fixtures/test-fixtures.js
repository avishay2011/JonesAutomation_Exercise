const { test: base, chromium } = require('@playwright/test');

const test = base.extend({
  browser: async ({}, use) => {
    const browser = await chromium.launch({
      channel: 'chrome',
      headless: false,
      args: ['--start-maximized'] //  Open the window on maximize size
    });
    await use(browser);
    await browser.close();
  },

  context: async ({ browser }, use) => {
   //Set the page view size according to your screen's maximum resolution
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    
    // 🚀 Define the page size according to the screen 
    await page.setViewportSize({ width: 1920, height: 1080 }); 
    //Define the landing page that will be open on each test (Like before all )
    await page.goto('https://test.netlify.app/');
    // Hands over the ready page to the test and waits for it to finish
    await use(page);
    // Closes the page after the test finishes to clean up memory
    await page.close();
  }
});

module.exports = test;