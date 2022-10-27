const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  // static => class 를 new 하지 않고 메서드를 불러온다.
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
        // int 고유 식별키 index값 자동완성
        name: {
          type: Sequelize.STRING(45),
          allowNull: true, //int
        },
        pw: {
          type: Sequelize.STRING(45),
          allowNull: true, // id varchar()
        },
        // password: {
        //   type: Sequelize.STRING(256),
        //   allowNull: true,
        // },
        id: {
          type: Sequelize.STRING(45),
          allowNull: true, // id varchar()
        },
        // create_at: {
        //   //create_ at
        //   type: Sequelize.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.NOW,
        // },
      },
      {
        sequelize, // 기본으로 넣어라
        timestamps: true, // creat , updateAt 자동으로 추가
        underscored: true, // 테이블과 컬럼명을 카멜 케이스로 수정
        modelName: "NewTable11", // javascript에서 사용하는 테이블명
        tableName: "new_table11", // MYSQL 에 있는 데이블명
        paranoid: false, // 삭제 시 deleteAT을 저장할지 , 테이블 에서 데이터를 삭제 시 아예 삭제를 할것 인가 ? 아니면 삭제할 날짜를 남길으로써 데이터를 남길것인가
        charset: "utf8mb4", // 언어 포멧 설정
        collate: "utf8mb4_general_ci", // 언어 포멧 설정
      }
    );
  }
  static associate(db) {}
};
