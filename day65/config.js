// 라이브러리들을 가져오고
const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

// 암호화
const hexToBinary = require("hex-to-binary");
// hex 방식(0 ~ F)으로 지정된 데이터를 바이너리 방식 (0~1)으로 변환시켜준다.

// 난이도 조절용 수치를 미리 정해놓고 블록 생성 시간을 조절하기 위해서
// 최초에 난이도 조절할때 최초블록부터 이 수치까지는 난이도 증가 없이 0으로 주려고 만든 값.
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;

// 난이도 조절에 대해서 단위 개수, 난이도를 변경하는데 기준

const BLOCK_GEMRATION_INTERVAL = 10;

// 블록 하나당 걸리는 시간

const TIME_UNIT = 60 * 1000;
// 블록 10개를 만드는데 걸리는 시간 10분
// 1에 대한 시간단위(1분 = 60초 * 1000 밀리초)

module.exports = {
  lib: {
    merkle,
    SHA256,
    hexToBinary,
  },
  constant: {
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    BLOCK_GEMRATION_INTERVAL,
    TIME_UNIT,
  },
};
