(function () {
  "use strict";

  const { dossiers, glossary } = window.GEOCO;
  const app = document.getElementById("app");
  const THEMES = { eco: "Économie", geo: "Géopolitique", mix: "Éco & Géopo" };

  // ---------- Progression (dossiers lus), gardée sur l'appareil ----------
  const STORE_KEY = "geoco.read";
  let readSet = new Set();
  try { readSet = new Set(JSON.parse(localStorage.getItem(STORE_KEY) || "[]")); } catch (e) {}
  function markRead(id) {
    readSet.add(id);
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...readSet])); } catch (e) {}
  }

  const byId = (list, id) => list.find((x) => x.id === id);
  let homeFilter = "all";

  // Façon Apple : la première phrase en blanc et en gras, la suite en gris.
  function leadIn(text) {
    const m = text.match(/^(.{8,140}?[.!?])\s+(.*)$/s);
    return m ? `<strong>${m[1]}</strong> ${m[2]}` : text;
  }

  // ---------- Animations d'apparition au défilement ----------
  let observer = null;
  function watchReveals() {
    if (observer) observer.disconnect();
    const els = app.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => observer.observe(el));
  }

  function segmented(items, current, attr) {
    return `<div class="segmented" role="group">
      ${items.map(([k, label]) => `<button data-${attr}="${k}" aria-pressed="${current === k}">${label}</button>`).join("")}
    </div>`;
  }

  // ---------- Accueil ----------
  function renderHome() {
    const nextUp = dossiers.find((d) => !readSet.has(d.id)) || dossiers[0];
    const readCount = dossiers.filter((d) => readSet.has(d.id)).length;
    const visible = dossiers.filter((d) => homeFilter === "all" || d.theme === homeFilter || d.theme === "mix");

    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Géoco</p>
        <h1 class="headline reveal">Le monde,<br><span class="grad mix">enfin expliqué.</span></h1>
        <p class="lead reveal">L'actualité économique et géopolitique, en trois minutes et sans jargon. Pour comprendre ce qui se passe aujourd'hui, et pourquoi ça te concerne.</p>
        <div class="hero-actions reveal">
          <a class="pill-btn blue lg" href="#/dossier/${nextUp.id}">Commencer à lire</a>
          <a class="pill-btn outline lg" href="#/quiz">Faire un quiz</a>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">À lire maintenant.</h2>
          <div class="reveal">${segmented([["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]], homeFilter, "filter")}</div>
          <div class="carousel">
            ${visible.map((d) => {
              const f = d.figures[0];
              return `
              <a class="tile ${d.theme}" href="#/dossier/${d.id}">
                <div>
                  <p class="eyebrow">${THEMES[d.theme]} · ${d.minutes} min${readSet.has(d.id) ? ' · <span class="done">Lu</span>' : ""}</p>
                  <h3>${d.title}</h3>
                </div>
                <div>
                  <div class="stat grad ${d.theme}">${f.value}</div>
                  <p class="stat-label">${f.label}</p>
                </div>
                <span class="plus" aria-hidden="true">+</span>
              </a>`;
            }).join("")}
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">Ta progression</p>
          <div class="bigstat grad mix reveal">${readCount}/${dossiers.length}</div>
          <p class="bigstat-label reveal">${readCount === 0 ? "Aucun dossier lu pour l'instant. Le premier prend trois minutes." : readCount === dossiers.length ? "Tous les dossiers lus. Bravo." : "dossiers lus. Continue comme ça."}</p>
          <div class="bar reveal"><div style="width:${(readCount / dossiers.length) * 100}%"></div></div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Tous les dossiers.</h2>
          <div class="group reveal">
            ${dossiers.map((d) => `
              <a class="row" href="#/dossier/${d.id}">
                <span class="dot ${d.theme}"></span>
                <div class="row-main">
                  <div class="row-title">${d.title}</div>
                  <div class="row-sub">${THEMES[d.theme]} · ${d.minutes} min · ${d.level}</div>
                </div>
                ${readSet.has(d.id) ? '<span class="check">Lu</span>' : ""}
                <span class="chev" aria-hidden="true">›</span>
              </a>`).join("")}
          </div>
        </div>
      </section>
    `;

    app.querySelectorAll("[data-filter]").forEach((btn) =>
      btn.addEventListener("click", () => {
        homeFilter = btn.dataset.filter;
        const y = window.scrollY;
        renderHome();
        app.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
        window.scrollTo(0, y);
      })
    );
  }

  // ---------- Dossier ----------
  function renderDossier(id) {
    const d = byId(dossiers, id);
    if (!d) return renderNotFound();
    const terms = d.terms.map((t) => byId(glossary, t)).filter(Boolean);

    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/">‹ Dossiers</a>
        <p class="eyebrow reveal">${THEMES[d.theme]} · ${d.minutes} min · ${d.level}</p>
        <h1 class="title reveal">${d.title}</h1>
        <p class="lead reveal">${d.hook}</p>
      </section>

      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">L'essentiel en 30 secondes</p>
          ${d.tldr.map((t) => `<p class="statement reveal">${t}</p>`).join("")}
        </div>
      </section>

      ${d.sections.map((s) => `
        <section class="section">
          <div class="wrap">
            <h2 class="title reveal">${s.title}</h2>
            ${s.paragraphs.map((p) => `<p class="copy reveal">${leadIn(p)}</p>`).join("")}
          </div>
        </section>
      `).join("")}

      <section class="wrap">
        <div class="panel ${d.theme} reveal">
          <p class="eyebrow">Et moi, dans tout ça ?</p>
          <p>${d.forMe}</p>
        </div>
      </section>

      <section class="section center">
        <div class="wrap">
          <h2 class="title reveal">Les chiffres.</h2>
          <div class="reveal">${segmented(d.figures.map((f, i) => [String(i), f.value]), "0", "fig")}</div>
          <div class="figure-display" id="figure"></div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">Les mots pour comprendre.</h2>
          <div class="feature-pills">
            ${terms.map((g) => `
              <button class="fpill reveal" aria-expanded="false">
                <span class="ico" aria-hidden="true">+</span>
                <span>
                  <span class="fpill-label">${g.term}</span>
                  <span class="fpill-body"><strong>${g.term}.</strong> ${g.def}</span>
                </span>
              </button>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Tu as tout compris ?</h2>
          <p class="copy reveal">Deux questions pour vérifier. Ça prend trente secondes.</p>
          <div class="actions reveal">
            <a class="pill-btn blue lg" href="#/quiz/${d.id}" data-markread>Tester mes connaissances</a>
            <button class="pill-btn outline lg" data-markread>${readSet.has(d.id) ? "Déjà lu" : "Marquer comme lu"}</button>
          </div>
          <p class="sources">Sources : ${d.sources.join(" · ")}</p>
        </div>
      </section>
    `;

    const figBox = app.querySelector("#figure");
    function showFigure(i) {
      const f = d.figures[i];
      figBox.innerHTML = `<div class="fade"><div class="bigstat grad ${d.theme}">${f.value}</div><p>${f.label}</p></div>`;
      app.querySelectorAll("[data-fig]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.fig === String(i)));
    }
    app.querySelectorAll("[data-fig]").forEach((b) => b.addEventListener("click", () => showFigure(Number(b.dataset.fig))));
    showFigure(0);

    app.querySelectorAll(".fpill").forEach((p) =>
      p.addEventListener("click", () => p.setAttribute("aria-expanded", p.getAttribute("aria-expanded") !== "true"))
    );

    app.querySelectorAll("[data-markread]").forEach((el) =>
      el.addEventListener("click", () => {
        markRead(d.id);
        if (el.tagName === "BUTTON") el.textContent = "Déjà lu";
      })
    );
  }

  // ---------- Lexique ----------
  function renderLexique(focusId) {
    const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr"));
    const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Lexique</p>
        <h1 class="title reveal">Les mots de l'actu.<br><span class="grad geo">Sans le jargon.</span></h1>
        <input class="search" type="search" placeholder="Rechercher" aria-label="Chercher un mot">
        <div class="group" id="terms"></div>
      </section>
    `;

    const input = app.querySelector(".search");
    const list = app.querySelector("#terms");

    function draw(q) {
      const nq = normalize(q.trim());
      const matches = sorted.filter((g) => !nq || normalize(g.term + " " + g.def).includes(nq));
      list.innerHTML = matches.length
        ? matches.map((g) => `
            <div class="row term ${g.id === focusId ? "highlight" : ""}" id="term-${g.id}">
              <div class="row-main">
                <h3>${g.term}</h3>
                <p>${g.def}</p>
                ${g.example ? `<p class="example">${g.example}</p>` : ""}
              </div>
            </div>`).join("")
        : `<p class="empty">Aucun résultat.</p>`;
    }

    input.addEventListener("input", () => draw(input.value));
    draw("");

    if (focusId) {
      const el = document.getElementById("term-" + focusId);
      if (el) el.scrollIntoView({ block: "start" });
    }
  }

  // ---------- Quiz ----------
  function renderQuizIndex() {
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Quiz</p>
        <h1 class="title reveal">Mets-toi<br><span class="grad eco">à l'épreuve.</span></h1>
        <p class="lead reveal" style="margin-bottom:36px">Vérifie ce que tu as retenu, dossier par dossier, ou tente le grand mélange.</p>
        <div class="group reveal">
          <a class="row" href="#/quiz/tout">
            <span class="dot mix"></span>
            <div class="row-main"><div class="row-title">Le grand quiz</div><div class="row-sub">Toutes les questions, dans le désordre</div></div>
            <span class="chev" aria-hidden="true">›</span>
          </a>
          ${dossiers.map((d) => `
            <a class="row" href="#/quiz/${d.id}">
              <span class="dot ${d.theme}"></span>
              <div class="row-main"><div class="row-title">${d.title}</div><div class="row-sub">${d.quiz.length} questions</div></div>
              <span class="chev" aria-hidden="true">›</span>
            </a>`).join("")}
        </div>
      </section>
    `;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderQuiz(id) {
    let questions, title, backHref, theme;
    if (id === "tout") {
      questions = shuffle(dossiers.flatMap((d) => d.quiz));
      title = "Le grand quiz";
      backHref = "#/quiz";
      theme = "mix";
    } else {
      const d = byId(dossiers, id);
      if (!d) return renderNotFound();
      questions = d.quiz;
      title = d.title;
      backHref = "#/dossier/" + d.id;
      theme = d.theme;
    }

    let index = 0;
    let score = 0;

    function drawQuestion() {
      const q = questions[index];
      app.innerHTML = `
        <section class="wrap hero">
          <a class="back" href="${backHref}">‹ Retour</a>
          <div class="fade">
            <p class="q-count">Question ${index + 1} sur ${questions.length}</p>
            <h1 class="q-title">${q.q}</h1>
            <div class="options">
              ${q.options.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}
            </div>
            <div id="after"></div>
          </div>
        </section>
      `;

      app.querySelectorAll(".option").forEach((btn) =>
        btn.addEventListener("click", () => {
          const chosen = Number(btn.dataset.i);
          const ok = chosen === q.answer;
          if (ok) score++;
          app.querySelectorAll(".option").forEach((b, i) => {
            b.disabled = true;
            if (i === q.answer) b.classList.add("correct");
            else if (i === chosen) b.classList.add("wrong");
          });
          const last = index === questions.length - 1;
          app.querySelector("#after").innerHTML = `
            <p class="explain fade"><strong>${ok ? "Bien vu." : "Pas tout à fait."}</strong> ${q.explain}</p>
            <div class="actions"><button class="pill-btn blue lg" id="next">${last ? "Voir mon score" : "Continuer"}</button></div>
          `;
          app.querySelector("#next").addEventListener("click", () => {
            index++;
            window.scrollTo(0, 0);
            index < questions.length ? drawQuestion() : drawScore();
          });
        })
      );
    }

    function drawScore() {
      const ratio = score / questions.length;
      const msg = ratio === 1 ? "Parfait. Tu maîtrises le sujet." : ratio >= 0.5 ? "Pas mal du tout. Encore un petit effort." : "Relis le dossier, ça va venir.";
      app.innerHTML = `
        <section class="wrap hero center score">
          <p class="eyebrow">${title}</p>
          <div class="bigstat grad ${theme} fade">${score}/${questions.length}</div>
          <p class="bigstat-label">${msg}</p>
          <div class="actions" style="justify-content:center">
            <a class="pill-btn blue lg" href="#/quiz/${id}" id="retry">Recommencer</a>
            <a class="pill-btn outline lg" href="#/">Autres dossiers</a>
          </div>
        </section>
      `;
      app.querySelector("#retry").addEventListener("click", (e) => { e.preventDefault(); renderQuiz(id); });
    }

    drawQuestion();
  }

  function renderNotFound() {
    app.innerHTML = `<section class="wrap hero"><p class="empty">Cette page n'existe pas. <a href="#/">Retour à l'accueil</a></p></section>`;
  }

  // ---------- Routeur ----------
  function route() {
    const [, section, param] = (location.hash || "#/").split("/");
    document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("active", a.dataset.tab === section));

    if (section === "dossier") renderDossier(param);
    else if (section === "lexique") renderLexique(param);
    else if (section === "quiz") param ? renderQuiz(param) : renderQuizIndex();
    else renderHome();

    if (!(section === "lexique" && param)) window.scrollTo(0, 0);
    watchReveals();
  }

  window.addEventListener("hashchange", route);
  route();

  // ---------- Mode hors-ligne (PWA) ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
