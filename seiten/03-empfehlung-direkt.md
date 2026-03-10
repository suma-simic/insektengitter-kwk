# Seite 3: /empfehlung-direkt/

**WordPress-URL:** `insektengitter.at/empfehlung-direkt/`
**Script:** [`/scripts/empfehlung-direkt.js`](../scripts/empfehlung-direkt.js)
**Zweck:** Alternative Empfehlungsseite -- der Empfehler trägt direkt die Daten der empfohlenen Person ein (statt einen Link zu teilen).

---

## Wie diese Seite aufgerufen wird

Bestandskunden erhalten einen Link mit ihrer Ref-ID, z.B.:
```
https://insektengitter.at/empfehlung-direkt/?ref=REF-05036
```
oder:
```
https://insektengitter.at/empfehlung-direkt/#REF-05036
```

Das Script akzeptiert die Ref-ID sowohl als Query-Parameter (`?ref=`) als auch als Hash-Fragment (`#REF-...`).

---

## Seitenaufbau

### Block 1: Überschrift + Hinweis

```html
<h1>Kundenempfehlung einreichen</h1>
```

---

### Block 2: Script-Einbindung (Formular)

Hier den kompletten Inhalt von [`/scripts/empfehlung-direkt.js`](../scripts/empfehlung-direkt.js) als **Custom HTML Block** einfügen.

Das Script enthält bereits:
- Einleitungstext: "Bitte tragen Sie hier die Person ein, die Sie empfehlen möchten."
- WICHTIG-Hinweisbox (Einverständnis, Datenschutz)
- Zoho Forms iFrame ("Kundenempfehlung einreichen")
- Fallback-Link falls iFrame blockiert wird
- Ref-ID und KWK-Token werden automatisch an das Formular übergeben
- UTM-Tracking (`utm_source=referral`, `utm_campaign=empfehlung_direkt`)
- Auto-Resize per `postMessage`

> **Hinweis an Agentur:** Dieses Script enthält den gesamten Seiteninhalt (Text + Formular). Es muss nur die H1-Überschrift separat als WordPress-Block gesetzt werden, der Rest kommt aus dem Script.

---

## Wireframe-Übersicht

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  [Block 1] H1: Kundenempfehlung einreichen  │
├──────────────────────────────────────────────┤
│  [Block 2] Einleitungstext (aus Script)      │
│            WICHTIG-Box (aus Script)          │
│            Zoho-Formular (iFrame via Script) │
│            Fallback-Link (aus Script)        │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```
