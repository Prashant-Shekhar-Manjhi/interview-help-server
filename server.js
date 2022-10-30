const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path : "./config.env"});
const app = require('./app');

//Database connection...
const database = process.env.DATABASE;
mongoose.connect(database).then(con=>{
    console.log("connection successfull!");
})

// creating server...
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})