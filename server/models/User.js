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
		type: String
	},
  memesIds: {
      type: [String]
  },
  created: {
      type: Date,
      default: Date.now
  }
});

userSchema.methods.checkPassword = function(password){
	return this.password == password;
}

module.exports = mongoose.model('User', userSchema);
