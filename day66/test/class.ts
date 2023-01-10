// type Team = "read" | "blue" | "yellow";
// // Team 클래스에 read , blue , yellow 라는 타입들이 있다
// type Health = 1 | 5 | 10;
// // Health 클래스에 1,5,10 ,의 타입들이 있다.

// import { count } from "console";

// type Player = {
//   // 플레이어 타입은
//   nickName: string;
//   //   닉네임: 문자
//   team: Team;
//   //   팀 : read , blue , yellow 중 하나
//   health: Health;
//   //   1,5,10 중 하나
// };
// const nicoo: Player = {
//   nickName: "nico",
//   team: "yellow",
//   health: 10,
// };

// abstract class User {
//   // 추상 클래스로 상태를 강제한다.
//   constructor(
//     // 강제할 초기값 설정
//     private firstName: String,
//     private lastName: String,
//     private nickName: String
//   ) {}
//   abstract getNickName(): void;
//   getFullNmae() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// // class Player extends User {
// //   getNickName(): void {
// //     // console.log(this.)
// //   }
// // }

// // const nico = new Player("nico", "las", "니코");
// type Words = { [key: string]: string };

// class Word {
//   constructor(public readonly term: string, public readonly def: string) {}
// }
// interface ITest {}
// class test {}

// const add = (a: number, b: number): number => {
//   console.log(a + b);
//   return a + b;
// };

// add(1, 2);

// let show: string[] = ["자", "두", "과", "자"];
// show.map((item) => item);
// console.log(show[0]);
// console.log(show[1]);
// console.log(show[2]);
// console.log(show[3]);

// for (let i = 0; i < show.length; i++) {
//   console.log(show[i]);
// }

// let i = 0;
// while (i < show.length) {
//   console.log(show[i++]);
// }

// let j: number = 0;
// do {
//   console.log(show[j++]);
// } while (j < show.length);

function solution(x: number, n: number): Array<number> {
  let answer: number[] = [];
  //   for (let i = 1; i <= n; i++) {
  //     console.log("i", i);
  //     console.log("x", x);
  //     answer.push(i * x);
  //     console.log("answer", answer);
  //   }
  for (let i = 0; i < n; i++) {
    answer.push(x + x * i);
    console.log("answer", answer);
  }
  console.log(answer);
  return answer;
}
solution(2, 5);

// function solution1(x: number, n: number): Array<number> {
//   let answer: Array<number> = [];
//   return answer;
// }
// console.log(solution1);
