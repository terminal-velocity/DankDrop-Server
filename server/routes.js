var express = require("express");

var router = express.Router();

router.use("client", express.static("frontend/"));

module.exports = router;
