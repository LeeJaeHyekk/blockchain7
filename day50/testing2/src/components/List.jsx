import { useState } from "react";
export default function List() {
  const [listArr, setListArr] = useState([
    { text: "asdasd1", user: "adasd" },
    { text: "asdasd2", user: "adasd" },
    { text: "asdasd3", user: "adasd" },
    { text: "asdasd4", user: "adasd" },
    { text: "asdasd5", user: "adasd" },
  ]);
  return (
    <div>
      {listArr.map((item, index) => (
        <div>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}
