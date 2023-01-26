// html 파일을 가져와서 수정하여 완성된 HTML을 반환하도록 한다.
// 템플릿 : 만들어져 있는 틀 , PPT 디자인적으로 완성된 상태에서 우리가 원하는 정보를 넣어서 자료를 만든다.
// 디자인적 또는 코드상에서 완성된 html을 가져다가 우리가 원하는 데이터를 입력하여 페이지를 만든다.
const fs = require("fs");
const path = require("path");

const createHtml = (fileName, data, { styleName, scriptName }) => {
  const target = path.join(__dirname, "../views", fileName);

  let readLine = fs.readFileSync(target, "utf-8");

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    readLine = readLine.replace(`{{${keys[i]}}}`, data[keys[i]]);
  }
  if (styleName) {
    const styleTarget = path.join(__dirname, "../views", styleName);
    let styleLine = fs.readFileSync(styleTarget, "utf-8");
    readLine = readLine.replace(`{{style}}`, styleLine);
  }
  if (scriptName) {
    const scriptTarget = path.join(__dirname, "../views", scriptName);
    let scriptLine = fs.readFileSync(scriptTarget, "utf-8");
    readLine = readLine.replace(`{{script}}`, `<script>${scriptLine}</script>`);
  }
  console.log("read", readLine);
  //   readLine = readLine.replace("{{title}}", "SSR 테스트중?");
  //   readLine = readLine.replace("{{text}}", req.query.text || "처음써봐요 SSR");
  //   readLine = readLine.replace("{{link}}", "/test");
  //   readLine = readLine.replace("{{linkName}}", "들어가면 404입니다.");
  return readLine;
};

module.exports = createHtml;