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

app.get('/ws_todo/getTagsData', getMTags.getData);
app.get('/ws_todo/getTagsDetails', getMTags.getTagNames);
app.get('/ws_todo/getMealsData', getMDetail.getmealsData);

app.listen(port);

console.log("service is listening on port" + port);