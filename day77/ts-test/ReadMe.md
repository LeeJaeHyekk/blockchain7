# TypeScript

- 마이크로소프트에서 만든 javascript 기반 프로그래밍 언어

  - 슈퍼셋? 이라고 부르더라

- javascript에 Type, 자료형 확인을 추가한 것
  - number , string , boolean , null ,undefined , Array ,Object
- 기본적 설치 : npm i -D typescript

  - TypeScript는 바로 실행하는 것이 아닌 Compiler를 사용한다.
  - Compiler로 Javascript로 변한후 실행한다.
    - Compiler란 우리가 작성한 코드를 컴퓨터가 알 수 있는 언어로 변환한다.
    - 대표적으로 C++, C# , java 등에서 사용한다.
    - TypeScript는 브라우저, node.js에서 바로 사용할 순 없다.

- 명령어 tsc를 사용한다,
  - tsc -v : 버전을 확인한다.
  - tsc 파일 이름: javascript로 변환
- tsc 사용하고 안하고 차이?

  - npx tsc : npm i -D typescript
    - 현재의 프젝에서만 가능
  - tsc: npm i -g typescript
    - 전역으로 사용가능

- interFace
- typeScript에서의 interface는 Type을 미리 정의해 두는 것이다.
- 일반적인 변수 등등에 사용 가능하며 class에 상속이 가능하다.
- 설계도
