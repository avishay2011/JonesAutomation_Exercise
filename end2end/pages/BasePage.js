class BasePage {
  constructor(page) {
    this.page = page;
  }

  // === Navigation ===
  async navigate(url) {
    await this.page.goto(url);
  }

  // === Actions ===
  async click(selectorOrLocator) {
   await selectorOrLocator.click(); 
  }

  async fill(selectorOrLocator, text) {
    await this.click(selectorOrLocator);
    await selectorOrLocator.fill(text);
  }



  async selectByOption(selectorOrLocator, option) {
      await selectorOrLocator.selectOption(option);
  }

}

module.exports = BasePage;