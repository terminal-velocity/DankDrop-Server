var express = require("express");

var router = express.Router();

router.get("/api/test", require("./routes/api/test.js"));

module.exports = router;
