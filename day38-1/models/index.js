"use strict";

const Sequelize = require("sequelize");
// sequelize : 연결한다, ORM 라이브러리 이며, 자바스크립트 객체와 관계형 데이터베이스를

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const Table = require("./table.js");
const db = { Table };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

Table.init(sequelize);
Table.associate(sequelize);

module.exports = db;
