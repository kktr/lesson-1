import { TurboNumber } from './TurboNumber';

describe('TurboNumber', () => {
  let turboNumber: TurboNumber;
  beforeEach(() => {
    turboNumber = new TurboNumber(10);
  });

  it('subtract 5 form 10', () => {
    expect(turboNumber.subtract(5).result()).toBe(5);
  });

  it('divide 10 by 10', () => {
    expect(turboNumber.divide(10).result()).toBe(1);
  });

  it('divide 10 by 0', () => {
    expect(() => turboNumber.divide(0)).toThrow("can't divide by 0");
  });
});
