const express = require("express");
const Excuse = require("../schemas/excusses.js");
const router = express.Router();

router.get("/exucesses", async (req, res) => {
    try {
        const excusses = await Excuse.find();
        res.status(200).send({
            message: "все ок",
        });
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;
