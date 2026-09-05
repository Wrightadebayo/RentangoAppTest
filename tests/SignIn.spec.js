const { test } = require('@playwright/test');

const {POManager}= require('./PageObject/POManager');
const dataset=JSON.parse(JSON.stringify(require('../datafolder/TestData.json')))

test('sign in and update profile', async ({ page }) => {

    
   const pom = new POManager(page)
   const loginPage = pom.getLoginPage();
    const dashboardPage = pom.getDashboardPage();
    const profilePage = pom.getProfilePage();
  
    // Login
    await loginPage.goto();
    await loginPage.opensignInLink()
    await loginPage.ValidLogin(dataset.username, dataset.password);

    // Dashboard → Settings
    await dashboardPage.openSettings();

    // Profile page
    await profilePage.uploadProfilePicture();
    await profilePage.fillProfileDetails();

});