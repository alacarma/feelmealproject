var mongoose = require('mongoose');
var mealTags = require('./meals');

exports.getmealsData = function(req,res) {
    mealTags.find({}).exec(function(err,docs) {
        actionsData = docs;
        console.log("doc:" + docs);
        res.json(docs);
        return;
    });
}
