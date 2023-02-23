import LatestTransction from "../components/LastTransaction";
import LastestTransactionHeader from "../components/LatestTransaction";
import { AddTx } from "./AddBlock";

const LatestTransactionContaniner = () => {
  return (
    <div>
      <LastestTransactionHeader />
      <LatestTransction />
      <AddTx />
    </div>
  );
};
export default LatestTransactionContaniner;
