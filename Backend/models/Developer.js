var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var developerSchema = new Schema({
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

    mediaWebsite: String,
    mediaGithub: String,
    mediaLinkedin: String,
    mediaMedium: String,

    developerSkills: String,

    username: String,
    password: String,
    isConfirm: Boolean,

    createdDate: String,
    lastLoginDate: String,
});

module.exports = mongoose.model("developer", developerSchema);