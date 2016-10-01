var express = require("express");
var mongoose = require("mongoose");

var app = express();

app.use("/", require("./routes.js"));

require("./models");

mongoose.connect(process.env.DbUrl || "moongodb://localhost/DankDrop", function(){
  console.log("Connected to DB");
});

var server = app.listen(process.env.Port || 5000, function(){
  console.log("Running on port " + server.address().port);
});
