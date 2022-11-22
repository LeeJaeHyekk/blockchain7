import { useEffect } from "react";

function ComponentDidUpdate() {
  useEffect(() => {
    // 여기에 업데이트 떄마다 실행되는 코드를 작성한다.
    console.log("이거랑");
  });
  console.log("저거랑");
  //   차이가 없음
}
export default ComponentDidUpdate;
