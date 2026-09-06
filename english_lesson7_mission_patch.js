(function(){
'use strict';

var ENG7=[
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'time',ko:'시간'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:"o'clock",ko:'~시 정각'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'breakfast',ko:'아침 식사'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'lunch',ko:'점심 식사'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'dinner',ko:'저녁 식사'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'school',ko:'학교'},
  {lesson:7,title:'What Time Is It?',kind:'vocab',en:'bed',ko:'잠자리'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:'What time is it?',ko:'몇 시니?'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's one o'clock.",ko:'1시야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's three o'clock.",ko:'3시야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's seven o'clock.",ko:'7시야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's twelve o'clock.",ko:'12시야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's time for breakfast.",ko:'아침 먹을 시간이야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's time for lunch.",ko:'점심 먹을 시간이야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's time for school.",ko:'학교 갈 시간이야.'},
  {lesson:7,title:'What Time Is It?',kind:'sentence',en:"It's time for bed.",ko:'잘 시간이야.'},

  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'doing',ko:'하고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'drawing',ko:'그리고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'reading',ko:'읽고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'writing',ko:'쓰고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'singing',ko:'노래하고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'dancing',ko:'춤추고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'watering',ko:'물을 주고 있는'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'flower',ko:'꽃'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'picture',ko:'그림'},
  {lesson:8,title:'What Are You Doing?',kind:'vocab',en:'homework',ko:'숙제'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:'What are you doing?',ko:'너는 무엇을 하고 있니?'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm drawing a picture.",ko:'나는 그림을 그리고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm watering the flowers.",ko:'나는 꽃에 물을 주고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm reading a book.",ko:'나는 책을 읽고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm writing.",ko:'나는 글을 쓰고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm singing.",ko:'나는 노래하고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm dancing.",ko:'나는 춤추고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:"I'm doing my homework.",ko:'나는 숙제를 하고 있어.'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:'What is he doing?',ko:'그는 무엇을 하고 있니?'},
  {lesson:8,title:'What Are You Doing?',kind:'sentence',en:'What is she doing?',ko:'그녀는 무엇을 하고 있니?'},

  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Monday',ko:'월요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Tuesday',ko:'화요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Wednesday',ko:'수요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Thursday',ko:'목요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Friday',ko:'금요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Saturday',ko:'토요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'Sunday',ko:'일요일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'day',ko:'요일, 날'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'today',ko:'오늘'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'tomorrow',ko:'내일'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'week',ko:'주'},
  {lesson:9,title:'What Day Is It?',kind:'vocab',en:'calendar',ko:'달력'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:'What day is it?',ko:'무슨 요일이니?'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Monday.",ko:'월요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Tuesday.",ko:'화요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Wednesday.",ko:'수요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Thursday.",ko:'목요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Friday.",ko:'금요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Saturday.",ko:'토요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:"It's Sunday.",ko:'일요일이야.'},
  {lesson:9,title:'What Day Is It?',kind:'sentence',en:'What day is it today?',ko:'오늘은 무슨 요일이니?'},

  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'farmer',ko:'농부'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'doctor',ko:'의사'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'scientist',ko:'과학자'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'teacher',ko:'선생님'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'cook',ko:'요리사'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'police officer',ko:'경찰관'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'firefighter',ko:'소방관'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'singer',ko:'가수'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'job',ko:'직업'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'farm',ko:'농장'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'help',ko:'돕다'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'people',ko:'사람들'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'animal',ko:'동물'},
  {lesson:10,title:"I'm a Farmer.",kind:'vocab',en:'plant',ko:'식물'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:"I'm a farmer.",ko:'나는 농부야.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:"I'm a doctor.",ko:'나는 의사야.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:"I'm a scientist.",ko:'나는 과학자야.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:'What does he do?',ko:'그는 무슨 일을 하니?'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:"He's a farmer.",ko:'그는 농부야.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:'What does she do?',ko:'그녀는 무슨 일을 하니?'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:"She's a doctor.",ko:'그녀는 의사야.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:'I can help people.',ko:'나는 사람들을 도울 수 있어.'},
  {lesson:10,title:"I'm a Farmer.",kind:'sentence',en:'I can grow plants.',ko:'나는 식물을 기를 수 있어.'},

  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'how much',ko:'얼마'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'won',ko:'원'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'hat',ko:'모자'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'jacket',ko:'재킷'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'T-shirt',ko:'티셔츠'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'skirt',ko:'치마'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'pants',ko:'바지'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'shoes',ko:'신발'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'key ring',ko:'열쇠고리'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'comic book',ko:'만화책'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'thousand',ko:'천'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'hundred',ko:'백'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'cheap',ko:'싼'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'expensive',ko:'비싼'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'buy',ko:'사다'},
  {lesson:11,title:'How Much Is It?',kind:'vocab',en:'money',ko:'돈'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'How much is it?',ko:'그것은 얼마예요?'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'How much is this hat?',ko:'이 모자는 얼마예요?'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'How much is this jacket?',ko:'이 재킷은 얼마예요?'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:"It's five thousand won.",ko:'5천 원이에요.'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:"It's two thousand won.",ko:'2천 원이에요.'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'How much are these shoes?',ko:'이 신발은 얼마예요?'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:"They're ten thousand won.",ko:'1만 원이에요.'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'I like this hat.',ko:'나는 이 모자가 마음에 들어요.'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'Here you are.',ko:'여기 있습니다.'},
  {lesson:11,title:'How Much Is It?',kind:'sentence',en:'Thank you.',ko:'고맙습니다.'}
];

function hash32(s){var h=2166136261>>>0;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rng(seed){var x=seed>>>0;return function(){x+=0x6D2B79F5;var t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
function shuffle(a,seed){var out=a.slice(),r=rng(hash32(seed));for(var i=out.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=out[i];out[i]=out[j];out[j]=t;}return out;}
function kstKey(){try{var p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()),m={};p.forEach(function(x){if(x.type!=='literal')m[x.type]=x.value;});return m.year+'-'+m.month+'-'+m.day;}catch(e){var d=new Date(Date.now()+9*3600000);return d.getUTCFullYear()+'-'+('0'+(d.getUTCMonth()+1)).slice(-2)+'-'+('0'+d.getUTCDate()).slice(-2);}}

function makeQuestion(item,index){
  var sameKind=ENG7.filter(function(x){return x.kind===item.kind&&x.en!==item.en;});
  var others=shuffle(sameKind,'eng7-opt|'+kstKey()+'|'+item.lesson+'|'+item.en).slice(0,3);
  var choices,answer;
  if(item.kind==='vocab'){
    choices=shuffle([item.ko].concat(others.map(function(x){return x.ko;})),'eng7-choice|'+kstKey()+'|'+index);
    answer=choices.indexOf(item.ko);
    return {q:{q:'“'+item.en+'”의 뜻은?',c:choices,a:answer},unit:'Lesson '+item.lesson+' · '+item.title,_eng7:true,_lesson:item.lesson};
  }
  choices=shuffle([item.en].concat(others.map(function(x){return x.en;})),'eng7-choice|'+kstKey()+'|'+index);
  answer=choices.indexOf(item.en);
  return {q:{q:'“'+item.ko+'”에 알맞은 영어 문장은?',c:choices,a:answer},unit:'Lesson '+item.lesson+' · '+item.title,_eng7:true,_lesson:item.lesson};
}

var oldMissionQuestions=window.missionQuestions;
window.missionQuestions=function(subject){
  if(String(subject)==='영어'){
    var lesson=7+((Math.floor(new Date(kstKey()+'T00:00:00+09:00').getTime()/86400000))%5+5)%5;
    var pool=ENG7.filter(function(x){return x.lesson===lesson;});
    var picked=shuffle(pool,'eng7-daily|'+kstKey()+'|'+lesson).slice(0,3);
    return picked.map(makeQuestion);
  }
  return typeof oldMissionQuestions==='function'?oldMissionQuestions(subject):[];
};

window.__englishLesson7Mission={version:1,items:ENG7,startLesson:7,endLesson:11};
})();
