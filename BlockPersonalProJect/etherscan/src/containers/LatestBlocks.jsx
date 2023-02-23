import LatestBlocks from "../components/LatestBlocks";
import LatestBlocksHeader from "../components/LatestBlocksHeader ";
import { AddBlock } from "./AddBlock";

const LatestBlocksContaniner = () => {
  return (
    <div>
      <LatestBlocksHeader />
      <LatestBlocks />
      <AddBlock />
    </div>
  );
};
export default LatestBlocksContaniner;
