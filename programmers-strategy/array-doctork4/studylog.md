# 1회차 공부 기록

### 1. 하나의 그룹에서 서로 다른 2개의 원소들에게 로직을 적용할 때 
```javascript
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      foo(arr[i], arr[j]);
    }
  }
```

### 2. 문자열 조작
- 불변성에 의해 바로 조작은 안됨
- `.split('')` 메서드를 통해 배열로 바꾸고, 해당 배열의 주소로 접근하여 변경한다.
- 변경 후 `.join` 메서드를 통해 다시 문자열로 변경

## 스터디 이후 알게 된 것

### 1. 배열 생성
- 리터럴 외에도 Array(3)로 생성할 수 있다. 인자는 배열의 크기이다. 
- 값이 할당되지 않아서 undefined가 출력된다.
- 2차원 배열 생성
> 함수로 만들기
```javascript
  function make2DArray(row, col) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(col);
    }
    return arr;
  }
```
> 한줄 짜리로 만들기

```javascript
  const arr1 = Array.from(Array(5), () => new Array(2)) // undefined 값들로 채워진 2차원 배열

  const arr2 = Array.from(Array(5), () => Array(2).fill(null)); // null값들로 채워진 2차원 배열
```

### 2. 스프레드 문법

배열 안의 요소들을 모두 파라미터로 넣고 싶을 때

- <사용 전>
```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
);
```

- <사용 후>
```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
```


### 3. 구조분해 할당

배열 내 요소 사용 시 구조분해 할당을 활용하여 빠르고 효율적으로 작성할 수 있다.

```javascript
  const arr1 = [1, 2, 3]
  const foo = arr1[0] - arr1[1] // 기존

  const [first, second, third] = [1, 2, 3]; 
  const bar = first - second; // 스프레드 문법 활용
```