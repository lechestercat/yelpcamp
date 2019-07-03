var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SET UP
var campgroundSchema = new mongoose.Schema;({
    name: String,
    image: String
});

var campgrounds = [
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732e72d09e4ac658_960.jpg&user=Free-Photos"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat Rest", image: "https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_1280.jpg"},
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732e72d09e4ac658_960.jpg&user=Free-Photos"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat Rest", image: "https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_1280.jpg"}
]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){

    res.render("campgrounds", {campgrounds:campgrounds})
});

app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});