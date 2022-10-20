const Router = require("express");
const router = Router();
const todoList = [];
router
  .router("/lists")
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    todoList.push({ text: req.body["do-name"], time: req.body.time });
    res.end();
  })
  .put((req, (res) => {}))
  .delete((req, res) => {});
export default router;
