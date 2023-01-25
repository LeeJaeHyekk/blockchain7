let num: number = 1234;
let str: string = "1234";
let bool: boolean = true;
let und: undefined = undefined;
let nul: null = null;
let numUnd: number | undefined = undefined;
// |를 사용해서 type을 여러 개 사용할 수 있다.
// 앞의 것이 아니면 뒤의 것으로 적용

// TypeScript는 자료형을 확인하기 떄문에 같은 자료형만 변수에 정의할수 있다.
num = 4321;
// console.log(num.length) 오류 날까?
let any: any = undefined;
any = 1234;
any = "1234";
let unk: unknown = undefined;
console.log(any.length); // 모든 자료형을 모함하고 있다고 판단하여 각종 메서드를 모두 사용할 수 있다.
console.log(unk.length); // 자료형을 모른다고 판단하여 각종 메서드를 사용할 수 없다.
if (typeof unk === "string") {
  // type을 확인 후에 해당 타입에 대한 메서드, 키를 사용할 수 있다.
  console.log(unk.length);
}
let obj: { a: number; b?: string } = { a: 1 };
//  ?는 undifined를 포함한다.
obj.b = "1234";

let arr: Array<number> = [1, 2, 3];
arr.push("asdf");
let arr1: [number, string] = [1, "1"];
// arr1.push(1);
let arr2: string[] = ["1", "a", "b"];
let arr3: Array<any> = [undefined, null, 1, "asd"];

function funcA(): void {
  console.log("func");
}

const funB = function (): number {
  return 11;
};
const funcC = (): string => {
  return "asdf";
};
// 함수의 return에 대한 type은 ()뒤에 붙인다.
function sumA(a: number, b: number): number {
  return a + b;
}
console.log(sumA(1, 2));
//
const sumB = function (numbers): number {
  return numbers.a + numbers.b;
};

const sumC = ({ a, b }: { a: number; b: number }): number => {
  return a + b;
};
interface INumbers {
  a: number;
  b: number;
}
function sumD({ a, b }: INumbers): number {
  return a + b;
}
