class TestClass {
  #privateValue;
  constructor(value) {
    this.#privateValue = value;
  }
  get privateValue() {
    // 보통 private 키를 가져올때 사용한다.
    return this.#privateValue;
  }
  set privateValue(value) {
    this.#privateValue = value;
  }
}
module.exports = TestClass;
