const router = require("express").Router();

const board = require("./board.js");
const user = require("./user.js");

router.use("/user", user);
router.use("/board", board);

module.exports = router;
