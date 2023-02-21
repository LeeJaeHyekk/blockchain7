const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blockNumber: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        chainId: {
          type: Sequelize.STRING(255),
        },
        from: {
          type: Sequelize.STRING(255),
        },
        gas: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        gasPrice: {
          type: Sequelize.STRING(255),
        },
        hash: {
          type: Sequelize.STRING(255),
        },
        nonce: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        to: {
          type: Sequelize.STRING(255),
        },
        transactionIndex: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        value: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Transaction", // class name
        tableName: "transaction",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
  static associate(db) {
    db.Transaction.belongsTo(db.Block, {
      foreignKey: "number",
      targetKey: "number",
    });
  }
};
