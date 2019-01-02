var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });


var catSchema = new mongoose.Schema({
    name:String,
    age: Number,
    temp: String
    
});

var  Cat = mongoose.model("Cat",catSchema);

var geo = new Cat({
    name: "Goo",
    age: 11,
    temp: "dd"
});

geo.save(function(err,cat){
    if(err){
        console.log("error!");
    }
    else{
        console.log("saved!");
        console.log(cat);
    }
});