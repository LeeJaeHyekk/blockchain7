const Sequelize = require("sequelize");
module.exports = class Table1 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        colum: {
          type: sequelize.STRING(10),
          // primarykey: true     // 고유 식별키 이냐?
          // autoIncrement: true // index 값 자동증가
          // unique: true,       //값이 중복이면 안된다.
          // allowNull: false    // 비면 안된다.
          // defaultvalue: Sequelize.now
        },
      },
      {
        sequelize, // 아래 값들을 넣어라
        timestamps: "true", // 테이블과 컬럼명을 카멜 케이스로 수정
        modelName: "NewTable1", //javascript에서 사용하는 테이블명
        tableName: "new_table", //MYSQL에 있는 테이블명
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {}
};
