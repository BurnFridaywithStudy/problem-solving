import solution from "../이진 변환 반복하기";
describe('이진 변환 반복하기', () => {
  test.each([
    {
      input: {
        s: "110010101001"
      },
      expected: [3, 8]
    },
    {
      input: {
        s: "01110"
      },
      expected: [3, 3]
    },
    {
      input: {
        s: "1111111"
      },
      expected: [4, 1]
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
