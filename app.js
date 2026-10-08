(function () {
  "use strict";

  const { dossiers, glossary } = window.GEOCO;
  const news = window.GEOCO.news || [];
  const culture = window.GEOCO.culture || [];
  const focusList = window.GEOCO.focus || [];
  const etudes = window.GEOCO.etudes || { podcast: [], cas: [] };
  const podcast = etudes.podcast || [];
  const cases = etudes.cas || [];
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

  const formatDate = (iso) =>
    new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  function newsCard(n) {
    return `
      <a class="news-card ${n.theme} reveal" href="#/actu/${n.id}">
        <p class="eyebrow">${THEMES[n.theme]}${n.region ? ` · ${n.region}` : ""}${episodesFor("news", n.id).length ? ` · <span class="pod-badge">🎙️ En podcast</span>` : ""}</p>
        <h3>${n.title}</h3>
        <p class="summary">${n.summary}</p>
        <span class="more">Comprendre en 2 min ›</span>
      </a>`;
  }

  function cultureTile(c) {
    return `
      <a class="tile ${c.theme}" href="#/articles/${c.id}">
        <div>
          <p class="eyebrow">${c.kind || "Article"} · ${THEMES[c.theme]}</p>
          <h3>${c.title}</h3>
        </div>
        <p class="stat-label">${c.hook}</p>
        <span class="plus" aria-hidden="true">+</span>
      </a>`;
  }

  // Bloc « chiffres » avec sélecteur segmenté, partagé entre dossiers et actus.
  function figuresBlock(figures) {
    return `
      <section class="section center">
        <div class="wrap">
          <h2 class="title reveal">Les chiffres.</h2>
          <div class="reveal">${segmented(figures.map((f, i) => [String(i), f.value]), "0", "fig")}</div>
          <div class="figure-display" id="figure"></div>
        </div>
      </section>`;
  }
  function bindFigures(figures, theme, sources) {
    const box = app.querySelector("#figure");
    function show(i) {
      const f = figures[i];
      const src = f.src && sources && sources[f.src - 1];
      box.innerHTML = `<div class="fade"><div class="bigstat grad ${theme}">${f.value}</div><p>${f.label}</p>
        ${src ? `<p class="fig-src">Source : <a href="${src.url}" target="_blank" rel="noopener">${src.short || src.name}</a></p>` : ""}</div>`;
      app.querySelectorAll("[data-fig]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.fig === String(i)));
    }
    app.querySelectorAll("[data-fig]").forEach((b) => b.addEventListener("click", () => show(Number(b.dataset.fig))));
    show(0);
  }

  // Liste numérotée des sources, en bas de page.
  function sourcesBlock(sources) {
    if (!sources || !sources.length) return "";
    return `
      <section class="section">
        <div class="wrap">
          <p class="eyebrow">Sources</p>
          <ol class="source-list">
            ${sources.map((s, i) => `<li id="src-${i + 1}"><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join("")}
          </ol>
        </div>
      </section>`;
  }

  // Les [n] du texte deviennent « (Nom de la source) », avec un lien vers l'article.
  function cite(text, sources) {
    // Espaces insécables dans les nombres (« 322 544 ») pour qu'ils ne soient jamais coupés en fin de ligne.
    text = text.replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0");
    return text.replace(/\s*\[(\d+)\]/g, (m, n) => {
      const src = sources && sources[Number(n) - 1];
      if (!src) return "";
      return ` <a class="cite" href="${src.url}" target="_blank" rel="noopener">(${src.short || src.name})</a>`;
    });
  }

  // Texte d'un paragraphe : première phrase en gras, puis sources citées.
  const para = (text, sources) => cite(leadIn(text), sources);

  // Bloc des visuels interactifs (cartes, graphiques).
  function visualsBlock(visuals, alt) {
    if (!visuals || !visuals.length || !window.GeocoViz) return "";
    return `
      <section class="section ${alt ? "alt" : ""}">
        <div class="wrap">
          <h2 class="title reveal">Voir pour comprendre.</h2>
          <div class="reveal">${window.GeocoViz.html(visuals)}</div>
        </div>
      </section>`;
  }
  const mountVisuals = (visuals) => window.GeocoViz && window.GeocoViz.mountAll(visuals);

  // Photo d'en-tête facultative : { src, alt, credit }.
  function heroImage(img) {
    if (!img) return "";
    return `<figure class="hero-img reveal"><img src="${img.src}" alt="${img.alt || ""}" loading="lazy"><figcaption>${img.credit || ""}</figcaption></figure>`;
  }

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
  // ---------- Accueil : le globe, puis le fil ----------
  let currentGlobe = null;

  function dossierTiles() {
    return dossiers
      .filter((d) => homeFilter === "all" || d.theme === homeFilter || d.theme === "mix")
      .map((d) => {
        const f = d.figures[0];
        return `
        <a class="tile ${d.theme}" href="#/cours/${d.id}">
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
      }).join("");
  }

  function renderHome() {
    const readCount = dossiers.filter((d) => readSet.has(d.id)).length;
    const today = news.length ? news[0].date : null;
    const todays = news.filter((n) => n.date === today);
    const onGlobe = todays.filter((n) => n.geo && n.geo.length);

    app.innerHTML = `
      <section class="globe-hero" aria-label="Globe de l'actualité">
        <div class="globe" id="globe"></div>
        <div class="globe-overlay">
          <p class="eyebrow">${today ? formatDate(today) : "Géoconomic"}</p>
          <h1 class="headline">Le monde, <span class="grad mix">aujourd'hui.</span></h1>
          <p class="globe-hint">Touche un point lumineux pour comprendre ce qui s'y passe.</p>
        </div>
        <div class="globe-fallback">
          ${onGlobe.map((n) => `<a class="tagpill" href="#/actu/${n.id}">${n.geo[0].name} · ${n.title}</a>`).join("")}
        </div>
        <div class="globe-sheet" hidden></div>
        <a class="scroll-hint" href="#/" data-scroll="feed"><span>Toute l'actu</span><span class="arrow" aria-hidden="true">↓</span></a>
      </section>

      <div id="feed"></div>
      ${todays.length ? `
      <section class="section">
        <div class="wrap">
          <p class="eyebrow reveal">L'actu du jour</p>
          <h2 class="title reveal">Aujourd'hui.</h2>
          ${todays.map(newsCard).join("")}
          <p class="reveal" style="margin-top:20px"><a href="#/actu">Toutes les actus ›</a></p>
        </div>
      </section>` : ""}


      ${focusList.length ? `
      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">Focus industrie · ${focusList[0].week}</p>
          <h2 class="title reveal">${focusList[0].industry}.</h2>
          <a class="news-card eco reveal focus-teaser" href="#/focus/${focusList[0].id}">
            <h3>${focusList[0].title}</h3>
            ${focusList[0].weekly ? `<p class="badge">${focusList[0].weekly.label}</p><p class="teaser-q">${focusList[0].weekly.question}</p>` : ""}
            <p class="summary">${focusList[0].hook}</p>
            <span class="more">Explorer en 3D ›</span>
          </a>
        </div>
      </section>` : ""}

      <section class="section">
        <div class="wrap">
          <p class="eyebrow reveal">Comprendre les enjeux</p>
          <h2 class="title reveal">Cours.</h2>
          <div class="reveal">${segmented([["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]], homeFilter, "filter")}</div>
          <div class="carousel" id="dossier-tiles">${dossierTiles()}</div>
          <p class="reveal" style="margin-top:20px"><a href="#/cours">Tous les cours ›</a></p>
        </div>
      </section>

      ${culture.length ? `
      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">Analyses et recherches</p>
          <h2 class="title reveal">Articles.</h2>
          <p class="copy reveal">Les sujets dont on parle peu, mais qui expliquent beaucoup.</p>
          <div class="carousel">${culture.map(cultureTile).join("")}</div>
          <p class="reveal" style="margin-top:20px"><a href="#/articles">Tous les articles ›</a></p>
        </div>
      </section>` : ""}

      <section class="section">
        <div class="wrap">
          <p class="eyebrow reveal">À toi de jouer</p>
          <h2 class="title reveal">Teste-toi.</h2>
          <div class="grid-2">
            <a class="panel mix reveal play" href="#/quiz/tout">
              <p class="eyebrow">Le grand quiz</p>
              <p>${dossiers.reduce((k, d) => k + d.quiz.length, 0)} questions sur tout ce qu'il faut savoir.</p>
              <span class="pill-btn blue">Jouer</span>
            </a>
            <div class="panel geo reveal">
              <p class="eyebrow">Ta progression</p>
              <div class="bigstat grad mix">${readCount}/${dossiers.length}</div>
              <p class="bigstat-label">dossiers lus</p>
              <div class="bar"><div style="width:${(readCount / dossiers.length) * 100}%"></div></div>
            </div>
          </div>
          <div class="group reveal" style="margin-top:20px">
            <a class="row" href="#/lexique">
              <div class="row-main"><div class="row-title">Lexique</div><div class="row-sub">${glossary.length} mots de l'actu, expliqués</div></div>
              <span class="chev" aria-hidden="true">›</span>
            </a>
            <a class="row" href="#/chiffres">
              <div class="row-main"><div class="row-title">Les chiffres du monde</div><div class="row-sub">Inflation, chômage et croissance sur un globe</div></div>
              <span class="chev" aria-hidden="true">›</span>
            </a>
            <a class="row" href="#/quiz">
              <div class="row-main"><div class="row-title">Quiz par dossier</div><div class="row-sub">Vérifie ce que tu as retenu</div></div>
              <span class="chev" aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>
    `;

    app.querySelectorAll("[data-filter]").forEach((btn) =>
      btn.addEventListener("click", () => {
        homeFilter = btn.dataset.filter;
        app.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        app.querySelector("#dossier-tiles").innerHTML = dossierTiles();
      })
    );

    app.querySelector("[data-scroll]").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("feed").scrollIntoView({ behavior: "smooth" });
    });

    mountHomeGlobe(onGlobe);
  }

  async function mountHomeGlobe(items) {
    const el = app.querySelector("#globe");
    const hero = app.querySelector(".globe-hero");
    const sheet = app.querySelector(".globe-sheet");
    if (!el || !window.GeocoGlobe) return hero && hero.classList.add("no-webgl");

    function closeSheet() {
      sheet.hidden = true;
      hero.classList.remove("sheet-open");
      if (currentGlobe) currentGlobe.reset();
    }
    function openSheet(place) {
      const multi = place.names.length > 1;
      sheet.innerHTML = `
        <div class="sheet-head">
          <p class="eyebrow">${place.title}</p>
          <button class="sheet-close" aria-label="Fermer">×</button>
        </div>
        ${place.items.map(({ news: n, place: where }) => `
          <a class="sheet-item" href="#/actu/${n.id}">
            ${multi ? `<p class="sheet-place">${where}</p>` : ""}
            <h3>${n.title}</h3>
            <p class="summary">${n.summary}</p>
            <span class="more">Lire l'article ›</span>
          </a>`).join("")}`;
      sheet.hidden = false;
      hero.classList.add("sheet-open");
      sheet.querySelector(".sheet-close").addEventListener("click", closeSheet);
    }

    try {
      currentGlobe = await window.GeocoGlobe.mount(el, items, { onOpen: openSheet });
    } catch (e) {
      currentGlobe = null;
    }
    if (!currentGlobe) { hero.classList.add("no-webgl"); return; }

    // Le globe ne tourne que lorsqu'il est visible : économise la batterie.
    // On garde une référence à CE globe : après un changement de page, l'observateur s'arrête
    // au lieu de mettre en pause le globe d'une autre page.
    const homeGlobe = currentGlobe;
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(([entry]) => {
        if (currentGlobe !== homeGlobe || !document.body.contains(hero)) return io.disconnect();
        entry.isIntersecting ? homeGlobe.world.resumeAnimation() : homeGlobe.world.pauseAnimation();
      });
      io.observe(hero);
    }
  }

  // ---------- Dossier ----------
  function renderDossier(id) {
    const d = byId(dossiers, id);
    if (!d) return renderNotFound();
    const terms = d.terms.map((t) => byId(glossary, t)).filter(Boolean);

    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/cours">‹ Cours</a>
        <p class="eyebrow reveal">${THEMES[d.theme]} · ${d.minutes} min · ${d.level}</p>
        <h1 class="title reveal">${d.title}</h1>
        <p class="lead reveal">${d.hook}</p>
        ${heroImage(d.image)}
      </section>

      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">L'essentiel en 30 secondes</p>
          ${d.tldr.map((t) => `<p class="statement reveal">${cite(t, d.sources)}</p>`).join("")}
        </div>
      </section>

      ${visualsBlock(d.visuals)}

      ${d.sections.map((s) => `
        <section class="section">
          <div class="wrap">
            <h2 class="title reveal">${s.title}</h2>
            ${s.paragraphs.map((p) => `<p class="copy reveal">${para(p, d.sources)}</p>`).join("")}
          </div>
        </section>
      `).join("")}

      <section class="wrap">
        <div class="panel ${d.theme} reveal">
          <p class="eyebrow">Et moi, dans tout ça ?</p>
          <p>${d.forMe}</p>
        </div>
      </section>

      ${figuresBlock(d.figures)}

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
        </div>
      </section>

      ${sourcesBlock(d.sources)}
    `;

    bindFigures(d.figures, d.theme, d.sources);
    mountVisuals(d.visuals);

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

  // ---------- Actu du jour ----------
  let actuTheme = "all", actuRegion = "all";
  const REGIONS = ["Europe", "Amériques", "Moyen-Orient", "Afrique", "Asie"];

  function renderActuIndex() {
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Actu</p>
        <h1 class="title reveal">L'actu éco et géopo.<br><span class="grad mix">Expliquée.</span></h1>
        <p class="lead reveal">L'économie et la géopolitique sont liées : un détroit bloqué fait flamber l'essence, une guerre commerciale change le prix de ton téléphone. Chaque jour, ce qui compte et pourquoi ça te concerne.</p>
      </section>

      <section class="wrap etudes" aria-labelledby="etudes-title">
        <div class="etudes-head">
          <h2 class="title reveal" id="etudes-title">Étude de cas.</h2>
          <a class="more-link reveal" href="#/etudes">Tout voir ›</a>
        </div>
        ${etudesBlock(false)}
      </section>

      <section class="wrap actu-days">
        <h2 class="title reveal">L'actu du jour.</h2>
        <div class="filters reveal">
          ${segmented([["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]], actuTheme, "atheme")}
          <div class="chips-row" role="group" aria-label="Filtrer par région">
            ${[["all", "Monde"], ...REGIONS.map((r) => [r, r])].map(([k, l]) => `<button class="chip-btn" data-aregion="${k}" aria-pressed="${actuRegion === k}">${l}</button>`).join("")}
          </div>
        </div>
        <div id="actu-list"></div>
      </section>
    `;
    function drawList() {
      const list = news.filter((n) =>
        (actuTheme === "all" || n.theme === actuTheme || n.theme === "mix") &&
        (actuRegion === "all" || n.region === actuRegion));
      const days = [...new Set(list.map((n) => n.date))];
      app.querySelector("#actu-list").innerHTML = days.map((day) => `
        <div class="day">
          <p class="eyebrow">${formatDate(day)} · ${list.filter((n) => n.date === day).length} actus</p>
          ${list.filter((n) => n.date === day).map(newsCard).join("")}
        </div>`).join("") || '<p class="empty">Aucune actu pour ce filtre.</p>';
      app.querySelectorAll("#actu-list .reveal").forEach((el) => el.classList.add("in"));
    }
    app.querySelectorAll("[data-atheme]").forEach((b) => b.addEventListener("click", () => {
      actuTheme = b.dataset.atheme;
      app.querySelectorAll("[data-atheme]").forEach((x) => x.setAttribute("aria-pressed", x === b));
      drawList();
    }));
    app.querySelectorAll("[data-aregion]").forEach((b) => b.addEventListener("click", () => {
      actuRegion = b.dataset.aregion;
      app.querySelectorAll("[data-aregion]").forEach((x) => x.setAttribute("aria-pressed", x === b));
      drawList();
    }));
    drawList();
  }

  // ---------- Étude de cas : podcast + études écrites ----------
  // Un épisode peut traiter une étude de cas et/ou des actus du jour.
  function episodeCard(ep, opts = {}) {
    const linkedCase = ep.cas && byId(cases, ep.cas);
    const linkedNews = (ep.news || []).map((id) => byId(news, id)).filter(Boolean);
    const kinds = [linkedCase && "Étude de cas", linkedNews.length && "Actu"].filter(Boolean).join(" · ");
    const links = [
      linkedCase && !opts.fromCase ? `<a class="more" href="#/etudes/${linkedCase.id}">Lire l'étude de cas ›</a>` : "",
      ...linkedNews.filter((n) => n.id !== opts.fromNews).map((n) => `<a class="more" href="#/actu/${n.id}">${n.title} ›</a>`)
    ].filter(Boolean);
    return `
      <article class="episode reveal" id="ep-${ep.id}">
        <p class="eyebrow">🎙️ Épisode ${ep.number || ""}${kinds ? ` · ${kinds}` : ""} · ${formatDate(ep.date)}${ep.duration ? ` · ${ep.duration}` : ""}</p>
        <h3>${ep.title}</h3>
        ${ep.summary ? `<p class="summary">${ep.summary}</p>` : ""}
        ${ep.audio ? `<audio controls preload="none" src="${ep.audio}"></audio>` : `<p class="byline">Audio bientôt disponible.</p>`}
        ${links.length ? `<div class="episode-links">${links.join("")}</div>` : ""}
      </article>`;
  }
  const episodesFor = (key, id) => podcast.filter((ep) => key === "cas" ? ep.cas === id : (ep.news || []).includes(id));

  function caseCard(c) {
    return `
      <a class="news-card case-card ${c.theme} reveal" href="#/etudes/${c.id}">
        <p class="eyebrow">Étude de cas · ${formatDate(c.date)}</p>
        <h3>${c.title}</h3>
        <p class="summary">${c.hook}</p>
        ${c.author ? `<p class="byline">Par ${c.author}</p>` : ""}
      </a>`;
  }

  const podcastEmpty = `
    <div class="episode empty-episode reveal">
      <p class="eyebrow">Le podcast</p>
      <h3>Premier épisode bientôt.</h3>
      <p class="summary">Ici, je décrypte à voix haute l'actu et mes études de cas, épisode après épisode.</p>
    </div>`;

  // Bloc « Étude de cas » en tête de la page Actu. `full` : page complète (#/etudes).
  function etudesBlock(full) {
    const eps = full ? podcast : podcast.slice(0, 1);
    const list = full ? cases : cases.slice(0, 2);
    return `
      <div class="etudes-grid">
        <div class="etudes-col">
          <h2 class="subhead reveal">🎙️ Le podcast · actus et études de cas</h2>
          ${eps.length ? eps.map(episodeCard).join("") : podcastEmpty}
          ${!full && podcast.length > 1 ? `<a class="more-link" href="#/etudes">Tous les épisodes (${podcast.length}) ›</a>` : ""}
        </div>
        <div class="etudes-col">
          <h2 class="subhead reveal">🔎 Les études de cas</h2>
          ${list.length ? list.map(caseCard).join("") : '<p class="empty">Première étude de cas bientôt.</p>'}
          ${!full && cases.length > 2 ? `<a class="more-link" href="#/etudes">Toutes les études de cas (${cases.length}) ›</a>` : ""}
        </div>
      </div>`;
  }

  function renderEtudesIndex() {
    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/actu">‹ Actu</a>
        <p class="eyebrow reveal">Actu</p>
        <h1 class="title reveal">Étude de cas.<br><span class="grad mix">Une actu, décortiquée.</span></h1>
        <p class="lead reveal">On prend un événement et on remonte toute la chaîne : ce qui s'est passé, pourquoi, qui gagne, qui perd, et ce que ça change pour toi. À écouter ou à lire.</p>
        ${etudesBlock(true)}
      </section>`;
  }

  function renderCase(id) {
    const c = byId(cases, id);
    if (!c) return renderNotFound();
    const linkedNews = (c.news || []).map((nid) => byId(news, nid)).filter(Boolean);
    const eps = episodesFor("cas", c.id);
    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/etudes">‹ Étude de cas</a>
        <p class="eyebrow reveal">Étude de cas · ${THEMES[c.theme] || ""}</p>
        ${c.author ? `<p class="byline reveal">Par ${c.author} · ${formatDate(c.date)}</p>` : ""}
        <h1 class="title reveal">${c.title}</h1>
        <p class="lead reveal">${c.hook}</p>
        ${heroImage(c.image)}
      </section>

      ${eps.length ? `<section class="wrap">${eps.map((ep) => episodeCard(ep, { fromCase: true })).join("")}</section>` : ""}

      ${c.chain && c.chain.length ? `
      <section class="section alt">
        <div class="wrap">
          ${c.question ? `<p class="eyebrow reveal">La question</p><h2 class="title reveal">${c.question}</h2>` : ""}
          <ol class="chain">
            ${c.chain.map((st) => `
              <li class="reveal"><span class="chain-label">${st.label}</span><p>${cite(st.text, c.sources)}</p></li>`).join("")}
          </ol>
        </div>
      </section>` : ""}

      ${(c.sections || []).map((sec, i) => `
        <section class="section ${i % 2 ? "alt" : ""}">
          <div class="wrap">
            <h2 class="title reveal">${sec.title}</h2>
            ${sec.paragraphs.map((p) => `<p class="copy reveal">${para(p, c.sources)}</p>`).join("")}
          </div>
        </section>
        ${i === 0 ? visualsBlock(c.visuals) : ""}
      `).join("")}

      ${c.takeaways && c.takeaways.length ? `
      <section class="wrap">
        <div class="panel ${c.theme} reveal">
          <p class="eyebrow">Ce qu'il faut retenir</p>
          <ul class="takeaways">${c.takeaways.map((t) => `<li>${cite(t, c.sources)}</li>`).join("")}</ul>
        </div>
      </section>` : ""}

      ${linkedNews.length ? `
      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">Les actus du dossier.</h2>
          ${linkedNews.map(newsCard).join("")}
        </div>
      </section>` : ""}

      ${sourcesBlock(c.sources)}
    `;
    mountVisuals(c.visuals);
  }

  function renderNews(id) {
    const n = byId(news, id);
    if (!n) return renderNotFound();
    const cult = (n.culture || []).map((c) => byId(culture, c)).filter(Boolean);
    const doss = (n.dossiers || []).map((x) => byId(dossiers, x)).filter(Boolean);

    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/actu">‹ Actu</a>
        <p class="eyebrow reveal">${formatDate(n.date)} · ${THEMES[n.theme]}</p>
        <h1 class="title reveal">${n.title}</h1>
        <p class="lead reveal">${n.summary}</p>
        ${heroImage(n.image)}
      </section>

      ${episodesFor("news", n.id).length ? `<section class="wrap">${episodesFor("news", n.id).map((ep) => episodeCard(ep, { fromNews: n.id })).join("")}</section>` : ""}

      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">Ce qui s'est passé</p>
          ${n.points.map((t) => `<p class="statement reveal">${cite(t, n.sources)}</p>`).join("")}
        </div>
      </section>

      ${visualsBlock(n.visuals)}

      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Pourquoi c'est important.</h2>
          ${n.why.map((p) => `<p class="copy reveal">${para(p, n.sources)}</p>`).join("")}
        </div>
      </section>

      <section class="wrap">
        <div class="panel ${n.theme} reveal">
          <p class="eyebrow">Et moi, dans tout ça ?</p>
          <p>${n.forMe}</p>
        </div>
      </section>

      ${figuresBlock(n.figures)}

      ${cult.length ? `
      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">À lire aussi.</h2>
          <p class="copy reveal">Pour aller plus loin que l'actu.</p>
          <div class="carousel">${cult.map(cultureTile).join("")}</div>
        </div>
      </section>` : ""}

      ${doss.length ? `
      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Les cours pour comprendre.</h2>
          <div class="group reveal">
            ${doss.map((d) => `
              <a class="row" href="#/cours/${d.id}">
                <span class="dot ${d.theme}"></span>
                <div class="row-main"><div class="row-title">${d.title}</div><div class="row-sub">${d.minutes} min · ${d.level}</div></div>
                <span class="chev" aria-hidden="true">›</span>
              </a>`).join("")}
          </div>
        </div>
      </section>` : ""}

      ${sourcesBlock(n.sources)}
    `;
    bindFigures(n.figures, n.theme, n.sources);
    mountVisuals(n.visuals);
  }

  // ---------- Focus industrie ----------
  function focusLink([kind, id, label]) {
    const href = kind === "actu" ? `#/actu/${id}` : `#/cours/${id}`;
    return `<a class="tagpill" href="${href}">${label} ›</a>`;
  }

  function renderFocus(id) {
    const f = id ? byId(focusList, id) : focusList[0];
    if (!f) return renderNotFound();
    const others = focusList.filter((x) => x !== f);

    app.innerHTML = `
      <section class="focus-hero">
        <div class="focus-head wrap">
          <p class="eyebrow">Focus industrie · ${f.week}</p>
          <h1 class="title">${f.industry}.<br><span class="grad eco">${f.title}</span></h1>
        </div>
        <div class="car-stage" id="car-stage">
          ${f.model.poster ? `<img class="car-poster" id="car-poster" src="${f.model.poster}" alt="${f.industry} : la voiture du Focus">` : ""}
          <p class="car-loading" id="car-loading">Chargement de la voiture 3D…</p>
          <div class="car-card" id="car-card" hidden></div>
        </div>
        <div class="wrap focus-controls">
          ${f.paints ? `<div>${segmented(f.paints, f.paints[0][0], "paint")}</div>` : ""}
          <p class="globe-hint">Fais tourner la voiture et touche ses pièces : chacune raconte un morceau de géopolitique.</p>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <p class="lead reveal">${f.hook}</p>
        </div>
      </section>

      ${f.weekly ? `
      <section class="section alt weekly">
        <div class="wrap">
          <p class="eyebrow reveal weekly-label">${f.weekly.label} · ${f.week}</p>
          <h2 class="title reveal">${f.weekly.question}</h2>
          <div class="weekly-figs reveal">
            ${f.weekly.figures.map((x) => `<div><div class="bigstat grad eco">${x.value}</div><p class="bigstat-label">${x.label}${x.src && f.sources[x.src - 1] ? ` <a class="cite" href="${f.sources[x.src - 1].url}" target="_blank" rel="noopener">(${f.sources[x.src - 1].short})</a>` : ""}</p></div>`).join("")}
          </div>
          ${f.weekly.paragraphs.map((p) => `<p class="copy reveal" style="margin-top:22px">${para(p, f.sources)}</p>`).join("")}
          ${f.weekly.toWatch && f.weekly.toWatch.length ? `
          <div class="towatch reveal">
            <p class="eyebrow">À suivre</p>
            <ol>
              ${f.weekly.toWatch.map((w) => `<li><span class="towatch-when">${w.when}</span><span class="towatch-what">${cite(w.text, f.sources)}</span></li>`).join("")}
            </ol>
          </div>` : ""}
        </div>
      </section>` : ""}

      ${figuresBlock(f.figures)}

      ${f.sections.map((sec, i) => `
        <section class="section ${i % 2 === 0 ? "alt" : ""}">
          <div class="wrap">
            <h2 class="title reveal">${sec.title}</h2>
            ${sec.paragraphs.map((p) => `<p class="copy reveal">${para(p, f.sources)}</p>`).join("")}
          </div>
        </section>
        ${i === 1 ? visualsBlock([f.chart].filter(Boolean)) : ""}
        ${i === 3 ? visualsBlock([f.map].filter(Boolean), true) : ""}
      `).join("")}

      <section class="wrap">
        <div class="panel eco reveal">
          <p class="eyebrow">Et moi, dans tout ça ?</p>
          <p>${f.forMe}</p>
        </div>
      </section>

      ${f.quiz && f.quiz.length ? `
      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Tu as tout compris ?</h2>
          <div class="actions reveal"><a class="pill-btn blue lg" href="#/quiz/focus-${f.id}">Faire le quiz</a></div>
        </div>
      </section>` : ""}

      ${others.length ? `
      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">Les autres focus.</h2>
          <div class="group reveal">
            ${others.map((o) => `<a class="row" href="#/focus/${o.id}"><div class="row-main"><div class="row-title">${o.industry} : ${o.title}</div><div class="row-sub">${o.week}</div></div><span class="chev" aria-hidden="true">›</span></a>`).join("")}
          </div>
        </div>
      </section>` : ""}

      <section class="section">
        <div class="wrap">
          <p class="viz-cap">${f.model.credit}</p>
        </div>
      </section>
      ${sourcesBlock(f.sources)}
    `;

    bindFigures(f.figures, "eco", f.sources);
    mountVisuals([f.chart, f.map].filter(Boolean));

    const stage = app.querySelector("#car-stage");
    const card = app.querySelector("#car-card");
    function showSpot(h) {
      card.hidden = false;
      card.innerHTML = `
        <button class="sheet-close" aria-label="Fermer">×</button>
        <p class="eyebrow">${h.label}</p>
        <h3>${h.title}</h3>
        <p>${cite(h.text, f.sources)}</p>
        ${h.links && h.links.length ? `<div class="pills">${h.links.map(focusLink).join("")}</div>` : ""}`;
      card.querySelector(".sheet-close").addEventListener("click", () => { card.hidden = true; });
    }

    import("./car3d.js")
      .then((m) => m.mountCar(stage, { src: f.model.src, hotspots: f.hotspots, onHotspot: showSpot }))
      .then((car) => {
        const loading = app.querySelector("#car-loading");
        if (loading) loading.remove();
        if (!car || !document.body.contains(stage)) { if (car) car.destroy(); return; }
        stage.classList.add("car-ready");
        currentGlobe = car;
        app.querySelectorAll("[data-paint]").forEach((b) => b.addEventListener("click", () => {
          app.querySelectorAll("[data-paint]").forEach((x) => x.setAttribute("aria-pressed", x === b));
          car.setPaint(b.dataset.paint);
        }));
      })
      .catch(() => {
        // Pas de 3D (appareil trop ancien, WebGL bloqué…) : on garde la photo et on liste les pièces.
        const loading = app.querySelector("#car-loading");
        if (loading) loading.remove();
        if (!document.body.contains(stage)) return;
        stage.classList.add("car-static");
        const list = document.createElement("div");
        list.className = "car-spots-static";
        list.innerHTML = (f.hotspots || []).map((h, i) => `<button class="chip-btn" type="button" data-spot="${i}">${h.label}</button>`).join("");
        list.querySelectorAll("[data-spot]").forEach((b) => b.addEventListener("click", () => showSpot(f.hotspots[Number(b.dataset.spot)])));
        stage.appendChild(list);
      });
  }

  // ---------- Cours ----------
  function renderCoursIndex() {
    const readCount = dossiers.filter((d) => readSet.has(d.id)).length;
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Cours</p>
        <h1 class="title reveal">Comprendre les enjeux.<br><span class="grad eco">En trois minutes.</span></h1>
        <p class="lead reveal">Les mécanismes à connaître pour décrypter l'actu : inflation, droits de douane, routes maritimes, sanctions, dollar… Chaque cours se termine par un quiz.</p>
        <div class="reveal" style="margin-top:28px">${segmented([["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]], homeFilter, "filter")}</div>
        <div class="carousel" id="dossier-tiles">${dossierTiles()}</div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Tous les cours.</h2>
          <p class="eyebrow reveal">${readCount}/${dossiers.length} lus</p>
          <div class="group reveal">
            ${dossiers.map((d) => `
              <a class="row" href="#/cours/${d.id}">
                <span class="dot ${d.theme}"></span>
                <div class="row-main"><div class="row-title">${d.title}</div><div class="row-sub">${THEMES[d.theme]} · ${d.minutes} min · ${d.level}</div></div>
                ${readSet.has(d.id) ? '<span class="check">Lu</span>' : ""}
                <span class="chev" aria-hidden="true">›</span>
              </a>`).join("")}
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">S'entraîner.</h2>
          <div class="group reveal">
            <a class="row" href="#/quiz"><div class="row-main"><div class="row-title">Quiz</div><div class="row-sub">Un quiz par cours, ou le grand mélange</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/lexique"><div class="row-main"><div class="row-title">Lexique</div><div class="row-sub">${glossary.length} mots de l'actu, expliqués simplement</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/chiffres"><div class="row-main"><div class="row-title">Les chiffres du monde</div><div class="row-sub">Inflation, chômage et croissance sur un globe</div></div><span class="chev" aria-hidden="true">›</span></a>
          </div>
        </div>
      </section>
    `;
    app.querySelectorAll("[data-filter]").forEach((btn) =>
      btn.addEventListener("click", () => {
        homeFilter = btn.dataset.filter;
        app.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        app.querySelector("#dossier-tiles").innerHTML = dossierTiles();
      })
    );
  }

  // ---------- Articles ----------
  function renderArticlesIndex() {
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Articles</p>
        <h1 class="title reveal">Analyses et recherches.<br><span class="grad geo">Pour aller plus loin.</span></h1>
        <p class="lead reveal">Des articles plus personnels sur les coulisses de l'actu : l'histoire, les ressources, les infrastructures et les rivalités qu'on voit rarement à la une.</p>
        <div class="article-list">
          ${culture.map((c) => `
            <a class="news-card ${c.theme} reveal" href="#/articles/${c.id}">
              <p class="eyebrow">${c.kind || "Article"} · ${THEMES[c.theme]}</p>
              <h3>${c.title}</h3>
              <p class="summary">${c.hook}</p>
              ${c.author ? `<p class="byline">Par ${c.author}</p>` : ""}
            </a>`).join("")}
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <div class="panel mix reveal">
            <p class="eyebrow">Écrire un article</p>
            <p>Une recherche, une analyse, un sujet peu médiatisé ? Écris-le comme tu veux, avec tes sources : il sera mis en forme avec cartes, chiffres et graphiques.</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderCulture(id) {
    const c = byId(culture, id);
    if (!c) return renderNotFound();
    const linked = news.filter((n) => (n.culture || []).includes(c.id));

    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/articles">‹ Articles</a>
        <p class="eyebrow reveal">${c.kind || "Article"} · ${THEMES[c.theme]}</p>
        ${c.author ? `<p class="byline reveal">Par ${c.author}</p>` : ""}
        <h1 class="title reveal">${c.title}</h1>
        <p class="lead reveal">${c.hook}</p>
        ${heroImage(c.image)}
      </section>

      ${c.sections.map((sec, i) => `
        <section class="section ${i % 2 === 0 ? "alt" : ""}">
          <div class="wrap">
            <h2 class="title reveal">${sec.title}</h2>
            ${sec.paragraphs.map((p) => `<p class="copy reveal">${para(p, c.sources)}</p>`).join("")}
          </div>
        </section>
        ${i === 0 ? visualsBlock(c.visuals) : ""}
      `).join("")}

      <section class="section">
        <div class="wrap">
          <div class="panel ${c.theme} reveal">
            <p class="eyebrow">Le saviez-vous ?</p>
            <p>${cite(c.didYouKnow, c.sources)}</p>
          </div>
        </div>
      </section>

      ${linked.length ? `
      <section class="section alt">
        <div class="wrap">
          <h2 class="title reveal">Dans l'actu.</h2>
          ${linked.map(newsCard).join("")}
        </div>
      </section>` : ""}

      ${sourcesBlock(c.sources)}
    `;
    mountVisuals(c.visuals);
  }

  // ---------- Chiffres du monde ----------
  let indicatorId = "inflation";

  function renderChiffres(param) {
    const data = window.GEOCO.indicators;
    const features = window.GEOCO_COUNTRIES && window.GEOCO_COUNTRIES.features;
    if (!data || !features) return renderNotFound();
    if (param && data.list.some((i) => i.id === param)) indicatorId = param;
    const names = data.names || {};
    const nameOf = (id) => names[id] || (features.find((f) => f.id === id) || { properties: { name: id } }).properties.name;
    const fmtV = (v) => v.toLocaleString("fr-FR", { maximumFractionDigits: 1 });

    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Chiffres</p>
        <h1 class="title reveal">L'économie mondiale.<br><span class="grad mix">En un coup d'œil.</span></h1>
        <div class="reveal">${segmented(data.list.map((i) => [i.id, i.label]), indicatorId, "ind")}</div>
        <p class="lead" id="ind-explain"></p>
      </section>

      <section class="wrap">
        <div class="ind-stage">
          <div class="ind-globe" id="ind-globe"></div>
          <div class="ind-card" id="ind-card" hidden></div>
        </div>
        <div class="legend" id="legend"></div>
        <p class="viz-cap">Touche un pays pour voir son chiffre. Plus un pays est clair et « haut », plus la valeur est élevée.</p>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title" id="rank-title"></h2>
          <div class="rank" id="rank"></div>
          <p class="copy ind-note" id="ind-note"></p>
        </div>
      </section>

      <div id="ind-sources"></div>

      ${(data.focus || []).map((z) => `
      <section class="section alt focus" id="focus-${z.id}">
        <div class="wrap">
          <p class="eyebrow reveal">${z.eyebrow}</p>
          <h2 class="title reveal">${z.title}</h2>
          <p class="statement reveal">${cite(z.statement, z.sources)}</p>
          ${z.text.map((t) => `<p class="copy reveal" style="margin-top:22px">${para(t, z.sources)}</p>`).join("")}
          <div class="reveal" style="margin-top:36px">${window.GeocoViz ? window.GeocoViz.html([z.chart]) : ""}</div>
          ${z.compare ? `
          <div class="panel geo reveal" style="margin-top:36px">
            <p class="eyebrow">${z.compare.title}</p>
            <p>${cite(z.compare.text, z.sources)}</p>
            <div class="focus-figs">
              ${z.compare.figures.map((f) => `<div><div class="bigstat grad geo">${f.value}</div><p class="bigstat-label">${f.label}${f.src && z.sources[f.src - 1] ? ` <a class="cite" href="${z.sources[f.src - 1].url}" target="_blank" rel="noopener">(${z.sources[f.src - 1].short})</a>` : ""}</p></div>`).join("")}
            </div>
          </div>` : ""}
        </div>
      </section>
      ${sourcesBlock(z.sources)}`).join("")}
    `;
    if (window.GeocoViz) window.GeocoViz.mountAll((data.focus || []).map((z) => z.chart));

    let globe = null;
    const card = app.querySelector("#ind-card");

    function showCard(id, d, name) {
      if (!id) { card.hidden = true; return; }
      const ind = data.list.find((i) => i.id === indicatorId);
      card.hidden = false;
      card.innerHTML = `
        <button class="sheet-close" aria-label="Fermer">×</button>
        <p class="eyebrow">${ind.label}</p>
        <h3>${name}</h3>
        ${d ? `<div class="bigstat grad mix">${fmtV(d.v)} ${ind.unit}</div><p class="ind-date">${d.d}</p>` : `<p class="ind-date">Pas de donnée pour l'instant.</p>`}
        ${(data.focus || []).filter((z) => z.country === id).map((z) => `<a class="more focus-link" href="#/chiffres" data-focus="${z.id}">${z.eyebrow} ›</a>`).join("")}`;
      card.querySelectorAll("[data-focus]").forEach((a) => a.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("focus-" + a.dataset.focus).scrollIntoView({ behavior: "smooth" });
      }));
      card.querySelector(".sheet-close").addEventListener("click", () => { card.hidden = true; });
    }

    function draw() {
      const ind = data.list.find((i) => i.id === indicatorId);
      app.querySelector("#ind-explain").textContent = ind.explain;
      app.querySelectorAll("[data-ind]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.ind === ind.id));

      // Légende : une pastille par classe de couleur
      const edges = [null, ...ind.bins, null];
      app.querySelector("#legend").innerHTML = ind.colors.map((c, i) => {
        const lo = edges[i], hi = edges[i + 1];
        const label = lo == null ? `< ${fmtV(hi)} %` : hi == null ? `≥ ${fmtV(lo)} %` : `${fmtV(lo)}–${fmtV(hi)} %`;
        return `<span class="legend-item"><i style="background:${c}"></i>${label}</span>`;
      }).join("") + `<span class="legend-item"><i class="none"></i>Pas de donnée</span>`;

      // Classement
      const rows = Object.entries(ind.values).map(([id, d]) => ({ id, ...d, name: nameOf(id) })).sort((a, b) => b.v - a.v);
      const max = Math.max(...rows.map((r) => r.v));
      app.querySelector("#rank-title").textContent = ind.title + ".";
      app.querySelector("#rank").innerHTML = rows.map((r) => `
        <button class="rank-row" data-iso="${r.id}">
          <span class="rank-name">${r.name}</span>
          <span class="rank-bar"><i style="width:${Math.max(2, (r.v / max) * 100)}%;background:${ind.colors[window.GeocoGlobe.classOf(r.v, ind.bins)]}"></i></span>
          <span class="rank-val">${fmtV(r.v)} %<small>${r.d}</small></span>
        </button>`).join("");
      app.querySelectorAll(".rank-row").forEach((b) => b.addEventListener("click", () => {
        app.querySelector(".ind-stage").scrollIntoView({ behavior: "smooth", block: "center" });
        if (globe) globe.selectById(b.dataset.iso);
        else showCard(b.dataset.iso, ind.values[b.dataset.iso], nameOf(b.dataset.iso));
      }));

      app.querySelector("#ind-note").innerHTML = cite(ind.note, ind.sources);
      app.querySelector("#ind-sources").innerHTML = sourcesBlock(ind.sources);
      if (globe) globe.setIndicator(ind);
      card.hidden = true;
    }

    app.querySelectorAll("[data-ind]").forEach((b) => b.addEventListener("click", () => {
      indicatorId = b.dataset.ind;
      try { history.replaceState(null, "", "#/chiffres/" + indicatorId); } catch (e) {}
      draw();
    }));

    draw();

    window.GeocoGlobe.mountIndicators(app.querySelector("#ind-globe"), {
      features, names,
      onSelect: (f, d, name) => showCard(f && f.id, d, name)
    }).then((g) => {
      if (!g) { app.querySelector(".ind-stage") && app.querySelector(".ind-stage").classList.add("no-webgl"); return; }
      globe = g;
      currentGlobe = g;
      g.setIndicator(data.list.find((i) => i.id === indicatorId));
    }).catch(() => app.querySelector(".ind-stage") && app.querySelector(".ind-stage").classList.add("no-webgl"));
  }

  // ---------- Lexique ----------
  function renderLexique(focusId) {
    const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "fr"));
    const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

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
          ${focusList.filter((f) => f.quiz && f.quiz.length).map((f) => `
            <a class="row" href="#/quiz/focus-${f.id}">
              <span class="dot eco"></span>
              <div class="row-main"><div class="row-title">Focus : ${f.industry}</div><div class="row-sub">${f.quiz.length} questions · ${f.week}</div></div>
              <span class="chev" aria-hidden="true">›</span>
            </a>`).join("")}
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
    if (id && id.startsWith("focus-")) {
      const f = byId(focusList, id.slice(6));
      if (!f) return renderNotFound();
      questions = f.quiz;
      title = "Focus : " + f.industry;
      backHref = "#/focus/" + f.id;
      theme = "eco";
    } else if (id === "tout") {
      questions = shuffle(dossiers.flatMap((d) => d.quiz));
      title = "Le grand quiz";
      backHref = "#/quiz";
      theme = "mix";
    } else {
      const d = byId(dossiers, id);
      if (!d) return renderNotFound();
      questions = d.quiz;
      title = d.title;
      backHref = "#/cours/" + d.id;
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

  // ---------- À propos ----------
  function renderAbout() {
    const last = news.length ? formatDate(news[0].date) : "";
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow">À propos</p>
        <h1 class="title">Comprendre le monde.<br><span class="grad mix">Sans jargon.</span></h1>
        <p class="lead">Géoconomic rend l'actualité économique et géopolitique accessible à tout le monde. Économie et géopolitique sont liées : un détroit bloqué fait flamber l'essence, une guerre commerciale change le prix d'un téléphone, une mine en Afrique fait tourner les voitures électriques d'Europe.</p>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="title">Ce que tu trouves ici.</h2>
          <div class="group">
            <a class="row" href="#/actu"><div class="row-main"><div class="row-title">Actu</div><div class="row-sub">Chaque jour, les événements qui comptent, partout dans le monde, sur un globe 3D</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/focus"><div class="row-main"><div class="row-title">Focus</div><div class="row-sub">Chaque semaine, une industrie décryptée, en 3D, avec l'enjeu de la semaine</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/cours"><div class="row-main"><div class="row-title">Cours</div><div class="row-sub">Les mécanismes à connaître, en trois minutes, avec quiz et lexique</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/articles"><div class="row-main"><div class="row-title">Articles</div><div class="row-sub">Analyses et recherches sur les sujets dont on parle peu</div></div><span class="chev" aria-hidden="true">›</span></a>
            <a class="row" href="#/chiffres"><div class="row-main"><div class="row-title">Chiffres</div><div class="row-sub">Inflation, chômage et croissance, pays par pays</div></div><span class="chev" aria-hidden="true">›</span></a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="title">Notre méthode.</h2>
          <p class="copy"><strong>Chaque fait est sourcé.</strong> Le nom de la source apparaît entre parenthèses dans le texte, avec un lien vers l'article ou le rapport d'origine, et la liste complète est en bas de chaque page.</p>
          <p class="copy"><strong>Des sources fiables.</strong> Agences de presse, médias économiques, institutions internationales (FMI, Agence internationale de l'énergie), banques centrales et instituts de statistique comme l'Insee ou Eurostat.</p>
          <p class="copy"><strong>Préparé avec l'aide d'une intelligence artificielle, vérifié avant publication.</strong> Les actus sont rassemblées et rédigées avec un assistant d'IA à partir des sources citées, contrôlées automatiquement (sources, chiffres, liens), puis relues.</p>
          <p class="copy"><strong>Neutre.</strong> On explique les enjeux et les arguments ; on ne prend pas parti.</p>
          ${last ? `<p class="ind-date" style="margin-top:24px">Dernière mise à jour de l'actu : ${last}.</p>` : ""}
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="title">Crédits.</h2>
          <ol class="source-list">
            <li>Images de la Terre : NASA Blue Marble, relief et nuages (domaine public), via le projet three-globe.</li>
            <li>Contours des pays et fonds de carte : Natural Earth (domaine public).</li>
            <li>Voiture 3D : « Car Concept » d'Eric Chadwick (Darmstadt Graphics Group), d'après un modèle de Unity Fan, licence CC BY 4.0, Khronos glTF Sample Assets.</li>
            <li>Globe 3D : globe.gl (licence MIT). Rendu 3D : three.js (licence MIT).</li>
            <li>Polices : Inter (licence OFL) et Tinos (licence Apache 2.0), via Google Fonts.</li>
            <li>Données : FMI, Insee, Agence internationale de l'énergie, instituts statistiques nationaux (via Trading Economics) et les sources citées dans chaque page.</li>
          </ol>
        </div>
      </section>
    `;
  }

  function renderNotFound() {
    app.innerHTML = `<section class="wrap hero"><p class="empty">Cette page n'existe pas. <a href="#/">Retour à l'accueil</a></p></section>`;
  }

  // ---------- Routeur ----------
  function route() {
    if (currentGlobe) { currentGlobe.destroy(); currentGlobe = null; }
    const [, section, param] = (location.hash || "#/").split("/");
    const tab = { dossier: "cours", culture: "articles", quiz: "cours", lexique: "cours", etudes: "actu" }[section] || section;
    document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));

    if (section === "cours" || section === "dossier") param ? renderDossier(param) : renderCoursIndex();
    else if (section === "actu") param ? renderNews(param) : renderActuIndex();
    else if (section === "etudes") param ? renderCase(param) : renderEtudesIndex();
    else if (section === "articles" || section === "culture") param ? renderCulture(param) : renderArticlesIndex();
    else if (section === "chiffres") renderChiffres(param);
    else if (section === "focus") renderFocus(param);
    else if (section === "apropos") renderAbout();
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
