const router = require("express").Router();

router.get("/", (req, res) => {
  // 응답을 보내는 매서드: 목록과 페이징,몇번째 페이지이고 총 몇페이지 인지
  // axios.get('/api/board')
  console.log(req.route);
  res.send(req.route + "get으로 받았다.");
});
router.post("/add", (req, res) => {
  // 추가하는 매서드
  // 게시판에 글 추가
  // axios.get('/api/board/add')
  res.send(req.route + "post으로 받았다.");
});
module.exports = router;
