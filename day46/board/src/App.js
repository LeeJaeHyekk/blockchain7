import logo from "./logo.svg";
import "./App.css";
import TempTable from "./components/Temptable";
function App() {
  const tempArr = [
    {
      name: "재혁",
      age: 20,
      number: 5,
      work: "front",
    },
    {
      name: "선주",
      age: 14,
      number: 6,
      work: "back",
    },
    {
      name: "양주",
      age: 13,
      number: 7,
      work: "front",
    },
    {
      name: "재일",
      age: 12,
      number: 8,
      work: "back",
    },
    {
      name: "성진",
      age: 11,
      number: 9,
      work: "front",
    },
    {
      name: "우석",
      age: 10,
      number: 10,
      work: "back",
    },
  ];
  // 파스칼 표기법을 사용한다.  << COMPONENT이다. (이후 설명 예정)
  const HeadData = {
    name: "이름",
    age: "나이",
    number: "번호",
    work: "필살기",
  };
  const tempHead = ["name", "age", "number", "work"];

  return (
    <div className="App">
      <TempTable tempArr={tempArr} tableData={HeadData} head={tempHead} />
      <TempTable tempArr={tempArr} tableData={HeadData} head={tempHead} />
      <TempTable tempArr={tempArr} tableData={HeadData} head={tempHead} />
    </div>
  );
}

export default App;
