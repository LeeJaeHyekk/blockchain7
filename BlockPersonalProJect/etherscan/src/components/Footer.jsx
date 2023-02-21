import styled from "styled-components";
const FooterComponent = () => {
  return (
    <FooterBox>
      <div>
        <div>Powered by Ethereum</div>
        <div>
          Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
          decentralized smart contracts platform.
        </div>
        <div>
          <img src="/img/map1.png" />
        </div>
      </div>
      <div>
        <div>Company</div>
        <div>About Us</div>
        <div>Brand Assets</div>
        <div>Contact Us</div>
        <div>Careers</div>
        <div>Terms of Service</div>
        <div>Bug Bounty</div>
      </div>
      <div>
        <div>Community</div>
        <div>API Documentation</div>
        <div>Knowledge Base</div>
        <div>Network Status</div>
        <div>Newsletters</div>
        <div>Disqus Comments</div>
      </div>
      <div>
        <div>Products & Services</div>
        <div>Advertise</div>
        <div>Explorer-as-a-Service (EaaS)</div>
        <div>API Plans</div>
        <div>Priority Support</div>
        <div>Blockscan</div>
        <div>Blockscan Chat</div>
      </div>
    </FooterBox>
  );
};
const FooterBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  gap: 9%;
  text-align: left;
  background-color: bagie;
  box-shadow: 1px 1px 1px 1px gray;
  & > div:first-child {
    text-align: center;

    & > div:last-child {
      display: flex;

      text-align: left;
      & > img {
        width: 90%;
      }
    }
  }
`;
export default FooterComponent;
