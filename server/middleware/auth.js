var auth = require("basic-auth");
var mongoose = require("mongoose");

module.exports = function(req, res, next){
  var authdetails = auth(req);

  var User = mongoose.model("User");
  user.findOne({
    username: authdetails.name
  }, function(err, user){
    if(user.checkPassword(authdetails.pass)){
      next();
    }
    else{
      res.sendStatus(401);
    }
  });
}
