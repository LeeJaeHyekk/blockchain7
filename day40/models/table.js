const Sequelize = require("sequelize");
module.exports = class Table extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        column: { type: Sequelize.STRING(10) },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "NewTable1",
        tableName: "new_table1",
        paranoid: false,
      }
    );
  }
  static associate(db) {}
};
