const startBtn = document.getElementsByClassName("start-btn")[0];
const rotateBoxElem = document.getElementsByClassName("roulette-box")[0];
const rotateElem = document.getElementsByClassName("roulette")[0];

const studentsArr = [
  // "고우석",
  // "김선주",
  "김성진",
  "김영준",
  "김재일",
  "김정규",
  "박예성",
  "박혜림",
  // "신상목",
  // "염예나",
  "이가원",
  "이재혁",
  "장정현",
  // "정재훈",
  // "최원겸",
  "허재원",
];

for (let i = 0; i < 100; ++i) {
  const a = parseInt(Math.random() * studentsArr.length);
  const b = parseInt(Math.random() * studentsArr.length);
  const temp = studentsArr[a];
  studentsArr[a] = studentsArr[b];
  studentsArr[b] = temp;
}

let tempStr = "conic-gradient(";
const tempDeg = 360 / studentsArr.length;

studentsArr.forEach((value, index) => {
  const tempElem = document.createElement("div");
  const tempP = document.createElement("p");
  tempElem.append(tempP);
  tempElem.style.transform = `rotate(${tempDeg * index - tempDeg / 2}deg)`;
  tempP.innerText = value;
  rotateElem.append(tempElem);
  tempStr +=
    index % 2
      ? `#e94464 ${tempDeg * index}deg ${tempDeg * (index + 1) - 1}deg,`
      : `#fff ${tempDeg * index}deg ${tempDeg * (index + 1) - 1}deg,`;
  tempStr += `#000 ${tempDeg * (index + 1) - 1}deg ${
    tempDeg * (index + 1)
  }deg,`;
});

rotateElem.style.background = tempStr.slice(0, -1) + ")";

let isStart = false;

startBtn.onclick = () => {
  if (isStart) return;
  isStart = true;
  const select = parseInt(Math.random() * studentsArr.length);
  rotateBoxElem.classList.remove("rotate");
  rotateElem.style.transform = `rotate(${
    360 * 5 - tempDeg * select + tempDeg / 2
  }deg)`;
  setTimeout(() => {
    startBtn.innerHTML = studentsArr[select];
    startBtn.classList.add("select");
  }, 5000);
  setTimeout(() => {
    window.location.href = "./" + studentsArr[select];
  }, 8000);
};
