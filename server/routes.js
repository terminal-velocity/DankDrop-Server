var express = require("express");

var router = express.Router();

router.get("/api/test", require("./routes/api/test.js"));

router.use("client", express.static("frontend/"));

module.exports = router;
