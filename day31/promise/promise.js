function testFunc(num, time, func) {
  setTimeout(() => {
    if (func) func();
  }, time);
}

// testFunc(1, 1000, () => {
// testFunc(2, 2000, () => {
// testFunc(3, 3000, () =>{testfunc(4, 4000, console.log)}),}),});
function testPromise(num) {
  return new Promise((resolve, reject) => {
    // resolve는 완료 했을시
    // reject는 에러 발생 시
    try {
      if (num > 10) reject({ data: "숫자가 너무 커" });
      console.log(num);

      setTimeout(() => {
        resolve(num + 1);
      }, num * 100);
    } catch (error) {
      reject(error);
    }
  });
}

// testPromise(1)
// .then((data =>{
//     return testPromise(data);
//     //console.log("data:"+data);
// })
// .then(data)=>{
// catch : 에러 발생했을시  reject 매개변수에 err가 정의된다.
//     return testPromise(data)
//     // console.log(err);
// });

async function asyncFunc() {
  // async : promise를  기다리기 위해서 (동기처럼 사용하기 위해서) 사용한다.
  try {
    let temp = await testPromise(1);
    temp = await testPromise(temp);
  } catch (err) {
    console.log(err);
  }
}
asyncFunc();
