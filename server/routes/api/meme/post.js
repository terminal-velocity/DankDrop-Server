module.exports = function(req, res) {
  require("multer")().single("meme")(req, res, function(){
    var mongoose = require("mongoose");
    var Meme = mongoose.model("Meme");
    var newMeme = new Meme({
      name: req.body.name,
      img: {
        data: req.file.buffer,
        mime: req.file.mimetype
      }
    });
    newMeme.save(function(){
      res.sendStatus(200);
    });
  });
}
