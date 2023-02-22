import LatestTransction from "../components/LastTransaction";
import LastestTransactionHeader from "../components/LatestTransaction";
// import { listTx } from "../api";
// const [ltTx, setLtTx] = useState([]);

const LatestTransactionContaniner = () => {
  // listTx({ test: "text" }).then((data) => {
  //   console.log("data", data);
  // });
  return (
    <div>
      <LastestTransactionHeader />
      <LatestTransction />
    </div>
  );
};
export default LatestTransactionContaniner;
