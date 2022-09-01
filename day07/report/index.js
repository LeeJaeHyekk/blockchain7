let inputData;

while (
  !(inputData == 1 || inputData == 2 || inputData == 3 || inputData == 4)
) {
  inputData = prompt(" 1~4번 중 번호로 만들고 싶은 캐릭터를 골라주세요 ");

  switch (inputData) {
    case "1":
      console.log("힘 캐릭 으로 설정 합니다.");
      break;
    case "2":
      console.log("민첩 캐릭 으로 설정 합니다.");
      break;
    case "3":
      console.log("지능 캐릭 으로 설정 합니다.");
      break;
    case "4":
      console.log("운 캐릭  으로 설정 합니다.");
      break;
    default:
      console.log("다시 선택해 주세요.");
  }
}

let inputData2 = prompt;

while (
  !(inputData2 == 1 || inputData2 == 2 || inputData2 == 3 || inputData2 == 4)
) {
  inputData2 = prompt(
    " 1~4번 중 번호로 만들고 싶은 캐릭터를 직업을 골라주세요"
  );

  switch (inputData2) {
    case "1":
      console.log("직업은 전사 입니다.");
      break;
    case "2":
      console.log("직업은  궁수 입니다. ");
      break;
    case "3":
      console.log("직업은  마법사 입니다.");
      break;
    case "4":
      console.log("직업은  도적 입니다.");
      break;
  }
}

let inputData3 = prompt;

while (!(inputData3 == 1 || inputData3 == 2)) {
  inputData3 = prompt(
    " 1, 2  번 중 번호로 만들고 싶은 캐릭터의 성별을 골라주세요 "
  );

  switch (inputData3) {
    case "1":
      console.log("성별은 남자 입니다.");
      break;
    case "2":
      console.log("성별은 여자 입니다. ");
      break;
  }
}

let inputData4 = prompt;

while (
  !(
    inputData4 == 1 ||
    inputData4 == 2 ||
    inputData4 == 3 ||
    inputData4 == 4 ||
    inputData4 == 5
  )
) {
  inputData4 = prompt(
    " 1~5번중 번호로 만들고 싶은 캐릭터의 스텟을 골라주세요."
  );
  switch (inputData4) {
    case "1":
      console.log("힘 1 입니다.");
      break;
    case "2":
      console.log("민첩 1 입니다.");
      break;
    case "3":
      console.log("지능 1 입니다.");
      break;
    case "4":
      console.log("운 1 입니다.");
      break;
    case "5":
      console.log("올스텟 1 입니다.");
      break;
  }
}
let inputData5 = prompt;
while (
  !(
    inputData5 == 1 ||
    inputData5 == 2 ||
    inputData5 == 3 ||
    inputData5 == 4 ||
    inputData5 == 5
  )
) {
  inputData5 = prompt(" 1~5번 중 번호로 난이도를 정해주세요 ");
  switch (inputData5) {
    case "1":
      console.log("easy 모드 입니다");
      break;
    case "2":
      console.log(" hard 모드 입니다");
      break;
    case "3":
      console.log(" veryhard 모드 입니다.");
      break;
    case "4":
      console.log(" hell 모드 입니다.");
      break;
    case "5":
      console.log(" god 모드 입니다.");
      break;
  }
}

let inputData6 = prompt("설정을 완료했습니다. 필드로 나갑니다.");

let inputData7 = prompt;
while (!(inputData7 == 1 || inputData7 == 2 || inputData7 == 3)) {
  inputData7 = prompt(
    " 몬스터(트리가드) 조우! 행동을 선택해 주세요 1.싸운다 2.도망친다 3.간본다 "
  );
  switch (inputData7) {
    case "1":
      console.log("죽었습니다. 캐릭터를 다시 만들어 주세요");
      break;
    case "2":
      console.log(
        "배후 공격당해 체력이 깍였습니다. 가까운 마을에서 치료하세요"
      );
      break;
    case "3":
      console.log(
        "도적(직업)이외에 간보기에 실패했습니다. 전투를 준비해 주세요 "
      );
      break;
  }
}
