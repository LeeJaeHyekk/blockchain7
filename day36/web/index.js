document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
};
document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();
  // 버블링을 막는 코드
  if (!e.target["board-title"].value) {
    // 보드(제목)에 값이 없으면
    e.target["board-title"].focus();
    // 커서 가져다 놔라
    return;
  }
  if (!e.target["board-text"].value) {
    // text에 값이 없으면
    e.target["board-text"].focus();
    // 커서 가져다가 놔라
    return;
  }
  try {
    // try catch 문 사용
    // try 문 에서의  조건식 적용
    const data = await axios.post("/api/board/add", {
      // 데이타를 정의하는데  = promise를 적용한 axios로 주소를 받는데 /api,/board,/add 순으로 들어가며
      title: e.target["board-title"].value,
      //   타이틀이라는 보드 이름에 값을 board-title에 넣고
      Text: e.target["board-text"].vlaue,
      //   text보드에 board-text에 값을 넣는다.
      uptime: Date.now(),
      //   uptime 에 지금 시간값을 넣는다.
    });
    if (data.data.status == 200) {
      e.target["board-title"].vlaue = e.target["board-text"].value = "";

      console.log(data.data);
    }
  } catch (err) {
    console.error(err);
  }
    getList();
};

const tempData = [];

 let maxCount = 2;
 let count = 0;
 const pageElem = document.getElementById("page");
 const listElem = document.getElementById("list");
 async function getList(){
    try{
        const data =await axios.get("/api/board?count=" +count);
        pageElem.innerHTML="";
        maxCount = data.data.maxCount;
        for(let i=0;i<maxCount;++i){
            const tempLi =document.createElement("li");
            tempLi.innerText = i+1;
            tempLi.onclick = function(e){
                count =i;
                pageElem.getElementsByClassName("now")[0].classList.remove("now");
                tempLi.classList.add("now");
                getList()
            };
            if(count ===i){
                tempLi.classList.add("now");
            }
            pageElem.append(tempLi)
        }
    }

 }
