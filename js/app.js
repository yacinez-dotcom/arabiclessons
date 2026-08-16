/* ═══════════════════════════════════════════════════════════════
   MADRASA AL-ARABIYYA — Logique applicative
   Dépend de : js/data.js (doit être chargé avant)
═══════════════════════════════════════════════════════════════ */

"use strict";

/* ── État de l'application ── */
let S = {
  level:  'A1',    // niveau actif
  textId: 'a1-1', // texte ouvert (null = vue overview)
  tk:     true,    // tashkeel activé ?
};

/* ══════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════ */

function go(level) {
  S.level  = level;
  S.textId = null;
  renderNav();
  renderMain();
}

function openText(id) {
  S.textId = id;
  renderMain();
  document.getElementById('main').scrollTop = 0;
}

function goBack() {
  S.textId = null;
  renderMain();
}

function toggleTk() {
  S.tk = !S.tk;
  renderMain();
}

/* ══════════════════════════════════════════════════════
   RENDU — BARRE LATÉRALE
══════════════════════════════════════════════════════ */

function renderNav() {
  document.getElementById('nav').innerHTML = LEVELS.map(l => `
    <button class="lvl-btn${S.level === l.id ? ' active' : ''}" onclick="go('${l.id}')">
      <span class="lvl-tag">${l.id}</span>
      <span>${l.name}</span>
    </button>
  `).join('');
}

/* ══════════════════════════════════════════════════════
   RENDU — ZONE PRINCIPALE
══════════════════════════════════════════════════════ */

function renderMain() {
  if (S.textId) {
    const txt = (TEXTS[S.level] || []).find(x => x.id === S.textId);
    if (txt) {
      document.getElementById('main').innerHTML = renderText(txt);
      return;
    }
  }
  document.getElementById('main').innerHTML = renderOverview();
}

/* ── Vue liste des textes d'un niveau ── */
function renderOverview() {
  const lv   = LEVELS.find(l => l.id === S.level);
  const txts = TEXTS[S.level] || [];

  const textCards = txts.length === 0
    ? `<div class="empty">
        ✦ Les textes de ce niveau seront ajoutés prochainement.<br>
        <span style="font-size:.86rem;margin-top:.3rem;display:block">
          Consultez les niveaux A1 ou B2 pour voir des exemples.
        </span>
       </div>`
    : `<div class="txt-grid">
        ${txts.map(t => `
          <div class="txt-card" onclick="openText('${t.id}')">
            <div class="card-ar">${S.tk ? t.titleW : t.titleP}</div>
            <div class="card-fr">${t.titleFr}</div>
          </div>
        `).join('')}
       </div>`;

  return `
    <div class="lv-hd">
      <h2>${lv.id} — ${lv.name}</h2>
      <p class="sub">${lv.ar} · ${txts.length} texte${txts.length !== 1 ? 's' : ''} disponible${txts.length !== 1 ? 's' : ''}</p>
    </div>

    <div class="sec-lbl">Textes du niveau ${lv.id}</div>
    ${textCards}

    <div class="orn">❖ ✦ ❖</div>

    <div class="sec-lbl">Vocabulaire thématique</div>
    <div class="empty">
      Vocabulaire thématique étendu du niveau ${lv.id} —
      technologie · société · santé · politique · textes coraniques · terminologie islamique — à venir.
    </div>
  `;
}

/* ── Vue détail d'un texte ── */
function renderText(txt) {
  const w = S.tk;

  /* ── Texte arabe interactif ── */
  const arabicHtml = txt.sentences.map(sentence => {
    const words = sentence.map(g => `
      <span class="wg">
        ${w ? g.w : strip(g.w)}
        <span class="tip">${g.t}</span>
      </span>
    `).join(' ');
    return `<div class="ar-sent">${words}</div>`;
  }).join('');

  /* ── Tableau de vocabulaire ── */
  const vocabRows = txt.vocabulary.map(v => `
    <tr>
      <td class="td-ar">${w ? v.w : v.p}</td>
      <td class="td-tr">${v.tr}</td>
      <td>${v.fr}</td>
      <td class="td-fm">
        ${v.fm}
        ${v.root !== '—' ? `<br><span class="root-tag">${v.root}</span>` : ''}
      </td>
    </tr>
  `).join('');

  /* ── Tableau de grammaire ── */
  const gh = txt.grammar.gtblHeaders || ['Verbe', 'Forme', 'Masdar', 'Signification'];
  const gramRows = txt.grammar.table.map(r => `
    <tr>
      <td class="ar">${w ? r.v : strip(r.v)}</td>
      <td style="color:var(--parch-dim)">${r.f}</td>
      <td class="ar">${w ? r.m : strip(r.m)}</td>
      <td style="color:var(--parchment)">${r.fr}</td>
    </tr>
  `).join('');

  return `
    <button class="back-btn" onclick="goBack()">← Retour au niveau ${txt.level}</button>

    <div class="txt-panel">
      <div class="txt-panel-hd">
        <div>
          <div class="txt-title">${w ? txt.titleW : txt.titleP}</div>
          <div class="txt-sub">${txt.titleFr}</div>
        </div>
        <button class="tgl-btn${w ? ' on' : ''}" onclick="toggleTk()">
          <span class="tgl-ar">${w ? 'أَ' : 'ا'}</span>
          ${w ? 'Masquer les voyelles' : 'Afficher les voyelles'}
        </button>
      </div>

      <div class="hint-bar">
        <span class="hint-dot hover"></span>Survol → traduction rapide &nbsp;·&nbsp;
        <span class="hint-dot click"></span>Clic → traduction épinglée &nbsp;·&nbsp; Re-cliquer ou cliquer ailleurs pour fermer
      </div>

      <div class="ar-text">${arabicHtml}</div>
    </div>

    <div class="orn">❖ ✦ ❖</div>

    <div class="section">
      <div class="sec-hd">
        <span class="sec-ico">📖</span>
        Vocabulaire nouveau
      </div>
      <table class="vtbl">
        <thead>
          <tr>
            <th>Mot arabe</th>
            <th>Translittération</th>
            <th>Traduction</th>
            <th>Forme &amp; Racine</th>
          </tr>
        </thead>
        <tbody>${vocabRows}</tbody>
      </table>
    </div>

    <div class="section">
      <div class="sec-hd">
        <span class="sec-ico">📐</span>
        Leçon de grammaire
      </div>
      <div class="gram-box">
        <div class="gram-concept">${txt.grammar.concept}</div>
        <div class="gram-excerpt">${w ? txt.grammar.excerptW : txt.grammar.excerptP}</div>
        <p class="gram-exp">${txt.grammar.exp}</p>
        <table class="gtbl">
          <thead>
            <tr>${gh.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>${gramRows}</tbody>
        </table>
        <p class="gram-note">${txt.grammar.note}</p>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════
   CLIC POUR ÉPINGLER LA TRADUCTION
   Event delegation → survit aux re-renders innerHTML
══════════════════════════════════════════════════════ */

document.addEventListener('click', function (e) {
  const wg = e.target.closest('.wg');
  if (wg) {
    const wasPinned = wg.classList.contains('pinned');
    /* Dépingler tous les autres */
    document.querySelectorAll('.wg.pinned').forEach(el => el.classList.remove('pinned'));
    /* Basculer l'élément cliqué */
    if (!wasPinned) wg.classList.add('pinned');
  } else {
    /* Clic en dehors → tout fermer */
    document.querySelectorAll('.wg.pinned').forEach(el => el.classList.remove('pinned'));
  }
}, true);

/* ══════════════════════════════════════════════════════
   INITIALISATION
══════════════════════════════════════════════════════ */

renderNav();
renderMain();
