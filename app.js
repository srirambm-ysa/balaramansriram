// ── Rendering engine — do not edit. All content lives in data.js ────────────

function imgOrFallback(src, alt, prefix) {
  const initials = (alt || '?').split(' ').map(w => w[0]).join('').slice(0, 2);
  if (!src) {
    return `<span class="${prefix}-frame"><span class="${prefix}-fallback" style="display:flex">${initials}</span></span>`;
  }
  return `<span class="${prefix}-frame">
    <img src="${src}" alt="${alt}" class="${prefix}-img" loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="${prefix}-fallback" style="display:none">${initials}</span>
  </span>`;
}

function renderNav(d) {
  document.getElementById('nav').innerHTML = `
    <a href="#" class="nav-logo">${d.logo}</a>
    <div class="nav-links">
      ${d.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      <button class="nav-toggle" aria-label="Menu">☰</button>
    </div>`;
}

function renderHero(d) {
  document.getElementById('hero').innerHTML = `
    <div class="hero-watermark" aria-hidden="true">${d.watermark}</div>
    <div class="hero-content">
      ${imgOrFallback(d.profile.image, d.profile.alt, 'profile')}
      <div class="hero-text">
        <p class="hero-label">${d.label}</p>
        <h1 class="hero-headline">${d.headline}</h1>
        <p class="hero-subhead">${d.subhead}</p>
        <div class="hero-ctas">
          ${d.ctas.map(c => `<a href="${c.href}">${c.label}</a>`).join('')}
        </div>
      </div>
    </div>`;
}

function renderLab(d) {
  document.getElementById('lab').innerHTML = `
    <div class="section-watermark" aria-hidden="true">${d.watermark}</div>
    <div class="section-container">
      <div class="section-header">
        <div class="section-head-row">
          ${d.logo && d.logo.image ? imgOrFallback(d.logo.image, d.logo.alt, 'logo') : ''}
          <div>
            <span class="section-tag">${d.tag}</span>
            <h2 class="section-title">${d.title}</h2>
          </div>
        </div>
      </div>
      <div class="featured-card reveal">
        <div class="card-title">${d.featured.title}</div>
        <p class="card-desc">${d.featured.desc}</p>
        <div class="card-links">
          ${d.featured.links.map(l => `<a href="${l.url}">${l.label}</a>`).join('')}
        </div>
      </div>
      <button class="expand-btn" data-target="lab-archive" aria-expanded="false">
        <span class="icon">+</span> ${d.expandLabel}
      </button>
      <div class="archive-grid" id="lab-archive" role="region" aria-hidden="true">
        ${d.archive.map(item => `
          <div class="archive-item">
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderStudy(d) {
  document.getElementById('study').innerHTML = `
    <div class="section-watermark" aria-hidden="true">${d.watermark}</div>
    <div class="section-container">
      <div class="section-header">
        <div class="section-head-row">
          ${d.logo && d.logo.image ? imgOrFallback(d.logo.image, d.logo.alt, 'logo') : ''}
          <div>
            <span class="section-tag">${d.tag}</span>
            <h2 class="section-title">${d.title}</h2>
          </div>
        </div>
      </div>
      <div class="featured-card reveal">
        <p class="card-label">${d.featured.cardLabel}</p>
        <h3 class="card-title">${d.featured.title}</h3>
        <p class="card-desc">${d.featured.desc}</p>
        <div class="card-link"><a href="${d.featured.link.url}">${d.featured.link.label}</a></div>
      </div>
      <button class="expand-btn" data-target="study-bookshelf" aria-expanded="false">
        <span class="icon">+</span> ${d.expandLabel}
      </button>
      <div class="archive-grid" id="study-bookshelf" role="region" aria-hidden="true">
        ${d.bookshelf.map(item => {
          const status = item.url
            ? `<a href="${item.url}" style="color:var(--study)">${item.status}</a>`
            : item.status;
          return `<div class="archive-item">
            <div class="item-title">${item.title}</div>
            <div class="item-status">${status}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

function renderBlueprint(d) {
  const eduHtml = d.education ? `
    <div class="edu-block reveal">
      <h3 class="edu-title">${d.education.title}</h3>
      <div class="edu-items">
        ${d.education.items.map(item => `
          <div class="edu-item">
            <div class="edu-degree">${item.degree}</div>
            ${item.school ? `<div class="edu-school">${item.school}</div>` : ''}
            ${item.note ? `<div class="edu-note">${item.note}</div>` : ''}
          </div>`).join('')}
      </div>
    </div>
  ` : '';

  document.getElementById('blueprint').innerHTML = `
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">${d.title}</h2>
      </div>
      ${eduHtml}
      <div class="timeline">
        ${d.items.map(item => `
          <div class="timeline-item reveal">
            <div class="timeline-year-bg" aria-hidden="true">${item.year}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="tl-year">${item.year}</div>
              <div class="tl-title">${item.title}</div>
              <div class="tl-subtitle">${item.subtitle}</div>
              <div class="tl-desc">${item.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderContact(d) {
  document.getElementById('contact').innerHTML = `
    <div class="section-container">
      <div class="contact-layout">
        <div class="section-header">
          <span class="section-tag contact-tag">// Contact</span>
          <h2 class="section-title">${d.title}</h2>
        </div>
        <p class="contact-intro">${d.intro}</p>
        <div class="contact-details">
          <div class="contact-row">
            <span class="contact-icon">✉</span>
            <a href="mailto:${d.email}">${d.email}</a>
          </div>
          <div class="contact-row">
            <span class="contact-icon">◈</span>
            <span>${d.address}</span>
          </div>
          <div class="contact-row">
            <span class="contact-icon">▸</span>
            <span>${d.availability}</span>
          </div>
        </div>
      </div>
    </div>`;
}

function renderFooter(d) {
  document.getElementById('footer').innerHTML = `
    <div class="footer-links">
      ${d.links.map(l => `<a href="${l.url}">${l.label}</a>`).join('')}
    </div>
    <p class="footer-copy">${d.copyright}
      <span class="footer-visit">· <span id="visitor-count">—</span> visits</span>
    </p>`;
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  renderNav(DATA.nav);
  renderHero(DATA.hero);
  renderLab(DATA.lab);
  renderStudy(DATA.study);
  renderBlueprint(DATA.blueprint);
  renderContact(DATA.contact);
  renderFooter(DATA.footer);

  // Expand / collapse archive grids
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const expanded = btn.classList.toggle('expanded');
      target.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', expanded);
      target.setAttribute('aria-hidden', !expanded);
    });
  });

  // Scroll-triggered reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Nav border on scroll
  const nav = document.getElementById('nav');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Visitor count via CountAPI
  fetch('https://api.countapi.xyz/hit/balaramsriram-personal/visits')
    .then(r => r.json())
    .then(d => { document.getElementById('visitor-count').textContent = d.value; })
    .catch(() => { document.getElementById('visitor-count').textContent = '—'; });

});
