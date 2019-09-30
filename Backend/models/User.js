var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    job: String,
    description: String,
    photo: String,

    mail: String,
    phone: String,

    country: String,
    city: String,
    address: String,

    username: String,
    password: String,
    isConfirm: Boolean,

    createdDate: {
        type: Date,
        default: Date.now
    },
    lastLoginDate: String,
});

module.exports = mongoose.model("user", userSchema);