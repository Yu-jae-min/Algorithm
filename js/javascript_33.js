/*
  # 문제
  소수 만들기

  # 문제 설명
  주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
  숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

  # 제한사항
  - nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
  - nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

  # 입출력 예
  nums  	      result
  [1,2,3,4]	    1
  [1,2,7,6,4]	  4

  # 입출력 예 설명
  입출력 예 #1
  [1,2,4]를 이용해서 7을 만들 수 있습니다.

  입출력 예 #2
  [1,2,4]를 이용해서 7을 만들 수 있습니다.
  [1,4,6]을 이용해서 11을 만들 수 있습니다.
  [2,4,7]을 이용해서 13을 만들 수 있습니다.
  [4,6,7]을 이용해서 17을 만들 수 있습니다.
*/

const nums = [1, 2, 7, 6, 4];

const solutionFirst = (nums) => {
  let result = 0;

  // 소수 판별
  const isPrime = (num) => {
    if (num === 2) {
      return true;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  // 배열 반복 비교
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          result++;
        }
      }
    }
  }

  return result;
};

console.log(solutionFirst(nums));

/*
  # 문제풀이 - solutionFirst

  1. 소수임을 판별할 수 있는 함수를 생성한다. 이 때 2부터 소수를 판별할 수 있으니 조건문을 통해 2를 먼저 return 한다.
  2. 나머지는 반복문을 이용해 나눠지는 수가 있는지 계산해보고 나누어지는 경우 소수가 아니므로 false를 return 해주고 나누어지지 않는 경우 소수이므로 true를 리턴한다.
  3. 파라미터로 전달받은 배열을 반복하여 비교하여 위해 반복문을 중첩으로 사용한다. 3가지 수를 더하므로 3개의 반복문을 중첩하였다.
  4. 중첩 반복문을 통해 세 가지의 수를 더하고 더한 값을 소수 판별 함수에 인자로 전달하여 true인 경우 result 값을 증가시킨다.
  5. 반복문 완료 후 최종적으로 result 값을 출력시킨다.
*/
