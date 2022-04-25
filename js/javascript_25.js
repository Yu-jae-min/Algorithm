/*
  # 문제
  같은 숫자는 싫어

  # 문제 설명
  배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
  이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
  단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
    - arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
    - arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

  # 제한 조건
  배열 arr의 크기 : 1,000,000 이하의 자연수
  배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

  # 입출력 예
  arr	              answer
  [1,1,3,3,0,1,1]	  [1,3,0,1]
  [4,4,4,3,3]	      [4,3]
*/

const test01 = (arr) => {
  let result = [];

  arr.map((elem, index, array) => {
    if (array[index] !== array[index + 1]) result.push(elem);
  });

  return result;
};

console.log(test01([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]

/*
  # 문제풀이 - test01
  1. map메서드를 활용하였다. 실행한 배열 index의 값이 다음 index값과 동일하지 않을 경우의 요소만 빈 배열에 push 하였다.
  이 때 마지막 요소의 경우 undefined와 비교하게 되어 무조건 push 하게 된다.
*/

const test02 = (arr) => {
  return arr.filter((elem, index, array) => array[index] !== array[index + 1]);
};

console.log(test02([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]

/*
  # 문제풀이 - test02
  1. filter메서드를 활용하였다. filter메서드를 실행한 배열 index의 값이 다음 index값과 동일하지 않을 경우의 요소만 filter 처리하였다.
  이 때 마지막 요소의 경우 undefined와 비교하게 되어 무조건 true가 출력되게 된다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test02 > test01
  (2) 코드의 길이 : test02 > test01
  (3) 가독성 : test02 > test01

  첫번째 풀이와 두번째 풀이는 비슷하게 풀었다. 모든 측면을 비교해보았을 때 두번째 풀이가 더 좋은 풀이였다.
  또한 문제를 푼 후 프로그래머스의 다른 개발자의 풀이들과 비교해보았는데 좋아요가 제일 많은 풀이와 거의 비슷하여 뿌듯(?)하였다.
*/
