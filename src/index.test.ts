import { number, TurboNumber, turboNumber } from './index';

let tn: TurboNumber;

describe('number', function () {
  it('works', () => {
    expect(number).toBe(5);
  });
});

describe('divide', function () {
  beforeEach(() => {
    tn = new TurboNumber(10);
  });

  it('divide 10 by 5', () => {
    expect(tn.divide(2).result()).toBe(5);
  });

  it('divide 10 by 20', () => {
    expect(tn.divide(20).result()).toBe(0.5);
  });

  it('divide 10 by 5', () => {
    expect(TurboNumber.new(10).divide(5).result()).toBe(2);
  });

  it('divide 10 by -20', () => {
    expect(tn.divide(-20).result()).toBe(-0.5);
  });

  it('divide 10 by 0', () => {
    expect(tn.divide(0).result()).toBe(Infinity);
  });
});

describe('subtract', function () {
  beforeEach(() => {
    tn = new TurboNumber(10);
  });

  it('subtract 2 from 10', () => {
    expect(tn.subtract(2).result()).toBe(8);
  });

  it('subtract 12 from 10', () => {
    expect(tn.subtract(12).result()).toBe(-2);
  });

  it('subtract -0.5 from 10', () => {
    expect(tn.subtract(-0.5).result()).toBe(10.5);
  });

  it('divide 10 by 0', () => {
    expect(tn.divide(-20).result()).toBe(-0.5);
  });
});
