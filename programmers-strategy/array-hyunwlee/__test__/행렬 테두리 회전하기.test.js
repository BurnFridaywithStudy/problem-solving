import solution from "../행렬 테두리 회전하기";
describe('행렬 테두리 회전하기', () => {
  test.each([
    {
      input: {
        rows: 6,
        columns: 6,
        queries: [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]],
      },
      expected: [8, 10, 25]
    },
    {
      input: {
        rows: 3,
        columns: 3,
        queries: [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]
      },
      expected: [1, 1, 5, 3]
    },
    {
      input: {
        rows: 100,
        columns: 97,
        queries: [[1, 1, 100, 97]]
      },
      expected: [1]
    },
  ])(
    'solution($input.rows, $input.columns, $input.queries) = $expected',
    ({ input: { rows, columns, queries }, expected }) => {
      // given
      // when
      const test = solution(rows, columns, queries);
      // then
      expect(test).toEqual(expected);
    }
  );
});
