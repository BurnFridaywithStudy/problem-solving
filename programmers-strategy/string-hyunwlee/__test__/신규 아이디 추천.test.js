import solution from "../신규 아이디 추천";
describe('신규 아이디 추천', () => {
  test.each([
    {
      input: {
        new_id: "...!@BaT#*..y.abcdefghijklm",
      },
      expected: "bat.y.abcdefghi"
    },
    {
      input: {
        new_id: "z-+.^.",
      },
      expected: "z--"
    },
    {
      input: {
        new_id: "=.=",
      },
      expected: "aaa",
    },
    {
      input: {
        new_id: "123_.def",
      },
      expected: "123_.def",
    },
    {
      input: {
        new_id: "abcdefghijklmn.p",
      },
      expected: "abcdefghijklmn",
    },
  ])(
    'solution($input.new_id) = $expected',
    ({ input: { new_id }, expected }) => {
      // given
      // when
      const test = solution(new_id);
      // then
      expect(test).toEqual(expected);
    }
  );
});
