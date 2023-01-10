class ParenetTestClass {
  #privateValue;
  constructor(value) {
    this.#privateValue = value;
    this.value = value * 10;
  }
  get privateValue() {
    // 보통 private 키를 가져올때 사용한다.
    return this.#privateValue;
  }
  set privateValue(value) {
    this.#privateValue = value;
  }

  static add(a, b) {
    // class.test.js 에서 TestClass.add(1,2) / 11번째 줄에서 사용
    return a + b;
  }
  add() {
    // class.test.js 에서 test.add() / 10번쨰 줄에서 사용
    return this.#privateValue + this.value;
  }
}

class TestClass extends ParenetTestClass {
  constructor(value) {
    super(value);
    // console.log(this.#privateValue);
  }
}

module.exports = TestClass;
