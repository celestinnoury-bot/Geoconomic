(function () {
  "use strict";

  const { dossiers, glossary } = window.GEOCO;
  const app = document.getElementById("app");
  const THEMES = { eco: "Éco", geo: "Géopo", mix: "Éco + Géopo" };

  // ---------- Progression (dossiers lus), gardée sur l'appareil ----------
  const STORE_KEY = "geoco.read";
  let readSet = new Set();
  try { readSet = new Set(JSON.parse(localStorage.getItem(STORE_KEY) || "[]")); } catch (e) {}
  function markRead(id) {
    readSet.add(id);
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...readSet])); } catch (e) {}
  }

  const byId = (list, id) => list.find((x) => x.id === id);
  const tag = (theme) => `<span class="tag ${theme}">${THEMES[theme]}</span>`;
  let homeFilter = "all";

  // ---------- Accueil ----------
  function renderHome() {
    const nextUp = dossiers.find((d) => !readSet.has(d.id)) || dossiers[0];
    const readCount = dossiers.filter((d) => readSet.has(d.id)).length;
    const visible = dossiers.filter((d) => homeFilter === "all" || d.theme === homeFilter || d.theme === "mix");

    app.innerHTML = `
      <section class="hello">
        <h1>Comprendre le monde, en 3 minutes</h1>
        <p>L'actualité économique et géopolitique, expliquée sans jargon.</p>
      </section>

      <div class="progress" aria-label="Progression">
        <div class="progress-bar"><div style="width:${(readCount / dossiers.length) * 100}%"></div></div>
        <span>${readCount}/${dossiers.length} lus</span>
      </div>

      <a class="card feature" href="#/dossier/${nextUp.id}">
        <span class="kicker">${readSet.has(nextUp.id) ? "À relire" : "À lire maintenant"}</span>
        <h2>${nextUp.emoji} ${nextUp.title}</h2>
        <p>${nextUp.hook}</p>
        <span class="meta">${tag(nextUp.theme)} · ${nextUp.minutes} min · ${nextUp.level}</span>
      </a>

      <div class="chips" role="group" aria-label="Filtrer par thème">
        ${[["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]]
          .map(([k, label]) => `<button class="chip" data-filter="${k}" aria-pressed="${homeFilter === k}">${label}</button>`)
          .join("")}
      </div>

      <div class="list">
        ${visible.map((d) => `
          <a class="card item ${readSet.has(d.id) ? "read" : ""}" href="#/dossier/${d.id}">
            <span class="emoji" aria-hidden="true">${d.emoji}</span>
            <div>
              ${tag(d.theme)}${readSet.has(d.id) ? '<span class="read-mark">✓ Lu</span>' : ""}
              <h3>${d.title}</h3>
              <p>${d.minutes} min · ${d.level}</p>
            </div>
          </a>`).join("")}
      </div>
    `;

    app.querySelectorAll("[data-filter]").forEach((btn) =>
      btn.addEventListener("click", () => { homeFilter = btn.dataset.filter; renderHome(); })
    );
  }

  // ---------- Dossier ----------
  function renderDossier(id) {
    const d = byId(dossiers, id);
    if (!d) return renderNotFound();

    app.innerHTML = `
      <a class="back" href="#/">← Tous les dossiers</a>
      <article>
        <header class="article-head">
          ${tag(d.theme)} <span class="meta">· ${d.minutes} min · ${d.level}</span>
          <h1 style="margin-top:10px">${d.emoji} ${d.title}</h1>
          <p class="hook">${d.hook}</p>
        </header>

        <div class="box tldr">
          <h3>L'essentiel en 30 secondes</h3>
          <ul>${d.tldr.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>

        ${d.sections.map((s) => `
          <h2>${s.title}</h2>
          ${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        `).join("")}

        <div class="box me">
          <h3>Et moi, dans tout ça ?</h3>
          <p>${d.forMe}</p>
        </div>

        <h2>Les chiffres à retenir</h2>
        <div class="figures">
          ${d.figures.map((f) => `<div class="figure"><strong>${f.value}</strong><span>${f.label}</span></div>`).join("")}
        </div>

        <h2>Les mots pour comprendre</h2>
        <div class="chips">
          ${d.terms.map((t) => byId(glossary, t)).filter(Boolean)
            .map((g) => `<a class="chip" href="#/lexique/${g.id}">${g.term}</a>`).join("")}
        </div>

        <div class="article-actions">
          <a class="btn" href="#/quiz/${d.id}" data-markread>Tester mes connaissances</a>
          <button class="btn ghost" data-markread>${readSet.has(d.id) ? "✓ Déjà lu" : "Marquer comme lu"}</button>
        </div>

        <p class="sources">Sources : ${d.sources.join(" · ")}</p>
      </article>
    `;

    app.querySelectorAll("[data-markread]").forEach((el) =>
      el.addEventListener("click", () => {
        markRead(d.id);
        if (el.tagName === "BUTTON") el.textContent = "✓ Déjà lu";
      })
    );
  }

  // ---------- Lexique ----------
  function renderLexique(focusId) {
    const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr"));
    const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

    app.innerHTML = `
      <h1>Lexique</h1>
      <p class="meta">Les mots de l'actu, expliqués simplement.</p>
      <input class="search" type="search" placeholder="Chercher un mot (inflation, SWIFT…)" aria-label="Chercher un mot">
      <div class="list" id="terms"></div>
    `;

    const input = app.querySelector(".search");
    const list = app.querySelector("#terms");

    function draw(q) {
      const nq = normalize(q.trim());
      const matches = sorted.filter((g) => !nq || normalize(g.term + " " + g.def).includes(nq));
      list.innerHTML = matches.length
        ? matches.map((g) => `
            <div class="card term ${g.id === focusId ? "highlight" : ""}" id="term-${g.id}">
              <h3>${g.term}</h3>
              <p>${g.def}</p>
              ${g.example ? `<p class="example">Exemple : ${g.example}</p>` : ""}
            </div>`).join("")
        : `<p class="empty">Aucun mot trouvé. Essaie un autre terme.</p>`;
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
      <h1>Quiz</h1>
      <p class="meta">Vérifie ce que tu as retenu, dossier par dossier, ou tente le grand mélange.</p>
      <div class="list">
        <a class="card item" href="#/quiz/tout">
          <span class="emoji" aria-hidden="true">🎲</span>
          <div><h3>Le grand quiz</h3><p>Toutes les questions, dans le désordre</p></div>
        </a>
        ${dossiers.map((d) => `
          <a class="card item" href="#/quiz/${d.id}">
            <span class="emoji" aria-hidden="true">${d.emoji}</span>
            <div>${tag(d.theme)}<h3>${d.title}</h3><p>${d.quiz.length} questions</p></div>
          </a>`).join("")}
      </div>
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
    let questions, title, backHref;
    if (id === "tout") {
      questions = shuffle(dossiers.flatMap((d) => d.quiz));
      title = "Le grand quiz";
      backHref = "#/quiz";
    } else {
      const d = byId(dossiers, id);
      if (!d) return renderNotFound();
      questions = d.quiz;
      title = d.title;
      backHref = "#/dossier/" + d.id;
    }

    let index = 0;
    let score = 0;

    function drawQuestion() {
      const q = questions[index];
      app.innerHTML = `
        <a class="back" href="${backHref}">← Retour</a>
        <div class="card">
          <span class="q-count">${title} · Question ${index + 1}/${questions.length}</span>
          <h2 class="q-title">${q.q}</h2>
          <div class="options">
            ${q.options.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}
          </div>
          <div id="after"></div>
        </div>
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
            <div class="explain"><strong>${ok ? "✅ Bien vu !" : "❌ Pas tout à fait."}</strong>${q.explain}</div>
            <div class="article-actions"><button class="btn" id="next">${last ? "Voir mon score" : "Question suivante"}</button></div>
          `;
          app.querySelector("#next").addEventListener("click", () => {
            index++;
            index < questions.length ? drawQuestion() : drawScore();
          });
        })
      );
    }

    function drawScore() {
      const ratio = score / questions.length;
      const msg = ratio === 1 ? "Parfait, tu maîtrises le sujet !" : ratio >= 0.5 ? "Pas mal du tout ! Encore un petit effort." : "Relis le dossier, ça va venir !";
      app.innerHTML = `
        <div class="card score">
          <p class="q-count">${title}</p>
          <div class="big">${score}/${questions.length}</div>
          <p>${msg}</p>
          <div class="article-actions" style="justify-content:center">
            <a class="btn" href="#/quiz/${id}" id="retry">Recommencer</a>
            <a class="btn ghost" href="#/">Autres dossiers</a>
          </div>
        </div>
      `;
      app.querySelector("#retry").addEventListener("click", (e) => { e.preventDefault(); renderQuiz(id); });
    }

    drawQuestion();
  }

  function renderNotFound() {
    app.innerHTML = `<p class="empty">Cette page n'existe pas. <a href="#/">Retour à l'accueil</a></p>`;
  }

  // ---------- Routeur ----------
  function route() {
    const [, section, param] = (location.hash || "#/").split("/");
    const tab = section === "lexique" ? "lexique" : section === "quiz" ? "quiz" : "home";
    document.querySelectorAll(".tabbar a").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));

    if (section === "dossier") renderDossier(param);
    else if (section === "lexique") renderLexique(param);
    else if (section === "quiz") param ? renderQuiz(param) : renderQuizIndex();
    else renderHome();

    if (!(section === "lexique" && param)) window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  route();

  // ---------- Mode hors-ligne (PWA) ----------
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
