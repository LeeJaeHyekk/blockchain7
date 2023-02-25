import LatestBlocks from "../components/LatestBlocks";
import LatestBlocksHeader from "../components/LatestBlocksHeader ";
import { AddBlock } from "./AddBlock";
import ToBlock from "../components/ToBlock";

const LatestBlocksContaniner = () => {
  return (
    <div>
      <LatestBlocksHeader />
      <LatestBlocks />
      <AddBlock />
      <ToBlock />
    </div>
  );
};
export default LatestBlocksContaniner;
