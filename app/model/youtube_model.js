const mongoose = require('mongoose');
const youtube_UserSchema = mongoose.Schema({
 name:String,
 email:String,
 password:String,
 region:String,
 passion:Array
});
module.exports=mongoose.model('youtube_userdetails',youtube_UserSchema);