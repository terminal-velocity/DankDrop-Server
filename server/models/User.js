var mongoose = require('mongoose')
var crypto = require('crypto');

var config = {
  hashBytes: 32,
  saltBytes: 16,
  iterations: 872791
};

var userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
        dropDups: true
	},
	email: {
		type: String
	},
	password:{
		type:String,
		bcrypt: true
	},
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
