const { test } = require('@playwright/test');
const {customtest} = require('../datafolder/test-base')

const {POManager}= require('./PageObject/POManager');
const dataset=JSON.parse(JSON.stringify(require('../datafolder/TestData.json')))
// test.describe.configure({mode:'parallel'})
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








customtest('customextend', async ({ page, testLoginData}) => {
   const pom = new POManager(page)
   const loginPage = pom.getLoginPage();
    const dashboardPage = pom.getDashboardPage();
    const profilePage = pom.getProfilePage();
  
    // Login
    await loginPage.goto();
    await loginPage.opensignInLink()
    await loginPage.ValidLogin(testLoginData.username, testLoginData.password);

    // Dashboard → Settings
    // await dashboardPage.openSettings();

    // Profile page
    await profilePage.uploadProfilePicture();
    await profilePage.fillProfileDetails();

});