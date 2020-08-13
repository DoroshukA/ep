const mongoose = require('mongoose');
const config = require('./config/db');
const express =require('express');

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', ()=> {
    console.log("we connect to DB");
});

mongoose.connection.on('error', (err)=> {
    console.log("we not connect to DB" + err);
});
