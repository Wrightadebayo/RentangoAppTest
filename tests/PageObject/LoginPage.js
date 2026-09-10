class LoginPage {
    constructor (page){
         this.page = page;
this.userName = page.locator('input[name="email_or_phone"]')
this.password = page.locator('[placeholder*="password"]')
this.Checkbox = page.locator('[role="checkbox"]')
this.signInbutton =   page.locator("button[type='submit']")
this.signInLink = page.locator("[href='/sign-in']")

    }

    async goto() {
    await this.page.goto('https://rentangoafrica.com/');
  }
  async opensignInLink(){
    await this.signInLink.click()
  }
   async ValidLogin(username,password)
    {
        await this.userName.fill(username) 
        await this.password.fill(password)
        await this.Checkbox.click() 
        await this.signInbutton.click();

    }
}
module.exports = {LoginPage}
