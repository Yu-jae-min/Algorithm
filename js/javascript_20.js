/*
  # 문제
  서울에서 김서방 찾기

  # 문제 설명
  String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
  seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

  # 제한 조건
  seoul은 길이 1 이상, 1000 이하인 배열입니다.
  seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
  "Kim"은 반드시 seoul 안에 포함되어 있습니다.

  # 입출력 예
  seoul	            return
  ["Jane", "Kim"]	  "김서방은 1에 있다"
*/

const test01 = (seoul) => {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
};

console.log(test01(["Jane", "Kim"])); // 김서방은 1에 있다

/*
  # 문제풀이 - test01
  1. 배열 요소의 index를 반환하는 메서드인 indexOf를 템플릿 리터럴로 작성하였다.
*/
