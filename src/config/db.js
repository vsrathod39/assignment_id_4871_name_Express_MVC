const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://vsrathod39:Vsr0199@cluster0.1ften.mongodb.net/student_evaluation_4871");
};