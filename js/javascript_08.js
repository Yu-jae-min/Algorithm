/*
    # 문제
    짝수와 홀수

    # 문제 설명
    정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

    # 제한 조건
    num은 int 범위의 정수입니다.
    0은 짝수입니다.

    # 입출력 예
    num	    return
    3	    "Odd"
    4	    "Even"
*/

const test01 = num => {
    if(typeof num !== 'number') return '숫자만 입력해주세요.';

    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(test01('하이'))

  /*
      # 문제풀이 - test01
      1. 삼항연산자와 나머지를 활용한다.
      2. 문제에는 없지만 파라미터의 자료형이 Number가 아닌 경우 예외처리를 한다.
  */

const test02 = num => {
    switch(num % 2){
        case 0 :
            return 'Even';
            break;
        case 1 :
            return 'Odd';
            break;
        default :
            return '숫자만 입력해주세요.';
    }
}

console.log(test02('하이'));

  /*
      # 문제풀이 - test02
      1. 스위치문과 나머지를 활용한다.
      2. 문제에는 없지만 파라미터의 자료형이 Number가 아닌 경우 예외처리를 한다.
  */