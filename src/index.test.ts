class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {
    this.number -= x;
    return this;
  }

  divide(x: number) {
    if (x === 0) throw new Error('cannot divide by 0');
    this.number /= x;
    return this;
  }
  result() {
    return this.number;
  }
}

describe('TurboNumber', () => {
  it('subtract 5 from 5', () => {
    const turboNumber = new TurboNumber(5);
    expect(turboNumber.subtract(5).result()).toBe(0);
  });

  it('divide 5 by 5', () => {
    const turboNumber = new TurboNumber(5);
    expect(turboNumber.divide(5).result()).toBe(1);
  });

  it('divide 5 by 0', () => {
    const turboNumber = new TurboNumber(5);
    expect(() => turboNumber.divide(0)).toThrow('cannot divide by 0');
  });
});
