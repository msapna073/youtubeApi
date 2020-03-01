const admin_loginform=require('../model/user_admin_model.js');
const bcrypt = require('bcrypt');
exports.login=async(req,res)=>{
    const { name, password } = req.body
    if(name === "sapna" && password === "sapna@123"){
        console.log('login')
        res.status(200).json({
            status: 200,
            message: 'user login successfully',
        })
        
    }
    else{
        res.status(404).json({
            status: 404,
            message: 'login failed',
        })
    }
    
    console.log(req.body.email)
    let user= await admin_loginform.findOne({email:req.body.email});
    console.log(user)
    if(user){
        bcrypt.compare(req.body.password,user.password,function(err,match){
            if(match){
                {
                console.log("match")
                res.status(200).json({
                    status: 200,
                    message: 'user login successfully',
                })
            }
        }
            else{
                console.log('does not match')
                res.status(403).json({
                    status: 403,
                    message: 'invalid credentials',
                })
            }
            
        })
        
    }
    else{

        res.status(404).json({
            status: 404,
            message: 'login failed....'
        })
        //return res.status(404).send('user not found..');

    }
}
        