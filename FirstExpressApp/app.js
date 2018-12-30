var express = require("express");
var app = express();



app.get("/",function(req,res){
   res.send("Hi,there!"); 
});
app.get("/bye",function(req,res){
   res.send("Goodbye!"); 
});

app.get("/r/:subName",function(req,res){
   res.send("Ah,you nighty find a sub directory"); 
});

app.get("*",function(req,res){
   res.send("error:404 not found!!"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server engine powering !!!")
});