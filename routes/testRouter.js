const express = require("express");
const router = express.Router();

router.use(express.json());

router.route("/").get((req, res) => {
  res.send("Hello Test");
});

module.exports = router;
