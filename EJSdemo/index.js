var express= require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});


app.get("/iwanta/:dog",function(req,res){
    var dog = req.params.dog;
    res.render("want",{thingVar:dog});
});

app.get("/posts",function(req,res){
    var posts = [
        {title :"Post1",author:"Haili1"},
        {title :"Post2",author: "Haili2"},
        {title :"Post3",author: "Haili3"}
    ];
    
    res.render("posts.ejs",{posts:posts});
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is listening !");
});