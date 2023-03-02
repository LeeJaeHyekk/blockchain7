import "./App.css";
import Counter from "./Counter";
import useWeb3 from "./useWeb3";

function App() {
  const [web3, account] = useWeb3();
  if (!account) return <h1>메타마스크 연결 확인</h1>;
  return (
    <div className="App">
      <h1>account:{account}</h1>
      <Counter web3={web3} account={account}></Counter>
    </div>
  );
}

export default App;
