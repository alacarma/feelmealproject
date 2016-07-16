var express = require('express');
var app = express();
var getMTags = require('./getMealTags');
var getMDetail = require('./getMealsdata');
var getUDt = require('./userData');
var getProf = require('./users');
var bodyParser = require('body-parser');
var getMeal = require('./meals')

var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/',express.static('./public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});

app.get('/getTagsData', getMTags.getData);
app.get('/getTagsDetails', getMTags.getTagNames);
app.get('/getMealsData', getMDetail.getmealsData);
//app.post('/profile' , getUDt.saveUser);
app.post('/profile',function(req,res){
    console.log(req.body);
    var tempJson = new getProf(req.body);
//tempJson.timeJoined = moment();//TODO: can use Date.now() - to see later
    tempJson.save(function(err , doc){
        if(err) {
            console.log(err);// TODO: take care of error
            res.status(200).json({'status' : "error"});
        }
        else {
            console.log('user added');
            res.status(200).json({'status' : "ok"});
        }
        });
});

app.post('/addLike', function(req, res) {
    var mailad = req.body.d;
    var value =  req.body.b;
    var urlval = req.body.a;
    var liVal = req.body.c;
    console.log(value);
getProf.findOne({email: mailad }, function(err,doc) {
    
        if(!doc) {
            //not found
        }else{
            //found
            getProf.count({likes: value}, function(err,count) {
                if(count>0) {
                    console.log("Already exists"); 
                    doc.update({
                        $pop: {likes: value}
                    }).exec(function(err, res) {
                        console.log(doc.likes);

                    });                    
                }
                else {
                    doc.update({
                        $push: {likes: value}
                    }).exec(function(err, res) {
                        console.log(doc.likes);

                    });                     
                }
            })

          
        }
    });
    getMeal.findOne({id: value }, function(err,doc) {
        if(!doc) {
            //not found
        }else{
            //found
        //if(getMeal.find({id: value, counter: liVal}) == 0){
         if(doc.counter == 0) {
            doc.update({
                $set: {like: "images/like.png", counter: 1}
            }).exec(function(err, res) {
                console.log('added');
            });
        }
        else {
            doc.update({
                $set: {like: "images/dislike.png", counter: 0}
            }).exec(function(err, res) {
                console.log('removed');
            });
        } 
    console.log(doc.counter);
    }
    });    
    res.status(200).json({'status' : "ok"});

});

app.listen(port);

console.log("service is listening on port" + port);