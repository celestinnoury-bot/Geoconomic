const I = {
  logo:'<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M2 15h26M15 2c4 4 5.5 8.5 5.5 13S19 24 15 28M15 2c-4 4-5.5 8.5-5.5 13S11 24 15 28" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 20l5-5 3 3 6-7" fill="none" stroke="var(--gold)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  news:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>',
  learn:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6l10-3 10 3-10 3z"/><path d="M6 8v5c0 1.7 2.7 3 6 3s6-1.3 6-3V8"/></svg>',
  back:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  inflation:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l6-6 4 4 6-8"/><path d="M15 9h5v5"/></svg>',
  taux:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 19L19 5"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>',
  commerce:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h14l-3-3M21 16H7l3 3"/></svg>',
  fmi:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10M10 21V10M14 21V10M19 21V10M2 10l10-6 10 6z"/></svg>',
  omc:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 7h14M5 7l-3 7h6zM19 7l-3 7h6z"/></svg>',
  pib:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20V12M10 20V8M15 20v-5M20 20V4"/></svg>',
  oil:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/></svg>',
};


let read = new Set();
try{ read = new Set(JSON.parse(localStorage.getItem('geo-read')||'[]')); }catch(e){}
function markRead(id){ read.add(id); try{ localStorage.setItem('geo-read', JSON.stringify([...read])); }catch(e){} }

const app = document.getElementById('app');
let tab = 'home';
let navStack = [];

function go(view, push=true){
  if(push) navStack.push(current);
  current = view;
  render();
  window.scrollTo(0,0);
}
let current = {name:'home'};
function back(){ current = navStack.pop() || {name:tab}; render(); window.scrollTo(0,0); }

function topBar(withBack){
  return `<div class="top">${withBack
    ? `<button class="back" data-act="back">${I.back} Retour</button>`
    : `<div class="brand">${I.logo}<span>Géoconomique</span></div>`}</div>`;
}

function topicCard(id){
  const t = TOPICS[id];
  return `<button class="topic" data-topic="${id}">
    <span class="ic">${I[t.icon]}</span>
    <h3>${t.title}</h3><small>${t.short}</small>
    ${read.has(id)?'<span class="done">✓ Lu</span>':`<span class="eyebrow">${t.minutes} min</span>`}
  </button>`;
}
function newsRow(n){
  return `<button class="news" data-news="${n.id}">
    <span class="tag">${I[n.icon]}</span>
    <div><span class="eyebrow">${n.cat}</span><h3>${n.title}</h3><p>${n.lede}</p></div>
  </button>`;
}

function homeView(){
  const today = new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"});
  const total = Object.keys(TOPICS).length;
  const done = Object.keys(TOPICS).filter(k=>read.has(k)).length;
  const f = NEWS[0];
  return `${topBar(false)}
  <div class="screen">
    <div class="hero">
      <span class="eyebrow">${today}</span>
      <h1>L’économie mondiale, expliquée simplement.</h1>
      <p>Chaque actu décodée en 2 minutes, et les notions clés pour comprendre le reste.</p>
    </div>
    <div class="progress"><div class="bar"><i style="width:${done/total*100}%"></i></div><span>${done}/${total} notions</span></div>
    <div class="section">
      <span class="eyebrow">L’actu du jour</span>
      <button class="feature" data-news="${f.id}">
        <span class="eyebrow">${f.cat} · 2 min</span>
        <h2>${f.title}</h2>
        <p>${f.tldr}</p>
        <span class="go">Comprendre ce que ça change →</span>
      </button>
    </div>
    <div class="section">
      <div class="row-head"><h2>Aussi aujourd’hui</h2><button class="link" data-tab="news">Tout voir</button></div>
      <div class="stack">${NEWS.slice(1).map(newsRow).join('')}</div>
    </div>
    <div class="section">
      <div class="row-head"><h2>Les bases</h2><button class="link" data-tab="learn">Tout voir</button></div>
      <div class="grid">${['inflation','taux','commerce','fmi'].map(topicCard).join('')}</div>
    </div>
  </div>`;
}
function newsListView(){
  return `${topBar(false)}<div class="screen">
    <div class="list-head"><h1>Actus décodées</h1><p>Ce qui s’est passé, pourquoi c’est important, et ce que ça change pour toi.</p></div>
    <div class="section"><div class="stack">${NEWS.map(newsRow).join('')}</div></div>
  </div>`;
}
function learnView(){
  return `${topBar(false)}<div class="screen">
    <div class="list-head"><h1>Comprendre</h1><p>Les notions de base de l’économie mondiale, en quelques minutes chacune.</p></div>
    <div class="section"><div class="grid">${Object.keys(TOPICS).map(topicCard).join('')}</div></div>
  </div>`;
}

function quizHtml(q, key){
  return `<div class="quiz" data-quiz="${key}">
    <span class="eyebrow">Teste-toi</span><h3>${q.q}</h3>
    <div class="stack">${q.opts.map((o,i)=>`<button class="opt" data-opt="${i}">${o}</button>`).join('')}</div>
    <p class="feedback" hidden></p>
  </div>`;
}

function topicView(id){
  const t = TOPICS[id];
  return `${topBar(true)}<article class="screen article">
    <header><span class="eyebrow">Notion · ${t.minutes} min</span><h1>${t.title}</h1><p class="lede">${t.one}</p></header>
    <div class="analogy"><span class="eyebrow">Pour visualiser</span><p>${t.analogy}</p></div>
    ${t.chain?`<div class="block"><h2>La réaction en chaîne</h2><ol class="chain">${t.chain.map((c,i)=>`<li><b>${i+1}</b><div><strong>${c[0]}</strong><small>${c[1]}</small></div></li>`).join('')}</ol></div>`:''}
    <div class="block"><h2>Comment ça marche</h2><ul>${t.how.map(h=>`<li>${h}</li>`).join('')}</ul></div>
    ${t.calc?`<div class="block"><h2>En chiffres</h2><p>${t.calc.title}</p><div class="calc">${t.calc.rows.map((r,i,a)=>`<span class="${i===a.length-1?'tot':''}">${r[0]}</span><span class="r ${i===a.length-1?'tot':''}">${r[1]}</span>`).join('')}</div></div>`:''}
    <div class="you"><span class="eyebrow">Et pour toi ?</span><p>${t.you}</p></div>
    ${quizHtml(t.quiz, id)}
    <div class="block"><h3>À lire ensuite</h3><div class="chips">${t.related.map(r=>`<button class="chip" data-topic="${r}">${TOPICS[r].title}</button>`).join('')}</div></div>
  </article>`;
}

function newsView(id){
  const n = NEWS.find(x=>x.id===id);
  return `${topBar(true)}<article class="screen article">
    <header><span class="eyebrow">${n.cat} · Actu décodée</span><h1>${n.title}</h1><p class="lede">${n.lede}</p></header>
    <div class="tldr"><span class="eyebrow">En 30 secondes</span><p>${n.tldr}</p></div>
    <div class="block"><h2>Ce qui s’est passé</h2><p>${n.what}</p></div>
    <div class="block"><h2>Pourquoi c’est important</h2><p>${n.why}</p></div>
    <div class="you"><span class="eyebrow">Ce que ça change pour toi</span><ul style="margin:0;padding-left:1.2em;display:flex;flex-direction:column;gap:6px">${n.you.map(y=>`<li>${y}</li>`).join('')}</ul></div>
    <div class="block"><h3>Les notions pour comprendre</h3><div class="chips">${n.topics.map(r=>`<button class="chip" data-topic="${r}">${TOPICS[r].title}</button>`).join('')}</div></div>
    <p class="demo-note">Actu d’exemple pour le prototype. Dans l’application, ces articles seront rédigés à partir de l’actualité réelle, avec leurs sources.</p>
  </article>`;
}

function renderTabs(){
  const tabs=[['home','Accueil','home'],['news','Actus','news'],['learn','Comprendre','learn']];
  document.getElementById('tabs').innerHTML = tabs.map(([k,l,ic])=>`<button class="tab" data-tab="${k}" ${tab===k?'aria-current="page"':''}>${I[ic]}<span>${l}</span></button>`).join('');
}

function render(){
  const v = current;
  if(v.name==='home') app.innerHTML = homeView();
  else if(v.name==='news') app.innerHTML = newsListView();
  else if(v.name==='learn') app.innerHTML = learnView();
  else if(v.name==='topic'){ app.innerHTML = topicView(v.id); markRead(v.id); }
  else if(v.name==='article') app.innerHTML = newsView(v.id);
  renderTabs();
}

document.addEventListener('click', e=>{
  const b = e.target.closest('button'); if(!b) return;
  if(b.dataset.tab){ tab=b.dataset.tab; navStack=[]; go({name:tab}, false); }
  else if(b.dataset.topic){ go({name:'topic', id:b.dataset.topic}); }
  else if(b.dataset.news){ go({name:'article', id:b.dataset.news}); }
  else if(b.dataset.act==='back'){ back(); }
  else if(b.dataset.opt!==undefined){
    const box = b.closest('.quiz'); const q = TOPICS[box.dataset.quiz].quiz;
    const i = +b.dataset.opt;
    box.querySelectorAll('.opt').forEach((o,k)=>{ if(k===q.a) o.dataset.state='right'; else if(k===i) o.dataset.state='wrong'; });
    const fb = box.querySelector('.feedback'); fb.hidden=false;
    fb.innerHTML = (i===q.a?'<strong>Bien vu !</strong> ':'<strong>Pas tout à fait.</strong> ')+q.why;
  }
});

render();

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
}
