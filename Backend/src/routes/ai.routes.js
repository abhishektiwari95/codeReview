const express = require('express');
const aiController = require("../controllers/ai.controllers");
const router = express.Router();

router.get("/get-responce",aiController.getResponse);







module.exports = router;

