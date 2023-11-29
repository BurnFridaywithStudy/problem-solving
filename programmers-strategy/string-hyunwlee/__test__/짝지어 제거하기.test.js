import solution from "../짝지어 제거하기";
describe('짝지어 제거하기', () => {
  test.each([
    {
      input: {
        s: "baabaa",
      },
      expected: 1
    },
    {
      input: {
        s: "cdcd",
      },
      expected: 0
    },
  ])(
    'solution($input.s) = $expected',
    ({ input: { s }, expected }) => {
      // given
      // when
      const test = solution(s);
      // then
      expect(test).toEqual(expected);
    }
  );
});
