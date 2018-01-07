var mongoose = require('mongoose');
/*
var mongoDB = 'mongodb://127.0.0.1:27017/my_database';
var mongoDB = 'mongodb://127.0.0.1:27017/local_library';
mongoose.connect(mongoDB,{
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('open', console.log.bind(console, "MongoDB connection started"));
db.on('error',console.error.bind(console, 'MongoDB connection error:'));
*/
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);
