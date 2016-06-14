var express = require('express');
var app = express();
var getMTags = require('./getMealTags');
var getMDetail = require('./getMealsdata');
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/',express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});

app.get('/getTagsData', getMTags.getData);
app.get('/getTagsDetails', getMTags.getTagNames);
app.get('/getMealsData', getMDetail.getmealsData);

app.listen(port);

console.log("service is listening on port" + port);