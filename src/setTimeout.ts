export const setTimeoutInSeconds = (callback: () => any, time: number) => {
  setTimeout(() => {
    callback();
  }, time * 1000);
};

export const setTimeoutInMinutes = (callback: () => any, time: number) => {
  setTimeoutInSeconds(() => {
    callback();
  }, time * 60);
};

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

// nie działa
export const setTimeoutInSecondsUsingAsync = async (
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

function defer(mock: () => any) {
  mock();
}

describe('defer', () => {
  test('defer', () => {
    const mock = jest.fn();
    defer(mock);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

describe('with fake timers', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('setTimeoutInSeconds', () => {
    it('should be called after set amount of time', () => {
      return new Promise<void>((resolve) => {
        const mock = jest.fn();
        expect.assertions(2);

        setTimeoutInSecondsReturningPromise(mock, 1).then(() => {
          expect(mock).toHaveBeenCalledTimes(1);
          resolve();
        });
        jest.advanceTimersByTime(999);
        expect(mock).not.toBeCalled();
        jest.advanceTimersByTime(1);
      });
    });
  });

  describe('setTimeoutInMinutes', () => {
    it('should be called after set amount of time', (done) => {
      const mock = jest.fn();
      expect.assertions(2);

      function callback() {
        mock();
        expect(mock).toHaveBeenCalledTimes(1);
        done();
      }

      setTimeoutInMinutes(callback, 1);
      jest.advanceTimersByTime(1000 * 60 - 1);
      expect(mock).not.toBeCalled();
      jest.advanceTimersByTime(1);
    });
  });
});
