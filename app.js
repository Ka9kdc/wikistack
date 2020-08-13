const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout.js");
const { db, Page, User } = require("./models");
const router = require("./models/index.js");

const app = new express();
db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.static("public"));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/user", require("./routes/user.js"));
app.use("/wiki", require("./routes/wiki.js"));
app.get("/", function (req, res) {
  console.log("test1");
  res.redirect("/wiki");
  console.log("test2");
});
app.use("/", (req, res) => {
  res.send(layout(""));
});

const init = async () => {
  await Page.sync();
  await User.sync();

  app.listen(1432, () => {
    console.log("up and running on port 1432");
  });
};

init();
