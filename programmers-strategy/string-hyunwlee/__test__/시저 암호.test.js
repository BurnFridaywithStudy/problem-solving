import solution from "../시저 암호";
describe('시저 암호', () => {
  test.each([
    {
      input: {
        s: "AB",
        n: 1,
      },
      expected: "BC"
    },
    {
      input: {
        s: "z",
        n: 1,
      },
      expected: "a"
    },
    {
      input: {
        s: "a B z",
        n: 4,
      },
      expected: "e F d"
    },
  ])(
    'solution($input.s, $input.n) = $expected',
    ({ input: { s, n }, expected }) => {
      // given
      // when
      const test = solution(s, n);
      // then
      expect(test).toEqual(expected);
    }
  );
});
