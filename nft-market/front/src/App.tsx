import { useWeb3 } from "./modules/useWeb3";
import { Mint } from "./components/Mint";
import { List } from "./components/List";

function App() {
  const { web3, chainId, account, logIn } = useWeb3();
  return (
    <div>
      <div>
        {account && web3 ? (
          <div>
            <div>ChainId : {chainId}</div>
            <div>Account : {account} </div>
            <Mint account={account} web3={web3} />
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                logIn();
              }}
            >
              MetaMask Log In
            </button>
          </div>
        )}
      </div>
      <List account={account} />
    </div>
  );
}

export default App;
