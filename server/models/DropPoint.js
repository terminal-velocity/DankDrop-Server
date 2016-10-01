var mongoose = require('mongoose')

var dropPointSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
        dropDups: true
	},
	uuid: {
		type: String,
        unique: true,
        dropDups: true
	}
});

module.exports = mongoose.model('DropPoint', dropPointSchema);
