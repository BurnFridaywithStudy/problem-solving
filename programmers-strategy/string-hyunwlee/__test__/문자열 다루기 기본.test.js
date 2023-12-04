import solution from "../문자열 다루기 기본";
describe('문자열 다루기 기본', () => {
  test.each([
    {
      input: {
        s: "a234"
      },
      expected: false
    },
    {
      input: {
        s: "1234"
      },
      expected: true
    },
    {
      input: {
        s: "abcd"
      },
      expected: false
    },
    {
      input: {
        s: "efgh"
      },
      expected: false
    },
    {
      input: {
        s: "00000"
      },
      expected: false
    },
    {
      input: {
        s: "012z"
      },
      expected: false
    },
  ])(
    'solution($input.s) = $expected',
    ({ input: { s }, expected }) => {
      // given
      // when
      const test = solution(s);
      // then
      expect(test).toBe(expected);
    }
  );
});
