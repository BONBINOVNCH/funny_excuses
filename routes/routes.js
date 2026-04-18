const express = require("express");
const Excuse = require("../schemas/excusses.js");
const router = express.Router();

router.get("/exucesses", async (req, res) => {
    try {
        const excusses = await Excuse.find(
            {},
            { excuseText: 1, category: 1, riskLevel: 1, _id: 1 },
        );
        res.status(200).send(excusses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.get("/situations", async (req, res) => {
    try {
        const excusses = await Excuse.find({}, { situation: 1, _id: 1 });
        res.status(200).send(excusses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.get("/all-exucess_and_situations", async (req, res) => {
    try {
        const excusses = await Excuse.find();
        res.status(200).send(excusses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.post("/exucesses/add", async (req, res) => {
    try {
        const { situation, excuseText, category, riskLevel } = req.body;

        const excuse = new Excuse({
            situation,
            excuseText,
            category,
            riskLevel,
        });

        const savedExcuse = await excuse.save();

        res.status(201).json(savedExcuse);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.get("/find-excuse/:category/:riskLevel", async (req, res) => {
    try {
        const { category, riskLevel } = req.params;
        const excuse = await Excuse.find({ category, riskLevel }, {});
        res.status(200).send(excuse);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;
