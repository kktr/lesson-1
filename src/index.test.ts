import { number, TurboNumber, turboNumber } from './index';

describe('number', function () {
  it('works', () => {
    expect(number).toBe(5);
  });
});

describe('divide', function () {
  it('divide 10 by 5', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(2);
    expect(turboNumber.result()).toBe(5);
  });

  it('divide 10 by 20', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(20);
    expect(turboNumber.result()).toBe(0.5);
  });

  it('divide 10 by 20', () => {
    const turboNumber = new TurboNumber(10);
    expect(turboNumber.divide(20).result()).toBe(0.5);
  });

  it('divide 10 by -20', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(-20);
    expect(turboNumber.result()).toBe(-0.5);
  });

  it('divide 10 by 0', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(0);
    expect(turboNumber.result()).toBe(Infinity);
  });
});

describe('subtract', function () {
  it('subtract 2 from 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(2);
    expect(turboNumber.result()).toBe(8);
  });

  it('subtract 12 from 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(12);
    expect(turboNumber.result()).toBe(-2);
  });

  it('subtract -0.5 from 10', () => {
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(-0.5);
    expect(turboNumber.result()).toBe(10.5);
  });
});
