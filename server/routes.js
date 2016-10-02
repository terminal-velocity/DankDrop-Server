var express = require("express");

var router = express.Router();

// DropPoint routes
router.get("/api/dropPoint/:id/", require("./routes/api/dropPoint/get.js"));
router.put("/api/dropPoint/:id/", require("./routes/api/dropPoint/put.js"))

// DropPoints routes
router.get("/api/dropPoints/", require("./routes/api/dropPoints/get.js"));
router.post("/api/dropPoints/", require("./routes/api/dropPoints/post.js"));

// Meme routes
router.get("/api/meme/:id/",  require("./routes/api/meme/get.js"));
router.delete("/api/meme/:id/",  require("./routes/api/meme/delete.js"));
router.get("/api/meme/:id/img",  require("./routes/api/meme/img/get.js"));
router.post("/api/meme/:id/vote",  require("./routes/api/meme/vote/post.js"));

// Memes routes
router.get("/api/memes/",  require("./routes/api/memes/get.js"));
router.post("/api/memes/",  require("./routes/api/memes/post.js"));

router.use("/client", express.static("frontend/"));

module.exports = router;
