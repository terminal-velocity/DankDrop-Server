module.exports = function(req, res){
  var mongoose = require("mongoose");
  var Meme = mongoose.model("Meme");
  Meme.findOne({
    _id: req.params.id
  }, function(err, meme){
    console.log(err);
    console.log(meme);
    res.type(meme.img.mime).send(meme.img.data);
  })
}
