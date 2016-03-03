var mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  color: {
    type: String,
    required: true
  },

  style: {
    type: String,
    required: true
  },

  size: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('bikes', BikeSchema);   