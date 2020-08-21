function purchaseBook(number) {
  if (number[0] && number[1]) {
    return 15.2;
  }
  if (number[1] === 1) {
    return 8;
  }
  return number[0] * 8;
}

describe("harry potter books", () => {
  it("true is true", () => {
    expect(true).toBe(true);
  });

  it("one book costs 8 EUR", () => {
    expect(purchaseBook([1])).toEqual(8);
  });

  it('0 books cost 0 EUR', function () {
    expect(purchaseBook([0])).toEqual(0);
  });

  it('2 books cost 16 EUR', function () {
    expect(purchaseBook([2])).toEqual(16);
  });

  it('1 book from 2nd series costs 8 EUR', function () {
    expect(purchaseBook([0, 1])).toEqual(8);
  });

  it('1 book from 1st series and 1 book from 2nd series cost 1 ', function () {
    expect(purchaseBook([1, 1])).toEqual(15.2);
  });
});
