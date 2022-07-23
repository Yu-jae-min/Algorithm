/*
  # 문제
  음양 더하기

  # 문제 설명
  어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

  # 제한사항
  - absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
  - signs의 길이는 absolutes의 길이와 같습니다.
  - signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

  # 입출력 예
  absolutes	    signs	                  result
  [4,7,12]	    [true,false,true]	      9
  [1,2,3]	      [false,false,true]	    0

  # 입출력 예 설명
  입출력 예 #1
  signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
  따라서 세 수의 합인 9를 return 해야 합니다.

  입출력 예 #2
  signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
  따라서 세 수의 합인 0을 return 해야 합니다.
*/

const absolutes = [4, 7, 12];
const signs = [true, false, true];

const solutionFirst = (absolutes, signs) => {
  return absolutes.reduce((acc, cur, idx) => {
    if (!signs[idx]) {
      return (acc += absolutes[idx] * -1);
    } else {
      return (acc += absolutes[idx]);
    }
  }, 0);
};

console.log(solutionFirst(absolutes, signs));

/*
  # 문제풀이 - solutionFirst

  1. reduce 메소드로 누적 값을 구하는데, 이 때 조건문을 활용하여 signs가 false일 경우 -1 을 곱하고 아닌 경우 1 을 곱하였다.
*/

const solutionSecond = (absolutes, signs) => {
  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
};

console.log(solutionSecond(absolutes, signs));

/*
  # 문제풀이 - solutionSecond

  1. reduce 메소드로 누적 값을 구하는데, 이 때 삼항연산자를 활용하여 signs가 false일 경우 -1 을 곱하고 아닌 경우 1 을 곱하였다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test02 > test01
  (2) 코드의 길이 : test02 > test01
  (3) 가독성 : test02 < test01
*/
