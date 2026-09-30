/* CYBER_VECTOR — GitHub-controlled certifications. Reads ./data/certificates.json */
(() => {
  'use strict';

  const DATA_URL = './data/certificates.json';
  const FEATURED_FIRST = true; // set to false to sort strictly by date
  const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  const $ = (id) => document.getElementById(id);
  const grid = $('certificates-grid');
  if (!grid) return;

  const statusEl = $('certificates-status');
  const statsEl = $('certificates-stats');
  const filtersEl = $('certificates-filters');
  const searchEl = $('certificates-search');

  let certs = [];
  let activeCategory = 'ALL';
  let query = '';

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  const formatDate = (iso) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
    return m ? `${m[3]} ${MONTHS[+m[2] - 1] || ''} ${m[1]}` : '';
  };
  const cat = (c) => String(c.category || 'OTHER').trim().toUpperCase();

  function setStatus(kind, title, sub) {
    statusEl.replaceChildren();
    statusEl.hidden = !kind;
    statusEl.dataset.kind = kind || '';
    if (!kind) return;
    statusEl.append(el('p', 'cert-status__title', title));
    if (sub) statusEl.append(el('p', 'cert-status__sub', sub));
    if (kind === 'loading') statusEl.append(el('div', 'cert-scan'));
  }

  /* ---------- load ---------- */
  async function load() {
    setStatus('loading', 'LOADING CERTIFICATIONS...');
    try {
      // cache-busted once per minute: fresh after a deploy, still cache-friendly
      const res = await fetch(`${DATA_URL}?v=${Math.floor(Date.now() / 60000)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error('certificates.json must be an array');

      certs = data
        .filter((c) => c && c.visible === true)
        .sort((a, b) => {
          if (FEATURED_FIRST && !!b.featured !== !!a.featured) return b.featured ? 1 : -1;
          return String(b.date).localeCompare(String(a.date));
        });

      setStatus(null);
      renderStats();
      renderFilters();
      render();
    } catch (err) {
      console.warn('[certifications] Could not load', DATA_URL, err);
      setStatus('error', 'CERTIFICATION DATA UNAVAILABLE');
    }
  }

  /* ---------- stats ---------- */
  function renderStats() {
    statsEl.replaceChildren();
    if (!certs.length) return;
    const issuers = new Set(certs.map((c) => c.issuer)).size;
    const latest = certs.reduce((a, c) => (String(c.date) > a ? String(c.date) : a), '').slice(0, 4);
    [[certs.length, 'CERTIFICATIONS'], [issuers, 'ISSUERS'], [latest, 'LATEST']].forEach(([v, l]) => {
      const box = el('div', 'cert-stat');
      box.append(el('span', 'cert-stat__value', String(v).padStart(2, '0')), el('span', 'cert-stat__label', l));
      statsEl.append(box);
    });
  }

  /* ---------- filters ---------- */
  function renderFilters() {
    filtersEl.replaceChildren();
    if (!certs.length) return;
    const cats = ['ALL', ...[...new Set(certs.map(cat))].sort()];
    cats.forEach((name) => {
      const b = el('button', 'cert-chip', name);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(name === activeCategory));
      b.addEventListener('click', () => {
        activeCategory = name;
        filtersEl.querySelectorAll('.cert-chip').forEach((x) =>
          x.setAttribute('aria-pressed', String(x.textContent === name)));
        render();
      });
      filtersEl.append(b);
    });
  }

  /* ---------- cards ---------- */
  function render() {
    const q = query.trim().toLowerCase();
    const list = certs.filter((c) =>
      (activeCategory === 'ALL' || cat(c) === activeCategory) &&
      (!q || [c.title, c.issuer, c.credentialId, c.description].join(' ').toLowerCase().includes(q)));

    grid.replaceChildren(...list.map(card));

    if (!certs.length) setStatus('empty', 'NO CERTIFICATIONS YET', 'Verified certifications will appear here.');
    else if (!list.length) setStatus('empty', 'NO MATCHES', 'Try a different search or category.');
    else setStatus(null);
  }

  function card(c) {
    const art = el('article', 'cert-card');
    art.dataset.id = c.id || '';

    const media = el('button', 'cert-card__media');
    media.type = 'button';
    media.setAttribute('aria-label', `View ${c.title} certificate`);
    const preview = c.thumbnail || (c.type !== 'pdf' ? c.image : '');
    if (preview) {
      const img = new Image();
      img.src = preview;
      img.alt = `${c.title} certificate issued by ${c.issuer}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.append(img);
    } else {
      media.append(el('span', 'cert-card__pdf', 'PDF'));
    }
    media.addEventListener('click', () => open(c));
    art.append(media);

    const body = el('div', 'cert-card__body');
    const head = el('div', 'cert-card__tags');
    head.append(el('span', 'cert-tag', cat(c)));
    if (c.type === 'pdf') head.append(el('span', 'cert-tag cert-tag--pdf', 'PDF CERTIFICATE'));
    if (c.featured) head.append(el('span', 'cert-tag cert-tag--featured', 'FEATURED'));
    body.append(head, el('h3', 'cert-card__title', c.title), el('p', 'cert-card__issuer', c.issuer));

    const meta = el('dl', 'cert-card__meta');
    const row = (k, v) => { if (!v) return; const d = el('div'); d.append(el('dt', '', k), el('dd', '', v)); meta.append(d); };
    row('ISSUED', formatDate(c.date));
    row('CREDENTIAL', c.credentialId);
    body.append(meta);

    const actions = el('div', 'cert-card__actions');
    const view = el('button', 'cert-btn cert-btn--primary', 'VIEW CERTIFICATE');
    view.type = 'button';
    view.addEventListener('click', () => open(c));
    actions.append(view);
    if (c.credentialUrl) {
      const a = el('a', 'cert-btn', 'VERIFY CREDENTIAL');
      a.href = c.credentialUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      actions.append(a);
    }
    body.append(actions);
    art.append(body);
    return art;
  }

  /* ---------- viewer ---------- */
  let modal, stage, vImg, vTitle, lastFocus;
  let view = { s: 1, x: 0, y: 0 };
  const pointers = new Map();
  let pinchStart = 0, pinchScale = 1;

  function buildModal() {
    modal = el('div', 'cert-modal');
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Certificate viewer');

    const bar = el('div', 'cert-modal__bar');
    vTitle = el('span', 'cert-modal__title');
    const tools = el('div', 'cert-modal__tools');
    [['ZOOM +', () => zoom(1.25)], ['ZOOM -', () => zoom(0.8)], ['RESET', reset],
     ['FULLSCREEN', toggleFs], ['CLOSE', close]].forEach(([label, fn]) => {
      const b = el('button', 'cert-btn', label);
      b.type = 'button';
      b.addEventListener('click', fn);
      if (label === 'CLOSE') b.dataset.close = '1';
      tools.append(b);
    });
    bar.append(vTitle, tools);

    stage = el('div', 'cert-modal__stage');
    vImg = new Image();
    vImg.className = 'cert-modal__img';
    vImg.draggable = false;
    stage.append(vImg);
    modal.append(bar, stage);
    document.body.append(modal);

    stage.addEventListener('wheel', (e) => {
      e.preventDefault();
      zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });
    stage.addEventListener('dblclick', () => (view.s > 1 ? reset() : zoom(2)));

    stage.addEventListener('pointerdown', (e) => {
      stage.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) { pinchStart = dist(); pinchScale = view.s; }
    });
    stage.addEventListener('pointermove', (e) => {
      const p = pointers.get(e.pointerId);
      if (!p) return;
      if (pointers.size === 2) {
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        view.s = clamp(pinchScale * (dist() / pinchStart));
      } else if (view.s > 1) {
        view.x += e.clientX - p.x;
        view.y += e.clientY - p.y;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      }
      apply();
    });
    const up = (e) => pointers.delete(e.pointerId);
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);

    document.addEventListener('keydown', (e) => {
      if (modal.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === '+' || e.key === '=') zoom(1.25);
      else if (e.key === '-') zoom(0.8);
      else if (e.key === '0') reset();
      else if (e.key === 'Tab') trapFocus(e);
    });
  }

  const dist = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; };
  const clamp = (s) => Math.min(6, Math.max(1, s));
  function apply() {
    if (view.s === 1) { view.x = 0; view.y = 0; }
    vImg.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.s})`;
    stage.classList.toggle('is-zoomed', view.s > 1);
  }
  function zoom(f) { view.s = clamp(view.s * f); apply(); }
  function reset() { view = { s: 1, x: 0, y: 0 }; apply(); }
  function toggleFs() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (modal.requestFullscreen) modal.requestFullscreen().catch(() => {});
  }
  function trapFocus(e) {
    const f = [...modal.querySelectorAll('button')];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function open(c) {
    if (c.type === 'pdf') { window.open(c.image, '_blank', 'noopener,noreferrer'); return; }
    if (!modal) buildModal();
    lastFocus = document.activeElement;
    vImg.src = c.image;
    vImg.alt = `${c.title} certificate issued by ${c.issuer}`;
    vTitle.textContent = `${c.title} — ${c.issuer}`;
    reset();
    modal.hidden = false;
    document.body.classList.add('cert-lock');
    modal.querySelector('[data-close]').focus();
  }
  function close() {
    if (document.fullscreenElement) document.exitFullscreen();
    modal.hidden = true;
    document.body.classList.remove('cert-lock');
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- init ---------- */
  searchEl && searchEl.addEventListener('input', () => { query = searchEl.value; render(); });
  load().then(() => {
    // re-apply #certifications scroll after async content changes layout
    if (location.hash === '#certifications') $('certifications').scrollIntoView();
  });
})();
