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
  //console.log(req.query)
  let courseId = Number(req.query.courseId)
  Reviews
    .find({course: courseId})
    .sort({'createdAt': -1})
    .limit(Number(req.query.showNumber))
    .exec(function(error, reviews){
      if (error){
        console.log('ERROR, failed to read reviews from the DB', error)
      }
        res.status(200).send(JSON.stringify(reviews))
    })
});

//search results

app.get('/reviews/search', function(req, res) {
  let courseId = req.query.courseId
  let search = req.query.search

  Reviews
    .find({course: courseId, body: new RegExp(search, 'i') })
    .sort({'createdAt': -1})
    .exec(function(error, reviews){
      if (error){
        console.log('ERROR, failed to read reviews from the DB', error)
      }
        console.log(reviews, '++++++++++++++++++++++++')
        res.status(200).send(JSON.stringify(reviews))
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});