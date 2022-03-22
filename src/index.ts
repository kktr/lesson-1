export const number = 5;

export class TurboNumber {
  constructor(public number: number) {}

  subtract(x: number) {
    this.number = this.number - x;
    return this;
  }

  divide(x: number) {
    // if (x === 0) throw new Error("Dont't divide by zero");
    this.number = this.number / x;
    return this;
  }

  result() {
    return this.number;
  }

  static new(x: number) {
    return new TurboNumber(x);
  }
}

export const turboNumber = new TurboNumber(10);

console.log();
console.log(turboNumber.result());
console.log(turboNumber.subtract(2));
console.log(turboNumber.result());

console.log();
Number.MAX_SAFE_INTEGER;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
