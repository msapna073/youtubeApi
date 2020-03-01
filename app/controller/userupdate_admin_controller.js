const user_adminform = require('../model/user_admin_model.js');

exports.create=async(req,res)=>{
    const update_user = new user_adminform({
       
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        active:req.body.active
        
        
    })
    console.log(req.body.email)
    let email_id = await user_adminform.findOne({email:req.body.email})
    console.log(email_id.active);
    if(email_id){
        if(email_id.active==0){
            await  user_adminform.updateOne({"email":req.body.email},{$set:{"active":1}});
            res.status(200).json({
                status: 200,
                message: 'custom admin user active..',
                
            })
        }
        if(email_id.active==1){
            await  user_adminform.updateOne({"email":req.body.email},{$set:{"active":0}});
            res.status(200).json({
                status: 200,
                message: 'custom admin user inactive..',
                
            })
        }
         
     } 
}