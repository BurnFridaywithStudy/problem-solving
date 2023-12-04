import solution from "../핸드폰 번호 가리기";
describe('핸드폰 번호 가리기', () => {
  test.each([
    {
      input: {
        phone_number: "01033334444"
      },
      expected: "*******4444"
    },
    {
      input: {
        phone_number: "027778888"
      },
      expected: "*****8888"
    },
  ])(
    'solution($input.phone_number) = $expected',
    ({ input: { phone_number }, expected }) => {
      // given
      // when
      const test = solution(phone_number);
      // then
      expect(test).toEqual(expected);
    }
  );
});
