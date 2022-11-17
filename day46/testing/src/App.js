import logo from "./logo.svg"; // 이미지를 불러온다
import "./App.css"; // CSS 파일을 불러온다.

// let title function(){
//   title:[{title:"계시판"},{body:""}]
// }
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
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>번호</th>
            <th>필살기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tempArr[1].name}</td>
            <td>{tempArr[1].age}</td>
            <td>{tempArr[1].number}</td>
            <td>{tempArr[1].work}</td>
          </tr>
          <tr>
            <td>{tempArr[2].name}</td>
            <td>{tempArr[2].age}</td>
            <td>{tempArr[2].number}</td>
            <td>{tempArr[2].work}</td>
          </tr>
          <tr>
            <td>{tempArr[3].name}</td>
            <td>{tempArr[3].age}</td>
            <td>{tempArr[3].number}</td>
            <td>{tempArr[3].work}</td>
          </tr>
          <tr>
            <td>{tempArr[4].name}</td>
            <td>{tempArr[4].age}</td>
            <td>{tempArr[4].number}</td>
            <td>{tempArr[4].work}</td>
          </tr>
          <tr>
            <td>{tempArr[5].name}</td>
            <td>{tempArr[5].age}</td>
            <td>{tempArr[5].number}</td>
            <td>{tempArr[5].work}</td>
          </tr>
        </tbody>
      </table>
      {/* <header className="App-header">
        <div>
          <input style={width} type={text} />
        </div>
      </header> */}
    </div>
  );
}

export default App;
