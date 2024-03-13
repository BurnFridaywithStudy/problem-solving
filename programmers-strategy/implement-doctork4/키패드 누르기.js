function solution(numbers, hand) {
	const left = [1, 4, 7];
	const right = [3, 6, 9];
	const center = [2, 5, 8, 0];
			
	let leftPos = [3, 0];
	let rightPos = [3, 2];

	let answer = '';

	for (number of numbers) {
		// 왼손으로 눌러야하는 번호인 경우
		if (left.includes(number)) {
			answer += "L";
			leftPos = [left.indexOf(number), 0];
			continue;
		}
    // 오른손으로 눌러야하는 번호인 경우
		if (right.includes(number)) {
			answer += "R";
			rightPos = [right.indexOf(number) , 2];
			continue;
		}
	// 가운데 번호인 경우
		if (center.includes(number)) {
		// 눌러야하는 번호의 위치
			const currNumPos = [center.indexOf(number), 1];
			const [cx, cy] = currNumPos;
			// 현재 왼손 위치
			const [lx, ly] = leftPos;
			// 현재 오른손 위치
			const [rx, ry] = rightPos;

			// 거리 계산
			const distanceNumtoLeft = Math.abs(cx - lx) + Math.abs(cy - ly);
			const distanceNumtoRight = Math.abs(cx - rx) + Math.abs(cy - ry);

			// 사용할 손 결정
			let usingHand;
			if (distanceNumtoLeft === distanceNumtoRight) {          // 거리가 같은 경우
				usingHand = hand;
			} else if (distanceNumtoLeft > distanceNumtoRight) {    // 오른손이 더 가까운 경우
				usingHand = "right";
			} else if (distanceNumtoLeft < distanceNumtoRight) {   // 왼손이 더 가까운 경우
				usingHand = "left";
			}

			if (usingHand === "left") {
				answer += "L";
				leftPos = [cx, cy];
				continue;
			}

			if (usingHand === "right") {
				answer += "R";
				rightPos = [cx, cy];
				continue;
			}
	}
}

	return answer;
}