const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost/FECreviews');
const db = mongoose.connect('mongodb://mongo:27017/FECreviews');
module.exports = db;