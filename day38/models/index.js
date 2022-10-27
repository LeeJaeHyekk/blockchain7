"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const NewTable11 = require("./table1.js");

const db = { NewTable11 };

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.passwoed,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

NewTable11.init(sequelize);
NewTable11.associate(db);

module.exports = db;
