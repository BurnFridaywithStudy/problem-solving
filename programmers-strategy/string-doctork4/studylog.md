# 2회차 공부기록

### 1. Array.from()

```javascript
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

- 배열 내부 원소들을 순회하면서 콜백함수를 실행한다. 부수효과가 있다.

