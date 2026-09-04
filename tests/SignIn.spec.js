const { test } = require('@playwright/test');

const { LoginPage } = require('./PageObject/LoginPage');
const { DashboardPage } = require('./PageObject/DashboardPage');
const { ProfilePage } = require('./PageObject/ProfilePage');

test('sign in and update profile', async ({ page }) => {

    const username = 'testafroauto@gmail.com';
    const password = 'Computer@20';

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const profilePage = new ProfilePage(page);
  
    // Login
    await loginPage.goto();
    await loginPage.opensignInLink()
    await loginPage.ValidLogin(username, password);

    // Dashboard → Settings
    await dashboardPage.openSettings();

    // Profile page
    await profilePage.uploadProfilePicture();
    await profilePage.fillProfileDetails();

});