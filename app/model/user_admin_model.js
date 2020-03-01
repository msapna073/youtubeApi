const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
 name:String,
 email:String,
 password:String,
 active:{type:Number,default:1},
});
module.exports=mongoose.model('custom_user_admin',UserSchema);