import solution from "../거리두기 확인하기.retry";
describe('거리두기 확인하기', () => {
  test.each([
    {
      input: {
        places: [
          ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
          ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
          ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
          ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
          ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
        ]
      },
      expected: [1, 0, 1, 1, 1]
    },
    {
      input: {
        places: [
          ["XXXXX", "XXXXX", "OOPOO", "OOOOO", "OOPOO"]
        ]
      },
      expected: [0]
    },
  ])(
    'solution($input.places) = $expected',
    ({ input: { places }, expected }) => {
      // given
      // when
      const test = solution(places);
      // then
      expect(test).toEqual(expected);
    }
  );
});
