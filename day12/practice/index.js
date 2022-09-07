let count = prompt();

function odd() {
  if (!count) count = prompt("다시 찍어 주세요");
  count = parseInt(count);
  for (let i = 0; i < count; i++) {
    // console.log("i:", i);

    if (i % 2) console.log("i:", i);
  }
}

function even() {
  if (!count) count = prompt("다시 찍어 주세요");
  count = parseInt(count);
  for (let i = 0; i < count; i++) {
    if (!(i % 2)) console.log("i:", i);
  }
}

// function oddEven() {
//   let count = prompt("몇까지 찍을꺼야?\n 형식은 숫자&홀짝");
//   count = toString(count);

//   const number = count.split("&")[0];
//   const isodd = count.split("&")[1];

//   console.log(count);
//   if (isodd == "홀") {
//     odd(number);
//     console.log("짝:", i);
//   } else {
//     even(number);
//     console.log("홀:", i);
//   }
// }
// function even(count) {}

const oddEven = () => {
  let count = prompt("숫자를 정해주세요 \n 형식은 숫자&홀짝으로");

  const isodd = count.split("&")[1];
  const number = count.split("&")[0];

  if (isodd == "홀") {
    odd(number);
  } else {
    even(number);
  }
};
