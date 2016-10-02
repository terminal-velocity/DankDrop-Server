module.exports = function(req, res){
  var Meme = require("mongoose").model("Meme");

  Meme.findByIdAndUpdate(
      req.params.id,
      {$push: {
          "votes": req.body.rating
      }},
      function(err, votes) {
          if (!err){
              res.sendStatus(200);
          }  else {
              res.sendStatus(500);
          }
      }
  );

}
