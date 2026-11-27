# مدرسة العربيّة — Architecture modulaire

## Structure des briques

```
arabic-learning/
├── index.html          ← Charge les briques dans l'ordre
├── css/
│   └── style.css       ← Design (ne pas toucher)
└── js/
    ├── config.js       ← BRIQUE 1 : définition des niveaux (ne pas toucher)
    ├── app.js          ← BRIQUE FINALE : logique UI (ne pas toucher)
    └── data/
        ├── a1.js       ← BRIQUE A1 : textes du niveau A1
        ├── a2.js       ← BRIQUE A2 : à créer quand prêt
        ├── b1.js       ← BRIQUE B1 : à créer quand prêt
        ├── b2.js       ← BRIQUE B2 : textes du niveau B2
        ├── c1.js       ← BRIQUE C1 : à créer quand prêt
        ├── c2.js       ← BRIQUE C2 : à créer quand prêt
        ├── cor.js      ← BRIQUE COR : les 60 textes coraniques (niveau clos)
        └── cor_bilan.js← GÉNÉRÉ : chiffres et index des citations du niveau COR
```

## Bilan du niveau COR

Le niveau COR est clos à 60 textes. `js/data/cor_bilan.js` alimente la page « Bilan du niveau COR »
(bannière en tête du niveau) : chiffres clés, les 60 leçons de grammaire (lues directement dans `cor.js`)
et l'index des versets cités, sourate par sourate. Ce fichier est **généré** ; ne pas l'éditer à la main.
Si `cor.js` change, le régénérer (outils `cor_index.py` puis `gen_bilan.py`). S'il est absent, la page
de bilan disparaît simplement, sans erreur.

## Règle absolue : strings en backticks

Toutes les valeurs dans les fichiers `js/data/*.js` utilisent des backticks `` ` ``.

```javascript
// ✅ CORRECT — apostrophes et guillemets libres
{w:`هَذَا`, t:`voici, c'est — démonstratif masc.`}
fr:`l'éducation à l'ère numérique`
exp:`Le verbe <strong>être</strong> n'existe pas au présent.`

// ❌ INTERDIT — casse le site
{w:'هَذَا', t:'voici, c\'est'}
fr:'l\'éducation'
```

## Ajouter un texte à un niveau existant

Ouvrir `js/data/a1.js` (ou le niveau voulu) et :

```javascript
var A1_TEXTS = (function () {

  var T1 = { /* ... texte existant ... */ };

  // Copier ce bloc et remplir :
  var T2 = {
    id:      `a1-2`,
    level:   `A1`,
    titleW:  `الأُسْرَة`,
    titleP:  `الأسرة`,
    titleFr: `La famille`,
    sentences: [ /* ... */ ],
    vocabulary: [ /* ... */ ],
    grammar: { /* ... */ },
  };

  return [T1, T2];   // ← ajouter T2 ici

}());
```

## Ajouter un niveau entier (ex: A2)

1. Créer `js/data/a2.js` en copiant le template de `a1.js`
2. Changer `A1_TEXTS` → `A2_TEXTS` et `a1-1` → `a2-1`
3. Dans `index.html`, décommenter la ligne :
   ```html
   <script src="js/data/a2.js"></script>
   ```
4. C'est tout. `app.js` détecte automatiquement `A2_TEXTS`.

## Déployer sur GitHub Pages

```bash
git init && git add . && git commit -m "initial"
git remote add origin https://github.com/TON_PSEUDO/arabic-learning.git
git push -u origin main
```
→ Settings › Pages › branch `main` › root → Save
