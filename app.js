(function () {
  "use strict";

  const { dossiers, glossary } = window.GEOCO;
  const news = window.GEOCO.news || [];
  const culture = window.GEOCO.culture || [];
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
        <p class="eyebrow">${THEMES[n.theme]}</p>
        <h3>${n.title}</h3>
        <p class="summary">${n.summary}</p>
        <span class="more">Comprendre en 2 min ›</span>
      </a>`;
  }

  function cultureTile(c) {
    return `
      <a class="tile ${c.theme}" href="#/culture/${c.id}">
        <div>
          <p class="eyebrow">Culture G · ${THEMES[c.theme]}</p>
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
          <p class="eyebrow">${today ? formatDate(today) : "Géoco"}</p>
          <h1 class="headline">Le monde,<br><span class="grad mix">aujourd'hui.</span></h1>
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

      ${culture.length ? `
      <section class="section alt">
        <div class="wrap">
          <p class="eyebrow reveal">Culture G et recherches</p>
          <h2 class="title reveal">Articles.</h2>
          <p class="copy reveal">Les sujets dont on parle peu, mais qui expliquent beaucoup.</p>
          <div class="carousel">${culture.map(cultureTile).join("")}</div>
        </div>
      </section>` : ""}

      <section class="section">
        <div class="wrap">
          <p class="eyebrow reveal">Les bases</p>
          <h2 class="title reveal">Comprendre.</h2>
          <div class="reveal">${segmented([["all", "Tout"], ["eco", "Économie"], ["geo", "Géopolitique"]], homeFilter, "filter")}</div>
          <div class="carousel" id="dossier-tiles">${dossierTiles()}</div>
        </div>
      </section>

      <section class="section alt">
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
        <a class="back" href="#/">‹ Dossiers</a>
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
  function renderActuIndex() {
    const days = [...new Set(news.map((n) => n.date))];
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Actu</p>
        <h1 class="title reveal">L'actu du jour.<br><span class="grad mix">Expliquée.</span></h1>
        <p class="lead reveal" style="margin-bottom:48px">Chaque jour, les événements qui comptent, ce qu'il faut en retenir et pourquoi ça te concerne.</p>
        ${days.map((day) => `
          <div class="day">
            <p class="eyebrow reveal">${formatDate(day)}</p>
            ${news.filter((n) => n.date === day).map(newsCard).join("")}
          </div>`).join("") || '<p class="empty">Pas encore d\'actu.</p>'}
      </section>
    `;
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
          <h2 class="title reveal">Culture G.</h2>
          <p class="copy reveal">Pour aller plus loin que l'actu.</p>
          <div class="carousel">${cult.map(cultureTile).join("")}</div>
        </div>
      </section>` : ""}

      ${doss.length ? `
      <section class="section">
        <div class="wrap">
          <h2 class="title reveal">Les dossiers pour comprendre.</h2>
          <div class="group reveal">
            ${doss.map((d) => `
              <a class="row" href="#/dossier/${d.id}">
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

  // ---------- Culture G ----------
  function renderCultureIndex() {
    app.innerHTML = `
      <section class="wrap hero">
        <p class="eyebrow reveal">Culture G</p>
        <h1 class="title reveal">Ce dont on parle peu.<br><span class="grad geo">Et qui explique tout.</span></h1>
        <p class="lead reveal">Des recherches sur les coulisses de l'actu : l'histoire, les ressources, les infrastructures et les rivalités qu'on voit rarement à la une.</p>
        <div class="carousel">${culture.map(cultureTile).join("")}</div>
      </section>
    `;
  }

  function renderCulture(id) {
    const c = byId(culture, id);
    if (!c) return renderNotFound();
    const linked = news.filter((n) => (n.culture || []).includes(c.id));

    app.innerHTML = `
      <section class="wrap hero">
        <a class="back" href="#/culture">‹ Culture G</a>
        <p class="eyebrow reveal">Culture G · ${THEMES[c.theme]}</p>
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
    `;

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
        ${d ? `<div class="bigstat grad mix">${fmtV(d.v)} ${ind.unit}</div><p class="ind-date">${d.d}</p>` : `<p class="ind-date">Pas de donnée pour l'instant.</p>`}`;
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
      history.replaceState(null, "", "#/chiffres/" + indicatorId);
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
    if (currentGlobe) { currentGlobe.destroy(); currentGlobe = null; }
    const [, section, param] = (location.hash || "#/").split("/");
    document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("active", a.dataset.tab === section));

    if (section === "dossier") renderDossier(param);
    else if (section === "actu") param ? renderNews(param) : renderActuIndex();
    else if (section === "culture") param ? renderCulture(param) : renderCultureIndex();
    else if (section === "chiffres") renderChiffres(param);
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
