(function(){
'use strict';

/* 첨부 영어학습 v7 기반: 오늘의 미션 영어 전용 / 7→8→9→10→11→1→2→3→4→5→6 */
var ENG_LESSONS=[{"id":1,"title":"How Are You?","vocab":[["fine","좋은, 괜찮은"],["great","아주 좋은"],["not bad","나쁘지 않은"],["not so good","별로 좋지 않은"],["friend","친구"],["teacher","선생님"],["mother","어머니"],["father","아버지"],["brother","남자 형제"],["sister","여자 형제"],["meet","만나다"],["too","~도 또한"]],"sentence":[["How are you?","어떻게 지내니?"],["I'm fine.","나는 잘 지내."],["I'm great.","나는 아주 좋아."],["Not bad.","나쁘지 않아."],["Not so good.","별로 좋지 않아."],["This is my teacher.","이분은 나의 선생님이야."],["This is my friend.","이 아이는 나의 친구야."],["Nice to meet you.","만나서 반가워."],["Nice to meet you, too.","나도 만나서 반가워."]]},{"id":2,"title":"Lesson 2 · Sports","vocab":[["soccer","축구"],["basketball","농구"],["badminton","배드민턴"],["tennis","테니스"],["baseball","야구"],["play","하다, 놀다"],["ball","공"],["racket","라켓"],["team","팀"],["good","좋은"],["sorry","미안한"],["later","나중에"]],"sentence":[["Let's play soccer.","축구하자."],["Let's play basketball.","농구하자."],["Let's play badminton.","배드민턴 치자."],["Let's play tennis.","테니스 치자."],["Sounds good.","좋아."],["Sorry, I can't.","미안하지만, 나는 못 해."],["Maybe later.","나중에 하자."],["Let's play baseball.","야구하자."]]},{"id":3,"title":"Where Is My Bag?","vocab":[["bag","가방"],["book","책"],["pencil","연필"],["ruler","자"],["doll","인형"],["hat","모자"],["box","상자"],["desk","책상"],["chair","의자"],["bed","침대"],["table","탁자"],["in","~안에"],["on","~위에"],["under","~아래에"]],"sentence":[["Where is my bag?","내 가방은 어디에 있니?"],["It's in the box.","그것은 상자 안에 있어."],["It's on the desk.","그것은 책상 위에 있어."],["It's under the chair.","그것은 의자 아래에 있어."],["It's on the table.","그것은 탁자 위에 있어."],["It's under the bed.","그것은 침대 아래에 있어."],["Where is my pencil?","내 연필은 어디에 있니?"],["Don't worry.","걱정하지 마."]]},{"id":4,"title":"Are You Happy?","vocab":[["happy","행복한"],["sad","슬픈"],["angry","화난"],["hungry","배고픈"],["thirsty","목마른"],["tired","피곤한"],["fine","괜찮은"],["great","아주 좋은"],["water","물"],["food","음식"],["smile","미소 짓다"],["cry","울다"]],"sentence":[["Are you happy?","너는 행복하니?"],["Yes, I am.","응, 그래."],["No, I'm not.","아니, 그렇지 않아."],["I'm happy.","나는 행복해."],["I'm sad.","나는 슬퍼."],["I'm angry.","나는 화가 났어."],["I'm hungry.","나는 배고파."],["I'm thirsty.","나는 목말라."],["I'm tired.","나는 피곤해."],["Watch out!","조심해!"]]},{"id":5,"title":"Don't Touch, Please.","vocab":[["eat","먹다"],["run","달리다"],["push","밀다"],["talk","말하다"],["enter","들어가다"],["touch","만지다"],["museum","박물관"],["picture","그림"],["sign","표지판"],["please","부디, 제발"],["dangerous","위험한"],["careful","조심하는"]],"sentence":[["Don't eat, please.","먹지 마세요."],["Don't run, please.","뛰지 마세요."],["Don't push, please.","밀지 마세요."],["Don't talk, please.","말하지 마세요."],["Don't enter, please.","들어가지 마세요."],["Don't touch, please.","만지지 마세요."],["Be careful, please.","조심하세요."],["Look at the sign.","표지판을 보세요."]]},{"id":6,"title":"Is This Your Watch?","vocab":[["watch","손목시계"],["bottle","병, 물병"],["umbrella","우산"],["cap","모자"],["camera","카메라"],["bag","가방"],["book","책"],["key","열쇠"],["mine","나의 것"],["yours","너의 것"],["big","큰"],["small","작은"]],"sentence":[["Is this your watch?","이것은 네 손목시계니?"],["Yes, it is.","응, 그래."],["No, it isn't.","아니, 그렇지 않아."],["This is my bottle.","이것은 내 물병이야."],["My bottle is big.","내 물병은 커."],["This is mine.","이것은 내 것이야."],["Is this yours?","이것은 네 것이니?"],["Here you are.","여기 있어."]]},{"id":7,"title":"What Time Is It?","vocab":[["time","시간"],["o'clock","~시 정각"],["breakfast","아침 식사"],["lunch","점심 식사"],["dinner","저녁 식사"],["school","학교"],["bed","잠자리"],["one","하나, 1"],["two","둘, 2"],["three","셋, 3"],["four","넷, 4"],["five","다섯, 5"],["six","여섯, 6"],["seven","일곱, 7"],["eight","여덟, 8"],["nine","아홉, 9"],["ten","열, 10"],["eleven","열하나, 11"],["twelve","열둘, 12"]],"sentence":[["What time is it?","몇 시니?"],["It's one o'clock.","1시야."],["It's three o'clock.","3시야."],["It's seven o'clock.","7시야."],["It's twelve o'clock.","12시야."],["It's time for breakfast.","아침 먹을 시간이야."],["It's time for lunch.","점심 먹을 시간이야."],["It's time for school.","학교 갈 시간이야."],["It's time for bed.","잘 시간이야."]]},{"id":8,"title":"What Are You Doing?","vocab":[["doing","하고 있는"],["drawing","그리고 있는"],["reading","읽고 있는"],["writing","쓰고 있는"],["singing","노래하고 있는"],["dancing","춤추고 있는"],["watering","물을 주고 있는"],["flower","꽃"],["picture","그림"],["homework","숙제"],["book","책"],["music","음악"],["soccer","축구"],["ball","공"],["comic book","만화책"]],"sentence":[["What are you doing?","너는 무엇을 하고 있니?"],["I'm drawing a picture.","나는 그림을 그리고 있어."],["I'm watering the flowers.","나는 꽃에 물을 주고 있어."],["I'm reading a book.","나는 책을 읽고 있어."],["I'm writing.","나는 글을 쓰고 있어."],["I'm singing.","나는 노래하고 있어."],["I'm dancing.","나는 춤추고 있어."],["I'm doing my homework.","나는 숙제를 하고 있어."],["What is he doing?","그는 무엇을 하고 있니?"],["What is she doing?","그녀는 무엇을 하고 있니?"]]},{"id":9,"title":"What Day Is It?","vocab":[["Monday","월요일"],["Tuesday","화요일"],["Wednesday","수요일"],["Thursday","목요일"],["Friday","금요일"],["Saturday","토요일"],["Sunday","일요일"],["day","요일, 날"],["today","오늘"],["tomorrow","내일"],["week","주"],["calendar","달력"]],"sentence":[["What day is it?","무슨 요일이니?"],["It's Monday.","월요일이야."],["It's Tuesday.","화요일이야."],["It's Wednesday.","수요일이야."],["It's Thursday.","목요일이야."],["It's Friday.","금요일이야."],["It's Saturday.","토요일이야."],["It's Sunday.","일요일이야."],["What day is it today?","오늘은 무슨 요일이니?"]]},{"id":10,"title":"I'm a Farmer.","vocab":[["farmer","농부"],["doctor","의사"],["scientist","과학자"],["teacher","선생님"],["cook","요리사"],["police officer","경찰관"],["firefighter","소방관"],["singer","가수"],["job","직업"],["farm","농장"],["help","돕다"],["people","사람들"],["animal","동물"],["plant","식물"]],"sentence":[["I'm a farmer.","나는 농부야."],["I'm a doctor.","나는 의사야."],["I'm a scientist.","나는 과학자야."],["What does he do?","그는 무슨 일을 하니?"],["He's a farmer.","그는 농부야."],["What does she do?","그녀는 무슨 일을 하니?"],["She's a doctor.","그녀는 의사야."],["I can help people.","나는 사람들을 도울 수 있어."],["I can grow plants.","나는 식물을 기를 수 있어."]]},{"id":11,"title":"How Much Is It?","vocab":[["how much","얼마"],["won","원"],["hat","모자"],["jacket","재킷"],["T-shirt","티셔츠"],["skirt","치마"],["pants","바지"],["shoes","신발"],["key ring","열쇠고리"],["comic book","만화책"],["thousand","천"],["hundred","백"],["cheap","싼"],["expensive","비싼"],["buy","사다"],["money","돈"]],"sentence":[["How much is it?","그것은 얼마예요?"],["How much is this hat?","이 모자는 얼마예요?"],["How much is this jacket?","이 재킷은 얼마예요?"],["It's five thousand won.","5천 원이에요."],["It's two thousand won.","2천 원이에요."],["How much are these shoes?","이 신발은 얼마예요?"],["They're ten thousand won.","1만 원이에요."],["I like this hat.","나는 이 모자가 마음에 들어요."],["Here you are.","여기 있습니다."],["Thank you.","고맙습니다."]]}];
var ENG_ORDER=[7,8,9,10,11,1,2,3,4,5,6];
var ENG_ANCHOR='2026-09-06';

function kstKey(){
  try{
    var p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()),m={};
    p.forEach(function(x){if(x.type!=='literal')m[x.type]=x.value;});
    return m.year+'-'+m.month+'-'+m.day;
  }catch(e){
    var d=new Date(Date.now()+9*3600000);
    return d.getUTCFullYear()+'-'+('0'+(d.getUTCMonth()+1)).slice(-2)+'-'+('0'+d.getUTCDate()).slice(-2);
  }
}
function dayNum(key){var a=key.split('-');return Math.floor(Date.UTC(+a[0],+a[1]-1,+a[2])/86400000);}
function hash32(s){var h=2166136261>>>0;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rng(seed){var x=seed>>>0;return function(){x+=0x6D2B79F5;var t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
function seededShuffle(arr,seedText){var out=arr.slice(),r=rng(hash32(seedText));for(var i=out.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=out[i];out[i]=out[j];out[j]=t;}return out;}
function currentLessonId(){var off=dayNum(kstKey())-dayNum(ENG_ANCHOR);return ENG_ORDER[((off%ENG_ORDER.length)+ENG_ORDER.length)%ENG_ORDER.length];}
function lessonById(id){for(var i=0;i<ENG_LESSONS.length;i++)if(ENG_LESSONS[i].id===id)return ENG_LESSONS[i];return ENG_LESSONS[0];}
function allItems(kind){var out=[];ENG_LESSONS.forEach(function(l){l[kind].forEach(function(x){out.push({lesson:l.id,title:l.title,en:x[0],ko:x[1],kind:kind});});});return out;}
function lessonItems(id){var l=lessonById(id),out=[];l.vocab.forEach(function(x){out.push({lesson:id,title:l.title,en:x[0],ko:x[1],kind:'vocab'});});l.sentence.forEach(function(x){out.push({lesson:id,title:l.title,en:x[0],ko:x[1],kind:'sentence'});});return out;}
function makeQuestion(item,index){
  var pool=allItems(item.kind).filter(function(x){return x.en!==item.en;});
  var others=seededShuffle(pool,'eng-opt|'+kstKey()+'|'+item.lesson+'|'+item.kind+'|'+item.en).slice(0,3);
  var raw,choices,answer,prompt;
  if(item.kind==='vocab'){
    raw=[item.ko].concat(others.map(function(x){return x.ko;}));
    choices=seededShuffle(raw,'eng-choice|'+kstKey()+'|'+item.en);
    answer=choices.indexOf(item.ko);
    prompt='“'+item.en+'”의 뜻은?';
  }else{
    raw=[item.en].concat(others.map(function(x){return x.en;}));
    choices=seededShuffle(raw,'eng-choice|'+kstKey()+'|'+item.en);
    answer=choices.indexOf(item.en);
    prompt='“'+item.ko+'”에 알맞은 영어 문장은?';
  }
  return {qi:index,q:{u:'Lesson '+item.lesson+' · '+item.title,q:prompt,c:choices,a:answer},_englishMission:true,_lesson:item.lesson,_kind:item.kind};
}

var oldMissionQuestions=window.missionQuestions;
window.missionQuestions=function(subject){
  if(String(subject)==='eng'||String(subject)==='영어'){
    var lid=currentLessonId();
    var pool=lessonItems(lid);
    var picked=seededShuffle(pool,'eng-daily|'+kstKey()+'|'+lid).slice(0,3);
    return picked.map(makeQuestion);
  }
  return typeof oldMissionQuestions==='function'?oldMissionQuestions(subject):[];
};

/* 오늘의 미션 완료/개수/다음 미션은 영어만 계산 */
window.missionItems=function(){return [{id:'eng',name:'영어',ic:'🔤',color:'var(--eng)'}];};

/* 홈의 과목별 반복학습 카드에서는 영어만 표시하고 별도 어휘 미션 행은 제거 */
var oldViewHome=window.viewHome;
if(typeof oldViewHome==='function'){
  window.viewHome=function(){
    var originalAvail=window.availSubjects;
    if(typeof originalAvail==='function'){
      window.availSubjects=function(){return originalAvail().filter(function(s){return s.id==='eng';});};
    }
    var html;
    try{html=oldViewHome();}finally{if(originalAvail)window.availSubjects=originalAvail;}
    var marker='data-act="startVocabMission"',p=html.indexOf(marker);
    if(p>=0){
      var rowStart=html.lastIndexOf('<div class="row" style="padding:11px 2px">',p);
      var rowEnd=html.indexOf('</button></div>',p);
      if(rowStart>=0&&rowEnd>=0)html=html.slice(0,rowStart)+html.slice(rowEnd+'</button></div>'.length);
    }
    var lid=currentLessonId(),l=lessonById(lid);
    html=html.replace(/오늘 <b>모든 과목 미션<\/b>을 끝내면/g,'오늘 <b>영어 미션</b>을 끝내면');
    html=html.replace(/오늘 모든 과목을 끝내/g,'오늘 영어 미션을 끝내');
    html=html.replace('진도표 순서대로 매일 <b>과목당 3문제</b>를, 같은 문제로 <b>객관식 → O/X → 서술형</b> 세 번 반복해요.',
      '영어 Lesson <b>7 → 8 → 9 → 10 → 11 → 1 → 2 → 3 → 4 → 5 → 6</b> 순서로 매일 <b>3문제</b>를 같은 문제로 <b>객관식 → O/X → 서술형</b> 세 번 반복해요.<br><span style="color:var(--purple);font-weight:700">오늘 진도: Lesson '+lid+' · '+l.title+'</span>');
    return html;
  };
}

window.__englishMissionPatch={version:2,order:ENG_ORDER.slice(),anchor:ENG_ANCHOR,currentLesson:currentLessonId,lessons:ENG_LESSONS};
})();
