/*
    # 문제
    자릿수 더하기

    # 문제 설명
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

    # 제한 조건
    N의 범위 : 100,000,000 이하의 자연수

    # 입출력 예
    N	    answer
    123	    6
    987	    24

    # 입출력 예 설명
    입출력 예 #1
    문제의 예시와 같습니다.

    입출력 예 #2
    9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
*/

const test01 = (n) => {
    let result = 0;

    do{
        result += (n%10)
        n = Math.floor(n/10)
    }while(n > 0)

    return result;
}

console.log(test01(123)) // 6

  /*
      # 문제풀이 - test01
      1. 초기 값이 0인 result변수를 선언한다.
      2. do-while 반복문 활용하여 n이 0보다 클 경우 반복시켜 실행한다. 이 때 초기 값 0으로 설정한 변수 result에
      누적항여 더해주는데 더해지는 값은 파라미터로 전달받은 값을 10으로 나눈 나머지를 더한다. 즉 맨 마지막 자릿수를 더해주는 것이다.
      그 후 Math.floor메소드를 활용하여 파라미터의 값을 재할당해준다. 이 때 Math.floor의 파라미터는 n/10으로 설정한다.
      즉 맨 마지막 자릿 수를 뺀 나머지를 재할당하는 것이다.
      3. 모든 자릿 수의 숫자를 더해 n의 값이 없어지면 반복문을 종료하고 누적하여 더한 result를 리턴한다.
  */

const test02 = (n) => {
    return n.toString().split('').map(el => Number(el)).reduce((pre, cur) => pre + cur);;
}

console.log(test02(123)) // 6

  /*
      # 문제풀이 - test02
      1. 전달받은 파라미터를 toString메소드로 문자형으로 바꿔준다.
      2. split메소드로 각 자릿수를 나누어 배열에 담는다.
      3. map메소드로 각 자릿수의 타입을 number타입으로 바꿔준다.
      4. reduce메소드로 모든 값을 누적해서 더해준다.
  */

  /*
      # 문제풀이 비교
      함수 실행 속도 : test01 > test02
      전에 풀었던 알고리즘 문제와 마찬가지로 자료형 타입에서 차이가 난 것 같다. 특히 이번 문제에서는 가독성 측면에서도
      test01이 더 좋았던 것 같다. 코드의 양이 적다고 무조건 효율적인 것은 아닌 것 같다.
  */