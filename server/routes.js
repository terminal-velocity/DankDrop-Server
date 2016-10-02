var express = require("express");

var router = express.Router();

// User routes
router.post("/api/user", require("./routes/api/user/post.js"));

// DropPoint routes
router.get("/api/dropPoints/by-uuid/:id", require("./routes/api/dropPoints/by-uuid/get.js"));
router.post("/api/dropPoints/", require("./routes/api/dropPoints/post.js"));

// Meme routes
router.post("/api/meme/",  require("./routes/api/meme/post.js"));
router.get("/api/meme/:id/img",  require("./routes/api/meme/img/get.js"));

router.use("/client", express.static("frontend/"));

module.exports = router;
