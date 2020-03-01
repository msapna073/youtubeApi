const user_registration_form = require('../model/youtube_model.js');
// Complete User Registration
exports.create = async(req, res) =>  {
    const  user = new user_registration_form({
        
        email:req.body.email,
        passion:req.body.passion,
        region:req.body.region
     })
     let email_id = await user_registration_form.findOne({email:req.body.email})
     if (email_id) {
        let email_id=await  user_registration_form.updateOne({"email":req.body.email},{$set:{"region":req.body.region,"passion":req.body.passion}});

        console.log("email exist ")
        res.status(200).json({
            status: 200,
            message: 'update registration...',
            
        })
        
         
     } else {
        console.log("email does not exist")
        res.status(403).json({
            status: 403,
            message: 'email does not exist....',
            
        })
        
         
     }
}

    