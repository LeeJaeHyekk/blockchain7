const array = [1, 2, 3, 4, 5];

function study() {
  let answer = [];
  array.forEach((element) => {
    answer.push(element);
  });
  return answer;
}
study(array);

function study2(array) {
  let answer = [];
  array.map((element) => {
    answer.push(element + 10);
  });

  return answer;
}
study2(array);

function for1(arr) {
  let dapFor = 0;
  for (let i = 1; i < arr.length + 1; i++) {
    dapFor = i;
    console.log("dap", dapFor);
  }

  return dapFor;
}
for1(array);

function map(arr) {
  let dap = [];
  for (let i = 1; i < arr.length + 1; i++) {
    dap.push(i + 10);
  }
  return dap;
}

map(array);
