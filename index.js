const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/mongo.con.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//Connecting to the database
 mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. ', err);
    process.exit();
}); 
 require('./app/routes/youtube_routes.js')(app);
app.listen(3000,()=>{
    console.log("server is running on 3000 port")
})
module.exports=app;