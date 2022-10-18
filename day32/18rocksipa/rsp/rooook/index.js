// 플레이어 순서 정의 설정
// let count = 0;
// 플레이어 입력받기

// 노래설정
const music = new Audio();
// 이미지 돌리기설정
const plR = document.getElementById("plR");
const plRImg = document.getElementById("plRImg");
const pl2R = document.getElementById("pl2R");
const pl2RImg = document.getElementById("pl2RImg");

const wlR = document.getElementById("wlR");
const wlRImg = document.getElementById("wlRImg");

//
// 이미지 승패
// const plw = document.getElementById("plw");
// const plwImg = document.getElementById("plwImg");
// const pll = document.getElementById("pllImg");
// const pllImg = document.getElementById("pllImg");
// player2
// const pl2w = document.getElementById("pl2w");
// const pl2wImg = document.getElementById("pl2wImg");
// const pl2l = document.getElementById("pl2l");
// const pl2lImg = document.getElementById("pl2lImg");
//
const plwl = document.getElementById("plwl");
const plwlImg = document.getElementById("plwlImg");
const pl2wl = document.getElementById("pl2wl");
const pl2wlImg = document.getElementById("pl2wlImg");
// 노래
const test = document.getElementById("asd");
test.onclick = () => {
  document.getElementById("music1").play();
};

// 이미지 돌릴때 초기값
let imgIndex = 0;
let imgIndex1 = 0;
let imgIndex2 = 0;
let imgIndex3 = 0;
// 돌리는거 처음
let change = setInterval(() => {
  // clearInterval(change);
  if (imgIndex == 0) {
    plRImg.src = `rock.PNG`;
  } else if (imgIndex == 1) {
    plRImg.src = `siger.PNG`;
  } else if (imgIndex == 2) {
    plRImg.src = `paper.PNG`;

    imgIndex = -1;
  }

  imgIndex++;
}, 65);

let change2 = setInterval(() => {
  // clearInterval(change2);
  if (imgIndex1 == 0) {
    pl2RImg.src = `rock.PNG`;
  } else if (imgIndex1 == 1) {
    pl2RImg.src = `siger.PNG`;
  } else if (imgIndex1 == 2) {
    pl2RImg.src = `paper.PNG`;

    imgIndex1 = -1;
  }

  imgIndex1++;
}, 65);

let wlchange = setInterval(() => {
  if (imgIndex2 == 0) {
    plwlImg.src = `win.PNG`;
  } else if (imgIndex2 == 1) {
    plwlImg.src = `lose.PNG`;
    imgIndex2 = -1;
  }

  imgIndex2++;
}, 300);

let wlchange2 = setInterval(() => {
  if (imgIndex3 == 0) {
    pl2wlImg.src = `win.PNG`;
  } else if (imgIndex3 == 1) {
    pl2wlImg.src = `lose.PNG`;
    imgIndex3 = -1;
  }

  imgIndex3++;
}, 300);

//고녀석 부분 시작

let pldap;
let pl2dap;
let animationOn = false;

let tip = function (gonusuck, gonusuck2) {
  pldap = gonusuck;
  pl2dap = gonusuck2;
  clearInterval(change);
  clearInterval(change2);
  clearInterval(wlchange);
  clearInterval(wlchange2);
  if (pldap == "q") {
    plRImg.src = `rock.PNG`;
  } else if (pldap == "a") {
    plRImg.src = `siger.PNG`;
  } else if (pldap == "z") {
    plRImg.src = `paper.PNG`;
  }
  if (pl2dap == "9") {
    pl2RImg.src = `rock.PNG`;
  } else if (pl2dap == "6") {
    pl2RImg.src = `siger.PNG`;
  } else if (pl2dap == "3") {
    pl2RImg.src = `paper.PNG`;
  }
  if (
    !(
      (pldap == "q" && pl2dap == "9") ||
      (pldap == "a" && pl2dap == "6") ||
      (pldap == "z" && pl2dap == "3")
    )
  ) {
    if (pldap == "q" && pl2dap == "6") {
      plwlImg.src = `win.PNG`;
      pl2wlImg.src = `lose.PNG`;
    } else if (pldap == "q" && pl2dap == "3") {
      plwlImg.src = `lose.PNG`;
      pl2wlImg.src = `win.PNG`;
    } else if (pldap == "a" && pl2dap == "9") {
      plwlImg.src = `lose.PNG`;
      pl2wlImg.src = `win.PNG`;
    } else if (pldap == "a" && pl2dap == "3") {
      plwlImg.src = `win.PNG`;
      pl2wlImg.src = `lose.PNG`;
    } else if (pldap == "z" && pl2dap == "9") {
      plwlImg.src = `win.PNG`;
      pl2wlImg.src = `lose.PNG`;
    } else if (pldap == "z" && pl2dap == "6") {
      plwlImg.src = `lose.PNG`;
      pl2wlImg.src = `win.PNG`;
    }
  } else {
    plwlImg.src = `same.PNG`;
    pl2wlImg.src = `same.PNG`;
  }

  if (animationOn == false) {
    // 플래그 깃발 플레그
    playerInput = [-1, -1];
    animationOn = true;
    setTimeout(() => {
      animationOn = false;
      // 다시 돌리기
      change = setInterval(() => {
        if (imgIndex == 0) {
          plRImg.src = `rock.PNG`;
        } else if (imgIndex == 1) {
          plRImg.src = `siger.PNG`;
        } else if (imgIndex == 2) {
          plRImg.src = `paper.PNG`;

          imgIndex = -1;
        }

        imgIndex++;
      }, 65);

      change2 = setInterval(() => {
        // clearInterval(change2);
        if (imgIndex1 == 0) {
          pl2RImg.src = `rock.PNG`;
        } else if (imgIndex1 == 1) {
          pl2RImg.src = `siger.PNG`;
        } else if (imgIndex1 == 2) {
          pl2RImg.src = `paper.PNG`;

          imgIndex1 = -1;
        }

        imgIndex1++;
      }, 65);

      wlchange = setInterval(() => {
        if (imgIndex2 == 0) {
          plwlImg.src = `win.PNG`;
        } else if (imgIndex2 == 1) {
          plwlImg.src = `lose.PNG`;
          imgIndex2 = -1;
        }

        imgIndex2++;
      }, 300);

      wlchange2 = setInterval(() => {
        if (imgIndex3 == 0) {
          pl2wlImg.src = `win.PNG`;
        } else if (imgIndex3 == 1) {
          pl2wlImg.src = `lose.PNG`;
          imgIndex3 = -1;
        }

        imgIndex3++;
      }, 300);
    }, 4000);
  }
};

// player1  q= 바위 , a=가위 ,z= 보  --   player2 9= 묵 , 6 = 가위 , 3 = 보

let playerInput = [-1, -1];

window.onkeydown = function (e) {
  if (animationOn) return;
  if ((e.key == "q" || e.key == "a" || e.key == "z") && playerInput[0] == -1) {
    playerInput[0] = e.key;
    console.log("asdf");
  } else if (
    (e.key == "9" || e.key == "6" || e.key == "3") &&
    playerInput[1] == -1
  ) {
    playerInput[1] = e.key;
  }
  if (playerInput[0] != -1 && playerInput[1] != -1)
    tip(playerInput[0], playerInput[1]);

  console.log(playerInput);
  // key code:81, key : q
  // key code:65, key : a
  // key code:90, key : z
  // key code:57, key : 9
  // key code:102, key : 6
  // key code:99, key : 3
};

// let toggle1 = true;

// plR.onclick = () => {
//   clearInterval(change);
//   if (toggle1) {
//     clearInterval(change);

//     toggle1 = false;
//   } else {
//     change = setInterval(() => {
//       if (imgIndex == 0) {
//         plRImg.src = `rock.PNG`;
//       } else if (imgIndex == 1) {
//         plRImg.src = `siger.PNG`;
//       } else {
//         plRImg.src = `paper.PNG`;

//         imgIndex = -1;
//       }

//       imgIndex++;
//     }, 70);

//     toggle1 = true;
//   }
// };

// let toggle2 = true;
// pl2R.onclick = () => {
//   if (toggle2) {
//     clearInterval(change2);
//     toggle2 = false;
//   } else {
//     change2 = setInterval(() => {
//       if (imgIndex1 == 0) {
//         pl2RImg.src = `rock.PNG`; //0 / 0-1=pl w / 1-2= pl w / 2 -0 pl2 w / 1 -2 =-1 pl2w
//       } else if (imgIndex1 == 1) {
//         pl2RImg.src = `siger.PNG`; // 1
//       } else {
//         pl2RImg.src = `paper.PNG`; // 2

//         imgIndex1 = -1;
//       }

//       imgIndex1++;
//     }, 70);
//     toggle2 = true;
//   }
// };

// setInterval(change);
// setInterval(change2);

// }else if{
//   switch(plRImg.src == `rock.PNG`){
//     case(pl2RImg == ``):

// clearInterval(change);
// // 그림이 바뀌다가 입력값을 받으면 그 입력값에 해당하는 그림을 멈춤
// clearInterval(change2);
// // setInterval <= if를 걸어서 사용; -> | pl1 , pl2 | 입력값을 받고, -> 사진 멈춤
