const express = require("express");
const router = express.Router();
const { Page } = require('../models');
const addPage= require("../views/addPage.js");

router.get("/", (req, res) => {
  res.send("get");
});

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const slug = title.replace(/\W/g, '_');

  console.log(slug)
  try {
    const page = await Page.create({
      title,
      content,
      slug
    })
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(addPage(""));
});

module.exports = router;
