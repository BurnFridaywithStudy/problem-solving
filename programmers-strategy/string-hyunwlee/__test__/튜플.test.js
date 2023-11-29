import solution from "../튜플";
describe('튜플', () => {
  test.each([
    {
      input: {
        s: "{{2},{2,1},{2,1,3},{2,1,3,4}}",
      },
      expected: [2, 1, 3, 4]
    },
    {
      input: {
        s: "{{1,2,3},{2,1},{1,2,4,3},{2}}",
      },
      expected: [2, 1, 3, 4]
    },
    {
      input: {
        s: "{{20,111},{111}}",
      },
      expected: [111, 20]
    },
    {
      input: {
        s: "{{123}}",
      },
      expected: [123]
    },
    {
      input: {
        s: "{{4,2,3},{3},{2,3,4,1},{2,3}}",
      },
      expected: [3, 2, 4, 1]
    },
  ])(
    'solution($input.s) = $expected',
    ({ input: { s, n }, expected }) => {
      // given
      // when
      const test = solution(s);
      // then
      expect(test).toEqual(expected);
    }
  );
});
