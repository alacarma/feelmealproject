var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema({
    id: {type:Number, required:true, unique:true},
    name: String,
    title: String,
    stitle: String,
    image_url: String
}, {collection:'tags'});

var mealTags = mongoose.model('mealTags', actionSchema);

module.exports = mealTags;