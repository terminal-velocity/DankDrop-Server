module.exports = function(req, res) {
    var mongoose = require("mongoose");

    var DropPoint = mongoose.model("DropPoint");

    var name = req.body.name || '';
    var uuid = req.body.uuid || '';

    if (name == '' || uuid == '') {
        res.status(422);
        res.json({
            "message": "Need both name and UUID of drop-point"
        });
    }

    var newDropPoint = new DropPoint({
        name: name,
        uuid: uuid
    });

    newDropPoint.save(function(err, returnedDropPoint){
        if (err){
            res.json(err);
        } else {
            res.json(returnedDropPoint);
        }
    });
}
