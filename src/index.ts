export class TurboNumber {
  constructor(public number: number) {}

  divide(x: number) {}
  subtract(x: number) {
    this.number -= x;
  }

  result() {
    return this.number;
  }
}
