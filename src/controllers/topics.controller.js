const express = require("express");
const Topics = require("../models/topics.model");
const { route } = require("./students.controller");

const router = express.Router();

router.post("/topic", async (req, res) => {
    try {
        const item = await Topics.create(req.body);
        return res.status(201).send({item});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/topics", async (req, res) => {
    try {
        const items = await Topics.find().lean().exec();
        return res.status(201).send({items});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

module.exports = router;