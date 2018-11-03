const express = require('express');
const bodyParser = require('body-parser');
const Reviews = require('../db/Review.js');
//const db = require('../db/index.js');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

//get the records of reviews from db (all for now)
app.get('/reviews', function(req, res) {
  let courseId = Number(req.query.courseId)
  Reviews
    .find({course: courseId})
    .sort({'createdAt': -1})
    .exec(function(error, reviews){
      if (error){
        console.log('ERROR, failed to read reviews from the DB', error)
      }
        res.status(200).send(JSON.stringify(reviews))
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});