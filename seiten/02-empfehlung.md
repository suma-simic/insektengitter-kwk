# Seite 2: /empfehlung/

**WordPress-URL:** `insektengitter.at/empfehlung/`
**Script:** [`/scripts/empfehlung.js`](../scripts/empfehlung.js)
**Zweck:** Persönliche Empfehlungsseite für Bestandskunden. Zeigt einen individuellen Empfehlungslink mit Share-Buttons (E-Mail, Gmail, WhatsApp, Kopieren).

---

## Wie diese Seite aufgerufen wird

Bestandskunden erhalten einen personalisierten Link, z.B.:
```
https://insektengitter.at/empfehlung/?ref=REF-05036&fn=Max&ln=Mustermann
```

Die URL-Parameter:
- `ref` -- Eindeutige Referenz-ID des Empfehlers (z.B. `REF-05036`)
- `fn` -- Vorname des Empfehlers
- `ln` -- Nachname des Empfehlers

Das Script liest diese Parameter aus und personalisiert die Seite automatisch.

---

## Seitenaufbau

### Block 1: Überschrift

```html
<h1>Ihre persönliche Empfehlungsseite</h1>
```

---

### Block 2: Script-Einbindung (Share-Box)

Hier den kompletten Inhalt von [`/scripts/empfehlung.js`](../scripts/empfehlung.js) als **Custom HTML Block** einfügen.

Das Script erzeugt automatisch:
- Persönliche Begrüßung ("Hallo Max Mustermann, ...")
- Den individuellen Empfehlungslink
- **Share-Buttons:**
  - E-Mail senden (mailto:)
  - Mit Gmail senden (Gmail Compose)
  - WhatsApp senden (wa.me Link)
  - Link kopieren (Clipboard)
  - E-Mail-Text kopieren (Clipboard)
- Hinweis falls keine Ref-ID vorhanden

**Zielseite der Links:** Die Share-Links verweisen auf `insektengitter.at/unverbindliche-anfrage/` (Seite 4) mit der Ref-ID als Hash-Fragment.

---

### Block 3: Infotext

```html
<h2>50 € Dankeschön für Sie, wenn Sie uns einen Neukunden vermitteln.</h2>
<p>
  Sie sind von uns und unseren Produkten begeistert? Dann empfehlen Sie uns
  doch bei Ihren Nachbarn, Bekannten sowie Freundinnen und Freunden weiter
  -- und sichern Sie sich 50 € als Dankeschön!
</p>

<h3>So geht's:</h3>
<ul>
  <li>Teilen Sie Ihren persönlichen Empfehlungs-Link -- per E-Mail, WhatsApp
      oder einfach als Nachricht.</li>
  <li>Ihr Bekannter fragt über den Link an und erteilt uns einen Auftrag zur
      Produktion und Montage von Fliegengittern und/oder Lichtschachtabdeckungen.</li>
  <li>Nach der Auftragsabwicklung überweisen wir Ihnen 50 Euro als Dankeschön
      für Ihre Empfehlung.</li>
</ul>
```

---

### Block 4: WICHTIG-Hinweis

```html
<p>
  <strong>WICHTIG:</strong> Ausgeschlossen sind Empfehlungen von Personen,
  die im gleichen Haushalt leben. Sich selbst zu empfehlen ist ebenfalls
  nicht möglich.
</p>
```

---

### Block 5: Kontakt

```html
<p>
  Bei Fragen bitte E-Mail an
  <a href="mailto:office@insektengitter.at">office@insektengitter.at</a>
  oder rufen Sie uns an unter
  <a href="tel:+4322826022">+43 2282 60222</a>.
</p>
```

---

## Wireframe-Übersicht

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  [Block 1] H1: Ihre persönliche Empfehlung   │
├──────────────────────────────────────────────┤
│  [Block 2] Share-Box mit Buttons (via Script)│
│    - Begrüßung mit Name                      │
│    - Empfehlungslink                         │
│    - E-Mail / Gmail / WhatsApp / Copy        │
├──────────────────────────────────────────────┤
│  [Block 3] 50 € Dankeschön + So geht's      │
├──────────────────────────────────────────────┤
│  [Block 4] WICHTIG-Hinweis                   │
├──────────────────────────────────────────────┤
│  [Block 5] Kontakt                           │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```
