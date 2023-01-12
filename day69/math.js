// Hex : 16진수 Hexadecimal
// - 어제 그저깨 암호화 했을 때 나오는 수
// Dex : 10진수 Decimal
// Oct : 8진수  Octal
// Bin : 2진수  Binary
//  컴퓨터가 사용하는 수 << bit << byte == 8 bit
// function changeInt(number) {
//   let str = `${number}`;
//   let value = 0;
//   for (let i = 0; i < str.length; i++) {
//     let tempNumber = +str[i];
//     if
//   }
// }
function pow(x, n) {
  let value = 1;
  for (let i = 0; i < n; i++) {
    value *= x;
  }
}
function dec2hex(dec) {
  // 10진수를 16 진수로
  let value = "";
  while (dec) {
    switch (dec % 16) {
      // 10진수 를 16으로 나눠서 그 나머지를 사용한다.
      // 0~15까지 사용한다. 0~9 까지는 그대로 사용한다.
      // 10~15 << 한자리로 나타내야 하기 떄문에 영어의 A~f
      case 10:
        value = "A" + value;
        break;
      case 11:
        value = "B" + value;
        break;

      case 12:
        value = "C" + value;
        break;

      case 13:
        value = "D" + value;
        break;

      case 14:
        value = "E" + value;
        break;

      case 15:
        value = "F" + value;
        break;

      default:
        // 0~9 까지를 처히한다.
        value = (dec % 16) + value;
        break;
    }
    // dec = +`${dec / 16}`.split(".")[0];
    dec = parseInt(dec / 16);
  }
  return value;
}
function hex2dec(hex) {
  // 보통 프로그래밍 상에서 Hex, 즉 16진수는 string(문자열,문장)으로 저장(정의)되게 된다.
  let value = 0; // << 10진수 저장할 변수
  for (let i = 0; i < hex.length; i++) {
    let temp = 0;
    switch (hex[i]) {
      case "A":
        temp = 10;
        break;
      case "B":
        temp = 11;
        break;

      case "C":
        temp = 12;
        break;

      case "D":
        tmep = 13;
        break;

      case "E":
        tmep = 14;
        break;

      case "F":
        temp = 15;
        break;
      default:
        temp = +hex[i];
        break;
    }
    value += temp * 16 ** (hex.length - i - 1);
    // **은 제곱이다.
    //  hex == "123"
    //  i == 0 / hex[i] =="1"/ 1은 100의 자리수 이기 떄문에 16의 제곱이다.
    //  10 진수로 바꿀때 1의 16의 제곱을 곱해서 더해야 한다.
    // i== 1/ hex[i] == "2" / 2는 10의 자리 수이기 때문에 16의 1승이다
    // i== 2/ hex[i] == "3" / 2는 10의 자리 수이기 때문에 16의 0승이다
    // hex를 기준으로 0의 자리부터 16 제곱을 생각하면 0,1,2,3,4,5,6,... 식으로 된다.
  }
  return;
}
function dec2bin(dec) {
  let value = "";
  while (dec) {
    value = (dec % 2) + value;
    dec = parseInt(dec / 2);
  }
  return value;
}
function bin2dec(bin) {
  let value = 0;
  for (let i = 0; i < bin.legth; ++i) {
    value += +bin[i] * 2 ** (bin.length - 1 - i);
  }
  return value;
}
console.log(dec2hex(4123));
console.log(hex2dec(dec2hex(4123)));
console.log(dec2bin(4123));
console.log(bin2dec(dec2bin(4123)));
