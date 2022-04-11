/*
    # 문제
    이상한 문자 만들기

    # 문제 설명
    문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
    각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

    # 제한 조건
    문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
    첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

    # 입출력 예
    s	                return
    "try hello world"	"TrY HeLlO WoRlD"

    # 입출력 예 설명
    "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
    각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
    따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/

const test01 = n => {
    return n.split(' ').map(word => {
        let result = '';
        for(let i = 0; i < word.length; i++){
            i%2 ? result += word[i].toLowerCase() : result += word[i].toUpperCase();
        }
        return result;
    }).join(' ')
}

console.log(test01("try hello world"));

  /*
      # 문제풀이 - test01
      1. 파라미터를 split메서드로 자르는데 공백을 기준으로 잘라 배열로 만든다.
      2. 배열로 만든 후 map메서드를 활용한다. 이 때 map메서드 내부에서 대소문자를 구분한 문자를 누적하여 더해줄 변수를 생성한다.
      3. 반복문을 활용하는데 이 때 기준은 각 요소 문자의 길이보다 작은 경우 반복문을 실행한다. 또한 삼항연산자를 활용하여 조건은
      문자의 index를 2로 나누었을 때의 나머지 값으로 조건을 잡는다. 나머지 값이 0인 경우 짝수이기 때문에 false의 경우 대문자로 바꾸고
      true인 경우 소문자로 바꾼 뒤 result 변수에 누적해서 더해준다.
      4. 반복문 종료 후 누적해서 더한 변수를 return한다.
      5. map메서드가 종료된 후 대소문자를 구분한 각 요소를 join메서드로 공백을 넣어 합쳐준다.
  */

const test02 = n => {
    return n.split(' ').map(i => i.split('').map((j, index) => index%2 ? j.toLowerCase() : j.toUpperCase()).join('')).join(' ');
}

console.log(test02("try hello world"));

  /*
      # 문제풀이 - test02
      1. 파라미터를 split메서드로 자르는데 공백을 기준으로 잘라 배열로 만든다.
      2. 배열로 만든 후 map메서드로 각 요소를 다시 split메서드로 자른다. 그 후 삼항연산자를 활용하여 조건은
      각 단어의 글자 index를 2로 나누었을 때의 나머지 값으로 조건을 잡는다. 나머지 값이 0인 경우 짝수이기 때문에 false의 경우 대문자로 바꾸고
      true인 경우 소문자로 바꾼 뒤 result 변수에 누적해서 더해준다.
      3. 내부 map에서 join메서드로 나누어진 각 글자를 합쳐 단어로 만든다.
      4. 외부 map에서 join메서드로 나누어진 각 단어를 최종 출력 값인 문장으로 만든다.
  */

  /*
      # 문제풀이 비교
      함수 실행 속도 : test02 > test01
      test02의 실행 속도가 더 빨랐다. 또한 속도뿐만이 가독성, 코드의 양 또한 적었다. 훨씬 좋은 퀄리티의 풀이이다.
  */