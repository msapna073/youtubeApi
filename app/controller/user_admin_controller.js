const user_adminform=require('../model/user_admin_model.js')
const bcrypt = require('bcrypt');

exports.create = async(req,res)=>{
    
    let email_id= await user_adminform.findOne({email:req.body.email})
    if(email_id){
        res.status(403).json({
            status: 403,
            message: 'email already exists',
     
       })
    }
    else{
        const salt = await bcrypt.genSalt(10);
            let password = await bcrypt.hash(req.body.password, salt);
            let name= req.body.name;
            let email=req.body.email;
            const admin_user = new user_adminform({
                name:name,
                email:email,
                password:password,
                
            })
        admin_user.save();
        res.status(200).json({
            status: 200,
            message: 'custom user registered',
     
       })

    }

    
}