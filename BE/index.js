const express = require("express");
const app = express();
const mongoose = require("mongoose");

// require('dotenv').config({ path: require('find-config')('.env') });


mongoose.connect("mongodb+srv://swetac:shell@cluster0.nvuu4.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("DBConnection Successfull"))
.catch((err) => {
    console.log(err);
});

app.listen(500, ()=>{
    console.log("Backend server is running!")
})