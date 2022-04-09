/*
    # 문제
    자연수 뒤집어 배열로 만들기

    # 문제 설명
    자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

    # 제한 조건
    n은 10,000,000,000이하인 자연수입니다.

    # 입출력 예
    n	    return
    12345	[5,4,3,2,1]
*/

const test01 = (n) => {
    const result = [];

    n.toString().split('').forEach(el => result.unshift(Number(el)));

    return result;
}

console.log(test01(32345)) // [5, 4, 3, 2, 3]

  /*
      # 문제풀이 - test01
      1. 숫자형을 문자형으로 바꿔주기 위해 toString메소드를 활용하였다.
      2. split메소드로 파라미터를 각 요소 나누어 배열로 담았다.
      3. forEach메소드로 배열의 각 요소를 빈 배열에 담아주는데 기존 순서를 역순으로 뒤집어야하기 때문에 unshift를 활용하여
      빈 배열의 index 0 의 위치로 순차적으로 담아주었다. 이 때 담아주기 전 기존 파라미터의 타입인 숫자형으로 다시 바꿔주었다.
  */

const test02 = (n) => {
    return n.toString().split('').map((str)=>Number(str)).reverse();
}

console.log(test02(32345)) // [5, 4, 3, 2, 3]

  /*
      # 문제풀이 - test02
      1. 숫자형을 문자형으로 바꿔주기 위해 toString메소드를 활용하였다.
      2. split메소드로 파라미터를 각 요소 나누어 배열로 담았다.
      3. map메소드를 활용하여 배열로 담긴 각 요소의 타입을 숫자형을 바꿔주었다.
      4. reverse메소드를 활용하여 배열의 순서를 뒤집었다.
  */

function test03(n) {
    const result = [];

    do {
        result.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return result;
}

console.log(test03(32345)) // [5, 4, 3, 2, 3]

  /*
      # 문제풀이 - test02
      1. 숫자형을 문자형으로 바꿔주기 위해 toString메소드를 활용하였다.
      2. split메소드로 파라미터를 각 요소 나누어 배열로 담았다.
      3. map메소드를 활용하여 배열로 담긴 각 요소의 타입을 숫자형을 바꿔주었다.
      4. reverse메소드를 활용하여 배열의 순서를 뒤집었다.
  */

  /*
      # 문제풀이 비교
      함수 실행 속도는 test03 -> test02 -> test01순으로 test01의 함수 실행 속도가 가장 늦었다.
      이번 문제도 저번 문제와 마찬가지로 number타입을 유지하며 실행시킨 test03함수의 속도가 제일 빨랐다.
      역시 number타입의 연산이 가장 빠르다는 것을 알 수 있었다.
      또한 test02와 test03의 처리 속도에서 큰 차이가 나지는 않았는데 test02와 test01의 처리 속도는
      거의 2배 가까이 차이가 났다. split메소드 이후 처리가 달라졌는데 map으로 숫자형으로 바꿔준 뒤 다음 연산을 진행하는 것과
      forEach문에서 한번에 연산을 진행하는 것에서 차이가 났던 것 같다.
  */