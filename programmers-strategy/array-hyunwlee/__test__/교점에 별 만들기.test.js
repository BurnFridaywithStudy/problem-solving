import solution from "../교점에 별 만들기.retry";
describe('교점에 별 만들기', () => {
  test.each([
    {
      input: {
        line: [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]
      },
      expected: ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
    },
    {
      input: {
        line: [[0, 1, -1], [1, 0, -1], [1, 0, 1]]
      },
      expected: ["*.*"]
    },
    {
      input: {
        line: [[1, -1, 0], [2, -1, 0]]
      },
      expected: ["*"]
    },
    {
      input: {
        line: [[1, -1, 0], [2, -1, 0], [4, -1, 0]]
      },
      expected: ["*"]
    },
  ])(
    'solution($input.line) = $expected',
    ({ input: { line }, expected }) => {
      // given
      // when
      const test = solution(line);
      // then
      expect(test).toEqual(expected);
    }
  );
});
