var express = require("express");

var router = express.Router();

// User routes
router.post("/api/user", require("./routes/api/user/post.js"));

//dropPoints routes
router.post("/api/dropPoints/by-uuid/:id", require("./routes/api/dropPoints/by-uuid/get.js"));

router.use("client", express.static("frontend/"));

module.exports = router;
