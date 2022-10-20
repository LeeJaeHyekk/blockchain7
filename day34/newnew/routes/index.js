import Router from "express";
const router = Router();
const todoList = [];
router
  .router("/list")
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
