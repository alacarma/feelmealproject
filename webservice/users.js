var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = new schema({
    email: String,
    id: {type:String, unique:true},
    name: String,
    likes: [Number]
}, {collection:'users'});

var UserS = mongoose.model('UserS', UserSchema);

module.exports = UserS;