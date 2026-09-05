const {DashboardPage}=require('./DashboardPage');
const {LoginPage}=require('./LoginPage');
const {ProfilePage}=require('./ProfilePage')

class POManager {
    constructor(page)
    {
    this.page = page
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.profilePage = new ProfilePage(this.page);
  
    }
getLoginPage(){
    return this.loginPage;
}
getDashboardPage(){
    return this.dashboardPage;
}
getProfilePage(){
    return this.profilePage
}
}
module.exports = {POManager}