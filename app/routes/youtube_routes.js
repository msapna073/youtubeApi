module.exports = (app) => {
    var user_form = require('../controller/youtube_controller.js');
    var youtubeuser_form= require('../controller/youtubeuser_controller.js');
    var userlogin_form=require('../controller/login_controller.js');
    var custom_adminform=require('../controller/user_admin_controller.js');
    var user_updateform=require('../controller/userupdate_admin_controller.js');
    var user_deleteform=require('../controller/cust_admin_del_controller.js');
    var get_dataform= require('../controller/get_data_controller.js');
    var adminuser_loginform=require('../controller/admin_login_controller.js');


    
    // Create a user registration
    app.post('/user/registration', user_form.create);
    app.post('/update/user/registration',youtubeuser_form.create)
    app.post('/user/login',userlogin_form.login)
    app.post('/user/admin',custom_adminform.create)
    app.post('/user/update/admin',user_updateform.create)
    app.post('/user/admin/delete',user_deleteform.create)
     app.get('/user/get/data',get_dataform.create)
     app.post('/user/admin/login',adminuser_loginform.login)
    
    

    
}

