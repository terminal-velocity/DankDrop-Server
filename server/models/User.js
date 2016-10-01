var mongoose = require('mongoose')

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
		type:String
	},
    memesIds: {
        type: [String]
    }
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
