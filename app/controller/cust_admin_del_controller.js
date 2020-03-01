const user_adminform = require('../model/user_admin_model.js');

exports.create=async(req,res)=>{
    const user_delete = new user_adminform({
        email:req.body.email,
    })

    let email_id = await user_adminform.findOne({email:req.body.email})
    console.log(email_id)
    if(email_id){
        let email_id= await user_adminform.deleteOne({email:req.body.email})
            res.status(200).json({
                status: 200,
                message: 'email deleted',
         
           })
            
        
     
    
    }
    else{
       
        res.status(403).json({
            status: 403,
            message: 'emailid does not exists',
     
       })

    }

}