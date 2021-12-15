const moongoose = require("mongoose");

const evalutionSchema = new moongoose.Schema({
    date_of_evaluation: {type: String, required: true},
    instructor: {type: moongoose.Schema.Types.ObjectId, ref: "user", required: true},
    topic: {type: moongoose.Schema.Types.ObjectId, ref: "topic", required: true}
});

module.exports = moongoose.model("evaltion", evalutionSchema);