const base = require('@playwright/test');

exports.customtest = base.test.extend({

testLoginData : {
    "username":"testafroauto@gmail.com",
    "password":"Computer@20"

}

})