export class TurboNumber {
  constructor(public number: number) {}

  divide(x: number) {
    this.number /= x;
  }

  subtract(x: number) {
    this.number -= x;
  }

  result() {
    return this.number;
  }
}
