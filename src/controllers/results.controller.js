const express = require("express");
const Result = require("../models/results.model");
const User = require("../models/users.model");

const router = express.Router();

router.post("/result", async (req, res) => {
    try {
        const item = await Result.create(req.body);
        return res.status(201).send({item});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/results", async (req, res) => {
    try {
        const items = await Result.find().populate("student_id").lean().exec();
        let finalItem = [];
        items.map((obj) => {
            obj.results.map((resultDet) => {
                if(resultDet.evalution_id.toString() === req.body.evalution_id){
                    finalItem.push(obj);
                    return;
                }
            });
        });
        let sendRes = []; 
        for(let i = 0; i < finalItem.length; i++){
            sendRes.push(await User.findById(finalItem[i].student_id.user_id).lean().exec());
        }
        for(let i = 0; i < sendRes.length; i++){
            sendRes[i].results = finalItem[i].results;
        }
        return res.status(201).send({Students: sendRes});
    } catch (error) {
        return res.send({error: error.message, status: "failed"});
    }
});

router.get("/highscore", async (req, res) => {
    try {
        let items = await Result.find().populate("student_id").lean().exec();
        let finalItem = [];
        items.map((obj) => {
            obj.results.map((resultDet) => {
                if(resultDet.evalution_id.toString() === req.body.evalution_id){
                    finalItem.push(obj);
                    return;
                }
            });
        });
        items = finalItem[0];
        finalItem.map((obj) => {
            obj.results.map((resultDet) => {
                if(resultDet.mark > items.results[0].mark){
                    items = obj;
                    return;
                }
            });
        });
        items = await User.findById(items.student_id.user_id).lean().exec();
        return res.status(201).send({Students: items});
    } catch (error) {
        return res.send({error: error.message, status: "failed"});
    }
});

module.exports = router;