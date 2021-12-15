const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const studentSchema = new mongoose.Schema({
    current_batch: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
}, {
    timestamps: true,
    versionKey: false
});

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, {
  model: "student", // collection or table name in which you want to apply auto increment
  field: "roll_id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model("student", studentSchema);