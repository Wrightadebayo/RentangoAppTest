const { test, expect } = require('@playwright/test');
const path = require('path');

let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // =========================
  // LOGIN
  // =========================

  await page.goto('https://rentangoafrica.com/');

  await page
    .locator('.whitespace-nowrap.text-base.font-semibold.capitalize.text-fade-blue')
    .click();

  await page
    .locator('input[name="email_or_phone"]')
    .fill('testafroauto@gmail.com');

  await page
    .locator('[placeholder*="password"]')
    .fill('Computer@20');

  await page.locator('[role="checkbox"]').click();

  await page
    .locator("button[type='submit']")
    .click();

  // Confirm successful login
  await expect(
    page.getByRole('button', { name: 'Logout' })
  ).toBeVisible();

  // Save authentication state
  await context.storageState({
    path: 'state.json'
  });

  // Create authenticated context
  webContext = await browser.newContext({
    storageState: 'state.json'
  });
});


test('sign in', async () => {

  const page = await webContext.newPage();

  // =========================
  // SETTINGS
  // =========================

  await page.goto('https://rentangoafrica.com/settings');

  await expect(page).toHaveURL(/\/settings/);

  // =========================
  // UPLOAD PROFILE IMAGE
  // =========================

  const filepath = path.join(
    __dirname,
    'upload',
    'IMG.txt.PNG'
  );

  await page
    .locator("input[type='file']")
    .setInputFiles(filepath);

  // =========================
  // FULL NAME
  // =========================

  await page
    .locator(
      "input[placeholder='Enter your full name e.g. John Doe']"
    )
    .fill('Adebayo Adeleye');

  // =========================
  // NIN
  // =========================

  await page
    .locator("[placeholder='Enter your NIN']")
    .fill('56443788595');

  // =========================
  // PHONE NUMBER
  // =========================

  await expect(
    page.locator('input[type="tel"]')
  ).toHaveValue('+234 8144393099');

  // =========================
  // GENDER
  // =========================

  await page
    .getByRole('combobox')
    .nth(1)
    .click();

  await page
    .getByRole('option', {
      name: 'prefer not to say'
    })
    .click();

  // =========================
  // DATE OF BIRTH
  // =========================

  await page
    .locator('input[placeholder="YYYY/ DD/ MM"]')
    .fill('2000-08-14');

  // =========================
  // STATE
  // =========================

  await page
    .getByRole('combobox')
    .filter({
      hasText: 'Select an option'
    })
    .click();

  await page
    .getByRole('option', {
      name: 'Ondo',
      exact: true
    })
    .click();

  // =========================
  // ADDRESS
  // =========================

  await page
    .locator("input[name='address']")
    .fill('20, oshinle street Akure');

  // =========================
  // ABOUT ME
  // =========================

  await page
    .locator('[name="about_you"]')
    .fill("Hi, I'm Adebayo");

  console.log('Profile information completed');
});



// shift ctrl p