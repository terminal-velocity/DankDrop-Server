module.exports = function(req, res){
  var mongoose = require("mongoose");
  var Meme = mongoose.model("Meme");
  Meme.find(req.query, function(err, memes){
    for(var meme in memes){
      memes[meme].img = null;
    }
    res.json(memes);
  });
}
