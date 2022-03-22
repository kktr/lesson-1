class NokiaTexter {
  constructor(public message: string) {}

  squeeze() {
    const shortenedText = this.message.replace(/ /g, '');
    if (shortenedText === this.message) return this.message;
    return this.message;
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
