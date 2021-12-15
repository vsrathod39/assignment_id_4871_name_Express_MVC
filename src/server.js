const express = require("express");
const connect_db = require("./config/db");

const app = express();
app.use(express.json());

const studentController = require("./controllers/students.controller");
const topicController = require("./controllers/topics.controller");
const evalutionController = require("./controllers/evalutions.controller");
const resultController = require("./controllers/results.controller");

app.use("/post", studentController);
app.use("/get", studentController);

app.use("/post", topicController);
app.use("/get", topicController);

app.use("/post", resultController);
app.use("/get", resultController);



app.listen(2345, async () => {
    await connect_db();
    console.log("Listening at port 2345...");
})