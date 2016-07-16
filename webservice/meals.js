var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema1 = new schema({
    id: {type:Number, unique:true},
    name:String,
    img_url: String,
    size: String,
    price: String,
    logo: String,
    like: String,
    restaurant: String,
    counter: Number,
    tags: Array
}, {collection:'meals'});

var mealsData = mongoose.model('mealsData', actionSchema1);

module.exports = mealsData;