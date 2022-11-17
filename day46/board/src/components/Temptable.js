import TempTr from "./TempTr";
export default function TempTable({ tempArr, tableData, head }) {
  console.log(tempArr, tableData, head);
  return (
    <table>
      <thead>
        <TempTr tableData={tableData} head={head} />
      </thead>
      <tbody>
        {tempArr.map((item, index) => (
          <TempTr key={index} tableData={item} head={head} />
        ))}
      </tbody>
    </table>
  );
}
