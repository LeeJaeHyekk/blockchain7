// 플레이어 순서 정의 설정
let count = 0;
// 노래설정
const music = new Audio();
// 이미지 돌리기설정
const plR = document.getElementById("plR");
const plRImg = document.createElement("img");
const pl2R = document.getElementById("pl2R");
const pl2RImg = document.createElement("img2");
//
plR.append(plRImg);
pl2R.append(pl2RImg);

const test = document.getElementById("asd");
test.onclick = () => {
  document.getElementById("music1").play();
};

let imgIndex = 0;
let imgIndex1 = 0;

let change2 = setInterval(() => {
  if (imgIndex1 == 0) {
    pl2RImg.src = `rock.PNG`;
  } else if (imgIndex1 == 1) {
    pl2RImg.src = `siger.PNG`;
  } else {
    pl2RImg.src = `paper.PNG`;

    imgIndex1 = -1;
  }

  imgIndex1++;
}, 70);

let change = setInterval(() => {
  if (imgIndex == 0) {
    plRImg.src = `rock.PNG`;
  } else if (imgIndex == 1) {
    plRImg.src = `siger.PNG`;
  } else {
    plRImg.src = `paper.PNG`;

    imgIndex = -1;
  }

  imgIndex++;
}, 70);

let toggle = true;

plR.onclick = () => {
  if (toggle) {
    clearInterval(change);

    toggle = false;
  } else {
    change = setInterval(() => {
      if (imgIndex == 0) {
        plRImg.src = `rock.PNG`;
      } else if (imgIndex == 1) {
        plRImg.src = `siger.PNG`;
      } else {
        plRImg.src = `paper.PNG`;

        imgIndex = -1;
      }

      imgIndex++;
    }, 70);

    toggle = true;
  }
};

pl2R.onclick = () => {
  if (toggle) {
    clearInterval(change2);
    toggle = false;
  } else {
    change = setInterval(() => {
      if (imgIndex1 == 0) {
        pl2RImg.src = `rock.PNG`;
      } else if (imgIndex1 == 1) {
        pl2RImg.src = `siger.PNG`;
      } else {
        pl2RImg.src = `paper.PNG`;

        imgIndex1 = -1;
      }

      imgIndex1++;
    }, 70);

    toggle = true;
  }
};

// clearInterval(change);
// // 그림이 바뀌다가 입력값을 받으면 그 입력값에 해당하는 그림을 멈춤
// clearInterval(change2);
// // setInterval <= if를 걸어서 사용; -> | pl1 , pl2 | 입력값을 받고, -> 사진 멈춤
