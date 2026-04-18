"use strict";(()=>{var p=[{id:1,category:"romanticas",text:"Como percebeste que estavas apaixonado por ela?",videoSrc:"videos/question_01.mp4"},{id:2,category:"romanticas",text:'Qual foi o momento em que pensaste: "\xC9 ela"?',videoSrc:"videos/question_02.mp4"},{id:3,category:"romanticas",text:"O que mais admiras nela?",videoSrc:"videos/question_03.mp4"},{id:4,category:"romanticas",text:"Qual foi o encontro favorito de voc\xEAs?",videoSrc:"videos/question_04.mp4"},{id:5,category:"romanticas",text:"O que ela faz que te deixa sempre feliz?",videoSrc:"videos/question_05.mp4"},{id:6,category:"romanticas",text:"Se pudesses descrev\xEA-la numa palavra, qual seria?",videoSrc:"videos/question_06.mp4"},{id:8,category:"romanticas",text:"O que mais amas na personalidade dela?",videoSrc:"videos/question_08.mp4"},{id:9,category:"romanticas",text:"Como imaginas os dois daqui a 10 anos?",videoSrc:"videos/question_09.mp4"},{id:11,category:"engracadas",text:"Quem pediu quem em namoro \u2014 e como foi?",videoSrc:"videos/question_11.mp4"},{id:12,category:"engracadas",text:"Quem \xE9 mais teimoso?",videoSrc:"videos/question_12.mp4"},{id:13,category:"engracadas",text:"Quem demora mais a arranjar-se?",videoSrc:"videos/question_13.mp4"},{id:14,category:"engracadas",text:"Quem pede desculpa primeiro?",videoSrc:"videos/question_14.mp4"},{id:15,category:"engracadas",text:"Quem \xE9 mais ciumento?",videoSrc:"videos/question_15.mp4"},{id:16,category:"engracadas",text:"Quem gasta mais dinheiro?",videoSrc:"videos/question_16.mp4"},{id:17,category:"engracadas",text:"Quem cozinha melhor?",videoSrc:"videos/question_17.mp4"},{id:18,category:"engracadas",text:"Quem ressona mais? \u{1F602}",videoSrc:"videos/question_18.mp4"},{id:19,category:"engracadas",text:'Qual foi a maior "discuss\xE3o" de voc\xEAs?',videoSrc:"videos/question_19.mp4"},{id:20,category:"engracadas",text:"Quem \xE9 mais dram\xE1tico?",videoSrc:"videos/question_20.mp4"},{id:22,category:"emocionais",text:"Qual foi o momento mais dif\xEDcil que passaram juntos?",videoSrc:"videos/question_22.mp4"},{id:23,category:"emocionais",text:"O que aprendeste com ela?",videoSrc:"videos/question_23.mp4"},{id:25,category:"emocionais",text:"Qual foi o momento mais feliz da rela\xE7\xE3o at\xE9 hoje?",videoSrc:"videos/question_25.mp4"},{id:26,category:"emocionais",text:"O que dirias a ela no altar (resumo)?",videoSrc:"videos/question_26.mp4"},{id:27,category:"emocionais",text:"O que mais admiras na forma como ela cuida das pessoas?",videoSrc:"videos/question_27.mp4"},{id:29,category:"picantes",text:"Quem deu o primeiro beijo?",videoSrc:"videos/question_29.mp4"},{id:30,category:"picantes",text:"Onde foi o primeiro beijo?",videoSrc:"videos/question_30.mp4"},{id:31,category:"picantes",text:"Quem se apaixonou primeiro?",videoSrc:"videos/question_31.mp4"},{id:32,category:"picantes",text:"Quem tomou mais iniciativa no in\xEDcio?",videoSrc:"videos/question_32.mp4"},{id:34,category:"picantes",text:"Quem \xE9 mais carinhoso?",videoSrc:"videos/question_34.mp4"},{id:35,category:"picantes",text:"Quem faz mais surpresas?",videoSrc:"videos/question_35.mp4"}],I=p.length;var h=class{constructor(e){this.gameState=e}getCurrentQuestion(){let e=this.gameState.currentQuestionIndex;return e>=p.length?null:p[e]??null}recordAnswer(e){let o=this.getCurrentQuestion();o&&this.gameState.recordAnswer(o.id,e)}getWinner(){let e=this.gameState.sophieScore,o=this.gameState.teamBrideScore;return e>o?"sophie":o>e?"teamBride":"tie"}};var E="despedida_sophie_quizz_v1",x=1;function g(){return{version:x,currentQuestionIndex:0,sophieScore:0,teamBrideScore:0,results:[],theme:"light",hasStarted:!1,isFinished:!1}}var f=class{constructor(){this.state=this.load()}load(){try{let e=localStorage.getItem(E);if(!e)return g();let o=JSON.parse(e);return o.version!==x?g():o}catch{return g()}}save(){try{localStorage.setItem(E,JSON.stringify(this.state))}catch{}}reset(){localStorage.removeItem(E),this.state=g()}get currentQuestionIndex(){return this.state.currentQuestionIndex}get sophieScore(){return this.state.sophieScore}get teamBrideScore(){return this.state.teamBrideScore}get results(){return this.state.results}get theme(){return this.state.theme}get hasStarted(){return this.state.hasStarted}get isFinished(){return this.state.isFinished}get totalQuestions(){return p.length}startGame(){this.state.hasStarted=!0,this.save()}recordAnswer(e,o){this.state.results.push({questionId:e,acertou:o}),o?this.state.sophieScore+=1:this.state.teamBrideScore+=1;let t=this.state.currentQuestionIndex+1;t>=p.length?this.state.isFinished=!0:this.state.currentQuestionIndex=t,this.save()}setTheme(e){this.state.theme=e,this.save()}};var k={romanticas:"\u{1F495} Fofas & Rom\xE2nticas",engracadas:"\u{1F602} Engra\xE7adas",emocionais:"\u{1F979} Emocionais",picantes:"\u{1F525} Levemente Picantes"},q={intro:{imgAlt:"Despedida de Solteira da Sophie",titlePre:"Despedida da",titleName:"Sophie",subtitle:"18 de Abril \xB7 O Nardinho responde! \u{1F48D}",description:"A Sophie responde em voz alta \u2014 e depois v\xEA a resposta do Nardinho em v\xEDdeo. Acertou ou errou? O grupo decide!",startAriaLabel:"Iniciar o quizz",startBtn:"Vamos a isso! \u{1F3AC}"},scores:{sophieLabel:"\u{1F485} Sophie",teamBrideLabel:"\u{1F492} Team Bride",questionCounter:(n,e)=>`${n} / ${e}`},question:{categoryLabel:n=>k[n]??n,counter:(n,e)=>`Pergunta ${n} de ${e}`,seeAnswerBtn:"Ver Resposta do Nardinho \u{1F3AC}",seeAnswerAriaLabel:"Ver a resposta do Nardinho em v\xEDdeo"},video:{nowWatching:"\u{1F3AC} Resposta do Nardinho",acertouBtn:"\u2705 Acertou!",errouBtn:"\u274C Errou!",acertouAriaLabel:"A Sophie acertou \u2014 ponto para a Sophie",errouAriaLabel:"A Sophie errou \u2014 ponto para o Team Bride",videoError:"\u26A0\uFE0F V\xEDdeo n\xE3o dispon\xEDvel. Coloca o ficheiro na pasta videos/."},result:{acertouFeedback:"\u2705 Acertou! Ponto para a Sophie!",errouFeedback:"\u274C Errou! Ponto para o Team Bride!",sophiePoint:"+1 para a Sophie \u{1F485}",teamBridePoint:"+1 para o Team Bride \u{1F492}",nextBtn:"Pr\xF3xima Pergunta \u2192",nextAriaLabel:"Avan\xE7ar para a pr\xF3xima pergunta",finishBtn:"Ver Resultado Final \u{1F3C6}",finishAriaLabel:"Ver o resultado final do quizz"},fim:{confettiEmoji:"\u{1F389}",title:"Fim do Quizz!",scoreLabel:"Pontua\xE7\xE3o final",sophieScoreLabel:"\u{1F485} Sophie",teamBrideScoreLabel:"\u{1F492} Team Bride",sophieWinsTitle:"\u{1F451} A Sophie ganhou!",sophieWinsDesc:"A Sophie conhece o Nardinho melhor do que ele pensa! Ela escolhe quantas pessoas quiser do grupo para beber um shot e pagar um mico \xE0 escolha dela. \u{1F485}\u{1F942}",teamBrideWinsTitle:"\u{1F492} O Team Bride ganhou!",teamBrideWinsDesc:"O Team Bride conhece o Nardinho melhor do que a Sophie! A Sophie bebe um shot e o grupo escolhe o mico que ela vai pagar. \u{1F608}\u{1F942}",tieTitle:"\u{1F91D} Empate!",tieDesc:"Ningu\xE9m ganhou \u2014 ou ganharam os dois! Bebem todos um shot e o mico \xE9 decidido em conjunto pelo grupo. \u{1F942}",resetAriaLabel:"Recome\xE7ar o quizz",resetBtn:"\u21BA Recome\xE7ar"},confirm:{resetHeader:"Tens a certeza de que queres apagar todo o progresso e recome\xE7ar o quizz?",okBtn:"Sim, recome\xE7ar",cancelBtn:"Cancelar"}};var i=q;function v(n){return new Promise(e=>{let o=document.getElementById("confirm-modal"),t=document.getElementById("modal-overlay"),s=document.getElementById("confirm-modal-message"),a=document.getElementById("confirm-ok-btn"),r=document.getElementById("confirm-cancel-btn");if(!o||!t||!s||!a||!r){e(globalThis.confirm(n));return}s.textContent=n;let c=d=>{o.classList.remove("is-open"),t.classList.remove("is-open"),document.body.style.overflow="",a.removeEventListener("click",l),r.removeEventListener("click",m),document.removeEventListener("keydown",u),e(d)},l=()=>c(!0),m=()=>c(!1),u=d=>{d.key==="Escape"&&c(!1),d.key==="Enter"&&c(!0)};a.textContent=i.confirm.okBtn,r.textContent=i.confirm.cancelBtn,a.addEventListener("click",l),r.addEventListener("click",m),document.addEventListener("keydown",u),document.body.style.overflow="hidden",o.classList.add("is-open"),t.classList.add("is-open"),setTimeout(()=>r.focus(),50)})}var b=class{constructor(e="help-btn",o="help-modal",t="modal-overlay"){let s=document.getElementById(e),a=document.getElementById(o),r=document.getElementById(t);if(!s||!a||!r)throw new Error("Help modal elements not found in DOM");this.modal=a,this.overlay=r,s.addEventListener("click",()=>this.open()),r.addEventListener("click",()=>{this.modal.classList.contains("is-open")&&this.close()}),a.querySelector(".modal-close")?.addEventListener("click",()=>this.close()),document.addEventListener("keydown",l=>{l.key==="Escape"&&this.close()})}open(){this.modal.classList.add("is-open"),this.overlay.classList.add("is-open"),document.body.style.overflow="hidden"}close(){this.modal.classList.remove("is-open"),this.overlay.classList.remove("is-open"),document.body.style.overflow=""}};var L=["#6b8f5e","#8fb87e","#c9a96e","#e8c98e","#d4a5b5","#f5c5d0","#a8c8a0","#fde8d0"];function B(n=3e3){let e=document.getElementById("confetti-canvas");if(!e)return;let o=e.getContext("2d");if(!o)return;e.width=window.innerWidth,e.height=window.innerHeight,e.style.display="block";let t=[],s=120;for(let c=0;c<s;c++)t.push({x:Math.random()*e.width,y:-10,vx:(Math.random()-.5)*4,vy:Math.random()*3+2,color:L[Math.floor(Math.random()*L.length)],size:Math.random()*8+4,rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*6,opacity:1});let a=performance.now();function r(c){if(!o||!e)return;let l=c-a,m=n-800,u=Math.min(l/n,1);o.clearRect(0,0,e.width,e.height);for(let d of t)d.x+=d.vx,d.y+=d.vy,d.rotation+=d.rotationSpeed,d.vy+=.05,l>m&&(d.opacity=Math.max(0,1-(l-m)/800)),o.save(),o.globalAlpha=d.opacity,o.translate(d.x,d.y),o.rotate(d.rotation*Math.PI/180),o.fillStyle=d.color,o.fillRect(-d.size/2,-d.size/2,d.size,d.size*.5),o.restore();u<1?requestAnimationFrame(r):(o.clearRect(0,0,e.width,e.height),e.style.display="none")}requestAnimationFrame(r)}function T(n){n.classList.add("pulse"),n.addEventListener("animationend",()=>n.classList.remove("pulse"),{once:!0})}var S=class{constructor(e,o,t="game-root"){this.phase="question";this.gameState=e,this.engine=o;let s=document.getElementById(t);if(!s)throw new Error(`#${t} not found`);this.root=s}render(){if(!this.gameState.hasStarted){this.renderIntro(),this.renderScoreBar(!1);return}if(this.gameState.isFinished){this.renderFim(),this.renderScoreBar(!1);return}this.renderScoreBar(!0),this.phase==="question"?this.renderQuestion():this.phase==="video"&&this.renderVideo()}renderScoreBar(e,o){let t=document.getElementById("progress-bar");if(!t)return;if(!e){t.innerHTML="";return}let s=this.gameState.sophieScore,a=this.gameState.teamBrideScore,r=(o??this.gameState.currentQuestionIndex)+1,c=this.gameState.totalQuestions;t.innerHTML=`
      <div class="score-bar">
        <div class="score-team score-team--sophie ${s>a?"score-team--leading":""}">
          <span class="score-label">${i.scores.sophieLabel}</span>
          <span class="score-value">${s}</span>
        </div>
        <div class="score-counter">
          <span class="score-counter-text">${i.scores.questionCounter(r,c)}</span>
        </div>
        <div class="score-team score-team--bride ${a>s?"score-team--leading":""}">
          <span class="score-label">${i.scores.teamBrideLabel}</span>
          <span class="score-value">${a}</span>
        </div>
      </div>
    `}renderIntro(){this.root.innerHTML=`
      <div class="intro-card fade-in" id="intro-card" role="main">
        <div class="intro-image-wrap">
          <img
            src="images/start.jpg"
            alt="${i.intro.imgAlt}"
            class="intro-image"
            draggable="false"
          />
        </div>
        <div class="intro-body">
          <h2 class="intro-title">
            <span class="intro-title-pre">${i.intro.titlePre}</span>
            <span class="intro-title-name">${i.intro.titleName}</span>
          </h2>
          <p class="intro-subtitle">${i.intro.subtitle}</p>
          <p class="intro-desc">${i.intro.description}</p>
          <button class="btn btn-primary btn-start" id="start-btn" aria-label="${i.intro.startAriaLabel}">
            ${i.intro.startBtn}
          </button>
        </div>
      </div>
    `,document.getElementById("start-btn")?.addEventListener("click",()=>{this.gameState.startGame(),this.phase="question",this.render()})}renderQuestion(){let e=this.engine.getCurrentQuestion();if(!e)return;let o=this.gameState.currentQuestionIndex+1,t=this.gameState.totalQuestions,s=i.question.categoryLabel(e.category);this.root.innerHTML=`
      <div class="quiz-card fade-in" id="quiz-card" role="main">
        <div class="question-header">
          <span class="question-category-badge">${s}</span>
          <span class="question-counter">${i.question.counter(o,t)}</span>
        </div>

        <div class="question-body">
          <p class="question-text" id="question-text">${this.escapeHtml(e.text)}</p>
        </div>

        <div class="question-hint">
          <p>A Sophie responde em voz alta \u2014 e depois v\xEA a resposta do Nardinho!</p>
        </div>

        <button
          class="btn btn-primary btn-see-answer"
          id="see-answer-btn"
          aria-label="${i.question.seeAnswerAriaLabel}"
        >
          ${i.question.seeAnswerBtn}
        </button>
      </div>
    `,document.getElementById("see-answer-btn")?.addEventListener("click",()=>{this.phase="video",this.render()})}renderVideo(){let e=this.engine.getCurrentQuestion();if(!e)return;let o=this.gameState.currentQuestionIndex+1,t=this.gameState.totalQuestions,s=i.question.categoryLabel(e.category);this.root.innerHTML=`
      <div class="quiz-card fade-in" id="quiz-card" role="main">
        <div class="question-header">
          <span class="question-category-badge">${s}</span>
          <span class="question-counter">${i.question.counter(o,t)}</span>
        </div>

        <p class="question-text question-text--small">${this.escapeHtml(e.text)}</p>

        <div class="video-section">
          <p class="video-label">${i.video.nowWatching}</p>
          <div class="video-wrap" id="video-wrap">
            <video
              id="quiz-video"
              class="quiz-video"
              playsinline
              preload="metadata"
              aria-label="Resposta do Nardinho"
            >
              <source src="${this.escapeHtml(e.videoSrc)}" type="video/mp4" />
              ${i.video.videoError}
            </video>
            <button class="video-overlay-btn" id="video-overlay-btn" data-state="hidden" aria-label="Reproduzir v\xEDdeo">
              <span class="video-overlay-icon" id="video-overlay-icon"></span>
            </button>
            <div class="video-error-msg" id="video-error-msg" hidden>
              <span>${i.video.videoError}</span>
            </div>
          </div>
        </div>

        <div class="result-actions" id="result-actions">
          <p class="result-question">A Sophie acertou?</p>
          <div class="result-buttons">
            <button
              class="btn btn-acertou"
              id="btn-acertou"
              aria-label="${i.video.acertouAriaLabel}"
            >
              ${i.video.acertouBtn}
            </button>
            <button
              class="btn btn-errou"
              id="btn-errou"
              aria-label="${i.video.errouAriaLabel}"
            >
              ${i.video.errouBtn}
            </button>
          </div>
        </div>

        <div class="result-feedback fade-in" id="result-feedback" hidden>
          <p class="result-feedback-text" id="result-feedback-text"></p>
          <p class="result-point-text" id="result-point-text"></p>
        </div>
      </div>
    `,this.bindVideoEvents()}bindVideoEvents(){let e=document.getElementById("quiz-video"),o=document.getElementById("video-error-msg"),t=document.getElementById("video-overlay-btn"),s=document.getElementById("video-overlay-icon");if(!e||!o)return;let a=(l,m)=>{!s||!t||(s.textContent=l,t.dataset.state=m)};e.addEventListener("error",()=>{e.hidden=!0,t&&(t.hidden=!0),o.hidden=!1}),e.addEventListener("play",()=>{a("","hidden")}),e.addEventListener("ended",()=>{a("\u21BA","visible"),t&&t.setAttribute("aria-label","Repetir v\xEDdeo")}),t?.addEventListener("click",()=>{e.ended?(e.currentTime=0,e.play().catch(()=>{})):e.paused?e.play().catch(()=>{}):(e.pause(),a("\u23F8","flash"),t&&t.setAttribute("aria-label","Reproduzir v\xEDdeo"),setTimeout(()=>{e.paused&&!e.ended&&a("\u25B6","visible")},600))}),e.play().catch(()=>{a("\u25B6","visible")});let r=document.getElementById("btn-acertou"),c=document.getElementById("btn-errou");r?.addEventListener("click",()=>this.handleAnswer(!0)),c?.addEventListener("click",()=>this.handleAnswer(!1))}handleAnswer(e){let o=document.getElementById("result-actions"),t=document.getElementById("result-feedback"),s=document.getElementById("result-feedback-text"),a=document.getElementById("result-point-text"),r=document.getElementById("btn-acertou"),c=document.getElementById("btn-errou");if(!o||!t||!s||!a)return;r&&(r.disabled=!0),c&&(c.disabled=!0);let l=this.gameState.currentQuestionIndex;this.engine.recordAnswer(e),t.hidden=!1,s.textContent=e?i.result.acertouFeedback:i.result.errouFeedback,s.className=`result-feedback-text ${e?"result-feedback-text--acertou":"result-feedback-text--errou"}`,a.textContent=e?i.result.sophiePoint:i.result.teamBridePoint,this.renderScoreBar(!0,l);let m=document.getElementById("quiz-card");m&&T(m),e&&B(2500),setTimeout(()=>{this.phase="question",this.render()},2500)}renderFim(){let e=this.gameState.sophieScore,o=this.gameState.teamBrideScore,t=this.engine.getWinner(),s=t==="sophie"?i.fim.sophieWinsTitle:t==="teamBride"?i.fim.teamBrideWinsTitle:i.fim.tieTitle,a=t==="sophie"?i.fim.sophieWinsDesc:t==="teamBride"?i.fim.teamBrideWinsDesc:i.fim.tieDesc,r=t==="sophie"?"winner-sophie":t==="teamBride"?"winner-bride":"winner-tie";this.root.innerHTML=`
      <div class="fim-card fade-in" id="fim-card" role="main">
        <div class="fim-confetti-text">${i.fim.confettiEmoji}</div>
        <h2 class="fim-title">${i.fim.title}</h2>

        <div class="fim-scores">
          <div class="fim-score-block fim-score-block--sophie ${t==="sophie"?"fim-score-block--winner":""}">
            <span class="fim-score-name">${i.fim.sophieScoreLabel}</span>
            <span class="fim-score-value">${e}</span>
          </div>
          <span class="fim-score-vs">vs</span>
          <div class="fim-score-block fim-score-block--bride ${t==="teamBride"?"fim-score-block--winner":""}">
            <span class="fim-score-name">${i.fim.teamBrideScoreLabel}</span>
            <span class="fim-score-value">${o}</span>
          </div>
        </div>

        <div class="fim-winner ${r}">
          <h3 class="fim-winner-title">${s}</h3>
          <p class="fim-winner-desc">${a}</p>
        </div>

        <button
          class="btn btn-outline btn-reset"
          id="reset-btn"
          aria-label="${i.fim.resetAriaLabel}"
        >
          ${i.fim.resetBtn}
        </button>
      </div>
    `,B(6e3),this.bindFimActions()}bindFimActions(){document.getElementById("reset-btn")?.addEventListener("click",()=>{v(i.confirm.resetHeader).then(o=>{o&&(this.gameState.reset(),this.phase="question",this.render())})})}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}};var y=class{constructor(e,o=["theme-toggle","theme-toggle-mobile"]){if(this.gameState=e,this.toggleBtns=o.map(t=>document.getElementById(t)).filter(t=>t!==null),this.toggleBtns.length===0)throw new Error("No theme toggle buttons found");this.apply(e.theme),this.toggleBtns.forEach(t=>t.addEventListener("click",()=>this.toggle()))}apply(e){document.documentElement.setAttribute("data-theme",e);let o=e==="dark"?"Mudar para modo claro":"Mudar para modo escuro",t=e==="dark"?'<span class="theme-icon">\u2600\uFE0F</span>':'<span class="theme-icon">\u{1F319}</span>';this.toggleBtns.forEach(s=>{s.setAttribute("aria-label",o),s.innerHTML=t})}toggle(){let e=this.gameState.theme==="dark"?"light":"dark";this.gameState.setTheme(e),this.apply(e)}};function w(){let n=new f,e=new h(n),o=new S(n,e);new y(n),new b;let t=document.getElementById("header-menu-toggle"),s=document.getElementById("header-menu-overlay"),a=document.getElementById("header-menu-sidebar"),r=()=>{let u=t?.classList.toggle("is-open");s?.classList.toggle("is-open"),a?.classList.toggle("is-open"),t?.setAttribute("aria-expanded",String(u))};t?.addEventListener("click",r),s?.addEventListener("click",r);let c=document.getElementById("reset-btn-mobile");document.getElementById("help-btn-mobile")?.addEventListener("click",()=>{document.getElementById("help-btn")?.click(),r()}),c?.addEventListener("click",()=>{r(),v(i.confirm.resetHeader).then(u=>{u&&(n.reset(),o.render())})}),document.getElementById("reset-btn-header")?.addEventListener("click",()=>{v(i.confirm.resetHeader).then(u=>{u&&(n.reset(),o.render())})}),o.render()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();})();
