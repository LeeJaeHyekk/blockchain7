const dotenv = require("dotenv");
const db = require("./models/index.js");
dotenv.config();
// -----------------------------------------------
db.sequelize
  .sync({ focus: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
