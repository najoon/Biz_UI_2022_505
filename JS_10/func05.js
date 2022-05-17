// JSON 객체
// JavaScript Objeck Notation
// JSON 객체 구조가 만들어지기 전에는
// 클라이언트와 서버간에 데이터를 주고받을때 (data Exchange)
// 문자열 또는 xml(Exchange Markup lang)타입으로 주고 받았다
// 문자열 구조는 데이터를 보내고 받기는 쉽니담 parsing 등의 과정을 거쳐야
// 데이터를 사용할수 있는 문제점이 있다
// XMl 문서는 tag 를 중심으로 구조적으로 문서 데이터를 작성한다
// 다양한 도구를 사용하면 쉽게 데이터로 활용하기가 쉽다.
// 하지만 xml 문서의 문법구조가 매우 까다롭고, 데이터가 겹치거나 많아지면
// 문법 오류로 인한 데이터 손실이 발생한다.

// 2000년대 초반, 더글라스 코록포드 등에 의해
// JSON 데이터 구조가 제안된다
// 이 데이터 구조 제안은 정말 혁명적이었다
// 모든데이터를 키(key)-값(value) 쌍으로 규정하고 매우 단순화 시켰다
// 단순화된 구조는 당시까지 현존하던 거의 대부분의 프로그램언어의
// 기본자료형으로 쉽게 변환이 가능했다
// 네트워크를 통해서 데이터를 전송할때 데이터 양을 획기적으로 줄일수 있었다
// 어떤 데이터 자료형 이던 JSON String 문자열로 변환하여 교환할수 있다
// 순식간에 xml 형태의 데이터 교환을 대체하는 새로운 구조가 되었다.

const stVO = {};

stVO.stNum = "S001";
stVO.stName = "이몽룡";
stVO.stTel = "010-000-000";
stVO.stAddr = "익산시";
stVO.stDept = "컴공과";

console.log(stVO);
// js에서 가장 단순하게 json 을 만드는 방법
const scoreVO = { intKor: 90, intEng: 80, intMath: 70 };

//이미 만들어진 JSON 객체에 새로운 변수(요소, 속성) 추가하기
// 아래와 같은 코드가 실행될때 만약 기존에 intMusic 속성이 있으면
// 값이 90으로 변경되고 , 만약 속성이 없으면 새로운 속성이 추가되고
// 90이 할당된다
scoreVO.intMusic = 90;
scoreVO.intEng = 100;
console.log(scoreVO);

scoreVO.intSci = 90;

console.log(scoreVO);
