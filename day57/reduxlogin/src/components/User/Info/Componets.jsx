import styled from "styled-components";

const InfoComponent = ({ userName, onClick }) => {
  return (
    <InfoBox>
      {userName} 님 어서오세요
      <button
        onClick={() => {
          onClick();
        }}
      >
        LogOut
      </button>
    </InfoBox>
  );
};
export default InfoComponent;
const InfoBox = styled.div``;
