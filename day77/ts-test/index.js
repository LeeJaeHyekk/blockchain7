var num = 1234;
var str = "1234";
var bool = true;
var und = undefined;
var nul = null;
// TypeScript는 자료형을 확인하기 떄문에 같은 자료형만 변수에 정의할수 있다.
num = 4321;
// console.log(num.length) 오류 날까?
var any = undefined;
any = 1234;
any = "1234";
var unk = undefined;
console.log(any.length); // 모든 자료형을 모함하고 있다고 판단하여 각종 메서드를 모두 사용할 수 있다.
console.log(unk.length); // 자료형을 모른다고 판단하여 각종 메서드를 사용할 수 없다.
if (typeof unk === "string") {
    // type을 확인 후에 해당 타입에 대한 메서드, 키를 사용할 수 있다.
    console.log(unk.length);
}
