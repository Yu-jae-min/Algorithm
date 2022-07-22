/*
  # 문제
  내적

  # 문제 설명
  길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
  이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

  # 제한사항
  - a, b의 길이는 1 이상 1,000 이하입니다.
  - a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

  # 입출력 예
  a	          b	            result
  [1,2,3,4]	  [-3,-1,0,2]	  3
  [-1,0,1]	  [1,0,-1]	    -2

  # 입출력 예 설명
  입출력 예 #1
  a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.

  입출력 예 #2
  a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

*/

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

const solutionFirst = (a, b) => {
  return a.map((el, idx) => el * b[idx]).reduce((acc, cur) => acc + cur);
};

console.log(solutionFirst(a, b));

/*
  # 문제풀이 - solutionFirst

  1. map 메소드를 통해 같은 index의 b 배열을 곱한 뒤 새로운 배열을 반환하고 reduce 메소드로 누적 값을 구하였다.
*/

const solutionSecond = (a, b) => {
  return a.reduce((acc, cur, idx) => (acc += a[idx] * b[idx]), 0);
};

console.log(solutionSecond(a, b));

/*
  # 문제풀이 - solutionSecond

  1. reduce 메소드를 활용하여 누적 값에 각 배열 index 요소를 곱한 뒤 더해준다.
  2. 누적 초기 값을 0 으로 설정한다. 초기 값 설정안하게 되면 원본 배열의 첫번째 요소가 초기 값이 된다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test02 > test01
  (2) 코드의 길이 : test02 > test01
  (3) 가독성 : test02 = test01
*/
