import solution from "../삼각 달팽이.retry";
describe('삼각 달팽이', () => {
  test.each([
    {
      input: {
        n: 4,
      },
      expected: [1, 2, 9, 3, 10, 8, 4, 5, 6, 7],
    },
    {
      input: {
        n: 5,
      },
      expected: [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9],
    },
    {
      input: {
        n: 6,
      },
      expected: [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11],
    },
  ])(
    'solution($input.n) = $expected',
    ({ input: { n }, expected }) => {
      // given
      // when
      const test = solution(n);
      // then
      expect(test).toEqual(expected);
    }
  );
});
