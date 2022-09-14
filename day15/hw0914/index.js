const headList = [
  { type: "number", name: "번호" },
  { type: "data", name: "내용" },
];
const doList = [];

function makelist(number, data) {
  doList.push({
    number,
    data,
  });
}

const tableheadElem = document.getElementById("table-header");

headList.forEach((item) => {
  tableheadElem.innerHTML += "<th>" + item.name + "</th>";
});

const dataListElem = document.getElementById("data-list");

doList.forEach((item, index) => {
  let tempStr = "<tr>";
  headList.forEach((headItem) => {
    if (headItem.type === "number") tempStr += `<th>${index + 1}</th>`;
    else tempStr += `<td>${item[headItem.type]}</td>`;
  });
  tempStr += "</tr>";
  studentListElem.innerHTML += tempStr;
});
