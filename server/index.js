var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();

app.use(require("morgan"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes.js"));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DbUrl || "moongodb://localhost/DankDrop", function(){
  console.log("Connected to DB");
});

require("./models");

var server = app.listen(process.env.Port || 5000, function(){
  console.log("Running on port " + server.address().port);
});
