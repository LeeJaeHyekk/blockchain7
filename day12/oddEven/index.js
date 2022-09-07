// 기존의 odd, even 클릭과 달리 oddeven에서 호출받으며 전달받은 매개변수를 사용하기위해 count를 매개변수로 선언한다.
// 괄호 안에 count <<'123'

function odd(count) {
  // odd 클릭시 count는 입력된 값이 없기 떄문에 undifined가 된다.
  //   oddeven 함수에서 호출받았을 시에는 count에 정의된다.
  //   <<<'123' , true
  if (!count) count = prompt("몇까지 찍을까");
  // undefined는 boolean 값으로 따졌을때 flase 되기 떄문에 매개변수가 없는지 확인하여 입력받을 수 있도록 처리한다.

  count = parseInt(count);
  //   oddeven함수에 전달받은 count는 문자열(string)이기 때문에 parseInt 함수를  호출해서 정수로 변환한다.

  const count = parseInt(prompt("몇까지 찍을까"));

  for (let i = 0; i <= count; i++) {
    if (i % 2) console.log(i);
    // i % 2  << 홀수일때 1 >> 홀수를 판단할 수 있다.
  }
  //   위 코드는 아래코드보다 안좋다.
  // 위 코드는 10을 넣으면 10번을 반복한다.
  //   -------------------------------
  // 아래 코드는 10을 넣었을시 5번만 작동한다.
  // 반복의 횟수 차이가 입력된 수에 따라서 기하급수적으로 늘어난다.
  for (let i = 0; i * 2 + 1 < count + 1; i++) {
    console.log(i * 2 + 1);
  }
  for (let i = 1; i < count + 1; i += 2) {
    console.log(i);
  }
}
const even = function () {
  const count = parseInt(prompt("몇까지 찍을까"));
  for (let i = 0; i <= count; i++) {
    if (!(i % 2)) console.log(i);
    // i % 2  << 짝수일때 0 >> 0은 flase기 떄문에 부정을 해준다.
  }
  for (let i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }
  for (let i = 0; i < count + 1; i += 2) {
    console.log(i * 2);
  }
};
const oddeven = () => {
  const count = prompt("몇까지 찍을까? 그리고 홀이야 짝이야");
  //   '123,홀' 형식의 문자열을 받게 된다
  // split 매서드를 호출해서 & 기준으로 분리한다.
  // 문자열 아이템을 가진 배열을 반환받는다.
  // -> [123, 홀]

  const number = count.split("&")[0]; // << 1 2 3
  const isOdd = count.split("&")[1]; // << 홀
  // 숫자와 홀짝이 나눠졌다
  if (isOdd == "홀") {
    // isodd가 홀인지 확인하여 홀이면 odd 함수를 호출한다.
    // 함수를 호출하면서 받았던 숫자를 매개변수로 전달한다.
    odd(number);
    //  매개변수로 입력된 숫자를 입력
  } else {
    even(number);
  }
};
