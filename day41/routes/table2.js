const router = require("express").Router();

const { Table1, Table2 } = require("../models/index.js");

// GET / POST / PUT / PATCH / DELETE
// 위 5가지 방식으로 통신을 하는 방식?을 REST API 라고 한다.
// REST API = RESTFUL API = RESTFUL
// HTTP 통신, 즉 Web 통신을 할 때 기본적으로 사용되는 방식이다.
// REST API VS GraphGL << 요런 놈도 있긴 하다.

// 미들웨어
// next가 중요하다.
// router.use("/", (req, res, next) => {
//   res.cookie("middle", "testing", { expires: Date.now() + 1000 * 1 });
//   next();
// });
// 요 위가 미들 웨어다.

router.get("/", async (req, res) => {
  const { body, query } = req; // 구조분해할당
  const options = {};
  if (query.column3) {
    options.where = {
      // 어떤 조건으로 찾을거냐?
      column3: query.column3, // column2가 query.column2인 애를 찾겠다.
    };
  }
  const tempTables = await Table2.findAll(options);
  /*
  const tempTables = await Table2.findAll({
    where:{
      column2: query.column2
    }
  });
  */
  res.send({ name: "get", body, query, tempTables });
});

router.post("/", async (req, res) => {
  const { body, query } = req;
  if(body.column2){
    const tempTable1 = await Table1.findOne({
      where:{column2:body.column2},
    });
    
      column3: body.column3,
      column4: body.column4,

  }
  const tempTable = await Table2.create({
    column3: body.column3,
    column4: body.column4,
  });
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  // put은 수정 시 모든 항목 전부 수정을 요청
  const { body, query } = req;
  const tempTable = await Table2.update(
    {
      column3: body.column3,
      column4: body.column4,
      // 수정할 정보를 입력
    },
    {
      where: {
        id: body.id,
      },
    }
  );
  res.send({ name: "put", body, query, tempTable });
});

router.patch("/", async (req, res) => {
  // patch 수정 시 하나만 수정을 할 것을 요청
  const { body, query } = req;
  const tempTable = await Table2.update(
    { column3: body.column3 },
    {
      where: {
        id: body.id,
      },
    }
  );
  res.send({ name: "patch", body, query, tempTable });
});
router.patch("/associate", async (req, res) => {
  // patch 수정 시 하나만 수정을 할 것을 요청
  const { body, query } = req;
  const tempTable1 = await Table1.findOne({ where: { column2: body.column2 } });
  const tempTable2 = await Table2.findOne({ where: { id: body.id } });
  tempTable1.addTable2s(tempTable2);
  // Table1을 기준으로 Table2를 추가한다.
  // 추가할 때 메서드는
  res.send({ name: "patch", body, query, tempTable1 });
});

router.delete("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table2.destroy({
    where: {
      id: body.id,
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

// router.use('/user')
// router.get('/')
// router.post('/user')
// router.put('/user')
// router.patch('/user')
// router.delete('/user')

// router
//   .route("/")
//   .get((req, res) => {
//     res.end();
//   })
//   .post((req, res) => {
//     res.end();
//   })
//   .put((req, res) => {
//     res.end();
//   })
//   .patch((req, res) => {
//     res.end();
//   })
//   .delete((req, res) => {
//     res.end();
//   });

module.exports = router;
