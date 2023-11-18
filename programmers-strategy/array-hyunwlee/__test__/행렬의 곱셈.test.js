import solution from "../행렬의 곱셈";
describe('행렬의 곱셈', () => {
  test.each([
    {
      input: {
        arr1: [[1, 4], [3, 2], [4, 1]],
        arr2: [[3, 3], [3, 3]]
      },
      expected: [[15, 15], [15, 15], [15, 15]]
    },
    {
      input: {
        arr1: [[2, 3, 2], [4, 2, 4], [3, 1, 4]],
        arr2: [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
      },
      expected: [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
    },

  ])(
    'solution($input.arr1, $input.arr2) = $expected',
    ({ input: { arr1, arr2 }, expected }) => {
      // given
      // when
      const test = solution(arr1, arr2);
      // then
      expect(test).toEqual(expected);
    }
  );
});
