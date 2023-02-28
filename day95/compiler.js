const solc = require("solc");
// 솔리디티 코드를 Byte 코드로 변환시켜주는 컴파일 라이브러리
const fs = require("fs");
// FileSystem,파일에 접근하여 데이터를 가져오거나 파일을 수정, 생성 등의 기능을 제공하는 라이브러리
const path = require("path");
// 경로에 대한 편의 기능을 제공하는 라이브러리
// 사용 이유는 보통 OS에 따른 경로 문자열이 다르기 때문에
//  - windows OS : C:\
//  - Linux OS : /mnt/c
// const contractPath = path.join(__dirname, "contracts", "Test.sol");
// __dirname : 현재 문서의 경로(폴더까지만)
//     - PS : ES6(import,export) 사용시  __dirname이 없다.
// path.join : 경로를 합쳐서 하나의 문자열로 반환
// fs.readFile(contractPath, { encoding: "utf-8" }, (err, data) =>
//   console.log("data", data)
// );
// console.log(fs.readFileSync(contractPath, "utf-8"));
// console.log("file", fs.readFile);
// console.log("fileSync", fs.readFileSync);

// const data = JSON.stringify({
// solc를 사용하여 솔리디티 코드를 컴파일시 사용할 설정
//   language: "Solidity",
//   언어는 솔리디티다. 솔리디티 이외에도 언어가 있으나 솔리디티가 너무 강해서 다른 언어를 거의 사용하지 않는다.
//   sources: {
// 파일에 대한 설정
// "Test.sol": {
// 파일로 생성되는 솔리디티 객체의 이름
//   content: fs.readFileSync(contractPath, "utf-8"),
//   파일 내용(코드)
// },
//   },
//   settings: {
// 추가적인 설정
// outputSelection: {
// 가져올 정보 설정
//   "*": {
// 파일 이름
// "*": ["*"],
// 가져올 데이터의 키,값
//   },
// * : 모든것
//  outputSelection 내용은 '모든 데이터를 전부 가져와라'
// },
//   },
// });
// const compiled = JSON.parse(solc.compile(data));
// fs.writeFileSync(path.join(__dirname, "Test.json"), JSON.stringify(compiled));
// console.log(compiled.contents["Test.sol"]);
// const {
//   abi,
//   evm: { bytecode },
// } = compiled.contracts["Test.sol"].Test;
// console.log(abi);
// console.log(bytecode.object);
// const bin = bytecode.object;

class Compiler {
  /*
   *  @param {string} __filename 파일이름
   */
  static compile(_fileName) {
    const contractPath = path.join(__dirname, "contracts", _fileName);
    const data = JSON.stringify({
      language: "Solidity",
      sources: {
        [_fileName]: {
          content: fs.readFileSync(contractPath, "utf-8"),
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    });
    const compiled = solc.compile(data);
    return Compiler.writeOutput(JSON.parse(compiled));
  }
  /**
   *
   * @param {*} _compiled
   */
  static writeOutput(_compiled) {
    const result = {};
    for (const contractFileName in _compiled.contracts) {
      console.log(contractFileName);
      const [contractName] = contractFileName.split(".");
      console.log(contractName);
      const contract = _compiled.contracts[contractFileName][contractName];
      //   객체에서 키에 대한 값을 가져오는데 키를 변수로 입력할 경우 대괄호를([]) 사용한다.
      const abi = contract.abi;
      const bytecode = contract.evm.bytecode.object;
      const tempObj = { abi, bytecode };
      const bulidPath = path.join(__dirname, "build", `${contractName}.json`);
      fs.writeFileSync(bulidPath, JSON.stringify(tempObj));
      result[contractName] = tempObj;
    }
    return result;
  }
}
module.exports = Compiler;
