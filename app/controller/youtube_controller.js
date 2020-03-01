const user_registration_form = require('../model/youtube_model.js');

const bcrypt = require('bcrypt');
exports.create = async(req, res) =>  {
   /*  const  user = new user_registration_form({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
     }); */

    let email_id = await user_registration_form.findOne({email:req.body.email});
    //console.log(email_id.email);
    if(email_id){
        // if (typeof user.region === "undefined"&& typeof user.passion==='undefined')
        console.log(email_id.email);
        //////// incomplete registration//////////////
        if (email_id.region === null && email_id.passion===null) {
            res.status(200).json({
                status: 200,
                message: 'InComplete registration',
         
           })
        }else {
            res.status(200).json({
                status: 200,
                message: 'complete registration',
         
           })
        }
       
            
             }
             
            
         
        
        else {
            const salt = await bcrypt.genSalt(10);
            let password = await bcrypt.hash(req.body.password, salt);
            let name=req.body.name;
            let email=req.body.email;
            const  user = new user_registration_form({
                name:name,
                email:email,
                password:password,
                passion:null,
                region:null
             });
            console.log(user);
            user.save();
           // user_registration_form.save();
            res.status(200).json({
                status: 200,
                message: 'registred successfully.',
                email:req.body.email,
                
                })
            }
        
            



        


   
    }
