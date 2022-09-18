// 플레이어 순서 정의 설정
let count = 0;
// 노래설정
const music = new Audio();
// 이미지 돌리기설정
const plR = document.getElementById("plR");
const plRImg = document.createElement("img");
const pl2R = document.getElementById("pl2R");
const pl2RImg = document.createElement("img");

// 이미지 승패
const plw = document.getElementById("plw");
const plwImg = document.createElement("img");
const pll = document.getElementById("pll");
const pllImg = document.getElementById("img");
// player2
const pl2w = document.getElementById("pl2w");
const pl2wImg = document.createElement("img");
const pl2l = document.getElementById("pl2l");
const pl2lImg = document.getElementById("img");

//

plR.append(plRImg);
pl2R.append(pl2RImg);



// plw.append(plwImg);
// pl2w.append(pl2wImg);




//

const test = document.getElementById("asd");


test.onclick = () => {
  document.getElementById("music1").play();
};

let imgIndex = 0;
let imgIndex1 = 0;


let change = setInterval(() => {
  // clearInterval(change);
  if (imgIndex == 0) {
    plRImg.src = `rock.PNG`;
  } else if (imgIndex == 1) {
    plRImg.src = `siger.PNG`;
  } else {
    plRImg.src = `paper.PNG`;

    imgIndex = -1;
  }

  imgIndex++;
}, 65);




let change2 = setInterval(() => {
  
  if (imgIndex1 == 0) {
    pl2RImg.src = `rock.PNG`;
  } else if (imgIndex1 == 1) {
    pl2RImg.src = `siger.PNG`;
  } else {
    pl2RImg.src = `paper.PNG`;

    imgIndex1 = -1;
  }

  imgIndex1 ++;
  // clearInterval(change2);
}, 65);





let toggle1 = true;
plR.onclick = () => {
  

  if (toggle1) {
    clearInterval(change);

    toggle1 = false;
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
    }, 65);

    toggle1 = true;
  }
};

let toggle2 = true;
pl2R.onclick = () => {
  
  if (toggle2) {
    clearInterval(change2);
    toggle2 = false;
  } else {
    change2 = setInterval(() => {
      if (imgIndex1 == 0) {
        pl2RImg.src = `rock.PNG`;
      } else if (imgIndex1 == 1) {
        pl2RImg.src = `siger.PNG`;
      } else {
        pl2RImg.src = `paper.PNG`;
        imgIndex1 = -1;
      }

      imgIndex1++;
    }, 65);

    toggle2 = true;
  }
  
};

let chooose =function(){
  
  if(!(toggle1 && toggle2)){

    
    if(imgIndex == imgIndex1){
      plw.src = `same.PNG`

    }else if (imgIndex > imgIndex1){
      plw.src = `win.PNG`

  }else{
    plw.src = `lose.PNG`

  }
  
}}







// if(plRImg == pl2RImg){
// setInterval(change);
// setInterval(change2);

// }else if{
//   switch(plRImg.src == `rock.PNG`){
//     case(pl2RImg == ``):
    
//   }
// }




// clearInterval(change);
// // 그림이 바뀌다가 입력값을 받으면 그 입력값에 해당하는 그림을 멈춤
// clearInterval(change2);
// // setInterval <= if를 걸어서 사용; -> | pl1 , pl2 | 입력값을 받고, -> 사진 멈춤
