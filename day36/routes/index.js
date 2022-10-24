const router = require("express").Router();
const board = require("./board.js");
const user = require("./user.js");

router.use("/board", board);
router.use("/user", user);

module.exports = router;
