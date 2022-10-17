const { rejects } = require("assert");
const { resolve } = require("path");

function testFunc(num, time, func) {
  setTimeout(() => {
    if (func) func();
  }, time);
}
testFunc(1, 1000, () => {
testFunc(2, 2000, () => {
    testFunc(3, 3000, () =>{testfunc(4, 4000, console.log)}),}),});
function testPromise(){
    return new Promise((resolve,reject)=>{
        // resolve는 완료 했을시
        // 
        try{
            if(num>10)reject("숫자가 너무 커 ");
            console.log(num);
            setTimeout(()=>{
                resolve(num+1);
            },num*1000);
            }catch(error){
                reject(error);
            }
        });
    }

testPromise(1).then((data =>{
    return
    //console.log("data:"+data);
})
.catch(err)=>{
    // console.log(err);
});

async function asyncFunc(){
    // async : promise를  기다리기 위해서 (동기처럼 사용하기 위해서)
    try{
        const temp = await testPromise(1);
    await testPromise(1)
    }catch(err){
        console.log(err);
    }
}
asyncFunc();