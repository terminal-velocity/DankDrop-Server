module.exports = function(req, res){
  var mongoose = require("mongoose");
  var Meme = mongoose.model("Meme");
  Meme.findOne({
    _id: req.params.id
  }, function(err, meme){
    for(var meme in memes){
      memes[meme].img = null;
    }
    res.json(meme);
  });
}
