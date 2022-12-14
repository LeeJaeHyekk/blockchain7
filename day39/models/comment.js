const Sequelize = require("sequelize");
module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        text: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Comnent",
        tableName: "comments",
        paranoid: true,
        charset: "utfmb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Comment.belongsTo(db.Board, { foreignKey: "board_id", targetKey: "id" });
  }
};
