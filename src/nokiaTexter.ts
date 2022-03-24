class NokiaTexter {
  constructor(public message: string) {}
  squeeze() {
    const withoutAdditionalSpaces = this.message.replace(/\s+/g, ' ');
    const shortenedText = withoutAdditionalSpaces.replace(/ /g, '');
    if (shortenedText.length > 160) throw new Error('MessageTooLong');
    if (shortenedText === withoutAdditionalSpaces) return this.message;
    const splittedText = withoutAdditionalSpaces.split(' ');

    const evenWordsUpper: string[] = splittedText.map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase();
      } else return word;
    });
    return evenWordsUpper.join('');
  }
}

describe(NokiaTexter.name, () => {
  it("should return 'ZARAZwracam' when 'zaraz wracam' is given", () => {
    //when
    const example = new NokiaTexter('zaraz wracam');
    //then
    expect(example.squeeze()).toBe('ZARAZwracam');
  });

  it("should return 'NIEczekajZkolacja.' when 'Nie czekaj z kolacja. ' is given", () => {
    //when
    const example = new NokiaTexter('Nie czekaj z kolacja. ');
    //then
    expect(example.squeeze()).toBe('NIEczekajZkolacja.');
  });

  it.only("should return 'ZrobZakupyIWyrzucSmieci' when 'ZrobZakupyIWyrzucSmieci' is given", () => {
    //when
    const example = new NokiaTexter('ZrobZakupyIWyrzucSmieci');
    //then
    expect(example.squeeze()).toBe('ZrobZakupyIWyrzucSmieci');
  });

  it("should throw error 'MessageTooLong' if shortened string is longer than 160 chars", () => {
    //when
    const example = new NokiaTexter(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    //then
    expect(() => example.squeeze()).toThrowError('MessageTooLong');
  });
});

class MessageTooLongError extends Error {
  constructor() {
    super('MessageTooLong');
  }
}

class NokiaTexterMichal {
  constructor(private readonly text: string) {}

  squeeze() {
    if (this.isOneElementText()) return this.text;
    const result = this.text
      .split(' ')
      .filter(this.isPresentElement)
      .map(this.uppercaseEvenElements)
      .join('');
    if (this.isResultMessageTooLong(result)) throw new MessageTooLongError();
    return result;
  }

  private isPresentElement = (element: string) => {
    return element !== '';
  };

  private uppercaseEvenElements = (part: string, index: number) =>
    index % 2 === 0 ? part.toUpperCase() : part;

  private isOneElementText = () => {
    return !this.text.trim().includes(' ');
  };

  private isResultMessageTooLong = (result: string) => {
    return result.length > 160;
  };
}

describe(NokiaTexterMichal.name, () => {
  it("should return 'ZARAZwracam' when 'zaraz wracam' is given", () => {
    //when
    const example = new NokiaTexterMichal('zaraz wracam');
    //then
    expect(example.squeeze()).toBe('ZARAZwracam');
  });

  it("should return 'NIEczekajZkolacja.' when 'Nie czekaj z kolacja. ' is given", () => {
    //when
    const example = new NokiaTexterMichal('Nie czekaj z kolacja. ');
    //then
    expect(example.squeeze()).toBe('NIEczekajZkolacja.');
  });

  it("should return 'ZrobZakupyIWyrzucSmieci' when 'ZrobZakupyIWyrzucSmieci' is given", () => {
    //when
    const example = new NokiaTexterMichal('ZrobZakupyIWyrzucSmieci');
    //then
    expect(example.squeeze()).toBe('ZrobZakupyIWyrzucSmieci');
  });

  it("should throw error 'MessageTooLong' if shortened string is longer than 160 chars", () => {
    //when
    const example = new NokiaTexterMichal(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    //then
    expect(() => example.squeeze()).toThrow(MessageTooLongError);
  });

  it("should return 'NIEczekajZkolacja.' when 'Nie  czekaj z kolacja. ' is given", () => {
    //when
    const example = new NokiaTexterMichal('Nie  czekaj z kolacja. ');
    //then
    expect(example.squeeze()).toBe('NIEczekajZkolacja.');
  });
});
