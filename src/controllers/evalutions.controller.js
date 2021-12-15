const express = require("express");
const Evalution = require("../models/evalutions.model");

const router = express.Router();

router.post("/evalution", async (req, res) => {
    try {
        const item = await Evalution.create(req.body);
        return res.status(201).send({item});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/evalutions", async (req, res) => {
    try {
        const items = await Evalution.find().lean().exec();
        return res.status(201).send({items});
    } catch (error) {
        return res.send({error: error.message, status: "failed"});
    }
});

module.exports = router;