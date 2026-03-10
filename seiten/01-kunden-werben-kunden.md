# Seite 1: /kunden-werben-kunden

**WordPress-URL:** `insektengitter.at/kunden-werben-kunden`
**Script:** [`/scripts/kunden-werben-kunden.js`](../scripts/kunden-werben-kunden.js)
**Zweck:** Hauptseite des Empfehlungsprogramms. Bestandskunden tragen hier ihre eigenen Daten und die Daten der empfohlenen Person ein.

---

## Seitenaufbau

Die Seite besteht aus 5 Blöcken, die in exakt dieser Reihenfolge untereinander stehen:

---

### Block 1: Überschrift + Einleitungstext

```html
<h1>Empfehlen lohnt sich</h1>
<h2>50 € Dankeschön für Sie, wenn Sie uns einen Neukunden vermitteln.</h2>
<p>
  Sie sind von uns und unseren Produkten begeistert oder Sie kennen jemanden,
  der auf der Suche nach Fliegengitter-Produkten ist? Dann empfehlen Sie uns
  doch bei Ihren Nachbarn, Bekannten sowie Freundinnen und Freunden weiter.
</p>
```

---

### Block 2: Formular (Script-Einbindung)

Hier den kompletten Inhalt von [`/scripts/kunden-werben-kunden.js`](../scripts/kunden-werben-kunden.js) als **Custom HTML Block** einfügen.

Das Script erzeugt automatisch einen Zoho Forms iFrame mit:
- Formular "Kundenempfehlung Homepage 1"
- Automatischem KWK-Token (Format: `TXN-YYYYMMDD-HHMMSSmmm-RANDOMHEX`)
- UTM-Tracking (`utm_source=homepage`, `utm_medium=form1_empfehler`, `utm_campaign=kunden_werben_kunden`)
- Auto-Resize per `postMessage`

---

### Block 3: "So funktioniert's" (4 Schritte)

```html
<h3>So funktioniert Ihre Empfehlung:</h3>

<p>1. <strong>Schritt 1:</strong><br>
Tragen Sie zuerst Ihre eigenen Kontaktdaten ein.</p>

<p>2. <strong>Schritt 2:</strong><br>
Geben Sie anschließend die Kontaktdaten der Person ein, die Sie empfehlen möchten.</p>

<p>3. <strong>Schritt 3:</strong><br>
Wir prüfen, ob die empfohlene Person bereits Kunde bei uns ist.</p>

<p>4. <strong>Schritt 4:</strong><br>
Wird daraus ein neuer Auftrag zur Produktion und Montage von Fliegengittern
und/oder Lichtschachtabdeckungen, erhalten Sie nach erfolgreicher Abwicklung
50 € als Dankeschön.</p>
```

---

### Block 4: WICHTIG-Hinweisbox

Dieser Block soll **visuell hervorgehoben** sein (farbiger Hintergrund, Rahmen o.ä. -- passend zum bestehenden Design der Website).

```html
<div style="background:#fff3cd; border-left:4px solid #ffc107; padding:16px; border-radius:8px; margin:24px 0;">
  <strong>WICHTIG:</strong><br>
  Ausgeschlossen sind Empfehlungen, die nach Auftragserteilung erfolgen sowie
  Empfehlungen von Personen, die im gleichen Haushalt leben. Sich selbst zu
  empfehlen, nach einem Umzug o.ä., ist ebenfalls nicht möglich.
</div>
```

> **Hinweis an Agentur:** Das Inline-Styling ist ein Vorschlag. Bitte an das bestehende Website-Design anpassen (z.B. vorhandene Alert- oder Info-Box-Klassen verwenden).

---

### Block 5: Kontaktbereich

```html
<p>
  Bei Fragen bitte E-Mail an
  <a href="mailto:office@insektengitter.at">office@insektengitter.at</a>
  oder rufen Sie uns an unter
  <a href="tel:+4322826022">+43 2282 60222</a>.
</p>
<p>
  Wir freuen uns über jede Neukundenwerbung und Ihre Empfehlung. Vielen Dank!
</p>
```

---

## Wireframe-Übersicht

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  [Block 1] H1 + H2 + Einleitungstext        │
├──────────────────────────────────────────────┤
│  [Block 2] Zoho-Formular (iFrame via Script) │
├──────────────────────────────────────────────┤
│  [Block 3] 4 Schritte                        │
├──────────────────────────────────────────────┤
│  [Block 4] WICHTIG-Hinweisbox                │
├──────────────────────────────────────────────┤
│  [Block 5] Kontakt + Dankestext              │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```
