const express = require("express");
const app = express();
const alertUsers = require('./alerts');
app.use(function(req, res, next){
    if( ["http://localhost:4200", "https://jolly-wind-4771.on.fleek.co/"].indexOf(req.headers.origin) > -1){
        res.setHeader("Access-Control-Allow-Origin",req.headers.origin);
    }
    res.set({
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, token',
        'Last-Modified': new Date().toUTCString()
    });
    if(req.method === "OPTIONS"){
        return res.send(200);
    }
    next();
}).get('/alertUsersAboutSubscription', alertUsers)