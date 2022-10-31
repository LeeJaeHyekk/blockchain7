const Sequelize = require("sequelize");

module.exports = class Table2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        column3: {
          type: Sequelize.STRING(255),
        },
        column4: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        paranoid: false,
        modelName: "Table2",
        tableName: "table2",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Table2.belongsTo(db.Table1, {
      // belongsTo 하위 개념 Table1이 Table2를 가지고 있다.
      foreignKey: "table1_colum2",
      // 연결하는 키
      targetKey: "column2",
      // 상대한테 받아올 키(컬럼)
    });
    // n:m
    // 다른 테이블과 연결되야 익숙하다.
    // 같은 테이블과 연결되어야 익숙하다. 친추 => user:user
    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      as: "table2s",
    });
  }
};
