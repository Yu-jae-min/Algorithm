/*
  # 문제
  없는 숫자 더하기

  # 문제 설명
  0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
  numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

  # 제한사항
  - 1 ≤ numbers의 길이 ≤ 9
    - 0 ≤ numbers의 모든 원소 ≤ 9
    - numbers의 모든 원소는 서로 다릅니다.

  # 입출력 예
  numbers	            result
  [1,2,3,4,6,7,8,0]	  14
  [5,8,4,0,6,7,9]	    6

  # 입출력 예 설명
  입출력 예 #1
  5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

  입출력 예 #2
  1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
*/

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

const solutionFirst = (numbers) => {
  let result = 0;

  for (let i = 0; i <= 9; i++) {
    if (numbers.includes(i)) {
      continue;
    } else {
      result += i;
    }
  }

  return result;
};

console.log(solutionFirst(numbers));

/*
  # 문제풀이 - solutionFirst

  1. 반복문을 십진수 최대 값인 9만큼 반복시킨다.
  2. 인자로 넘겨받은 배열에 증감하는 i값이 존재하는 경우 continue로 다음 반복을 실행한다.
  3. i값이 존재하지 않는 경우 result 변수에 i값을 누적하여 더해준다.
*/

const solutionSecond = (numbers, decimalSum = 45) => {
  return numbers.reduce((acc, cur) => acc - cur, decimalSum);
};

console.log(solutionSecond(numbers));

/*
  # 문제풀이 - solutionSecond

  1. 십진수의 합을 나타낼 변수를 생성하고 십진수 합인 45로 초기화시킨다.
  2. reduce 메소드를 활용하는데 초기값을 생성해놓은 십진수의 합으로 설정하고 파라미터로 전달받은 배열의 각 요소를 빼준다.
*/

/*
  # 문제풀이 비교
  (1) 실행 속도 : test02 > test01
  (2) 코드의 길이 : test02 > test01
  (3) 가독성 : test02 = test01
*/
