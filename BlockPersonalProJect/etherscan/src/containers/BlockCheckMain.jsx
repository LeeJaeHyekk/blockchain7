import { useState, useEffect } from "react";
import { newBlock } from "../api";
import BlockComponent from "../components/BlockCheckMain";
const BlockContainer = async () => {
  // const check = async () => {
  //   const check = await newBlock({ test: "test" }).then((data) => {
  //     console.log(data);
  //   });
  // };
  // useEffect(() => {
  //   check();
  // }, []);
  // return <BlockComponent checkBlock={check} />;
};

export default BlockContainer;
