const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const blogSchema = new mongoose.Schema({
  score: Number,
  body: String,
  author: String,
  authorImgUrl: String,
  createdAt: String,
  wasHelpful: {type: Number, default: 0},
  reported: Number,
},
  {
    timestamps: true
  }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
