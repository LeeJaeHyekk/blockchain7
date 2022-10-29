const dotenv = require("dotenv");
const db = require("./models/index.js");
//
dotenv.config();
//------------------------------------------
db.sequelize
  .sync({ force: false })
  // 기존의 테이블을 건들지 않습니다.
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });
