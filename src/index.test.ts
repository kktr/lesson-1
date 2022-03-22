import { TurboNumber } from './TurboNumber';

describe('TurboNumber', () => {
  it('subtract 5 form 10', () => {
    const turboNumber = new TurboNumber(10);
    expect(turboNumber.subtract(5).result()).toBe(5);
  });

  it('divide 10 by 10', () => {
    const turboNumber = new TurboNumber(10);
    expect(turboNumber.divide(10).result()).toBe(1);
  });

  it('divide 10 by 0', () => {
    const turboNumber = new TurboNumber(10);
    expect(() => turboNumber.divide(0)).toThrow("can't divide by 0");
  });
});
