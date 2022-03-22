export class TurboNumber {
  constructor(public number: number) {}

  divide(x: number) {
    this.number /= x;
    return this;
  }

  subtract(x: number) {
    this.number -= x;
    return this;
  }

  result() {
    return this.number;
  }
}
