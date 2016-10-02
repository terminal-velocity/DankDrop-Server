module.exports = function(req, res){
  var mongoose = require("mongoose");
  var Meme = mongoose.model("Meme");
  Meme.findOne({
    _id: req.params.id
  }, function(err, meme){
    res.json(meme);
  });
}
