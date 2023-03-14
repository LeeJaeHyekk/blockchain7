const Sequelize = require("sequlize");
module.exports = class Block extends Sequelize.Model {
  static init(sequlize) {
    return super.init(
      {
        hash: {
          type: Sequelize.STRING(255),
        },
        nonce: {
          type: Sequelize.INT(255),
        },
        blockHash: {
          type: Sequelize.STRING(255),
        },
        blockNumber: {
          type: Sequelize.INT(255),
        },
        transactionIndex: {
          type: Sequelize.INT(255),
        },
        from: {
          type: Sequelize.STRING(255),
        },
        to: {
          type: Sequelize.STRING(255),
        },
        value: {
          type: Sequelize.STRING(255),
        },
        gas: {
          type: Sequelize.INT(255),
        },
        gasPrice: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequlize,
        modelName: "Transaction",
        tableName: "transaction",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
};
