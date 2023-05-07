const express = require("express");
const app = express();

// 간단한 데이터 저장소
const diaryEntries = [
  { title: "첫 번째 일기", content: "오늘은 날씨가 좋았다." },
  { title: "두 번째 일기", content: "오늘은 비가 왔다" },
  { title: "세 번째 일기", content: "학원갈 시간이 왔다" },
];

app.get("/", (req, res) => {
  let diaryText = `<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>일기</title>
    </head>
    <body>`;

  // 각 일기 항목을 텍스트로 변환
  for (const entry of diaryEntries) {
    diaryText += `<div><h1>${entry.title}</h1>\n<p>${entry.content}</p></div>\n\n`;
  }

  diaryText += "</body></html>";

  res.set("Content-Type", "text/html");
  res.send(diaryText);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
