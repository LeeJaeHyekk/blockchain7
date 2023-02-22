import LatestBlocks from "../components/LatestBlocks";
import LatestBlocksHeader from "../components/LatestBlocksHeader ";
import { latestBlock } from "../api";
const LatestBlocksContaniner = () => {
  return (
    <div>
      <LatestBlocksHeader />
      <LatestBlocks />
    </div>
  );
};
export default LatestBlocksContaniner;
