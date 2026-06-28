 const BasePage = require('./BasePage');

class LandingPage extends BasePage{
  constructor(page) {
     super(page);
   

///Elements 
this.name_Field=page.locator("#name")
this.email_Field=page.locator("#email")
this.phone_Field=page.locator("#phone");
this.company_Field=page.locator("#company");
this.website_Field=page.locator("#website");
this.numberOfEmployees_select=page.locator("#employees");
this.submit_button=page.locator(".primary.button");

}

//Methods
async fillName_Field(name){
       await this.fill(this.name_Field,name);
  }

async fillEmail_Field(email){
       await this.fill(this.email_Field,email);
  }


async fillPhone_Field(phone){
       await this.fill(this.phone_Field,phone);
  }

async fillCompany_Field(company){
       await this.fill(this.company_Field,company);
  }

  async fillWebsite_Field(website){
       await this.fill(this.website_Field,website);
  }

  async selectNumberOfEmployees_Field(employeesNum){
       await this.selectByOption(this.numberOfEmployees_select,employeesNum);
  }


async clickSubmit_Button() {
    await this.click(this.submit_button);
  }





}

module.exports = LandingPage;