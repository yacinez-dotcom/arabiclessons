/* ═══════════════════════════════════════════════
   BRIQUE FINALE — APP
═══════════════════════════════════════════════ */
'use strict';

/* ── Utilitaire ────────────────────────────── */
var strip = function(s) {
  return s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
};

/* ── Assemblage des textes ─────────────────── */
var TEXTS = {
  A1: (typeof A1_TEXTS !== 'undefined') ? A1_TEXTS : [],
  A2: (typeof A2_TEXTS !== 'undefined') ? A2_TEXTS : [],
  B1: (typeof B1_TEXTS !== 'undefined') ? B1_TEXTS : [],
  B2: (typeof B2_TEXTS !== 'undefined') ? B2_TEXTS : [],
  C1: (typeof C1_TEXTS !== 'undefined') ? C1_TEXTS : [],
  C2: (typeof C2_TEXTS !== 'undefined') ? C2_TEXTS : [],
};

/* ── Couleurs de niveaux (partagées) ────────── */
var LV_COLORS = {
  A1:'#2e7d32', A2:'#1565c0', B1:'#6a1fb0',
  B2:'#b5400b', C1:'#7b5b00', C2:'#8d1b1b'
};

/* ── État ──────────────────────────────────── */
var S = {
  level:       'A1',
  textId:      null,
  tk:          true,
  mode:        'texts',   // 'texts' | 'lessons' | 'vocab'
  filterLevel: 'ALL',     // filtre leçons
  vocabFilter: 'ALL',     // filtre vocabulaire
  vocabSearch: '',        // recherche vocabulaire
};

/* ═══════════════════════════════════════════════
   NAVIGATION — fonctions
═══════════════════════════════════════════════ */
function go(level) {
  S.mode   = 'texts';
  S.level  = level;
  S.textId = null;
  renderNav();
  renderMain();
}

function openText(id) {
  S.mode   = 'texts';
  S.textId = id;
  renderMain();
  document.getElementById('main').scrollTop = 0;
}

function goBack() {
  S.textId = null;
  renderMain();
}

function goLessons() {
  S.mode        = 'lessons';
  S.textId      = null;
  S.filterLevel = 'ALL';
  renderNav();
  renderMain();
}

function goVocab() {
  S.mode        = 'vocab';
  S.textId      = null;
  S.vocabFilter = 'ALL';
  S.vocabSearch = '';
  renderNav();
  renderMain();
}

function filterLessons(lvl) {
  S.filterLevel = lvl;
  document.getElementById('main').scrollTop = 0;
  renderMain();
}

function filterVocab(lvl) {
  S.vocabFilter = lvl;
  S.vocabSearch = '';
  document.getElementById('main').scrollTop = 0;
  renderMain();
}

function vocabType(q) {
  S.vocabSearch = q;
  var tb = document.getElementById('vocab-tbody');
  var ct = document.getElementById('vocab-count');
  if (tb) tb.innerHTML = buildVocabRows();
  if (ct) ct.textContent = getVocabFiltered().length + ' mots';
}

function toggleTk() {
  S.tk = !S.tk;
  /* Optimisation : en mode vocab, on ne re-rend que le tableau */
  if (S.mode === 'vocab' && document.getElementById('vocab-tbody')) {
    document.getElementById('vocab-tbody').innerHTML = buildVocabRows();
    var btn = document.querySelector('.tgl-btn');
    if (btn) {
      btn.className = S.tk ? 'tgl-btn on' : 'tgl-btn';
      btn.innerHTML = '<span class="tgl-ar">' + (S.tk ? 'أَ' : 'ا') + '</span>'
                    + (S.tk ? 'Masquer voyelles' : 'Afficher voyelles');
    }
    return;
  }
  renderMain();
}

/* ═══════════════════════════════════════════════
   RENDU — SIDEBAR
═══════════════════════════════════════════════ */
function renderNav() {
  var levBtns = LEVELS.map(function(l) {
    var a = (S.mode === 'texts' && S.level === l.id) ? ' active' : '';
    return '<button class="lvl-btn' + a + '" onclick="go(\'' + l.id + '\')">'
         + '<span class="lvl-tag">' + l.id + '</span>'
         + '<span>' + l.name + '</span>'
         + '</button>';
  }).join('');

  var btnLessons = '<button class="lvl-btn rev-btn' + (S.mode === 'lessons' ? ' active' : '') + '" onclick="goLessons()">'
                 + '<span class="lvl-tag">📚</span><span>Révision</span></button>';

  var btnVocab   = '<button class="lvl-btn rev-btn' + (S.mode === 'vocab' ? ' active' : '') + '" onclick="goVocab()">'
                 + '<span class="lvl-tag">📖</span><span>Vocabulaire</span></button>';

  document.getElementById('nav').innerHTML =
    levBtns
    + '<div class="nav-sep"></div>'
    + btnLessons
    + btnVocab;
}

/* ═══════════════════════════════════════════════
   RENDU — ZONE PRINCIPALE
═══════════════════════════════════════════════ */
function renderMain() {
  var el = document.getElementById('main');
  if (S.mode === 'lessons') { el.innerHTML = renderLessons(); return; }
  if (S.mode === 'vocab')   { el.innerHTML = renderVocab();   return; }
  if (S.textId) {
    var txts = TEXTS[S.level] || [];
    var txt  = txts.filter(function(x) { return x.id === S.textId; })[0];
    if (txt) { el.innerHTML = renderText(txt); return; }
  }
  el.innerHTML = renderOverview();
}

/* ── Vue liste textes ──────────────────────── */
function renderOverview() {
  var lv   = LEVELS.filter(function(l) { return l.id === S.level; })[0];
  var txts = TEXTS[S.level] || [];
  var nb   = txts.length;
  var cards = nb === 0
    ? '<div class="empty">✦ Les textes de ce niveau seront ajoutés prochainement.</div>'
    : '<div class="txt-grid">' + txts.map(function(t) {
        return '<div class="txt-card" onclick="openText(\'' + t.id + '\')">'
             + '<div class="card-ar">' + (S.tk ? t.titleW : t.titleP) + '</div>'
             + '<div class="card-fr">' + t.titleFr + '</div>'
             + '</div>';
      }).join('') + '</div>';
  return '<div class="lv-hd">'
       + '<h2>' + lv.id + ' — ' + lv.name + '</h2>'
       + '<p class="sub">' + lv.ar + ' · ' + nb + ' texte' + (nb !== 1 ? 's' : '') + '</p>'
       + '</div>'
       + '<div class="sec-lbl">Textes du niveau ' + lv.id + '</div>'
       + cards
       + '<div class="orn">❖ ✦ ❖</div>'
       + '<div class="sec-lbl">Vocabulaire thématique</div>'
       + '<div class="empty">Consultez la section <strong>📖 Vocabulaire</strong> pour réviser tous les mots du niveau ' + lv.id + '.</div>';
}

/* ══════════════════════════════════════════════
   VUE RÉVISION GRAMMATICALE
══════════════════════════════════════════════ */
function renderLessons() {
  var w   = S.tk;
  var lvl = S.filterLevel;
  var all = [];
  LEVELS.forEach(function(lv) {
    (TEXTS[lv.id] || []).forEach(function(txt) { all.push({ lv: lv.id, txt: txt }); });
  });
  var filtered = lvl === 'ALL' ? all : all.filter(function(l) { return l.lv === lvl; });

  var filters = ['ALL','A1','A2','B1','B2','C1','C2'].map(function(f) {
    var on = lvl === f ? ' flt-on' : '';
    var lbl = f === 'ALL' ? 'Tout' : f;
    return '<button class="flt-btn' + on + '" onclick="filterLessons(\'' + f + '\')">' + lbl + '</button>';
  }).join('');

  var cards = filtered.map(function(l) {
    var g   = l.txt.grammar;
    var col = LV_COLORS[l.lv] || '#444';
    var rows = g.table.slice(0, 3).map(function(r) {
      return '<tr>'
           + '<td class="ar rev-v">' + (w ? r.v : strip(r.v)) + '</td>'
           + '<td class="rev-f">'   + r.f + '</td>'
           + '<td class="ar rev-m">' + (w ? r.m : strip(r.m)) + '</td>'
           + '<td class="rev-fr">'  + r.fr + '</td>'
           + '</tr>';
    }).join('');
    var ths = g.gtblHeaders.map(function(h) { return '<th>' + h + '</th>'; }).join('');
    return '<div class="rev-card">'
         + '<div class="rev-card-hd">'
         +   '<span class="rev-badge" style="background:' + col + '">' + l.lv + '</span>'
         +   '<div class="rev-concept">' + g.concept + '</div>'
         + '</div>'
         + '<div class="rev-excerpt ar">' + (w ? g.excerptW : g.excerptP) + '</div>'
         + '<div class="rev-exp">' + g.exp + '</div>'
         + '<table class="rev-tbl"><thead><tr>' + ths + '</tr></thead><tbody>' + rows + '</tbody></table>'
         + '<div class="rev-note">' + g.note + '</div>'
         + '</div>';
  }).join('');

  return '<div class="rev-hd">'
       + '<div class="rev-hd-top">'
       +   '<div><h2 class="ar">الْمُرَاجَعَةُ النَّحْوِيَّةُ</h2>'
       +   '<p class="sub">Toutes les leçons · A1 → C2 · ' + filtered.length + ' / ' + all.length + ' concepts</p></div>'
       +   '<button class="' + (w ? 'tgl-btn on' : 'tgl-btn') + '" onclick="toggleTk()">'
       +     '<span class="tgl-ar">' + (w ? 'أَ' : 'ا') + '</span>'
       +     (w ? 'Masquer voyelles' : 'Afficher voyelles')
       +   '</button>'
       + '</div>'
       + '<div class="rev-filters">' + filters + '</div>'
       + '</div>'
       + (filtered.length === 0
           ? '<div class="empty">Aucune leçon disponible.</div>'
           : '<div class="rev-grid">' + cards + '</div>');
}

/* ══════════════════════════════════════════════
   VUE VOCABULAIRE — tous les mots A1 → C2
══════════════════════════════════════════════ */
function getAllVocab() {
  var all = [];
  LEVELS.forEach(function(lv) {
    (TEXTS[lv.id] || []).forEach(function(txt) {
      txt.vocabulary.forEach(function(v) { all.push({ lv: lv.id, v: v }); });
    });
  });
  return all;
}

function getVocabFiltered() {
  var all = getAllVocab();
  var lvl = S.vocabFilter;
  var q   = S.vocabSearch.trim();
  var qL  = q.toLowerCase();
  if (lvl !== 'ALL') all = all.filter(function(e) { return e.lv === lvl; });
  if (q) all = all.filter(function(e) {
    var v = e.v;
    return (v.w    && v.w.includes(q))
        || (v.p    && v.p.includes(q))
        || (v.tr   && v.tr.toLowerCase().includes(qL))
        || (v.fr   && v.fr.toLowerCase().includes(qL))
        || (v.fm   && v.fm.toLowerCase().includes(qL))
        || (v.root && v.root.includes(q));
  });
  return all;
}

function buildVocabRows() {
  var w       = S.tk;
  var entries = getVocabFiltered();
  if (entries.length === 0) {
    return '<tr><td colspan="6" class="voc-empty">Aucun résultat pour cette recherche.</td></tr>';
  }
  return entries.map(function(e) {
    var v   = e.v;
    var col = LV_COLORS[e.lv] || '#444';
    return '<tr>'
         + '<td><span class="rev-badge" style="background:' + col + ';font-size:.62rem;padding:.08rem .38rem">' + e.lv + '</span></td>'
         + '<td class="voc-ar">' + (w ? v.w : v.p) + '</td>'
         + '<td class="voc-tr">' + v.tr + '</td>'
         + '<td class="voc-fr">' + v.fr + '</td>'
         + '<td class="voc-fm">' + v.fm + '</td>'
         + '<td class="voc-root">' + v.root + '</td>'
         + '</tr>';
  }).join('');
}

function renderVocab() {
  var w    = S.tk;
  var all  = getAllVocab();

  /* Boutons filtre avec compteurs */
  var filters = ['ALL','A1','A2','B1','B2','C1','C2'].map(function(f) {
    var on  = S.vocabFilter === f ? ' flt-on' : '';
    var cnt = f === 'ALL' ? all.length : all.filter(function(e){ return e.lv === f; }).length;
    return '<button class="flt-btn' + on + '" onclick="filterVocab(\'' + f + '\')">'
         + (f === 'ALL' ? 'Tout' : f)
         + ' <span class="flt-cnt">(' + cnt + ')</span></button>';
  }).join('');

  return '<div class="rev-hd">'
       + '<div class="rev-hd-top">'
       +   '<div>'
       +     '<h2 class="ar">الْمُعْجَمُ التَّعْلِيمِيُّ</h2>'
       +     '<p class="sub">Tout le vocabulaire · A1 → C2 · '
       +     '<span id="vocab-count">' + getVocabFiltered().length + '</span> mots</p>'
       +   '</div>'
       +   '<button class="' + (w ? 'tgl-btn on' : 'tgl-btn') + '" onclick="toggleTk()">'
       +     '<span class="tgl-ar">' + (w ? 'أَ' : 'ا') + '</span>'
       +     (w ? 'Masquer voyelles' : 'Afficher voyelles')
       +   '</button>'
       + '</div>'
       + '<div class="rev-filters">' + filters + '</div>'
       + '<div class="voc-search-wrap">'
       +   '<input id="vocab-search" class="voc-search" type="text" autocomplete="off"'
       +   ' placeholder="🔍  Rechercher en arabe, translittération, français, racine…"'
       +   ' value="' + S.vocabSearch.replace(/"/g, '&quot;') + '"'
       +   ' oninput="vocabType(this.value)">'
       + '</div>'
       + '</div>'
       + '<div class="voc-table-wrap">'
       +   '<table class="voc-tbl">'
       +   '<thead><tr>'
       +     '<th>Niv.</th>'
       +     '<th>Mot arabe</th>'
       +     '<th>Translittération</th>'
       +     '<th>Traduction française</th>'
       +     '<th>Forme grammaticale</th>'
       +     '<th>Racine</th>'
       +   '</tr></thead>'
       +   '<tbody id="vocab-tbody">' + buildVocabRows() + '</tbody>'
       +   '</table>'
       + '</div>';
}

/* ── Vue texte ─────────────────────────────── */
function renderText(txt) {
  var w = S.tk;
  var arabicHtml = txt.sentences.map(function(sentence) {
    var words = sentence.map(function(g) {
      return '<span class="wg">' + (w ? g.w : strip(g.w))
           + '<span class="tip">' + g.t + '</span></span>';
    }).join(' ');
    return '<div class="ar-sent">' + words + '</div>';
  }).join('');
  var vocabRows = txt.vocabulary.map(function(v) {
    var rt = v.root !== '—' ? '<br><span class="root-tag">' + v.root + '</span>' : '';
    return '<tr>'
         + '<td class="td-ar">' + (w ? v.w : v.p) + '</td>'
         + '<td class="td-tr">' + v.tr + '</td>'
         + '<td>' + v.fr + '</td>'
         + '<td class="td-fm">' + v.fm + rt + '</td>'
         + '</tr>';
  }).join('');
  var gh = txt.grammar.gtblHeaders || ['Col1','Col2','Col3','Col4'];
  var gramRows = txt.grammar.table.map(function(r) {
    return '<tr>'
         + '<td class="ar">' + (w ? r.v : strip(r.v)) + '</td>'
         + '<td style="color:var(--parch-dim)">' + r.f + '</td>'
         + '<td class="ar">' + (w ? r.m : strip(r.m)) + '</td>'
         + '<td style="color:var(--parchment)">' + r.fr + '</td>'
         + '</tr>';
  }).join('');
  var thHtml = gh.map(function(h) { return '<th>' + h + '</th>'; }).join('');
  return '<button class="back-btn" onclick="goBack()">← Retour au niveau ' + txt.level + '</button>'
       + '<div class="txt-panel">'
       +   '<div class="txt-panel-hd">'
       +     '<div><div class="txt-title">' + (w ? txt.titleW : txt.titleP) + '</div>'
       +     '<div class="txt-sub">' + txt.titleFr + '</div></div>'
       +     '<button class="' + (w ? 'tgl-btn on' : 'tgl-btn') + '" onclick="toggleTk()">'
       +       '<span class="tgl-ar">' + (w ? 'أَ' : 'ا') + '</span>'
       +       (w ? 'Masquer les voyelles' : 'Afficher les voyelles')
       +     '</button>'
       +   '</div>'
       +   '<div class="hint-bar">'
       +     '<span class="hint-dot hover"></span>Survol → traduction &nbsp;·&nbsp;'
       +     '<span class="hint-dot click"></span>Clic → épingler &nbsp;·&nbsp; Clic ailleurs → fermer'
       +   '</div>'
       +   '<div class="ar-text">' + arabicHtml + '</div>'
       + '</div>'
       + '<div class="orn">❖ ✦ ❖</div>'
       + '<div class="section">'
       +   '<div class="sec-hd"><span class="sec-ico">📖</span>Vocabulaire nouveau</div>'
       +   '<table class="vtbl"><thead><tr>'
       +     '<th>Mot arabe</th><th>Translittération</th><th>Traduction</th><th>Forme &amp; Racine</th>'
       +   '</tr></thead><tbody>' + vocabRows + '</tbody></table>'
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
   CLIC POUR ÉPINGLER
═══════════════════════════════════════════════ */
document.addEventListener('click', function(e) {
  var wg = e.target.closest('.wg');
  if (wg) {
    var was = wg.classList.contains('pinned');
    document.querySelectorAll('.wg.pinned').forEach(function(el) { el.classList.remove('pinned'); });
    if (!was) wg.classList.add('pinned');
  } else {
    document.querySelectorAll('.wg.pinned').forEach(function(el) { el.classList.remove('pinned'); });
  }
}, true);

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
renderNav();
renderMain();
