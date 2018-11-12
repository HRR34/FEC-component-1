const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost/FECreviews');
// const db = mongoose.connect('mongodb://mongo:27017/FECreviews');
const db = mongoose.connect(process.env.MONGO_URI);
module.exports = db;