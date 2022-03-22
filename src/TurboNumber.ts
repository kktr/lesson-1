export class TurboNumber {
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
