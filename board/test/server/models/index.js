const Sequlize = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];
const Board = require("./board");
const db = { Board };

let sequelize = new Sequlize(
  config.database,
  config.username,
  config.password,
  config
);

Board.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequlize = Sequlize;

module.exports = db;
