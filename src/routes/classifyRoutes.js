const express = require("express");
const router = express.Router();
const { classifyNumber } = require("../utils/numberUtils");

router.get("/classify-number", async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const result = await classifyNumber(num);

    return res.json(result);
});

module.exports = router;