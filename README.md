# Automation Project - Jones Automation Exercise

A simple and clean automation project I built using **Playwright** (JavaScript). 
The test automatically fills out a form on a website, checks that the data is correct, and creates a nice visual report using **Allure Report**.

---

## 🎯 What Does the Test Do? (Test Flow)

1. **Fill out details:** The test opens the website and automatically types in all the fields: Name, Email, Phone, Company, and Website.
2. **Select from dropdown:** It changes the number of employees in the dropdown menu from 1-10 to **51-500**.
3. **Take a screenshot:** Right after typing all the details (and *before* clicking submit), the code takes a screenshot of the full form and saves it in a folder.
4. **Submit:** It clicks the `Request a call back` button.
5. **Print page title:** When the test reaches the thank-you page, it takes the title of the page and prints it directly to the Console screen.

---

## 📊 Test Reports (Allure Report)

I added **Allure Report** to this project. 
If a test fails, the system will automatically take a screenshot and record a video of the run. This way, we can see exactly what went wrong inside a nice, easy dashboard in the browser.

---
