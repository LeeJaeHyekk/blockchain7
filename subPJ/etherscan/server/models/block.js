const Sequelize = require("sequelize");
module.exports = class Block extends Sequelize.Model {
  static init(sequlize) {
    return super.init(
      {
        difficulty: {
          type: Sequelize.INT(255),
          allowNull: false,
        },
        extraData: {
          type: Sequelize.STRING(255),
        },
        gasLimit: {
          type: sequlize.INT(255),
        },
        gasUsed: {
          type: sequlize.INT(255),
        },
        hash: {
          type: sequlize.String(255),
          allowNull: false,
        },
        miner: {
          type: sequlize.String(255),
          allowNull: false,
        },
        mixHash: {
          type: sequlize.STRING(255),
        },
        number: {
          type: sequlize.INT(255),
          allowNull: false,
        },
        parentHash: {
          type: sequlize.STRING(255),
        },
        receiptsRoot: {
          type: sequlize.STRING(255),
        },
        size: {
          type: sequlize.INT(255),
        },
        stateRoot: {
          type: sequlize.STRING(255),
        },
        totalDifficulty: {
          type: sequlize.INT(255),
        },
      },
      {
        sequlize,
        modelName: "Block",
        tableName: "block",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
};
