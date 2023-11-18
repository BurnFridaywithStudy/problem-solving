import solution from "../이상한 문자 만들기";
describe('이상한 문자 만들기', () => {
  test.each([
    {
      input: {
        s: "try hello world"
      },
      expected: "TrY HeLlO WoRlD"
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
