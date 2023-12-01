function solution(play_list, listen_time) {
  // play_list에서 가장 짧은 곡을 찾는다.
  const minSong = Math.min(...play_list);
  const minSongIdx = play_list.indexOf(minSong);
  let left = minSongIdx - 1;
  let right = minSongIdx + 1;
  let count = 1;

  while (listen_time > 0) {
    // left가 없을 경우
    if (left < 0) {
      left = play_list.length - 1;
    }

    // right이 없을 경우
    if (right > play_list.length - 1) {
      right = 0;
    }
    // console.log(play_list[left]);
    // console.log(play_list[right]);

    // 둘 중 짧은 곡
    const shorter = Math.min(play_list[left], play_list[right]);
    // console.log('shorter', shorter);
    // listen_time이 곡보다 짧게 남은 경우 => 양쪽 둘다 선택
    if (listen_time <= shorter) {
      count += 1;
    }

    listen_time -= shorter;
    count += 1;
    // console.log('count', count);
    shorter === play_list[left] ? left += -1 : right += -1;
    // console.log('left', left);
    // console.log('right', right);
    // console.log('listen_time', listen_time);
  }

  return count;
}

const input1playList = [2, 3, 1, 4];
const input1ListenTime = 3;
const input1Expected = 3;

const input2playList = [1, 2, 3, 4];
const input2ListenTime = 5;
const input2Expected = 4;

const input3playList = [1, 2, 3, 4];
const input3ListenTime = 20;
const input3Expected = 4;

console.log(solution(input1playList, input1ListenTime));
console.log(solution(input2playList, input2ListenTime));
console.log(solution(input3playList, input3ListenTime));

/**
 * 1. 문제 설명

인터넷 음악 방송 채널에서 무료 스트리밍 서비스를 하고 있습니다. 이 채널은 음악을 플레이 리스트에 등록된 순서에 따라 연속해서 재생합니다. 
플레이 리스트에 등록된 음악은 모두 다르며, 마지막 곡을 재생한 다음에는 다시 첫 번째 곡부터 반복해서 재생합니다. 
또, 모든 음악은 각각의 재생 시간만큼 재생됩니다.

이 스트리밍 채널에 접속해서 listen_time분 동안 음악을 들으려 합니다. 이때, 들을 수 있는 서로 다른 꼭 개수의 최댓값을 구하려 합니다. 
단, 음악이 정확히 '분' 단위로 흘렀을 때 접속한다고 가정하며, 곡의 일부분만 들어도 들은 개수에 포함시킵니다.
각 음악의 재생 시간이 재생 목록에 들어있는 순서대로 담긴 배열 play_list와 음악을 듣는 시간 lister time이 매개 변수로 주어질 때, 
들을 수 있는 서로 다른 곡 개수의 최댓값을 return 하도록 solution 함수를 완성해주세요.

2. 제한사항
- play_list의 길이는 1 이상 100,000 이하입니다.
- play_list의 원소는 1 이상 10,000 이하인 자연수입니다.
- 음악의 재생시간은 모두 '분'단위 입니다.
- listen_time은 1 이상 10의 9제곱 이하인 자연수입니다.
 * 
 */


/**
 * 문제 풀 당시 접근 방식 
 * 1. 가장 짧은 곡에서 좌 우로 움직일지 Greedy에 의해 정하였음
 * 
 * 2. 
 */