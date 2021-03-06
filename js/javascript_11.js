/*
    # 문제
    정수 내림차순으로 배치하기

    # 문제 설명
    함수 solution은 정수 n을 매개변수로 입력받습니다.
    n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
    예를들어 n이 118372면 873211을 리턴하면 됩니다.

    # 제한 조건
    n은 1이상 8000000000 이하인 자연수입니다.

    # 입출력 예
    n	    return
    118372	873211
*/

const test01 = (n) => {
    return String(n).split('').sort((a,b)=> b-a).join('')*1
}

console.log(test01(118372))

  /*
      # 문제풀이 - test01
      1. String생성자로 n을 string타입으로 형변환한다.
      2. split메소드로 문자열을 각각의 요소로 나누어 배열에 담는다.
      3. sort메소드에 파라미터로 양수를 출력하게 하여 내림차순으로 정렬한다.
      4. join메소드로 정렬된 값을 합친 뒤 문자형으로 형변환한다.
      5. 출력되는 값은 숫자형이기 때문에 문자형*숫자형을 연산하여 숫자형으로 바꿔준다.
  */

function test02(n) {
    var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;
}

console.log(test02(118372))

  /*
      # 문제풀이 - test02
      1. 파라미터의 각 요소를 담을 배열을 생성한다.
      2. do while문을 활용하여 각 요소를 담는다. 이 때 반복 조건은 파라미터가 0보다 클 때만 반복한다. 또한 반복 되는 구문은
      전달받은 파라미터를 10으로 나눈 나머지 값을 배열에 담는다. 즉 1의 자릿 수의 값을 담는다.
      그 후 다음 요소를 담기 위해 전달받은 파라미터의 값을 재할당하는데 정수를 반환하는 Math.floor메소드를 활용하여
      전달받은 파라미터를 10으로 나눈 값을 정수로 반환한다. 즉 맨 1의 자릿 수의 값을 제외하여 재할당한다.
      3. 배열에 각 요소가 담긴 후 sort메소드를 활용하여 내림차순으로 정렬한다.
      4. join메소드로 정렬된 값을 합친 뒤 문자형으로 형변환한다.
      5. 출력되는 값은 숫자형이기 때문에 문자형*숫자형을 연산하여 숫자형으로 바꿔준다.
  */

  /*
      # 문제풀이 비교
      test01과 test02의 실행 속도를 비교해본 결과 test02가 대체적으로 빠르게 처리되었다.
      두 함수의 차이점은 연산되는 값의 타입이다. test01의 경우 파라미터를 문자형으로 바꿔준 뒤 연산하였고 test02의 경우 숫자형을 유지한 뒤 연산하였다.
      두 함수를 비교해보면 숫자형이 연산이 더 빠르다는 것을 알 수 있다.
  */