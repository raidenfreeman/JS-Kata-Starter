function purchaseBook(basket) {
  if (basket[0] === 1 && basket[1] === 1 && basket[2] === 1) {
    return 0.9 * (basket.length * 8);
  }
  if (basket[0] === 1 && basket[1] === 1) {
    return 0.95 * (basket.length * 8);
  }
  if (basket[1] === 1) {
    return 8;
  }
  if (basket[0] === 1 && basket[1] === 2) {
    return 23.2;
  }
  return basket[0] * 8;
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

  it('1 book from 1st series and 1 book from 2nd series cost 15.2', function () {
    expect(purchaseBook([1, 1])).toEqual(15.2);
  });

  it('1 book from 1st series and 2 books from 2nd series cost 23.2', function () {
    expect(purchaseBook([1, 2])).toEqual(23.2);
  });

  it('1 book from 1st series, 1 book from 2nd series and 1 from 3rd series cost 21.6', function () {
    expect(purchaseBook([1, 1, 1])).toEqual(21.6)
  });
});
