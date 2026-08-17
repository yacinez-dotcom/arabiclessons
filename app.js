/* ═══════════════════════════════════════════════
   BRIQUE FINALE — APP
   Lit les variables globales définies par les
   briques données (A1_TEXTS, B2_TEXTS, etc.)
   Ne contient aucune donnée textuelle.
═══════════════════════════════════════════════ */
'use strict';

/* ── Utilitaire ────────────────────────────── */
var strip = function(s) {
  return s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
};

/* ── Assemblage des textes depuis les briques ─
   Si une brique n'est pas chargée → tableau vide
   sans erreur, sans casser le reste du site    */
var TEXTS = {
  A1: (typeof A1_TEXTS !== 'undefined') ? A1_TEXTS : [],
  A2: (typeof A2_TEXTS !== 'undefined') ? A2_TEXTS : [],
  B1: (typeof B1_TEXTS !== 'undefined') ? B1_TEXTS : [],
  B2: (typeof B2_TEXTS !== 'undefined') ? B2_TEXTS : [],
  C1: (typeof C1_TEXTS !== 'undefined') ? C1_TEXTS : [],
  C2: (typeof C2_TEXTS !== 'undefined') ? C2_TEXTS : [],
};

/* ── État ──────────────────────────────────── */
var S = {
  level:  'A1',
  textId: null,
  tk:     true,   // tashkeel activé
};

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════
   RENDU — SIDEBAR
═══════════════════════════════════════════════ */
function renderNav() {
  document.getElementById('nav').innerHTML = LEVELS.map(function(l) {
    var active = S.level === l.id ? ' active' : '';
    return '<button class="lvl-btn' + active + '" onclick="go(\'' + l.id + '\')">'
         + '<span class="lvl-tag">' + l.id + '</span>'
         + '<span>' + l.name + '</span>'
         + '</button>';
  }).join('');
}

/* ═══════════════════════════════════════════════
   RENDU — ZONE PRINCIPALE
═══════════════════════════════════════════════ */
function renderMain() {
  if (S.textId) {
    var txts = TEXTS[S.level] || [];
    var txt  = txts.filter(function(x) { return x.id === S.textId; })[0];
    if (txt) {
      document.getElementById('main').innerHTML = renderText(txt);
      return;
    }
  }
  document.getElementById('main').innerHTML = renderOverview();
}

/* ── Vue liste ─────────────────────────────── */
function renderOverview() {
  var lv   = LEVELS.filter(function(l) { return l.id === S.level; })[0];
  var txts = TEXTS[S.level] || [];
  var nb   = txts.length;

  var cards = nb === 0
    ? '<div class="empty">✦ Les textes de ce niveau seront ajoutés prochainement.<br>'
    + '<span style="font-size:.86rem;margin-top:.3rem;display:block">'
    + 'Consultez A1 ou B2 pour des exemples.</span></div>'
    : '<div class="txt-grid">'
    + txts.map(function(t) {
        return '<div class="txt-card" onclick="openText(\'' + t.id + '\')">'
             + '<div class="card-ar">' + (S.tk ? t.titleW : t.titleP) + '</div>'
             + '<div class="card-fr">' + t.titleFr + '</div>'
             + '</div>';
      }).join('')
    + '</div>';

  return '<div class="lv-hd">'
       + '<h2>' + lv.id + ' — ' + lv.name + '</h2>'
       + '<p class="sub">' + lv.ar + ' · ' + nb + ' texte' + (nb !== 1 ? 's' : '') + ' disponible' + (nb !== 1 ? 's' : '') + '</p>'
       + '</div>'
       + '<div class="sec-lbl">Textes du niveau ' + lv.id + '</div>'
       + cards
       + '<div class="orn">❖ ✦ ❖</div>'
       + '<div class="sec-lbl">Vocabulaire thématique</div>'
       + '<div class="empty">Vocabulaire thématique du niveau ' + lv.id
       + ' — technologie · société · santé · politique · textes coraniques · terminologie islamique — à venir.</div>';
}

/* ── Vue texte ─────────────────────────────── */
function renderText(txt) {
  var w = S.tk;

  /* Texte arabe interactif */
  var arabicHtml = txt.sentences.map(function(sentence) {
    var words = sentence.map(function(g) {
      return '<span class="wg">' + (w ? g.w : strip(g.w)) + '<span class="tip">' + g.t + '</span></span>';
    }).join(' ');
    return '<div class="ar-sent">' + words + '</div>';
  }).join('');

  /* Tableau vocabulaire */
  var vocabRows = txt.vocabulary.map(function(v) {
    var rootTag = v.root !== '—'
      ? '<br><span class="root-tag">' + v.root + '</span>'
      : '';
    return '<tr>'
         + '<td class="td-ar">'  + (w ? v.w : v.p) + '</td>'
         + '<td class="td-tr">'  + v.tr  + '</td>'
         + '<td>'                + v.fr  + '</td>'
         + '<td class="td-fm">'  + v.fm  + rootTag + '</td>'
         + '</tr>';
  }).join('');

  /* Tableau grammaire */
  var gh = txt.grammar.gtblHeaders || ['Verbe', 'Forme', 'Masdar', 'Signification'];
  var gramRows = txt.grammar.table.map(function(r) {
    return '<tr>'
         + '<td class="ar">' + (w ? r.v : strip(r.v)) + '</td>'
         + '<td style="color:var(--parch-dim)">' + r.f + '</td>'
         + '<td class="ar">' + (w ? r.m : strip(r.m)) + '</td>'
         + '<td style="color:var(--parchment)">' + r.fr + '</td>'
         + '</tr>';
  }).join('');

  var tglLabel = w ? 'Masquer les voyelles' : 'Afficher les voyelles';
  var tglAr    = w ? 'أَ' : 'ا';
  var tglClass = w ? 'tgl-btn on' : 'tgl-btn';

  var thHtml = gh.map(function(h) { return '<th>' + h + '</th>'; }).join('');

  return '<button class="back-btn" onclick="goBack()">← Retour au niveau ' + txt.level + '</button>'

       + '<div class="txt-panel">'
       +   '<div class="txt-panel-hd">'
       +     '<div>'
       +       '<div class="txt-title">' + (w ? txt.titleW : txt.titleP) + '</div>'
       +       '<div class="txt-sub">'   + txt.titleFr + '</div>'
       +     '</div>'
       +     '<button class="' + tglClass + '" onclick="toggleTk()">'
       +       '<span class="tgl-ar">' + tglAr + '</span>'
       +       tglLabel
       +     '</button>'
       +   '</div>'
       +   '<div class="hint-bar">'
       +     '<span class="hint-dot hover"></span>Survol → traduction rapide &nbsp;·&nbsp;'
       +     '<span class="hint-dot click"></span>Clic → épingler &nbsp;·&nbsp; Clic ailleurs → fermer'
       +   '</div>'
       +   '<div class="ar-text">' + arabicHtml + '</div>'
       + '</div>'

       + '<div class="orn">❖ ✦ ❖</div>'

       + '<div class="section">'
       +   '<div class="sec-hd"><span class="sec-ico">📖</span>Vocabulaire nouveau</div>'
       +   '<table class="vtbl">'
       +     '<thead><tr><th>Mot arabe</th><th>Translittération</th><th>Traduction</th><th>Forme &amp; Racine</th></tr></thead>'
       +     '<tbody>' + vocabRows + '</tbody>'
       +   '</table>'
       + '</div>'

       + '<div class="section">'
       +   '<div class="sec-hd"><span class="sec-ico">📐</span>Leçon de grammaire</div>'
       +   '<div class="gram-box">'
       +     '<div class="gram-concept">' + txt.grammar.concept + '</div>'
       +     '<div class="gram-excerpt">' + (w ? txt.grammar.excerptW : txt.grammar.excerptP) + '</div>'
       +     '<p class="gram-exp">'       + txt.grammar.exp     + '</p>'
       +     '<table class="gtbl"><thead><tr>' + thHtml + '</tr></thead><tbody>' + gramRows + '</tbody></table>'
       +     '<p class="gram-note">'      + txt.grammar.note    + '</p>'
       +   '</div>'
       + '</div>';
}

/* ═══════════════════════════════════════════════
   CLIC POUR ÉPINGLER (event delegation)
═══════════════════════════════════════════════ */
document.addEventListener('click', function(e) {
  var wg = e.target.closest('.wg');
  if (wg) {
    var wasPinned = wg.classList.contains('pinned');
    document.querySelectorAll('.wg.pinned').forEach(function(el) { el.classList.remove('pinned'); });
    if (!wasPinned) wg.classList.add('pinned');
  } else {
    document.querySelectorAll('.wg.pinned').forEach(function(el) { el.classList.remove('pinned'); });
  }
}, true);

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
renderNav();
renderMain();
