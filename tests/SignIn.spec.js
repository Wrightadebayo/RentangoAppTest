const { test, expect,request } = require('@playwright/test');
import path from 'path'

//const loginPayload = {username:"testafroauto@gmail.com",password:"Computer@20"}


//test.beforeAll(()=>{
  //const ApiContext = await request.newContext()
  //const loginResponse = await ApiContext.post("https://rentangoafrica.com/api/auth/sign-in",{data:loginPayload
 // }
//)
//expect(loginResponse.status()).toBe(200);
//expect(loginResponse.ok()).toBeTruthy();
//const loginResponseJson = await loginResponse.json();
//const token = loginResponseJson.token
// })



test.only('sign in', async ({ page }) => {



const username = 'testafroauto@gmail.com';
const password = "Computer@20";
const phoneNumber = '+234 8144393099'

  await page.goto('https://rentangoafrica.com/');
  await page.locator('.whitespace-nowrap.text-base.font-semibold.capitalize.text-fade-blue').click();
   await expect(page.locator('input[name="email_or_phone"]')).toBeVisible();
 await page.locator('input[name="email_or_phone"]').pressSequentially(username);
 
  await page.locator('[placeholder*="password"]').fill(password);
  
  await page.locator('[role="checkbox"]').click();
  await page.locator("button[type='submit']").click();
  await page.locator("button[type='submit']").waitFor()
  await page.locator('text=settings').first().click()
  // await page.locator('text=Select Image').click();
  const filepath = path.join(__dirname,'upload','IMG.txt.PNG')
  await page.setInputFiles("input[type='file']",filepath);

  await page.locator("input[placeholder='Enter your full name e.g. John Doe']").fill('Adebayo Adeleye')
  await page.locator("[placeholder='Enter your NIN']").fill('56443788595')
  await expect(page.locator('input[type="tel"]')).toHaveValue('+234 8144393099');
await page.getByRole('combobox').nth(1).click();
await page.getByRole('option',{ name: 'prefer not to say' }).click();
await page.locator('input[placeholder="YYYY/ DD/ MM"]').fill('2000-08-14');
await page.getByRole('combobox').filter({
  hasText: 'Select an option'
}).click();

await page.getByRole('option', { name: 'Ondo', exact: true }).click();
await page.locator("input[name='address']").fill('20, oshinle street Akure');
await page.locator('[name="about_you"]').pressSequentially("Hi, I'm Adebayo");
console.log('')


});
