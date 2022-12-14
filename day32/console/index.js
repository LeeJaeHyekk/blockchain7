// es6 이전 << javascript의 버전
// class가 대표적인 es6, import export
console.log();
// 객체 javascript가 갖고있는 객체  => 내장객체
console.log(global);
// global(브라우저의 window) => 전역 객체, js 파일에서 변수를 초기화하면 그 js파일 내에서만 사용이 가능한데 전역으로 쓰고 싶으면 global의 프로퍼티로 추가해라
// Node.js에 DOM 있을까?
// HTML 파일의 구조를 저장한 객체 => DOM, document
// Node.js HTML 구조가 있나? => 없음 => document가 없다.
// window => 브라우저의 정보를 갖고있는 객체
// Node.js가 브라우저를 쓴다? => 안쓴다.
// window 객체가 없다. => 대신하는 객체가 global
console.warn("경고");
// 경고 출력
console.dir({ data: ` 구조 출력` });
// 구조에 대하여 출력
//  브라우저에 쪽에서도 사용함
//  <div>어쩌구 </div>   << console.log()[Object]
//  Elenent에 대한 정보, console.dir

//  시간 측정
console.time("시간 측정");
//  시간 확인? 출력? 에 대한 시작점
console.timeLog("시간측정");
//  시간 확인에 대한 중간점
console.timeEnd("시간측정");
// 시간 확인 완료

console.assert(true, "참");
console.assert(false, "거짓");
// 거짓일때 출력한다.

console.count("몇번?");
// 수를 세는것
console.countReset("몇번?");
// 숫자 초기화
console.table({ name: 표, data: 출력 });
console.error("에러 출력");
//------------------------------------------------
// Node.js에 DOM이 없음
// window => 브라우저의 정보를 갖고 있는 객체
// Node.js가 브라우저를 쓴다? => 안쓴다.
// window
