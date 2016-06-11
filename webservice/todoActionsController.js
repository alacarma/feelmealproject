var mongoose = require('mongoose');
var Action = require('./action');

exports.getData = function(req,res) {
    Action.find({}).where('action').ne('PRIVATE').exec(function(err,docs) {
        actionsData = docs;
        console.log("doc:" + docs);
        res.json(docs);
        return;
    });
}

var newtodoAction = new Action({
    action: "learn Nodejs",
    done:true
});

exports.saveData = function(req,res) {
    newtodoAction.save(function(err,doc) {
        if(err)
            console.log(err);
        else {
            console.log("\nSaved document:" + doc);
            res.json(doc);
            return;
        }
    });
}