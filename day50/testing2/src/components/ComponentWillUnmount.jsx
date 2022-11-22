import { useEffect } from "react";

function ComponentWillUnmount() {
  useEffect(() => {
    return () => {};
    // 여기에  함수형태로 적는다
  }, []);
  return <div></div>;
}
export default ComponentWillUnmount;
