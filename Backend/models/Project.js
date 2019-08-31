var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema({
    developer_id: Schema.Types.ObjectId,
    projectName: String,
    description: String,
    month: String,
    year: String,
    projectUrl: String,
    projectPhoto: String,
});

module.exports = mongoose.model("project", projectSchema);