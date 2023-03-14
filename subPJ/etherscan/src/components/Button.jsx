import styled from "styled-components";
const Button = ({ sync }) => {
  return (
    <Box>
      <button onClick={sync}>만들기</button>
    </Box>
  );
};
export default Button;

const Box = styled.div`
  display: flex;
`;
