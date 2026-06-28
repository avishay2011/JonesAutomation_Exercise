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
        
        // This factory creates and manages all the website pages in one place 
        const factory = new PageFactory(page);

        // All the values for need to entered on form pulled here from the json file
        const testData = {
            name: getDataFromJson('name'),
            email: getDataFromJson('email'),
            phone: getDataFromJson('phone'),
            company: getDataFromJson('company'),
            website: getDataFromJson('website'),
            numOfEmployees: getDataFromJson('numOfEmployees')
        };

        //  Fill fieds
        await factory.landingPage.fillCompleteForm(testData);
    

        //  Assertions  
        await expect(factory.landingPage.name_Field).toHaveValue(testData.name);
        await expect(factory.landingPage.email_Field).toHaveValue(testData.email);
        await expect(factory.landingPage.phone_Field).toHaveValue(testData.phone);
        await expect(factory.landingPage.company_Field).toHaveValue(testData.company);
        await expect(factory.landingPage.website_Field).toHaveValue(testData.website);
        await expect(factory.landingPage.numberOfEmployees_select).toHaveValue(testData.numOfEmployees);

        //  Submit and print the page title
        await page.screenshot({ path: './SCREENSHOT/screenshot.png' });
        await factory.landingPage.clickSubmit_Button();
        
        const pageTitle = await page.title();
        console.log("Page Title:", pageTitle);
    });
});