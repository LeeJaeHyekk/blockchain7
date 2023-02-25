import LatestTransction from "../components/LastTransaction";
import LastestTransactionHeader from "../components/LatestTransaction";
import { AddTx } from "./AddBlock";
import ToTx from "../components/ToTx";

const LatestTransactionContaniner = () => {
  return (
    <div>
      <LastestTransactionHeader />
      <LatestTransction />
      <AddTx />
      <ToTx />
    </div>
  );
};
export default LatestTransactionContaniner;
