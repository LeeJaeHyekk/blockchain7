import HeaderContaniner from "./Header";
import FooterContainer from "./Footer";
import LatesTxPage from "../components/LatestTxPage";
import LatesTxPageHeader from "../components/LatesTxPageHeader";
const TxPage = () => {
  return (
    <>
      <HeaderContaniner />
      <LatesTxPageHeader />
      <LatesTxPage />
      <FooterContainer />
    </>
  );
};
export default TxPage;
