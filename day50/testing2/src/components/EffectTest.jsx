import { useRef } from "react";
import { useState, useEffect, useMemo, useCallback } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [file, setFile] = useState({
    name: "asd",
    ext: "dsfg",
    type: "image/png",
  });
  useEffect(() => {
    console.log(`숫자가 ${num}`);
    setName(`${num}`);
  }, [num]);
  useEffect(() => {
    console.log("이름이" + name + "으로 변경됐어");
    setFile({ ...file, name: name });
  }, [name]);
  useEffect(() => {
    console.log(file);
  }, [file]);
  const increase = () => {
    setNum(num + 1);
  };
  //--------------------
  const ref = useRef();
  // -------------------
  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);
  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, []);
  //----------------------
  // id 가 바뀌었을때 pw,이름 , 나이 성별 , 지역에 대한 함수는 선언되는가?
  // 다시 선언하는 작업을 하지 않기 위해서 useCallback을 사용한다.
  // 최적화에 사용한다.
  return (
    <div>
      <button onClick={increase}>{num}</button>
      <div>{name}</div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}
export default EffectTest;
