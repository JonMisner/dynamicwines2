const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WineSchema = new Schema({

  wine_name: {
    type: String,
    trim: true,
  },

  year: {
    type: String,
    trim: true,
  },

  color: {
    type: String,
    trim: true,
  },

  variety: {
    type: String,
    trim: true,
  },

grape: {
    type: String,
    trim: true,
  },

grape_detail: {
    type: String,
    trim: true,
  },

full_name: {
    type: String,
    trim: true,
  },

country: {
    type: String,
    trim: true,
  },

region: {
    type: String,
    trim: true,
  },

PPB: {
    type: String,
    trim: true,
  },

PPG: {
    type: String,
    trim: true,
  },

details: {
    type: String,
    trim: true,
  },

  wineCreated: {
    type: Date,
    default: Date.now
  }
});

const Wine = mongoose.model("Wine", WineSchema);

module.exports = Wine;