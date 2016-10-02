module.exports = function(req, res){
  var mongoose = require("mongoose");
  var Meme = mongoose.model("Meme");
  Meme.find(req.query).select("-img -votes").exec(function(err, memes){
    res.json(memes);
  });
}
