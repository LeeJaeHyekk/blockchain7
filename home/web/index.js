document.getElementById("menu-btn").onclick = function (e) {
  // 메뉴 버튼 "(menu-btn)"에 클릭될때  on 이벤트함수를 적용함
  document.getElementById("user-input-container").classList.toggle("on");
  // (user-input-container) 인아이디에(css)에 토글 함수추가(0,1 boolean)
};
document.getElementById("board-add").onsubmit = async function (e) {
  // html의 (board-add)아이디에
  e.preventDefault();
};
