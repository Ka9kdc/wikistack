const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "Lorem ipsum",
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: "open",
  },
});

// Page.beforeValidation()

module.exports = {
  db,
  User,
  Page,
};
