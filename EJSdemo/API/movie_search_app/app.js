var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/results",function(req,res){
    request("https://www.boredpanda.com/cute-expressive-dog-shiba-inu-ryuji-japan/?utm_source=google&utm_medium=organic&utm_campaign=organic",function(error,response,body){
        if (!error && response.statusCode == 200){
            //var results = JSON.parse(body);
            res.render("views/results");
        }
    });
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("MOvie App has started");
});