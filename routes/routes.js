const express = require("express");
const Excuse = require("../schemas/excusses.js");
const router = express.Router();

/**
 * @swagger
 * /exucesses:
 *   get:
 *     summary: Отримати всі відмазки
 *     responses:
 *       200:
 *         description: Список відмазок
 */

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

/**
 * @swagger
 * /situations:
 *   get:
 *     summary: Отримати всі ситуації
 *     responses:
 *       200:
 *         description: Список ситуацій
 */

router.get("/situations", async (req, res) => {
    try {
        const excusses = await Excuse.find({}, { situation: 1, _id: 1 });
        res.status(200).send(excusses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

/**
 * @swagger
 * /all-exucess_and_situations:
 *   get:
 *     summary: Отримати всі дані
 *     responses:
 *       200:
 *         description: Повний список
 */

router.get("/all-exucess_and_situations", async (req, res) => {
    try {
        const excusses = await Excuse.find();
        res.status(200).send(excusses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

/**
 * @swagger
 * /exucesses/add:
 *   post:
 *     summary: Додати нову відмазку
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               situation:
 *                 type: string
 *               excuseText:
 *                 type: string
 *               category:
 *                 type: string
 *               riskLevel:
 *                 type: string
 *     responses:
 *       201:
 *         description: Успішно створено
 */

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

/**
 * @swagger
 * /find-excuse/{category}/{riskLevel}:
 *   get:
 *     summary: Знайти відмазку по категорії і ризику
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: riskLevel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Знайдені відмазки
 */

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
