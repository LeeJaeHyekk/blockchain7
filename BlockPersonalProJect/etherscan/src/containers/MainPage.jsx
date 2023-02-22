import HeaderContaniner from "./Header";
import FooterContainer from "./Footer";
import MiddleMainPageContainer from "./MiddleMainPage";
import Add from "./AddBlock";
const MainContainer = () => {
  return (
    <>
      <HeaderContaniner />
      <MiddleMainPageContainer />
      <Add />
      <FooterContainer />
    </>
  );
};

export default MainContainer;
