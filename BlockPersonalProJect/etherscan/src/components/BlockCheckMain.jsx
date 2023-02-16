import styled from "styled-components";

const BlockComponent = ({ funcs, checkBlock }) => {
  return (
    <Block>
      <label>
        blockHash:
        <input type="text" onInput={funcs.blockHash} />
      </label>
      <label>
        miner:
        <input type="text" onInput={funcs.miner}></input>
      </label>
      <label>
        timestamp:
        <input type="text" onInput={funcs.timestamp}></input>
      </label>
      <label>
        nonce:
        <input type="text" onInput={funcs.nonce}></input>
      </label>
      <label>
        Size:
        <input type="text" onInput={funcs.size}></input>
      </label>
      <label>
        Gas Limit:
        <input type="text" onInput={funcs.gasLimit} />
      </label>

      <button onClick={checkBlock}>확인</button>
    </Block>
  );
};
export default BlockComponent;

const Block = styled.div`
  & > label {
    display: block;
  }
`;
