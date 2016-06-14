var mongoose = require('mongoose');
var mealTags = require('./tags');

exports.getData = function(req,res) {
    mealTags.find({}).exec(function(err,docs) {
        actionsData = docs;
        console.log("doc:" + docs);
        res.json(docs);
        return;
    });
};

exports.getTagNames = function(req,res) {
    mealTags.find({}).select('name -_id').exec(function(err,docs) {
        MealsData = docs;
        console.log("doc:" + docs);
        res.json(docs);
        return;
    });
};
