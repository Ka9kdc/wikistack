const express = require("express");
const router = express.Router();
const html = require("../views/addPage.js");

router.get("/", (req, res) => {
  res.send("get");
});

router.post("/", (req, res) => {
  res.send("submit");
});

router.get("/add", (req, res) => {
  res.send(html(""));
});

module.exports = router;
