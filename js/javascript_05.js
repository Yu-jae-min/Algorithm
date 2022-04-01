/*
    # 문제
    평균 구하기

    # 문제 설명
    정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

    # 제한 조건
    arr은 길이 1 이상, 100 이하인 배열입니다.
    arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

    # 입출력 예
    arr	        return
    [1,2,3,4]	2.5
    [5,5]	    5
*/

const test01 = arr => {
    return arr.reduce((pre, cur) => pre + cur) / arr.length;
}

console.log(test01([5,5]))

  /*
      # 문제풀이 - test01
      1. reduce로 전달받은 파라미터를 누적해서 더한다,
      2. 누적 값을 전달받은 파라미터의 length로 나누어 평균을 구한다.
  */

const test02 = arr => {
    let num = 0

    for(const i in arr){
        num += arr[i];
    }

    return num / arr.length;
}

console.log(test02([5,5]))

  /*
      # 문제풀이 - test02
      1. 누적하여 더할 num타입의 변수를 생성한다.
      2. for in문을 통해 전달받은 파라미터의 요소를 순회하며 변수에 누적하여 더해준다.
      3. 누적 값을 전달받은 파라미터의 length로 나누어 평균 구한다.
  */
