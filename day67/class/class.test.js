const TestClass = require("./class");
describe("class Test", () => {
  it("private test", () => {
    const test = new TestClass(5);

    // test.value === test["value"]
    test["#privateValue"];

    expect(test.privateValue).toBe(5);

    expect(test.add()).toBe(55);
    expect(TestClass.add(1, 2)).toBe(3);

    // expect(test["#privateValue"]).toBe(5);
    // test["#privateValue"] !== test.
    // test.privateValue = 200;
    // exect(test.privateValue).toBe(200);
  });
});
