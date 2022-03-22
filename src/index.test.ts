import { TurboNumber } from './index';

describe('subtract', function () {
  it('subtract 15 from 20', () => {
    const turboNumber = new TurboNumber(20);
    expect(turboNumber.subtract(15).result()).toBe(5);
  });

  it('subtract 10 from 20', () => {
    const turboNumber = new TurboNumber(20);
    expect(turboNumber.subtract(15).result()).toBe(5);
  });
});

describe('divide', function () {
  it('divide 20 by 20', () => {
    const turboNumber = new TurboNumber(20);
    expect(turboNumber.divide(20).result()).toBe(1);
  });

  it('divide 20 by 10', () => {
    const turboNumber = new TurboNumber(20);
    expect(turboNumber.divide(10).result()).toBe(2);
  });

  it('handle divide by 0', () => {
    const turboNumber = new TurboNumber(20);
    expect(turboNumber.divide(0).result()).toBe(Infinity);
  });
});
