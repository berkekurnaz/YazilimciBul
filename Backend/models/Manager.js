var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var managerSchema = new Schema({
    name: String,
    surname: String,
    description: String,
    
    username: String,
    password: String,

    mail: String,
    phone: String,

    apikey: String,
});

module.exports = mongoose.model("manager", managerSchema);