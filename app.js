'use strict';
// All six photographs are local, user-provided images. No online fonts, scripts, or images required.
const PHONE={
 candle:{src:'assets/fotos/01-candelabro.webp',alt:'Teléfono de candelabro antiguo, con bocina para hablar'},
 disk:{src:'assets/fotos/02-disco.webp',alt:'Teléfono negro con disco giratorio y cable'},
 buttons:{src:'assets/fotos/03-botones.webp',alt:'Teléfono beige de teclas con cable'},
 motorola:{src:'assets/fotos/04-movil-1983.webp',alt:'Motorola DynaTAC, teléfono móvil grande con antena'},
 nokia:{src:'assets/fotos/05-nokia-2000.webp',alt:'Nokia 3310 azul, teléfono con teclado físico'},
 smart:{src:'assets/fotos/06-smartphone.webp',alt:'Teléfono inteligente actual de pantalla táctil'}
};
const h=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const img=(key,cls='')=>`<div class="image-mat ${cls}"><img src="${PHONE[key].src}" alt="${h(PHONE[key].alt)}" draggable="false"></div>`;
const stars=`<span class="doodle-star" aria-hidden="true">✳</span>`;
const chip=(text,emoji='✦')=>`<span class="topic-chip"><span aria-hidden="true">${emoji}</span> ${h(text)}</span>`;
const two=(eyebrow,title,desc,key,extras='',look='peach')=>`<section class="slide split-slide theme-${look}"><div class="split-copy"><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><p class="intro-text">${desc}</p>${extras}</div><div class="split-image"><div class="photo-display">${img(key)}<span class="frame-spark one" aria-hidden="true">✳</span><span class="frame-spark two" aria-hidden="true">✺</span></div></div></section>`;
const years=[
 {key:'candle',year:'1900',name:'Una bocina y cables'},
 {key:'disk',year:'1950',name:'Giramos el disco'},
 {key:'buttons',year:'1980',name:'Llegaron los botones'},
 {key:'motorola',year:'1983',name:'Primeros móviles'},
 {key:'nokia',year:'2000',name:'Celular de bolsillo'},
 {key:'smart',year:'HOY',name:'Pantalla táctil'}
];
const SLIDES=[
 {name:'Comenzamos',label:'Portada',view:()=>`<section class="slide cover-slide"><span class="cover-doodle a" aria-hidden="true">✳</span><span class="cover-doodle b" aria-hidden="true">✧</span><div class="cover-copy"><div class="eyebrow">EXPOSICIÓN · 2° BÁSICO</div><div class="cover-pill">UNA AVENTURA TECNOLÓGICA <span aria-hidden="true">✦</span></div><h1>El teléfono:<br><em>un viaje</em><br>por el tiempo<span class="dot">.</span></h1><p class="cover-sub">¿Cómo pasamos de un teléfono con cable a uno que cabe en el bolsillo?</p><div class="author">Adriana Ojeda <span>·</span> Escuela Litoral Austral</div></div><div class="cover-media"><div class="polaroid first">${img('disk')}<span>ANTES</span></div><div class="polaroid second">${img('smart')}<span>AHORA</span></div><div class="cover-arrow" aria-hidden="true">↝</div><span class="tiny-star" aria-hidden="true">✦</span></div></section>`},
 {name:'¿Para qué sirve?',label:'Su utilidad',view:()=>`<section class="slide purposes-slide"><div class="center-head"><div class="eyebrow">01 / ¿QUÉ ES?</div><h2>Un teléfono nos ayuda a <em>comunicarnos.</em></h2><p>Con personas que están cerca... ¡o muy lejos!</p></div><div class="purpose-grid"><div class="purpose-card"><div class="purpose-emoji" aria-hidden="true">☎️</div><h3>Llamar</h3><p>Escuchar una voz.</p></div><div class="purpose-card rose"><div class="purpose-emoji" aria-hidden="true">💬</div><h3>Escribir</h3><p>Enviar mensajes.</p></div><div class="purpose-card sage"><div class="purpose-emoji" aria-hidden="true">📹</div><h3>Ver</h3><p>Hacer videollamadas.</p></div></div><div class="bottom-ribbon">Un objeto tecnológico que nos conecta. <span aria-hidden="true">♥</span></div></section>`},
 {name:'Los primeros teléfonos',label:'Teléfono antiguo',view:()=>two('02 / HACE MÁS DE 100 AÑOS','¡Mira qué <em>diferente!</em>','Algunos teléfonos antiguos tenían una bocina separada para escuchar.', 'candle',`<div class="fact-row">${chip('Usaba cables','🔌')}${chip('Era grande','📏')}</div><span class="bubble-note">Así eran algunos teléfonos de principios de 1900.</span>`,'sand')},
 {name:'El teléfono de disco',label:'Teléfono de disco',view:()=>two('03 / EL TELÉFONO DE DISCO','¡Girábamos <em>los números!</em>','Para llamar, había que girar el disco una y otra vez.', 'disk',`<div class="fact-row">${chip('Tenía cable','〰')}${chip('No tenía pantalla','✕')}</div><button class="action-play" type="button" id="dialBtn">↻ Girar el disco</button><div class="dial-feedback" id="dialFeedback" aria-live="polite"></div>`,'mint')},
 {name:'Llegan los botones',label:'Teléfono de botones',view:()=>two('04 / MÁS FÁCIL DE MARCAR','¡Llegaron <em>los botones!</em>','Ahora los números se presionaban, en vez de girar un disco.', 'buttons',`<div class="fact-row">${chip('Tenía teclas','🔢')}${chip('Seguía con cable','〰')}</div>`,'rose')},
 {name:'El celular gigante',label:'Móvil de 1983',view:()=>two('05 / LOS AÑOS 80','¡Un teléfono <em>para llevar!</em>','En 1983 llegó al mercado un teléfono móvil muy grande.', 'motorola',`<div class="fact-row">${chip('Sin cable para llamar','✦')}${chip('Con antena','📡')}</div><span class="bubble-note">Era mucho más grande que los de hoy.</span>`,'butter')},
 {name:'Celular de bolsillo',label:'Nokia 3310',view:()=>two('06 / AÑO 2000','¡Ahora cabe <em>en el bolsillo!</em>','Los celulares se hicieron más pequeños y fáciles de llevar.', 'nokia',`<div class="fact-row">${chip('Llamadas','☎')}${chip('Mensajes de texto','💬')}</div>`,'sky')},
 {name:'El teléfono de hoy',label:'Smartphone',view:()=>two('07 / EN LA ACTUALIDAD','Una pantalla, <em>mil posibilidades.</em>','Los teléfonos actuales son livianos y tienen pantalla táctil.', 'smart',`<div class="fact-row">${chip('Fotos y videos','📷')}${chip('Videollamadas','📹')}${chip('Aplicaciones','✳')}</div>`,'peach')},
 {name:'Línea del tiempo',label:'La evolución',view:()=>`<section class="slide timeline-slide"><div class="section-head"><div class="eyebrow">08 / VAMOS EN ORDEN</div><h2>¡Viajemos por el <em>tiempo!</em></h2><p>De los cables a la pantalla táctil.</p></div><div class="time-grid">${years.map((v,i)=>`<div class="time-card" style="--item:${i}">${img(v.key)}<div class="time-text"><span>${v.year}</span><strong>${v.name}</strong></div></div>`).join('')}</div></section>`},
 {name:'Antes y ahora',label:'Comparación',view:()=>`<section class="slide comparison-slide"><div class="section-head"><div class="eyebrow">09 / ¿QUÉ DIFERENCIAS VES?</div><h2>Antes <span class="versus">y</span> <em>ahora.</em></h2></div><div class="compare-grid"><article class="compare-item"><span class="tag">ANTES</span>${img('disk')}<div class="compare-facts"><span>Con cable</span><span>Grande</span><span>Solo llamadas</span></div></article><div class="comparison-arrow" aria-hidden="true">→</div><article class="compare-item now"><span class="tag">AHORA</span>${img('smart')}<div class="compare-facts"><span>Portátil</span><span>Pantalla táctil</span><span>Muchas funciones</span></div></article></div></section>`},
 {name:'¿Qué cambió?',label:'Tres grandes cambios',view:()=>`<section class="slide three-slide"><div class="section-head"><div class="eyebrow">10 / UNA GRAN TRANSFORMACIÓN</div><h2>¿Qué fue lo que <em>cambió?</em></h2></div><div class="change-grid"><article class="change-card"><span class="change-icon">📏</span><h3>El tamaño</h3><p><span>Antes</span> Grande y pesado</p><p><span>Ahora</span> Más pequeño y liviano</p></article><article class="change-card mint"><span class="change-icon">🔌</span><h3>La conexión</h3><p><span>Antes</span> Cable para hablar</p><p><span>Ahora</span> Se puede llamar sin cable</p></article><article class="change-card rose"><span class="change-icon">✨</span><h3>Las funciones</h3><p><span>Antes</span> Principalmente llamadas</p><p><span>Ahora</span> Fotos, videos y mensajes</p></article></div></section>`},
 {name:'Los beneficios',label:'¿Cómo nos ayuda?',view:()=>`<section class="slide connection-slide"><div class="split-copy"><div class="eyebrow">11 / UN CAMBIO QUE NOS AYUDA</div><h2>La distancia ya no se siente <em>tan grande.</em></h2><p class="intro-text">Podemos hablar con nuestra familia, aunque viva lejos.</p><div class="call-label">Por ejemplo: una videollamada con los abuelos. <span aria-hidden="true">♥</span></div></div><div class="video-call-art" aria-label="Ejemplo ilustrado de una videollamada familiar"><div class="call-window"><div class="call-top"><span>VIDEOLLAMADA</span><span>● ● ●</span></div><div class="person-face" aria-hidden="true">👵</div><p>¡Hola, abuela!</p><div class="small-call"><span aria-hidden="true">👧</span></div><div class="end-call" aria-hidden="true">☎</div></div><div class="hearts" aria-hidden="true">♥</div></div></section>`},
 {name:'Explora el celular',label:'Descubre sus funciones',view:()=>`<section class="slide explore-slide"><div class="section-head"><div class="eyebrow">12 / DESCUBRE SUS FUNCIONES</div><h2>¿Qué podemos hacer <em>hoy?</em></h2><p>Selecciona una función para descubrirla.</p></div><div class="explore-grid"><div class="explore-phone">${img('smart')}</div><div class="explore-actions">${[['📞','Llamar','Escuchar a otras personas.'],['📸','Tomar fotos','Guardar momentos especiales.'],['📹','Hacer videollamadas','Ver a quien está lejos.'],['✉️','Enviar mensajes','Escribir y compartir.']].map(([emoji,ttl,desc],i)=>`<button class="explore-action" type="button" data-explore="${i}"><span>${emoji}</span><b>${ttl}</b></button>`).join('')}<div class="explore-result" id="exploreResult" aria-live="polite">Elige una función ✨</div></div></div></section>`},
 {name:'Video',label:'La evolución en movimiento',view:()=>`<section class="slide video-slide"><div class="section-head"><div class="eyebrow">13 / LA EVOLUCIÓN EN MOVIMIENTO</div><h2>De ayer <em>a hoy.</em></h2><p>Un recorrido por seis teléfonos de distintas épocas.</p></div><div class="video-container"><video controls playsinline preload="metadata" poster="assets/video/poster.webp"><source src="assets/video/evolucion-del-telefono.mp4" type="video/mp4">Tu navegador no admite este video.</video></div></section>`},
 {name:'Desafío final',label:'Verdadero o falso',view:()=>`<section class="slide quiz-slide"><div class="quiz-badge">14 / DESAFÍO FINAL ✦</div><div class="quiz-layout" id="quizMount"></div></section>`},
 {name:'¡Gracias!',label:'Cierre',view:()=>`<section class="slide finish-slide"><span class="finish-star left" aria-hidden="true">✳</span><span class="finish-star right" aria-hidden="true">✶</span><div class="finish-image">${img('candle')}<span aria-hidden="true">→</span>${img('smart')}</div><div class="eyebrow">FIN DEL VIAJE</div><h2>¡Gracias<br>por acompañarme!</h2><p>El teléfono cambió muchísimo. Hoy nos ayuda a estar más cerca.</p><div class="signature">Adriana Ojeda <span>✿</span> 2° básico</div></section>`}
];
const QUESTIONS=[
 {q:'¿Los teléfonos antiguos usaban cable?',a:true,why:'¡Sí! Muchos teléfonos antiguos estaban conectados por cable.'},
 {q:'¿Un teléfono de disco podía sacar fotos?',a:false,why:'¡No! Se usaba principalmente para hablar.'},
 {q:'¿Los primeros celulares eran grandes?',a:true,why:'¡Sí! Eran mucho más grandes que los actuales.'},
 {q:'¿Un smartphone sirve para hacer videollamadas?',a:true,why:'¡Sí! Podemos ver y escuchar a personas que están lejos.'}
];
const root=document.getElementById('root');
let active=0,qIndex=0,qScore=0,qDone=false;
const previous=document.getElementById('backBtn'),next=document.getElementById('forwardBtn');
function render(){
 root.innerHTML=SLIDES[active].view();
 document.getElementById('pageNow').textContent=String(active+1).padStart(2,'0');
 document.getElementById('pageAll').textContent=SLIDES.length;
 document.getElementById('sectionName').textContent=SLIDES[active].name;
 document.getElementById('progressBar').style.width=((active+1)/SLIDES.length*100)+'%';
 previous.disabled=active===0;next.disabled=active===SLIDES.length-1;
 document.getElementById('forwardText').textContent=active===SLIDES.length-2?'Finalizar':'Siguiente';
 if(active===14) renderQuestion();
 location.hash='slide-'+(active+1);
}
function go(index){if(index<0||index>=SLIDES.length)return;active=index;render();}
next.addEventListener('click',()=>go(active+1));previous.addEventListener('click',()=>go(active-1));
const modal=document.getElementById('indexOverlay');
function openIndex(){document.getElementById('indexItems').innerHTML=SLIDES.map((v,i)=>`<button class="index-option ${i===active?'is-active':''}" type="button" data-slide="${i}"><span>${String(i+1).padStart(2,'0')}</span>${h(v.label)}</button>`).join('');modal.hidden=false;document.getElementById('closeIndex').focus();}
function closeIndex(){modal.hidden=true;document.getElementById('contentsBtn').focus();}
document.getElementById('contentsBtn').addEventListener('click',openIndex);
document.getElementById('closeIndex').addEventListener('click',closeIndex);
modal.addEventListener('click',e=>{const b=e.target.closest('[data-slide]');if(b){modal.hidden=true;go(Number(b.dataset.slide));return;}if(e.target===modal)closeIndex();});
document.getElementById('fullBtn').addEventListener('click',()=>{if(document.fullscreenElement){document.exitFullscreen?.();}else document.documentElement.requestFullscreen?.().catch(()=>{});});
document.addEventListener('keydown',e=>{if(!modal.hidden){if(e.key==='Escape')closeIndex();return;}if(['ArrowRight','PageDown'].includes(e.key)&&!['BUTTON','INPUT'].includes(document.activeElement.tagName)){e.preventDefault();go(active+1);}if(['ArrowLeft','PageUp'].includes(e.key)&&!['BUTTON','INPUT'].includes(document.activeElement.tagName)){e.preventDefault();go(active-1);}});
function renderQuestion(){const area=document.getElementById('quizMount');if(!area)return;
 if(qIndex>=QUESTIONS.length){area.innerHTML=`<div class="quiz-finish"><div class="quiz-medal">🏆</div><h2>¡Lo logramos!</h2><p>${qScore} de ${QUESTIONS.length} respuestas correctas.</p><button class="quiz-next" type="button" data-quiz="restart">↻ Volver a jugar</button></div>`;return;}
 const item=QUESTIONS[qIndex];qDone=false;
 area.innerHTML=`<div class="quiz-number"><span>PREGUNTA ${qIndex+1} DE ${QUESTIONS.length}</span><div class="quiz-dots">${QUESTIONS.map((_,i)=>`<i class="${i===qIndex?'lit':''}"></i>`).join('')}</div></div><h2 class="quiz-question">${h(item.q)}</h2><div class="quiz-choice-row"><button type="button" data-answer="true" class="quiz-choice">👍 Verdadero</button><button type="button" data-answer="false" class="quiz-choice">👎 Falso</button></div><div class="quiz-status" id="quizStatus" aria-live="polite">¿Qué opinas?</div><div class="quiz-bottom"><button class="quiz-next" id="quizNext" data-quiz="continue" type="button" disabled>Elige una respuesta</button></div>`;
}
root.addEventListener('click',e=>{
 const clicked=e.target.closest('[data-quiz]');
 if(clicked && active===14){if(clicked.dataset.quiz==='continue'&&qDone){qIndex++;renderQuestion();}else if(clicked.dataset.quiz==='restart'){qIndex=0;qScore=0;renderQuestion();}return;}
 const answer=e.target.closest('[data-answer]');
 if(answer&&active===14&&!qDone){qDone=true;const correct=QUESTIONS[qIndex].a;const chosen=answer.dataset.answer==='true';const good=correct===chosen;if(good)qScore++;
  root.querySelectorAll('[data-answer]').forEach(b=>{b.disabled=true;const isCorrect=(b.dataset.answer==='true')===correct;b.classList.add(isCorrect?'correct':'incorrect');});
  const status=document.getElementById('quizStatus');status.textContent=(good?'¡Muy bien! ':'¡Aprendimos algo! ')+QUESTIONS[qIndex].why;
  status.classList.add('visible');const btn=document.getElementById('quizNext');btn.disabled=false;btn.textContent=qIndex===QUESTIONS.length-1?'Ver resultado →':'Siguiente pregunta →';btn.focus({preventScroll:true});
  return;
 }
 const dial=e.target.closest('#dialBtn');if(dial){dial.classList.remove('spin');void dial.offsetWidth;dial.classList.add('spin');document.getElementById('dialFeedback').textContent='¡Riiing, riiing! ☎';return;}
 const explore=e.target.closest('[data-explore]');if(explore){const texts=['📞 Escuchar a otras personas.','📸 Guardar recuerdos con fotografías.','📹 Ver y escuchar a personas lejanas.','✉️ Enviar mensajes a familiares y amigos.'];root.querySelectorAll('[data-explore]').forEach(b=>b.classList.toggle('selected',b===explore));document.getElementById('exploreResult').textContent=texts[Number(explore.dataset.explore)];}
});
const match=location.hash.match(/^#slide-(\d+)$/);if(match){const idx=Number(match[1]);if(idx>0&&idx<=SLIDES.length)active=idx-1;}
render();
