var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema1 = new schema({
    id: Number,
    name:String,
    img_url: String,
    size: String,
    price: String,
    logo: String,
    like: String,
    tags: Array
}, {collection:'meals'});

var mealsData = mongoose.model('mealsData', actionSchema1);

module.exports = mealsData;