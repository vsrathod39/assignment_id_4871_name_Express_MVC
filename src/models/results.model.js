const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    student_id: {type: mongoose.Schema.Types.ObjectId},
    results: [{
        evalution_id: {type: mongoose.Schema.Types.ObjectId},
        mark: {type: mongoose.Schema.Types.ObjectId}
    }]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("result", resultSchema);