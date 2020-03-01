const login_form = require('../model/youtube_model.js');

const bcrypt = require('bcrypt');
exports.login=async(req,res)=>{
    let user = await login_form.findOne({email:req.body.email});
    if (user) {
        
        bcrypt.compare(req.body.password, user.password, function(err, match) {
            if(match) {
                if (user.region === null && user.passion === null){
                    
                    res.status(200).json({
                        status: 200,
                        message: '0',
                    })
                    
                } else {
                    res.status(200).json({
                        status: 200,
                        message: '1',
                    })
                }
            } 
            else{
                res.status(404).json({
                    status: 404,
                    message: 'login failed....'
                }) 
            }
          });

    }
    else{

        res.status(404).json({
            status: 404,
            message: 'login failed....'
        })

    }
        
}