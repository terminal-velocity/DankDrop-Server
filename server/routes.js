var express = require("express");

var router = express.Router();

// User routes
router.post("/api/user", require("./routes/api/user/post.js"));

router.use("client", express.static("frontend/"));

module.exports = router;
