var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var jobSchema = new Schema({
    developer_id: Schema.Types.ObjectId,
    company: String,
    title: String,
    description: String,
    startYear: String,
    endYear: String,
});

module.exports = mongoose.model("job", jobSchema);