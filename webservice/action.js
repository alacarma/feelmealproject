var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema({
    action: {type:String, index:1, required:true, unique:true},
    done:Boolean
}, {collection:'todo'});

var Action = mongoose.model('Action', actionSchema);

module.exports = Action;