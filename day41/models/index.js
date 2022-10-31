"use strict";
// 엄격모드 : ES6 안됨, var 안되고 빡쌔게 코드를 작성하겠다.

// DB의 Table에 관련해서 전부 관리한다.
// MVC << Model, View, Controller
// 프로그래밍의 기초?
// 디자인 패턴 중 하나로 보통의 프로그래밍에서 많이 사용된다.
// View : 보이는 거, Controller : 조작, 통제하는 거, Model : 저장하는 거

// Javascript 메서드 / mySQL문
// CRUD = squelize / mySQL
// Create = create() / INSERT
// Read = findAll() or findeOne() / SELECT
// Update = update() / UPDATE
// Delete = destroy() / DELETE

const Sequelize = require("sequelize");
// sequelize : 모든 DB에 연결한다. MongoDB(noSQL)등등
// noSQL = 관계 시스템이 없다.
// mysql2 : DB중에 mySQL에 연결

const Table1 = require("./table1.js");
const Table2 = require("./table2.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Table1, Table2 };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Table1.init(sequelize);
Table2.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// class A {
//   constructor(num) {
//     this.a = num;
//   }
//   test(num) {
//     console.log(num);
//   }
//   static testStatic(num) {
//     console.log(num);
//   }
// }
// const testA = new A();
// testA.test(1);
// // testA.testStatic(2);
// // A.test(1);
// A.testStatic(4);

// const tempDate = new Date()
// tempDate.getDate(); // 일반적인 메서드
// Date.now() // static 메서드

// class B extends A {
//   constructor() {
//     super(1);
//     this.b = 2;
//   }
// }
// console.log(new B());
