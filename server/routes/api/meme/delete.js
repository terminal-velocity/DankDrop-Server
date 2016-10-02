module.exports = function(req, res){
  var Meme = require("mongoose").model("Meme");
  Meme.findOne({
    _id: req.params.id
  }, function(err, meme){
    meme.remove(function(){
      res.sendStatus(200);
    })
  });
}
