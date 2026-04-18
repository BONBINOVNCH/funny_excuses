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

module.exports = router;
