// Imports the custom test setup with built-in configurations ( maximized screen,open site ,close and clean memory and etc...)
const test = require('../fixtures/test-fixtures'); 
// Imports the standard assertion library (expect) check test results (like toHaveValue)
const { expect } = require('@playwright/test'); 

// Imports the factory that manages all page objects and locators
const PageFactory = require('../utils/pageFactory'); 
//Import the util get data from json
const getDataFromJson = require('../utils/textReader');

test.describe('Fill all empty fields and submit', () => {

    
    test('Fill empty fields and assert that the right values entered', async ({ page }) => {
        
        // 4. מאתחלים את ה-factory מקומית בתוך הטסט (בול כמו בפרויקט הביטוח)
        const factory = new PageFactory(page);

        //  Fill fieds
        await factory.landingPage.fillName_Field(getDataFromJson('name'));
        await factory.landingPage.fillEmail_Field(getDataFromJson('email'));
        await factory.landingPage.fillPhone_Field(getDataFromJson('phone'));
        await factory.landingPage.fillCompany_Field(getDataFromJson('company'));
        await factory.landingPage.fillWebsite_Field(getDataFromJson('website'));
        await factory.landingPage.selectNumberOfEmployees_Field(getDataFromJson('numOfEmployees'));

        //  Assertions  
        await expect(factory.landingPage.name_Field).toHaveValue(getDataFromJson('name'));
        await expect(factory.landingPage.email_Field).toHaveValue(getDataFromJson('email'));
        await expect(factory.landingPage.phone_Field).toHaveValue(getDataFromJson('phone'));
        await expect(factory.landingPage.company_Field).toHaveValue(getDataFromJson('company'));
        await expect(factory.landingPage.website_Field).toHaveValue(getDataFromJson('website'));
        await expect(factory.landingPage.numberOfEmployees_select).toHaveValue(getDataFromJson('numOfEmployees'));

        //  Submit and print the page title
        await page.screenshot({ path: './SCREENSHOT/screenshot.png' });
        await factory.landingPage.clickSubmit_Button();
        
        const pageTitle = await page.title();
        console.log("Page Title:", pageTitle);
    });
});