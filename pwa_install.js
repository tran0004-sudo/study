(function(){
  'use strict';

  var deferredPrompt = null;
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  var ua = navigator.userAgent || '';
  var isIOS = /iphone|ipad|ipod/i.test(ua);
  var isAndroid = /android/i.test(ua);

  function registerServiceWorker(){
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function(){
        navigator.serviceWorker.register('./service-worker.js').catch(function(err){
          console.warn('Service worker registration failed:', err);
        });
      });
    }
  }

  function addStyles(){
    if (document.getElementById('pwa-install-styles')) return;
    var style = document.createElement('style');
    style.id = 'pwa-install-styles';
    style.textContent = [
      '#pwaInstallBtn{position:fixed;right:16px;bottom:18px;z-index:2147483000;border:0;border-radius:999px;padding:12px 17px;background:#5146c8;color:#fff;font:700 14px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;box-shadow:0 8px 24px rgba(42,37,80,.25);cursor:pointer;display:flex;align-items:center;gap:7px;transition:transform .15s ease,opacity .15s ease}',
      '#pwaInstallBtn:hover{transform:translateY(-1px)}',
      '#pwaInstallBtn:active{transform:translateY(1px)}',
      '#pwaInstallBtn[hidden]{display:none!important}',
      '#pwaInstallModal{position:fixed;inset:0;z-index:2147483640;background:rgba(24,21,46,.48);display:flex;align-items:flex-end;justify-content:center;padding:18px;box-sizing:border-box}',
      '#pwaInstallModal[hidden]{display:none!important}',
      '#pwaInstallCard{width:min(440px,100%);background:#fff;border-radius:22px;padding:22px;box-sizing:border-box;box-shadow:0 18px 60px rgba(0,0,0,.25);color:#2A2550;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',
      '#pwaInstallCard h2{font-size:20px;margin:0 0 8px}',
      '#pwaInstallCard p{font-size:14px;line-height:1.6;margin:0 0 14px;color:#625d83}',
      '#pwaInstallCard ol{margin:8px 0 18px;padding-left:22px;font-size:14px;line-height:1.9}',
      '#pwaInstallClose{width:100%;border:0;border-radius:14px;padding:13px 16px;background:#eeeafc;color:#403982;font-weight:800;font-size:14px;cursor:pointer}',
      '@media(max-width:520px){#pwaInstallBtn{right:12px;bottom:12px;padding:11px 15px;font-size:13px}#pwaInstallCard{border-radius:20px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function createUI(){
    if (isStandalone || document.getElementById('pwaInstallBtn')) return;
    addStyles();

    var btn = document.createElement('button');
    btn.id = 'pwaInstallBtn';
    btn.type = 'button';
    btn.setAttribute('aria-label','공부별 앱 설치');
    btn.innerHTML = '<span aria-hidden="true">⬇️</span><span>앱 설치</span>';
    document.body.appendChild(btn);

    var modal = document.createElement('div');
    modal.id = 'pwaInstallModal';
    modal.hidden = true;
    modal.innerHTML = '<div id="pwaInstallCard" role="dialog" aria-modal="true" aria-labelledby="pwaInstallTitle">'
      + '<h2 id="pwaInstallTitle">공부별 앱 설치</h2>'
      + '<div id="pwaInstallHelp"></div>'
      + '<button id="pwaInstallClose" type="button">확인</button>'
      + '</div>';
    document.body.appendChild(modal);

    function showHelp(){
      var help = document.getElementById('pwaInstallHelp');
      if (isIOS) {
        help.innerHTML = '<p>아이폰·아이패드는 Safari에서 홈 화면에 추가하면 앱처럼 바로 실행할 수 있어요.</p>'
          + '<ol><li>Safari 아래쪽의 <b>공유</b> 버튼(□↑)을 누르세요.</li><li><b>홈 화면에 추가</b>를 선택하세요.</li><li>오른쪽 위의 <b>추가</b>를 누르세요.</li></ol>';
      } else if (isAndroid) {
        help.innerHTML = '<p>설치 창이 바로 뜨지 않으면 Chrome 메뉴에서 설치할 수 있어요.</p>'
          + '<ol><li>Chrome 오른쪽 위 <b>⋮</b> 메뉴를 누르세요.</li><li><b>앱 설치</b> 또는 <b>홈 화면에 추가</b>를 선택하세요.</li></ol>';
      } else {
        help.innerHTML = '<p>이 브라우저에서 자동 설치 창을 열 수 없을 때는 브라우저 메뉴의 앱 설치 기능을 이용하세요.</p>'
          + '<ol><li>Chrome/Edge 주소창 오른쪽의 <b>설치 아이콘</b>을 찾으세요.</li><li>아이콘이 없으면 브라우저 메뉴에서 <b>앱 설치</b>를 선택하세요.</li></ol>';
      }
      modal.hidden = false;
    }

    btn.addEventListener('click', async function(){
      if (deferredPrompt) {
        try {
          deferredPrompt.prompt();
          var choice = await deferredPrompt.userChoice;
          if (choice && choice.outcome === 'accepted') btn.hidden = true;
        } catch (e) {
          showHelp();
        }
        deferredPrompt = null;
      } else {
        showHelp();
      }
    });

    document.getElementById('pwaInstallClose').addEventListener('click', function(){ modal.hidden = true; });
    modal.addEventListener('click', function(e){ if (e.target === modal) modal.hidden = true; });
  }

  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredPrompt = e;
    createUI();
  });

  window.addEventListener('appinstalled', function(){
    deferredPrompt = null;
    var btn = document.getElementById('pwaInstallBtn');
    if (btn) btn.hidden = true;
  });

  registerServiceWorker();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createUI);
  else createUI();
})();
