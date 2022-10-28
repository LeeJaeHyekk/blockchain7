const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: { type: Sequelize.STRING(20), allowNull: false },
        text: { type: Sequelize.TEXT, allowNull: false },
      },
      {
        sequelize,
        timesramps: true,
        underscored: true,
        modelName: "board",
        tableName: "board",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Board.belongsTo(db.User, { foreignKey: "boards", targetKey: "id" });
    // db.Board.hasMany(db.Comment, {
    //   foreignKey: "board_id",
    //   sourceKey: "id",
    // });
  }
};
