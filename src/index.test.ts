import { TurboNumber } from './TurboNumber';

describe('TurboNumber', () => {
  let turboNumber: TurboNumber;

  beforeEach(() => {
    turboNumber = new TurboNumber(5);
  });

  it('subtract 5 from 5', () => {
    expect(turboNumber.subtract(5).result()).toBe(0);
  });

  it('divide 5 by 5', () => {
    expect(turboNumber.divide(5).result()).toBe(1);
  });

  it('divide 5 by 0', () => {
    expect(() => turboNumber.divide(0)).toThrow('cannot divide by 0');
  });
});
