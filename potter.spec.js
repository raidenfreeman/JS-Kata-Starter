function purchaseBook(number) {
  if (number === 0) {
    return number * 8
  } else if (number === 2) {
    return number * 8;
  }
  return number * 8;
}

describe("harry potter books", () => {
  it("true is true", () => {
    expect(true).toBe(true);
  });

  it("one book costs 8 EUR", () => {
    expect(purchaseBook(1)).toEqual(8);
  });

  it('0 books cost 0 EUR', function () {
    expect(purchaseBook(0)).toEqual(0);
  });

  it('2 books cost 16 EUR', function () {
    expect(purchaseBook(2)).toEqual(16);
  });
});
