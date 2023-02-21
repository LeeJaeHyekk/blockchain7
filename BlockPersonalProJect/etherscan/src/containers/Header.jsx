import { newBlock } from "../api";
import { newTx } from "../api";
import HeaderComponent from "../components/Header";

const HeaderContaniner = () => {
  newBlock({ test: "test" }).then((data) => {
    console.log(data);
  });
  newTx({ test: "text" }).then((txData) => {
    console.log("txData", txData);
  });

  return (
    <>
      <HeaderComponent />
    </>
  );
};
export default HeaderContaniner;
