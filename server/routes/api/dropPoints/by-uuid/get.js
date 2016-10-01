module.exports = function(req, res) {
    var mongoose = require("mongoose");

    var DropPoint = mongoose.model("DropPoint");

    var uuid = req.params.uuid || '';

    if (uuid == '') {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Fill out your username, email and password"
        });
    }

    DropPoint.findOne({
          uuid: uuid
      }, function(err, returnedDropPoint){
        if (err){
            res.json(err);
        } else {
            res.json(returnedDropPoint);
        }
    });
}
