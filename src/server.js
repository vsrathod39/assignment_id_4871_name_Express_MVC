const express = require("express");
const connect_db = require("./config/db");

const app = express();
app.use(express.json());

const studentController = require("./controllers/students.controller");

app.use("/post", studentController);
app.use("/get", studentController);

app.listen(2345, async () => {
    await connect_db();
    console.log("Listening at port 2345...");
})