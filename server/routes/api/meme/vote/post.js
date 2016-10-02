module.exports = function(req, res){
  var Meme = require("mongoose").model("Meme");
  Meme.findOne({
    _id: req.params.id
  }, function(err, meme){
    if(!meme.votes){
      meme.votes = [];
    }
    meme.votes.push(req.body.rating);
    meme.save(function(){
      res.sendStatus(200);
    });
  })
}
