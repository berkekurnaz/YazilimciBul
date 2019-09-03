var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var mytestSchema = new Schema({
    name: String,
    photo: String,
});

module.exports = mongoose.model("mytest", mytestSchema);