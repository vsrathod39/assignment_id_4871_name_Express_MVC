const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    student_id: {type: mongoose.Schema.Types.ObjectId, ref: "student", required: true},
    results: [{
        evalution_id: {type: mongoose.Schema.Types.ObjectId, ref: "evaltion", required: true},
        mark: {type: Number, required: true}
    }]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("result", resultSchema);