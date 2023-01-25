function test(a: number, b: number): number | void {
  if (a > 5) {
    a = a + 50;
  } else {
    return a + b;
  }
}
console.log("test:", test(3, 2));
console.log("testTy:", typeof test(3, 2));
