const moongoose = require("mongoose");

const evalutionSchema = new moongoose.Schema({
    date_of_evaluation: {type: String, required: true},
    instructor: {type: moongoose.Schema.Types.ObjectId},
    topic: {type: moongoose.Schema.Types.ObjectId}
});

module.exports = moongoose.model("evaltion", evalutionSchema);