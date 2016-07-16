var mongoose = require('mongoose');
var getProf = require('./users');

exports.saveUser = function(req,res) {
    var tempJson = new getProf(req.body);
//tempJson.timeJoined = moment();//TODO: can use Date.now() - to see later
    tempJson.save(function(err , doc){
        if(err) {
            console.log(err);// TODO: take care of error
            res.status(200).json({'status' : "error"});
        }
        else {
            //SittersData.insertSitter(req.body);
            console.log('user added');
            res.status(200).json({'status' : "ok"});
        }
        });


    

};
