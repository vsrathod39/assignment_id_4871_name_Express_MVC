const express = require("express");
const Student = require("../models/students.model");

const router = express.Router();

router.post("/student", async (req, res) => {
    try {
        const item = await Student.create(req.body);
        return res.status(201).send({item});
    } catch (error) {
        return res.send({error: error.message, status: failed});
    }
});

router.get("/students", async (req, res) => {
    try {
        const items = await Student.find().lean().exec();
        return res.status(201).send({items});
    } catch (error) {
        return res.send({error: error.message, status: failed});
    }
});

module.exports = router;