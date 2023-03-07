import useWeb3 from "./useWeb3";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [web3, account] = useWeb3();
  // customHook 불러와서 각각 설정
  const [candidateList, setCandidateList] = useState([]);
  // sol에서 설정한 배열 가져와 useState로 상태값 조절
  useEffect(() => {
    // ()() 형식으로, 초기값이 있을때는 초기값 실행
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        // axios post 방식으로 8080에 method : candidates 를 객체형식으로 넘긴다.
        method: "candidates",
      });
      // 통신 이후에 받아온 결과값 candidates를 useState로 관리한다.
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
  // 상위에 Candidate로 설정해 놓은 값 설정 == container
  const [vote, setVote] = useState(0);
  // vote 초기값 설정
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        // result 로 통신 보낸 값들을 저장
        // method, item 을 보내서 확인함
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
