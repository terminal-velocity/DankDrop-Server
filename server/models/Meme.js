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
  dropPoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DropPoint"
  }
},
{
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

memeSchema
.virtual('computedScore')
.get(function(){
  if(this.votes){
    if(this.votes.length){
      return this.votes.reduce(function(a, b){return a + b}) / this.votes.length;
    }
    else{
      return 0;
    }
  }
  else{
    return 0;
  }
});

module.exports = mongoose.model("Meme", memeSchema);
