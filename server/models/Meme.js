var mongoose = require('mongoose')

var voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  rating: {
    type: Number
  }
});

var memeSchema = new mongoose.Schema({
  img: {
    data: {
      type: Buffer
    },
    mime: {
      type: String
    }
  },
  name: {
    type: String
  },
  votes: [voteSchema],
  dropPoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DropPoint"
  }
});

module.exports = mongoose.model("Meme", memeSchema);
