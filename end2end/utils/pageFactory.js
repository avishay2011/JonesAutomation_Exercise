const LandingPage = require('../pages/LandingPage.js');


class PageFactory {
  // The Constructor: Receives and saves the initial Playwright page object
  constructor(page) {
    this._page = page;
  }
  
  // Dynamically updates the page object (crucial when switching browser tabs)
  setPage(page) {
    this._page = page;
  }
  
  // A getter that returns the current active page object
  get page() {
  return this._page;
  }
  
  // Automatically initializes and returns the LandingPage instance with the current page
  get landingPage() {
    return new LandingPage(this._page);
  }

}

module.exports = PageFactory;
