/*
  # 문제
  문자열 다루기 기본

  # 문제 설명
  문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

  # 제한 조건
  s는 길이 1 이상, 길이 8 이하인 문자열입니다.

  # 입출력 예
  s	        return
  "a234"	  false
  "1234"	  true
*/

const test01 = (str) => {
  const len = str.length;
  const strElem = !str
    .split("")
    .map((el) => Number(el))
    .includes(NaN);

  return len === 4 || len === 6 ? strElem : false;
};

console.log(test01("a234")); // false

/*
  # 문제풀이 - test01
  1. 파라미터로 받은 문자열의 length를 변수에 담아놓았다.
  2. 파라미터로 받은 문자열을 split 메서드로 자른 뒤 배열로 나누어 담고 map 메서드로 배열 요소를 Number타입으로 전환하였다.
  그 후 includes를 통해 배열 요소 중 NaN가 존재하는지 확인하고 존재하는 경우 false를 반환해야하므로 NOT연산자를 사용하여 변수에 담았다.
  3. 최종 출력 값은 삼항연산자를 사용하였으며 조건은 문자의 길이가 4이거나 6인 경우를 조건으로 하여 true인 경우 변수에 담아두었던 연산을
  담아두었다. false인 경우는 false를 출력하였다.
*/

const test02 = (s) => {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
};

console.log(test02("a234")); // false

/*
  # 문제풀이 - test02
  프로그래머스 다른 개발자의 풀이이다. 정규식을 활용하였다.
*/

/*
  # 문제풀이 비교
  함수 실행 속도 : test02 > test01
  test01 풀이 첫 시도 시 map 내부에서 Boolean(Number(el))과 같이 작성하였는데 내부 테스트 케이스를 통과하지 못했다.
  지수 형식의 '1e22' 같은 경우에 제대로 boolean을 판별하지 못했고 또한 0이 들어간 경우에도 false를 반환하였다.
  그래서 위와 같이 배열 요소를 Number타입으로 전환해준 뒤 NaN을 포함하는 지의 여부를 사용하여 풀었다.
  다른 개발자의 풀이를 보는데 정규식 활용하는 것을 보고 현타가 왔다. 다른 개발자가의 풀이가 코드의 양도 훨씬 적었고 성능면에서도
  더 빨랐다. 문자 포함 여부와 같은 문제에서는 정규식을 활용하는 것이 좋다고 생각하였다.
*/
