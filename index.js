const express = require("express");
var app = express();

const port = process.env.PORT || 3000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/awesome", function(req, resp){
    resp.end("YOU ARE AWESOME");
})

app.get("/dyncontent", function(req, resp){
    resp.end("hi there");
})

var names = [];

app.get("/name/:jimena", function(req, resp){
   var jimena = req.params.jimena;
    
    names.push(jimena);
    resp.send(names);
});

app.listen(port, function(err){
   if(err){
       console.log("something is wrong: "+err);
       return false;
   } 
    
    console.log("PORT IS READY FOR H@X!");
});