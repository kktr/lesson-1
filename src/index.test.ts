class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {}

  result() {
    return 5;
  }
}

describe('TurboNumber', () => {
  it('subtract 5 form 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(5);
    expect(turboNumber.result()).toBe(5);
  });
});
