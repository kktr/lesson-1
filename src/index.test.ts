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
  it('subtract 5 from 5', () => {
    const turboNumber = new TurboNumber(5);
    turboNumber.subtract(5);
    expect(turboNumber.result()).toBe(0);
  });

  it('divide 5 by 5', () => {
    const turboNumber = new TurboNumber(5);
    turboNumber.divide(5);
    expect(turboNumber.result()).toBe(1);
  });
});
