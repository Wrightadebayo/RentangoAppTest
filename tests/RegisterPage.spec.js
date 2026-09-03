const {test,expect} = require('@playwright/test')

test('Sign up test case', async({page})=>{

await page.goto('https://rentangoafrica.com/')
console.log(await page.title())
// await expect(page).toHaveTitle("Rentango Africa - Comfortable Stays. Seamless Booking.")
await page.locator('a.whitespace-nowrap.text-base.font-semibold.capitalize.text-primary').click()
await page.waitForLoadState('networkidle')
await page.locator('input[name*="email"]').fill('testafroauto@gmail.com');


await page.locator('[type="tel"] ').fill('+2348144393094')

const dropdown = page.locator("select[aria-hidden='true']")
await dropdown.selectOption('host')
await page.locator("[name='password']").fill('Computer@20')
await page.locator('[placeholder*="Confirm"]').fill('Computer@20')
await page.locator("button[role='checkbox']").click()
// console.log(await page.locator("button[role='checkbox']").isChecked());
// await expect(page.locator('button[role="checkbox"]')).toBeChecked()
await page.locator("button[type='submit']").click()





})