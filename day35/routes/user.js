const router = require("express").Router();
const { algo } = require("crypto-js");
const crypto = require("crypto-js");
const userArr = {};
// 배열로 받겠다.  <= 객체로 받는다
const jwt = require("jsonwebtoken");
router.post("/regist", (req, res) => {
  const tempJWT = jwt.sign({ name: "test" }, "asdasdasdas", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "jjh",
  });
  const tmepData = jwt.verify(tempJWT, "asdasdasdasdasd"); // jwt파싱

  // 쿠키는 임시 데이터를 브라우저에 임시 저장한다.
  // 크롬에서 로그인한거 쿠키에 남아있겠지? >> 파이어 폭스에서 연동될까?
  // >> 안된다. 왜? 데이터 저장공간이 다르다, 즉 쿠키 저장한 파일이 다르다.
  // const cookie_name = "cookie_name", cookie_data="now testing"
  // res.cookie("cookie_name","now testing",{}) == 동일 (변수에 넣어서 집어 넣는것만 다름)
  res.cookie("cookie_name", "now testing", {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    // 응답으로 쿠키추가
    // 단위가 ms다, 1ms = 0.001s => 1000ms =1s
    // 10*60*1000 << 1000 =>1s *60 => 1m*10 => 10분
    // 30초로 수정 30*1000
  });
  //   쿠키추가
  // "regist"경로에서 post방식으로  응답과 대답을 하는데
  if (!userlist([req.body.id])) {
    // id 입력값이 없을때 , 뒤에 실행
    userlist[req.body.id] = crypto.SHA256(req.body.pw).toString();
    // 유저 리스트에 입력된 아이디에 해당하는  비밀번호를 저장한다.
    res.send({ status: 200, data: "regist" });
    // 그리고 status:200 , regist 라고 보낸다.
  } else {
    res.send({ status: 402, data: "exist id" });
    // 위의 상황이 아니라면 중복됬다고 입력
  }
  //   userArr.push(req.body);
});
router.post("/login", (req, res) => {
  console.log(req.cookies.cookie_name);
  // 요청을 통해 받은 쿠키를
  // 로그인 경로의 post방식으로 들어오는 req ,res는
  // if(userArr.find((data)=>data.id ===req.body.id)?.pw === req.body.pw)
  //    배열로 했었을때

  if (userlist[req.body.id] === crypto.SHA256(req.body.pw).toString()) {
    // req.body.pw
    // 만약 유저리스트의 아이디에 해당하는 비밀번호가 같다면
    res.send({ status: 200, data: "login" });
  } else {
    res.send({ status: 401, data: "wrong passwoed" });
  }
});

module.exports = router;

// list["중괄호 안에 입력값을 받아온다."] =={ 객체 안에 (name,pw,id)
// }
