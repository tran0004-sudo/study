(function(){
'use strict';

var G1={
  'kor|한글 자모':"■ 자음과 모음\n- ㄱ, ㄴ, ㄷ 같은 자음과 ㅏ, ㅑ, ㅓ 같은 모음을 익혀요.\n■ 글자 만들기\n- 자음과 모음을 합쳐 소리 나는 글자를 읽고 써요.",
  'kor|받침':"■ 받침\n- 글자 아래에 오는 자음을 받침이라고 해요.\n- 산의 받침은 ㄴ, 달의 받침은 ㄹ이에요.",
  'kor|낱말':"■ 낱말\n- 뜻을 가진 말을 낱말이라고 해요.\n- 그림이나 상황에 알맞은 낱말을 읽고 써요.",
  'kor|글자의 짜임':"■ 글자의 짜임\n- 자음과 모음, 받침이 모여 한글 글자가 만들어져요.\n- ㄱ+ㅗ+ㅁ을 합치면 곰이 돼요.",
  'kor|흉내 내는 말':"■ 흉내 내는 말\n- 소리나 모양, 움직임을 생생하게 나타내는 말이에요.\n- 멍멍은 소리, 반짝반짝은 모양을 흉내 내요.",
  'kor|문장 부호':"■ 문장 부호\n- 평서문에는 마침표(.), 질문에는 물음표(?), 감탄에는 느낌표(!)를 써요.",
  'kor|알맞은 낱말':"■ 알맞은 낱말\n- 문장 앞뒤 뜻을 살펴 자연스럽게 이어지는 낱말을 골라요.",
  'kor|내용 이해':"■ 내용 이해\n- 글을 읽고 누가, 무엇을, 왜 했는지 찾아요.\n- 글에 나온 내용을 근거로 답해요.",
  'kor|꾸며 주는 말':"■ 꾸며 주는 말\n- 사람, 사물, 움직임의 모습을 더 자세히 알려 주는 말이에요.",
  'kor|문장 만들기':"■ 문장 만들기\n- 낱말을 알맞은 순서로 이어 뜻이 통하는 문장을 만들어요.",
  'kor|낱말의 뜻':"■ 낱말의 뜻\n- 문장 속에서 낱말이 어떤 뜻으로 쓰였는지 살펴요.",
  'kor|문장 짜임':"■ 문장 짜임\n- 누가 또는 무엇이, 무엇을 하는지가 드러나면 뜻이 분명해져요.",
  'kor|낱말 관계':"■ 낱말 관계\n- 뜻이 비슷한 말과 반대되는 말을 구별해요.",
  'kor|비교하며 읽기':"■ 비교하며 읽기\n- 두 대상의 같은 점과 다른 점을 찾아 읽어요.",
  'kor|문장 완성':"■ 문장 완성\n- 빠진 말을 찾아 뜻이 분명한 문장을 완성해요.",
  'kor|인물의 마음':"■ 인물의 마음\n- 인물의 말, 행동, 표정과 상황을 보고 마음을 짐작해요.",
  'kor|순서에 따라 말하기':"■ 순서에 따라 말하기\n- 먼저, 다음, 마지막 같은 말을 써서 차례대로 설명해요.",
  'kor|내용 파악':"■ 내용 파악\n- 누가 무엇을 어떻게 했는지 정확히 찾아요.",
  'kor|비슷한 말':"■ 비슷한 말\n- 뜻이 서로 비슷한 낱말을 찾아 바꾸어 말해 봐요.",
  'kor|일의 순서':"■ 일의 순서\n- 글 속 사건이 일어난 차례를 찾아요.",
  'kor|알맞게 말하기':"■ 알맞게 말하기\n- 부탁, 질문, 인사 등 상황에 맞는 표현을 골라요.",
  'kor|이어 주는 말':"■ 이어 주는 말\n- 문장과 문장을 자연스럽게 이어 주는 말을 익혀요.\n- 그래서 는 까닭과 결과를 이을 때 자주 써요.",
  'kor|제목 정하기':"■ 제목 정하기\n- 글 전체의 중요한 내용을 짧게 나타내는 제목을 정해요.",

  'mat|9까지의 수':"■ 9까지의 수\n- 0부터 9까지 수를 읽고 쓰며 순서와 크기를 익혀요.",
  'mat|덧셈과 뺄셈':"■ 덧셈과 뺄셈\n- 모으거나 늘어나면 덧셈, 덜어 내거나 차이를 구하면 뺄셈을 생각해요.\n- 10 만들기와 수 가르기를 활용해요.",
  'mat|비교하기':"■ 비교하기\n- 수의 크기와 길이, 양을 비교해 더 큰 것과 작은 것을 찾아요.",
  'mat|여러 가지 모양':"■ 여러 가지 모양\n- 공 모양, 상자 모양, 둥근 기둥 모양의 특징을 살펴요.",
  'mat|100까지의 수':"■ 100까지의 수\n- 10개씩 묶음과 낱개로 두 자리 수를 이해해요.\n- 십의 자리부터 비교해 수의 크기를 알아봐요.",
  'mat|시계 보기':"■ 시계 보기\n- 짧은바늘은 시, 긴바늘은 분을 나타내요.\n- 긴바늘이 12를 가리키면 정각이에요.",
  'mat|규칙 찾기':"■ 규칙 찾기\n- 수, 모양, 색이 되풀이되거나 일정하게 변하는 규칙을 찾아요.",
  'mat|수의 구성':"■ 수의 구성\n- 수를 여러 방법으로 가르고 모아요.\n- 10은 7과 3, 6과 4처럼 나타낼 수 있어요.",
  'mat|수의 순서':"■ 수의 순서\n- 앞 수, 뒤 수, 사이의 수를 찾고 작은 수부터 차례로 배열해요.",
  'mat|수 비교':"■ 수 비교\n- 두 자리 수는 십의 자리를 먼저 비교하고 같으면 일의 자리를 비교해요.",
  'mat|문장제':"■ 문장제\n- 무엇을 구하는지 찾고 상황에 맞는 덧셈 또는 뺄셈 식을 세워요.",
  'mat|미지수':"■ 미지수 찾기\n- □처럼 모르는 수가 있는 식에서 거꾸로 계산해 알맞은 수를 찾아요.",
  'mat|연산 추론':"■ 연산 추론\n- 수의 관계를 이용해 계산 결과가 어떻게 달라지는지 생각해요.",

  'eng|Alphabet':"■ Alphabet\n- A부터 Z까지 26글자의 대문자와 소문자를 익혀요.\n- A-a, B-b처럼 짝을 맞춰요.",
  'eng|Phonics':"■ Phonics\n- 알파벳 글자와 기본 소리를 연결해요.\n- cat은 c, ball은 b 소리로 시작해요.",
  'eng|Words':"■ Basic Words\n- apple, book, dog, sun처럼 쉬운 낱말을 그림과 함께 익혀요.",
  'eng|Numbers':"■ Numbers\n- one, two, three처럼 숫자 영어를 순서와 수량에 맞게 익혀요.",
  'eng|Greetings':"■ Greetings\n- 만날 때 Hello!, 헤어질 때 Bye!를 써요.\n- How are you?에는 I am fine.처럼 대답할 수 있어요.",
  'eng|Colors':"■ Colors\n- red, blue, yellow 같은 색깔 낱말을 익혀요.",
  'eng|Self introduction':"■ Self introduction\n- I am Mina.처럼 자신의 이름을 소개해요.",
  'eng|Classroom English':"■ Classroom English\n- Stand up, Sit down, Look 같은 교실 표현을 익혀요.",
  'eng|Animals':"■ Animals\n- dog, cat, bird, fish 같은 동물 낱말을 익혀요.",
  'eng|School things':"■ School things\n- book, pencil, bag처럼 학교에서 쓰는 물건 이름을 익혀요.",
  'eng|Position':"■ Position\n- on, in, under를 이용해 물건의 위치를 말해요.",
  'eng|Questions':"■ Questions\n- What, Who, Where로 시작하는 아주 쉬운 질문 표현을 익혀요.",
  'eng|Sentences':"■ Sentences\n- This is a book. I like apples.처럼 짧은 기본 문장을 읽고 뜻을 이해해요."
};

var oldConceptFor=(typeof window.conceptFor==='function')?window.conceptFor:null;
if(typeof window.CONCEPTS==='object'&&window.CONCEPTS){
  Object.keys(G1).forEach(function(k){window.CONCEPTS[k]=G1[k];});
}
window.conceptFor=function(subject,unit){
  var k=subject+'|'+unit;
  if(G1[k])return G1[k];
  return oldConceptFor?oldConceptFor(subject,unit):null;
};
conceptFor=window.conceptFor;

if(typeof window.render==='function'){
  try{window.render();}catch(e){}
}
window.__grade1ConceptPatch={version:2,count:Object.keys(G1).length};
})();