import useWeb3 from "./useWeb3";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [web3, account] = useWeb3();
  const [candidateList, setCandidateList] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "candidates",
      });
      setCandidateList(result.data.candidates);
    })();
    // 함수를 즉시 실행하는 이름 그대로 즉시실행함수다.
    //   - 함수 전체를 ()로 묶고 끝에 ()를 붙여준다.
  }, []);

  return (
    <div className="App">
      <h1>오점뭐?</h1>
      <div className="vote-List">
        {candidateList.map((item, idx) => (
          <Candidate
            key={`candidate-${idx}`}
            item={item}
            account={account}
            web3={web3}
          />
        ))}
      </div>
    </div>
  );
}
const Candidate = ({ item, account, web3 }) => {
  const [vote, setVote] = useState(0);
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "totalVotesFor",
        item,
      });
      setVote(result.data.vote);
      web3.eth
        .subscribe("logs", { address: result.data.CA })
        .on("data", (log) => {
          const params = [
            { type: "string", name: "candidate" },
            { type: "uint", name: "votes" },
          ];
          const value = web3.eth.abi.decodeLog(params, log.data);
          console.log(value);
          if (value.candidate == item) setVote(value.votes);
        });
    })();
  }, []);

  const onClick = async () => {
    const result = await axios.post("http://localhost:8080/api/send", {
      method: "voteForCandidate",
      candidate: item,
      from: account,
    });
    web3.eth.sendTransaction(result.data);
  };

  return (
    <div className="vote-item" onClick={onClick}>
      <h3>{item}</h3>
      <h3>{vote}</h3>
    </div>
  );
};

export default App;
