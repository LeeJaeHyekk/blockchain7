# React + Node.js(express) Server all in one

1. React Project 설치 폴더

```sh
cd C:/~ board
```

## 2. React Project 설치

```sh
yarn create react-app ./
```

## 3. 라이브러리 설치

```sh
yarn add ~
```

- Express Sever
  - express : Node.js의 HTTP 서버 구현
  - dotenv : .env 폴더 자동 파싱, process 객체에 env 프로퍼티 추가
  - express-session : express 서버용 session 라이브러리
  - cookie-parser : Front End 에서 보내온 쿠키 자동 파싱
  - morgan : 테스트 로그 작성
  - mysql2 : sequelize와 함께
  - sequlize : DB 파싱용 라이브러리
  - sequlize-cli : sequelize 명령어 라이브러리
- React
  - react-router-dom : React에서 Router 사용하기 위한 라이브러리
  - axios : Back End 와 API 통신을 하기 위한 Front End 라이브러리
- Dev
  - nodemon : Node.js 실행 시 파일 수정에 대해 즉각적인 적용 라이브러리
  - npm-run-all : 여러 서버를 한번에 실행하기 위한 라이브러리

## 4. Sequlize 기본 설정 설치

```sh
sequlize init
```
