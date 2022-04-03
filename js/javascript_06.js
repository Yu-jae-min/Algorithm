/*
    # 문제
    콜라츠 추측

    # 문제 설명
    1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
    작업은 다음과 같습니다.

    1-1. 입력된 수가 짝수라면 2로 나눕니다.
    1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
    2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

    예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다.
    위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

    # 제한 조건
    입력된 수, num은 1 이상 8000000 미만인 정수입니다.

    # 입출력 예
    n	    result
    6	    8
    16	    4
    626331	-1

    # 입출력 예 설명
    입출력 예 #1
    문제의 설명과 같습니다.

    입출력 예 #2
    16 -> 8 -> 4 -> 2 -> 1 이되어 총 4번만에 1이 됩니다.

    입출력 예 #3
    626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야합니다.
*/

const test01 = num => {
    for(let i = 0; i < 500; i++){
        if(num != 1){
            num = num % 2 == 0 ? num / 2 : num * 3 + 1;
        }else{
            return i;
        }
    }

    return result = -1;
}

console.log(test01(16))

  /*
      # 문제풀이 - test01
      1. 반복문을 활용하여 500번 이하 반복한다. 500이 초과될 경우 반복문을 종료하고 -1을 출력한다.
      2. 반복문 내부에서 삼항연산자를 활용하여 짝수일 때, 홀수일 때 연산을 나누어 진행한 후 다음 사이클에서 계산을 위해 파라미터에 다시 할당한다.
      3. 1이 될 경우에 연산을 멈추고 연산 횟수를 출력해야하므로 i를 출력한다.
  */

function test02(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : test02(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

console.log( test02(16) );

  /*
      # 문제풀이 - test02
      1. 파라미터에 count를 추가하고 삼항연산자와 재귀함수를 활용한다. 재귀함수의 base case는 전달받은 값이 1일 경우로 제한한다.
      전달받은 값이 1이 될 경우 count를 반환하는데 count가 500을 초과할 경우 500번의 시도를 넘어갔으므로 -1을 반환하고 아닌 경우 연산 횟수인 count를 반환한다.
      2. 전달받은 값이 1이 아닌 경우 재귀함수를 실행한다. 재귀함수 실행 시 파라미터로 짝수일 때, 홀수일 때의 num값을 전달하고 count는 증감시킨다.
  */
