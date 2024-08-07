const express = require("express");

const router = express.Router();

const { handlegenerateNewURL } = require("../controllers/url");

router.post("/", handlegenerateNewURL);

module.exports = router;
