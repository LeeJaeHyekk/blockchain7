const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        difficulty: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        extraData: {
          type: Sequelize.STRING(255),
        },
        gasLimit: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        gasUsed: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        hash: {
          type: Sequelize.STRING(255),
        },
        logsBloom: {
          type: Sequelize.STRING(255),
        },
        miner: {
          type: Sequelize.STRING(255),
        },
        mixhash: {
          type: Sequelize.STRING(255),
        },
        nonce: {
          type: Sequelize.STRING(255),
        },
        number: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        parenthash: {
          type: Sequelize.STRING(255),
        },
        receiptsroot: {
          type: Sequelize.STRING(255),
        },
        sha3uncles: {
          type: Sequelize.STRING(255),
        },
        size: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        stateroot: {
          type: Sequelize.STRING(255),
        },
        timestamps: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        totaldifficulty: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        transactions: {
          type: Sequelize.STRING(255),
        },
        transactionsroot: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Block", // class name
        tableName: "block",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
};
