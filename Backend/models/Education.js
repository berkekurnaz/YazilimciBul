var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var educationSchema = new Schema({
    developer_id: Schema.Types.ObjectId,
    schoolName: String,
    department: String,
    degree: String,
    startYear: String,
    endYear: String,
    description: String,
});

module.exports = mongoose.model("education", educationSchema);