//for를 써서 1부터 입력값까지 3/6/9이 아니면 숫자, 3/6/9이면 '짝' 콘솔찍기(369)

const three = function () {
  const count = prompt("3!6!9! 3!6!9! 몇까지?");
  //   map 과 % 중 1개를 선택

  for (let i = 1; i < count + 1; i++) {
    if (`${i}`.includes("3") || `${i}`.includes("6") || `${i}`.includes("9")) {
      // let number = i.tostring();
      let number = `${i}`;
      //   i를 문자열으로 변환해 준다.
      let text = "";
      //   짝을 입력해서 출력하기 위해 text를 빈 문자열에 초기화 한다.
      for (let j = 0; j < number.length; ++j) {
        if (!(parseInt(number[j] % 3) && number[j] != "0")) text += "짝!";
      }
      console.log(text);
    } else {
      console.log(i);
    }
    // for (let i = 0; i < count + 1; i++) {
    //   let numbers = `${i}`
    //   if(numbers.match(/[3,6,9]/)){
    //  정규 표현식 사용, 이후 수업
    //     console.log(i + numbers)
    //   }
    // }
  }
};
