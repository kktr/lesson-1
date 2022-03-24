// class NokiaTexter {
//   constructor(public message: string) {}
//   squeeze() {
//     const withoutAdditionalSpaces = this.message.replace(/\s+/g, ' ');
//     const shortenedText = withoutAdditionalSpaces.replace(/ /g, '');
//     if (shortenedText.length > 160) throw new Error('MessageTooLong');
//     if (shortenedText === withoutAdditionalSpaces) return this.message;
//     const splittedText = withoutAdditionalSpaces.split(' ');

//     const evenWordsUpper: string[] = splittedText.map((word, index) => {
//       if (index % 2 === 0) {
//         return word.toUpperCase();
//       } else return word;
//     });
//     return evenWordsUpper.join('');
//   }
// }

// describe(NokiaTexter.name, () => {
//   it("should return 'ZARAZwracam' when 'zaraz wracam' is given", () => {
//     //when
//     const example = new NokiaTexter('zaraz wracam');
//     //then
//     expect(example.squeeze()).toBe('ZARAZwracam');
//   });

//   it("should return 'NIEczekajZkolacja.' when 'Nie czekaj z kolacja. ' is given", () => {
//     //when
//     const example = new NokiaTexter('Nie czekaj z kolacja. ');
//     //then
//     expect(example.squeeze()).toBe('NIEczekajZkolacja.');
//   });

//   it("should return 'ZrobZakupyIWyrzucSmieci' when 'ZrobZakupyIWyrzucSmieci' is given", () => {
//     //when
//     const example = new NokiaTexter('ZrobZakupyIWyrzucSmieci');
//     //then
//     expect(example.squeeze()).toBe('ZrobZakupyIWyrzucSmieci');
//   });

//   it("should throw error 'MessageTooLong' if shortened string is longer than 160 chars", () => {
//     //when
//     const example = new NokiaTexter(
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//     );
//     //then
//     expect(() => example.squeeze()).toThrowError('MessageTooLong');
//   });
// });

// Michał:

// /*
// 1 a) Dla "zaraz wracam", metoda zwraca "ZARAZwracam".
//    b) Dla "Nie czekaj z kolacja. ", metoda zwraca "NIEczekajZkolacja." (uwaga na białe znaki :))
//    c) Dla tekstu bez spacji, metoda zwraca ten sam tekst bez zmian (np. "ZrobZakupyIWyrzucSmieci",
//       metoda zwróci ten sam tekst).
//    d) Dla tekstu, który po skróceniu ma więcej niż 160 znaków, metoda wyrzuca wyjątek MessageTooLong.
// 3. Zaimplementuj klasę zgodnie ze specyfikacją :)
// */

// środa 22.03.2022

// const defer = (callback: () => unknown) => callback();

// describe(() => {
// it('should call cv', () => {
//   const callbackFunction = jest.fn();
//   defer(callbackFunction);
//   expect(callbackFunction).toHaveBeenCalledTimes(1);
// });
// }

// test('rateLimit', () => {
//   const action = jest.fn();

//   const doAction = setTimeoutInSeconds(action, 100);

//   doAction(); // This should increment the call count
//   doAction(); // This shouldn't, because 100ms hasn't elapsed yet

//   jest.runAllTimers();

//   doAction(); // This should increment the count again

//   jest.runAllTimers();

//   expect().toHaveBeenCalledTimes(1);
// });
// const action = jest.fn();

// const doAction = setTimeoutInSeconds(action, 100);

// test('Should be done', (done) => {
//   function callback(data) {
//     try {
//       action();
//       expect(action).toHaveBeenCalledTimes(1);
//       done()
//   }

//   setTimeoutInSeconds(callback, 1);
// });

// jest.useFakeTimers();

// test('setTimeoutInSeconds', () => {
//   const action = jest.fn();

//   const doAction = setTimeoutInSeconds(action, 100);

//   doAction(); // This should increment the call count
//   doAction(); // This shouldn't, because 100ms hasn't elapsed yet

//   jest.advanceTimersByTime(101);

//   doAction(); // This should increment the count again

//   jest.advanceTimersByTime(101); // <= advance the timers again

//   expect(action).toHaveBeenCalledTimes(2); // Success!
// });

// test('rateLimit', () => {
//   const action = jest.fn();

//   const doAction = setTimeoutInSeconds(action, 100);

//   doAction(); // This should increment the call count
//   doAction(); // This shouldn't, because 100ms hasn't elapsed yet

//   jest.runAllTimers();

//   doAction(); // This should increment the count again

//   jest.runAllTimers();

//   expect(action).toHaveBeenCalledTimes(2);
// });

// const setTimeoutInSeconds = (callback: () => any, time: number) => {
//   setTimeout(() => {
//     callback();
//   }, time * 1000);
// };

// const setTimeoutInMinutes = (callback: () => any, time: number) => {
//   const timeInSeconds = time * 60;
//   setTimeoutInSeconds(callback, timeInSeconds);
// };

// // function defer(mock: () => any) {
// //   mock();
// // }

// // test('defer', () => {
// //   const mock = jest.fn();
// //   defer(mock);
// //   expect(mock).toHaveBeenCalledTimes(1);
// // });

// // it('setTimeoutInSeconds should be done', (done) => {
// //   jest.useFakeTimers();

// //   const mock = jest.fn();

// //   expect.assertions(1);

// //   function callback() {
// //     mock();
// //     expect(mock).toHaveBeenCalledTimes(1);
// //     done();
// //   }

// //   setTimeoutInSeconds(callback, 1);
// // });

// describe('setTimeoutInSeconds', () => {
//   beforeEach(() => {
//     jest.useFakeTimers();
//   });

//   afterEach(() => {
//     jest.useRealTimers();
//   });

//   it('Should be done with fake timers', (done) => {
//     const mock = jest.fn();
//     expect.assertions(2);

//     function callback() {
//       mock();
//       expect(mock).toHaveBeenCalledTimes(1);
//       done();
//     }

//     setTimeoutInSeconds(callback, 1);
//     jest.advanceTimersByTime(999);
//     expect(mock).not.toBeCalled();
//     jest.advanceTimersByTime(1);
//   });
// });

// describe('setTimeoutInMinutes', () => {
//   beforeEach(() => {
//     jest.useFakeTimers();
//   });

//   afterEach(() => {
//     jest.useRealTimers();
//   });

//   it('Should be call after set amount of time', (done) => {
//     const mock = jest.fn();
//     expect.assertions(2);

//     function callback() {
//       mock();
//       expect(mock).toHaveBeenCalledTimes(1);
//       done();
//     }

//     setTimeoutInMinutes(callback, 1);
//     jest.advanceTimersByTime(1000 * 60 - 1);
//     expect(mock).not.toBeCalled();
//     jest.advanceTimersByTime(1);
//   });
// });

// // ok
// const printRandomAfter = () => {
//   setTimeout(() => {
//     const a = Math.random();
//     const b = Math.random();

//     console.log(a, b);

//     setTimeout(() => {
//       const c = Math.random();

//       console.log(b, c);
//     }, 1000);
//   }, 1000);
// };

// printRandomAfter();

// export const delay = (timeInSeconds: number) => {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, timeInSeconds * 1000);
//   });
// };

// const first = () => {
//   console.log(1);
// };

// setTimeoutInSeconds(first, 1);

// delay(1)
//   .then(() => {
//     first();
//     return delay(1);
//   })
//   .then(() => {
//     first();
//     return delay(1);
//   })
//   .then(() => {});

// const printRandomAfter2 = () => {
//   const printRandomAfterFirst = () => {
//     setTimeout(() => {
//       const a = Math.random();
//       const b = Math.random();
//       console.log(a, b);
//       return b;
//     }, 1000);
//   };

// };

const printRandomAfter2 = () => {
  const printRandomAfterFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = Math.random();
      const b = Math.random();
      console.log(a, b);
      return b;
    }, 1000);
  });
};

const delay = (timeInSeconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInSeconds * 1000);
  });
};

let bb: number;

const getNum = () => {
  return Math.floor(Math.random() * 100);
};

delay(1)
  .then(() => {
    const aa = getNum();
    bb = getNum();
    console.log(aa, bb);
    return delay(1);
  })
  .then(() => {
    const cc = getNum();
    console.log(bb, cc);
  });

export const setTimeoutInSecondsReturningPromise = (
  callback: () => any,
  time: number
) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, time * 1000);
  });
};

export const printRandomAfter3 = async () => {
  const delay = (timeInSeconds: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeInSeconds * 1000);
    });
  };

  await delay(1);
  const a = getNum();
  const b = getNum();
  console.log(a, b);
  await delay(1);
  const c = getNum();
  console.log(b, c);
};
