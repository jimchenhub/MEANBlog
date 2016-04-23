var express = require("express");
var app = express();

app.use("/", function(req, res){
    res.send("Hello world.");
});

app.listen(3000);
console.log("Server listen at port 3000");

module.exports = app;
