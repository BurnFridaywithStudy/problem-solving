import solution from "../문자열 압축";
describe('문자열 압축', () => {
  test.each([
    {
      input: {
        s: "aabbaccc",
      },
      expected: 7
    },
    {
      input: {
        s: "ababcdcdababcdcd",
      },
      expected: 9
    },
    {
      input: {
        s: "abcabcdede",
      },
      expected: 8
    },
    {
      input: {
        s: "abcabcabcabcdededededede",
      },
      expected: 14
    },
    {
      input: {
        s: "xababcdcdababcdcd",
      },
      expected: 17
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
