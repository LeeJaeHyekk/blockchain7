import TempTd from "./TempTd";

export default function TempTr({ isHead, tableData, head }) {
  // export default function TempTr
  console.log(tableData);
  // console.log(props.tableData)
  if (isHead) {
    return (
      <tr>
        {head.map((item, index) => (
          <th key={index}>{tableData[item]}</th>
        ))}
      </tr>
    );
  }
  return (
    <tr>
      {head.map((item, index) => (
        <TempTd key={index} item={tableData[item]} />
      ))}
    </tr>
  );
}
