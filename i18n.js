// Site languages. English is the default; the visitor's choice is kept in localStorage.
// A ?lang=xx link also selects (and remembers) a language, so pages can be shared in a given language.
//
// Static text: <el data-i18n="key"> gets its text replaced by I18N.apply().
// Project text: projects/data.<lang>.js adds overrides that I18N.project(p) merges over the English data.
window.I18N = (() => {
  const LANGS = {
    en: { label: 'EN', name: 'English', html: 'en' },
    pt: { label: 'PT', name: 'Português', html: 'pt-BR' },
    es: { label: 'ES', name: 'Español', html: 'es' },
  };
  const DEFAULT = 'en', KEY = 'lang';

  const STRINGS = {
    en: {
      'nav.work': 'Work',
      'nav.contact': 'Contact',
      'nav.allWork': '← All work',
      'nav.language': 'Language',
      'home.hero': 'Small, sharp tools for the web. Designed, built and shipped by Ricardo Georgel.',
      'home.hint': 'Move · Scroll',
      'home.profile': 'Profile',
      'home.statement': 'I like breaking big ideas into small things that just work. Eight of them live below.',
      'home.selected': 'Selected work',
      'home.sayHello': 'Say hello',
      'home.top': 'Back to top ↑',
      'project.visit': 'Visit {name}',
      'project.about': 'About the project',
      'project.highlights': 'Highlights',
      'project.open': 'Open the project',
      'project.next': 'Next project',
      'project.allWork': 'All work',
      'project.shots': 'Screenshots',
      'project.viewer': 'Screenshot viewer',
      'project.prev': 'Previous screenshot',
      'project.nextShot': 'Next screenshot',
      'project.close': 'Close',
    },
    pt: {
      'nav.work': 'Projetos',
      'nav.contact': 'Contato',
      'nav.allWork': '← Projetos',
      'nav.language': 'Idioma',
      'home.hero': 'Ferramentas pequenas e certeiras para a web. Pensadas, construídas e lançadas por Ricardo Georgel.',
      'home.hint': 'Mova · Role',
      'home.profile': 'Perfil',
      'home.statement': 'Gosto de transformar ideias grandes em coisas pequenas que simplesmente funcionam. Oito delas estão logo abaixo.',
      'home.selected': 'Trabalhos selecionados',
      'home.sayHello': 'Vamos conversar',
      'home.top': 'Voltar ao topo ↑',
      'project.visit': 'Visitar {name}',
      'project.about': 'Sobre o projeto',
      'project.highlights': 'Destaques',
      'project.open': 'Abrir o projeto',
      'project.next': 'Próximo projeto',
      'project.allWork': 'Todos os projetos',
      'project.shots': 'Capturas de tela',
      'project.viewer': 'Visualizador de capturas',
      'project.prev': 'Captura anterior',
      'project.nextShot': 'Próxima captura',
      'project.close': 'Fechar',
    },
    es: {
      'nav.work': 'Proyectos',
      'nav.contact': 'Contacto',
      'nav.allWork': '← Proyectos',
      'nav.language': 'Idioma',
      'home.hero': 'Herramientas pequeñas y precisas para la web. Diseñadas, construidas y lanzadas por Ricardo Georgel.',
      'home.hint': 'Mueve · Desliza',
      'home.profile': 'Perfil',
      'home.statement': 'Me gusta convertir ideas grandes en cosas pequeñas que simplemente funcionan. Ocho de ellas están aquí abajo.',
      'home.selected': 'Trabajos seleccionados',
      'home.sayHello': 'Hablemos',
      'home.top': 'Volver arriba ↑',
      'project.visit': 'Visitar {name}',
      'project.about': 'Sobre el proyecto',
      'project.highlights': 'Destacados',
      'project.open': 'Abrir el proyecto',
      'project.next': 'Siguiente proyecto',
      'project.allWork': 'Todos los proyectos',
      'project.shots': 'Capturas de pantalla',
      'project.viewer': 'Visor de capturas',
      'project.prev': 'Captura anterior',
      'project.nextShot': 'Captura siguiente',
      'project.close': 'Cerrar',
    },
  };

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} },
  };

  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LANGS[fromUrl]) store.set(fromUrl);
  const saved = store.get();
  const lang = LANGS[fromUrl] ? fromUrl : LANGS[saved] ? saved : DEFAULT;
  document.documentElement.lang = LANGS[lang].html;

  const t = (key, vars = {}) =>
    (STRINGS[lang][key] ?? STRINGS.en[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

  function apply(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  }

  // English project data with this language's overrides on top (projects/data.<lang>.js).
  function project(p) {
    const o = ((window.PROJECTS_I18N || {})[lang] || {})[p.slug];
    if (!o) return p;
    const out = { ...p, ...o };
    if (o.alts) out.shots = p.shots.map((s, i) => ({ ...s, alt: o.alts[i] || s.alt }));
    delete out.alts;
    return out;
  }

  // EN · PT · ES links. Each is a real ?lang= link (works without JS); with JS the choice is
  // saved and the page reloads without the parameter, so URLs stay clean.
  function switcher(el) {
    if (!el) return;
    el.setAttribute('aria-label', t('nav.language'));
    Object.entries(LANGS).forEach(([code, info]) => {
      const url = new URL(location.href);
      url.searchParams.set('lang', code);
      const a = document.createElement('a');
      a.href = url.pathname + url.search + url.hash;
      a.textContent = info.label;
      a.lang = info.html;
      a.title = info.name;
      a.hreflang = info.html;
      if (code === lang) a.setAttribute('aria-current', 'true');
      a.addEventListener('click', e => {
        e.preventDefault();
        store.set(code);
        if (typeof gtag === 'function') gtag('event', 'change_language', { language: code });
        // Drop a ?lang= from the URL (a query change always reloads). Otherwise reload explicitly:
        // replacing a URL that only differs by #hash (e.g. index.html#work) would just scroll.
        const clean = new URL(location.href);
        if (clean.searchParams.has('lang')) {
          clean.searchParams.delete('lang');
          location.replace(clean.pathname + clean.search + clean.hash);
        } else {
          location.reload();
        }
      });
      el.append(a);
    });
  }

  return { lang, langs: LANGS, t, apply, project, switcher };
})();
