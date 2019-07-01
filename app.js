var express = require("express");
var app = express();

// To short cut "render" file coding (do not have to give suffix)
app.set("view engine", "ejs");


// Routes

// "/" == Home Page
app.get("/", function(req, res){
	res.render("home");
//	res.send("<h1>Welcome to the home page!</h1><h2>blah blah</h2>");
});

// Adding to "friends" array
app.post("/addfriend", function(req, res){
	res.send("YOU HAVE REACHED THE POST ROUTE AGAIN!");
});

// "/friends" list to be added to 
app.get("/friends", function(req, res){
	var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
	res.render("friends", {friends: friends});
});

// Catch-all for mis-typed or error routes
//app.get("*", function(req, res){
//	res.send("Sorry, page not found. . .What are you doing with your life?");
//});

// Tell Express to listen for requests (start server)
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
//app.listen(process.env.PORT, process.env.IP, function(){
//	console.log("Server has started!!!");
//});
