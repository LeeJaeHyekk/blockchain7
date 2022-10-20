const Router = require("express");
const router = Router();
const todoList = [];
router
  .route("/list")
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    todoList.push({ text: req.body["do-name"], time: req.body.time });
    res.end();
  })
  .put((req, res) => {})
  .delete((req, res) => {});
export default router;
// module
// post = body에 저장 , get = 허리에 저장//
//      /      / /
