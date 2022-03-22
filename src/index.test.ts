class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {
    this.number -= x;
  }

  divide(x: number) {
    if (x === 0) throw new Error('cannot divide by 0');
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

  it('divide 5 by 0', () => {
    const turboNumber = new TurboNumber(5);
    expect(() => turboNumber.divide(0)).toThrow('cannot divide by 0');
  });
});
