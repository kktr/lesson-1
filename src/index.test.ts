import { TurboNumber } from './index';

describe('subtract', function () {
  it('subtract 15 from 20 ', () => {
    const turboNumber = new TurboNumber(20);
    turboNumber.subtract(15);
    expect(turboNumber.result()).toBe(5);
  });
});

describe('divide', function () {
  it('divide 20 by 20 ', () => {
    const turboNumber = new TurboNumber(20);
    turboNumber.divide(20);
    expect(turboNumber.result()).toBe(1);
  });
});
