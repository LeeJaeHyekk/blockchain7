const tempObj = {
  재혁: {
    a: { good: 10 },
  },
  정현: {
    b: 2,
  },
  영준: {
    c: { vvv: 10000 },
    f: 10,
    k: 9,
    g: 90,
  },
  정규: {
    d: { e: 10 },
  },
};
for (const tempObjName in tempObj.영준) {
  // for문으로 돌리는데 in 뒤의값이 기준이 되는 값으로
  // 객체에 있는 키값을 for문 돌린다.
  // in 뒤에는 기준인 객체
  console.log(tempObjName);
}
let tempArr = ["정현", "재혁", "영준"];
