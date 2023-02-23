import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import MainContainer from "./containers/MainPage";
import TxPage from "./containers/LatestTransactionPage";
import BlockPage from "./containers/LatestBlockPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/latestBlock" element={<BlockPage />} />
        <Route path="/latestTx" element={<TxPage />} />
      </Routes>
    </>
  );
}

export default App;
