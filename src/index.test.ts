class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {
    this.number -= this.number;
  }

  result() {
    return this.number;
  }
}

describe('TurboNumber', () => {
  it('subtract 2 from 2', () => {
    const turboNumber = new TurboNumber(2);
    turboNumber.subtract(2);
    expect(turboNumber.result()).toBe(0);
  });
});
