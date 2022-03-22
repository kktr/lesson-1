class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {
    this.number -= x;
  }

  divide(x: number) {
    this.number /= x;
  }

  result() {
    return this.number;
  }
}

describe('TurboNumber', () => {
  it('subtract 5 form 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(5);
    expect(turboNumber.result()).toBe(5);
  });

  it('divide 10 by 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(10);
    expect(turboNumber.result()).toBe(1);
  });
});
