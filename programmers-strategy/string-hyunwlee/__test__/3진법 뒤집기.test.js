import solution from "../3진법 뒤집기";
describe('3진법 뒤집기', () => {
  test.each([
    {
      input: {
        n: 45
      },
      expected: 7
    },
    {
      input: {
        n: 125,
      },
      expected: 229
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
