module.exports = function(req, res) {

    var mongoose = require("mongoose");

    var User = mongoose.model("User");

    var username = req.body.username || '';
    var email = req.body.email || '';
    var password = req.body.password || '';

    if (username == '' || password == '' || email == '') {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Fill out your username, email and password"
        });
    }

    var newUser = new User({
        username: username,
        email: email,
        password: password
    });

    newUser.save(function(err, returnedUser){
        if (err){
            res.json(err);
            res.end();
        } else {
            res.json(returnedUser);
            res.end();
        }
    });
}
