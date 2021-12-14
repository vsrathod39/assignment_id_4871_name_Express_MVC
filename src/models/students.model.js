const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    roll_id: {type: String, required: true},
    current_batch: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("student", studentSchema);