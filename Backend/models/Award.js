var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var awardSchema = new Schema({
    developer_id: Schema.Types.ObjectId,
    title: String,
    description: String,
    year: String,
    awardUrl: String,
});

module.exports = mongoose.model("award", awardSchema);