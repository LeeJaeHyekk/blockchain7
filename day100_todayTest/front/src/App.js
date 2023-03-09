import "./App.css";
import { useWeb3 } from "./useWeb3";
import { BreadShop } from "./BreadShop";

function App() {
  const [web3, account] = useWeb3();
  if (!account) return <>메타마스크 연결을 확인해 주세요</>;
  return (
    <div className="App">
      <BreadShop web3={web3} account={account} />
    </div>
  );
}

export default App;
