const get_data = require('../model/user_admin_model.js');

exports.create = async(req,res)=>{
    let data= await get_data.find({})
    res.status(200).json({
        status: 200,
        message: 'get all user data',
        res: data
    })

}
