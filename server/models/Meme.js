var mongoose = require('mongoose')

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
  votes: [Number],
  computedScore: Number,
  dropPoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DropPoint"
  }
});

memeSchema
.virtual('votes.average')
.get(function () {
  return this.votes.reduce(function(a, b){return a + b}) / this.votes.length;
});

module.exports = mongoose.model("Meme", memeSchema);
