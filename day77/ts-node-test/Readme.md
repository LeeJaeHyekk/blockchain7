# ts-node

- TypeScript 실행 라이브러리(npm 홈페이지에서는 엔진이라고 표현됨)
- Compile 없이 ts 파일을 실행한다.

```sh
npm i -D ts-node typescript @types/node
npx ts-node index.ts
```

```json
{
  "include": ["src"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "outDir": "./bulid/",
    "target": "ES6",
    "lib": ["ES6"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "removeComments": true,
    "allowJs": true,
    "baseUrl": ".",
    "typeRoots": ["./node_modules/@types"]
  }
}
```

- include : typeScript 에서 확인할 폴더를 설정
- exclude : typescript에서 확인하지 않을 폴더를 설정
- compilerOptions : 컴파일 시 설정들
- outDir : 컴파일 시 js 파일 생성되는 폴더를 설정
- target : 어떤 문법의 javascript로 변환할지 설정
- lib : js가 실행되는 환경 설정
- moduleResolution : 내보내기, 가져오기 방식 설정 == module
- esModuleInterop : module.export 방식으로 내보내진 라이브러리, 모듈, 파일을 import로 가져올때 쉽게 가져오기 위래서 설정

```js
import * as React from "react";
```

- resolveJsonModule : typescript에서는 기본적으로 json 파일을 지원하지 않는다. 그래서 json 파일 지원하도록 설정
- removeComments : 컴파일 시 주석 삭제
- allowJs : js 파일 또한 컴파일 하도록 설정
- baseUrl : root 폴더 설정
- typeRoots : type 설정 파일들을 설정 << 미리 읽어 올수 있음
  -.d ts파일 작성한곳 설정
