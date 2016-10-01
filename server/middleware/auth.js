var auth = require("basic-auth");
var mongoose = require("mongoose");

module.exports = function(req, res, next){
  var authdetails = auth(req);

  var User = mongoose.model("User");
  user.findOne({
    username: authdetails.name
  }, function(err, user){
    if(user){
      if(user.checkPassword(authdetails.pass)){
        req.user = user;
        next();
      }
      else{
        res.status(401).json({
          "message": "Invalid password"
        });
      }
    }
    else{
      res.status(401).json({
        "message": "Invalid username"
      });
    }
  });
}
