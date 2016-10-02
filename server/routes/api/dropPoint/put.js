module.exports = function(req, res) {
    var mongoose = require("mongoose");
    var DropPoint = mongoose.model("DropPoint");

    var name = req.body.name || '';
    var uuid = req.body.uuid || '';

    if (name == '' && uuid == '') {
        res.status(422);
        res.json({
            "message": "Need a name or UUID to update drop-point with"
        });
    }

    DropPoint.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    }, function(err, dropPoint){
        console.log("HELLO")
      if (!err) {
          res.sendStatus(200);
      } else {
          console.log('Was err')
      }
    });
}
