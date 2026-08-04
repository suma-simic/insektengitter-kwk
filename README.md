# Agentur-Nachtrag: Videos, Radio-Landingpage, Karriere-Kurzbewerbung + Bugfix Empfehler-ID

**Kunde:** Grünefeldt Insektengitter
**Domain:** insektengitter.at
**CMS:** WordPress (bestehende Kundeninstanz)
**Datum:** 2026-07-20 (Teil 1 + 2) · 2026-07-30 (Teil 3) · 2026-08-04 (Teil 4, dringend)

---

## Worum geht es?

Vier Punkte in diesem Nachtrag:

1. **Video-Einbindung** auf den 4 bestehenden Empfehlungs-Landingpages (Kunden werben Kunden) —
   je ein kurzes Video **oberhalb** des Formulars (bzw. der Teilen-Box). Siehe unten „Teil 1".
2. **Neue Landingpage `/886`** für eine Radiowerbung auf Radio 886, mit eigenem
   Zoho-Kontaktformular. Siehe unten „Teil 2".
3. **Karriere-Kurzbewerbung** (2026-07-30): Video + Bewerbungsformular auf der bestehenden Seite
   `/karriere/` und eine **neue Dankeseite `/danke-bewerbung`**. Siehe unten „Teil 3".
4. **Bugfix Empfehler-ID** (2026-08-04, **dringend**, laufende E-Mail-Kampagne): Ein-Zeilen-Fix in
   zwei bestehenden Scripts, weil die Empfehler-ID unter bestimmten Link-Varianten verloren geht.
   Siehe unten „Teil 4".

Bei Teil 1 und 2 ändert sich an bestehenden Formularen, Scripts oder Texten **nichts** — beide
Punkte sind rein additiv. Teil 3 ist ebenfalls im Kern additiv; dort wird zusätzlich **ein
bestehender Textblock innerhalb der Karriere-Seite nach unten verschoben** (im Detail beschrieben).
Teil 4 ist ein **reiner Austausch** von zwei bereits eingebundenen Script-Blöcken, sonst ändert
sich nichts an den betroffenen Seiten.

---

# Teil 1 — Video-Einbindung (4 Empfehlungs-Landingpages)

Die 4 Empfehlungs-Landingpages sind bereits live. Neu ist **ein kurzes Video pro Seite**, das
jeweils **oberhalb** des bestehenden Formulars (bzw. der Teilen-Box) eingebunden werden soll —
als **neuer Custom-HTML-Block**.

---

## Die Videos

Die fertigen Einbettungs-Blöcke liegen im Ordner [`/video-embeds/`](./video-embeds/) — je eine
`.html`-Datei pro Seite. **Kompletten Datei-Inhalt kopieren** und auf der jeweiligen Seite als
**Custom HTML Block** einfügen.

| Nr. | Video (Vimeo) | Landingpage | Einzufügende Datei | Position |
|-----|---------------|-------------|--------------------|----------|
| 1 | `1211289737` | `/kunden-werben-kunden` | [`01_kunden-werben-kunden.html`](./video-embeds/01_kunden-werben-kunden.html) | Direkt **über dem Formular** |
| 2 | `1211292258` | `/empfehlung/` | [`02_empfehlung.html`](./video-embeds/02_empfehlung.html) | Direkt **über der Teilen-Box** |
| 3 | `1211293050` | `/empfehlung-direkt/` | [`03_empfehlung-direkt.html`](./video-embeds/03_empfehlung-direkt.html) | Direkt **über dem Script-Block** |
| 4 | `1211286631` | `/unverbindliche-anfrage/` | [`04_unverbindliche-anfrage.html`](./video-embeds/04_unverbindliche-anfrage.html) | Direkt **über dem Script-Block** |

---

## Technische Hinweise

- **Einbindung — freie Wahl der Methode:** Wir liefern den klassischen Vimeo-Einbettungscode als
  sofort einsetzbare Variante mit (Custom HTML Block, direkt über dem Formular). Das ist aber
  **nicht zwingend**: Falls eure WordPress-Instanz eine einfachere Möglichkeit bietet, ein Video
  direkt über die **Vimeo-URL** einzubinden (z.B. per URL-/oEmbed-Einbettung oder einem
  Video-Block), nutzt gerne den Weg, den ihr für die Seite am besten haltet. Die reinen
  Video-URLs findet ihr in der Tabelle oben unter „Video (Vimeo)" bzw. hier:
  - Seite 1: https://vimeo.com/1211289737
  - Seite 2: https://vimeo.com/1211292258
  - Seite 3: https://vimeo.com/1211293050
  - Seite 4: https://vimeo.com/1211286631
- **Responsiv:** Das Video ist im Seitenverhältnis 16:9 und skaliert automatisch auf mobile
  Breiten (`padding-top: 56.25%`-Technik). Kein festes Höhen-Handling nötig.
- **Breite:** Standardmäßig **volle Inhaltsbreite** (wie das Formular). Wenn ihr das Video lieber
  schmaler/zentriert möchtet, einfach dem äußeren `<div>` ein `max-width` geben, z.B.
  `style="max-width:720px;margin:0 auto 24px auto;"`. **Finale Darstellung nach eurem Ermessen** —
  passt es so an, wie es optisch am besten zur Seite passt.
- **Kein Autoplay:** Das Video startet **erst auf Klick** (bewusst — vermeidet ungewollten Ton und
  Datenverbrauch auf Mobilgeräten).
- **Vimeo-Player-Script:** Am Ende jedes Blocks steht `player.js`. Das ist Teil des offiziellen
  Vimeo-Embeds und kann so bleiben.

---

## Seite 1 · `/kunden-werben-kunden`

Datei: [`video-embeds/01_kunden-werben-kunden.html`](./video-embeds/01_kunden-werben-kunden.html)
Als **neuen Custom-HTML-Block** einfügen — **direkt über** dem bestehenden Formular-Block.

```
┌──────────────────────────────────────────────┐
│  [Block 1] Überschrift + Einleitungstext     │
├──────────────────────────────────────────────┤
│  [NEU: VIDEO]   ← hier einfügen              │
├──────────────────────────────────────────────┤
│  [Block 2] Zoho-Formular (bestehend)         │
├──────────────────────────────────────────────┤
│  [Block 3] "So funktioniert's" (4 Schritte)  │
├──────────────────────────────────────────────┤
│  [Block 4] WICHTIG-Hinweisbox                │
├──────────────────────────────────────────────┤
│  [Block 5] Kontakt                           │
└──────────────────────────────────────────────┘
```

---

## Seite 2 · `/empfehlung/`

Datei: [`video-embeds/02_empfehlung.html`](./video-embeds/02_empfehlung.html)
Als **neuen Custom-HTML-Block** einfügen — **direkt über** der Teilen-Box.
**Hinweis:** Diese Seite hat **kein Formular**, sondern die Share-Box mit den Teilen-Buttons. Das
Video kommt oben darüber.

```
┌──────────────────────────────────────────────┐
│  [Block 1] H1: Ihre persönliche Empfehlung   │
├──────────────────────────────────────────────┤
│  [NEU: VIDEO]   ← hier einfügen              │
├──────────────────────────────────────────────┤
│  [Block 2] Share-Box (Teilen-Buttons)        │
├──────────────────────────────────────────────┤
│  [Block 3] 50 € Dankeschön + "So geht's"     │
├──────────────────────────────────────────────┤
│  [Block 4] WICHTIG-Hinweis                   │
├──────────────────────────────────────────────┤
│  [Block 5] Kontakt                           │
└──────────────────────────────────────────────┘
```

---

## Seite 3 · `/empfehlung-direkt/`

Datei: [`video-embeds/03_empfehlung-direkt.html`](./video-embeds/03_empfehlung-direkt.html)
Als **neuen Custom-HTML-Block** einfügen — **direkt über** dem bestehenden Script-Block.

> **WICHTIG:** Der bestehende Script-Block dieser Seite enthält **Einleitungstext + Formular
> gemeinsam**. Das Video-Snippet bitte **NICHT** in diesen Script-Block hineinkopieren, sondern
> als **eigenen Block DAVOR** (zwischen der H1-Überschrift und dem Script-Block).

```
┌──────────────────────────────────────────────┐
│  [Block 1] H1: Kundenempfehlung einreichen   │
├──────────────────────────────────────────────┤
│  [NEU: VIDEO]   ← eigener Block, hier einfügen│
├──────────────────────────────────────────────┤
│  [Block 2] Script-Block (bestehend):         │
│            Einleitungstext + WICHTIG-Box     │
│            + Zoho-Formular                    │
└──────────────────────────────────────────────┘
```

---

## Seite 4 · `/unverbindliche-anfrage/`

Datei: [`video-embeds/04_unverbindliche-anfrage.html`](./video-embeds/04_unverbindliche-anfrage.html)
Als **neuen Custom-HTML-Block** einfügen — **direkt über** dem bestehenden Script-Block.

> **WICHTIG:** Wie bei Seite 3 enthält der bestehende Script-Block **Text + Formular gemeinsam**.
> Das Video bitte als **eigenen Block DAVOR** einfügen, nicht in den Script-Block hineinkopieren.

```
┌──────────────────────────────────────────────┐
│  [Block 1] H1: Ihre unverbindliche Anfrage   │
├──────────────────────────────────────────────┤
│  [NEU: VIDEO]   ← eigener Block, hier einfügen│
├──────────────────────────────────────────────┤
│  [Block 2] Script-Block (bestehend):         │
│            Einleitungstext + "So geht's"-Box │
│            + Datenschutz + Zoho-Formular     │
└──────────────────────────────────────────────┘
```

---

# Teil 2 — Neue Radio-Landingpage `/886`

## Worum geht es?

Radio 886 (radio886.at) spielt einen Werbespot für Grünefeldt Insektengitter aus und verweist die
Hörer auf die kurze, gut merkbare Adresse **`insektengitter.at/886`**. Auf dieser neuen Seite füllen
die Interessenten ein Kontaktformular aus.

**Wichtig zum Verständnis:** Die Hörer tippen die Adresse **direkt** ein (kein Klick mit Tracking-
Parametern in der URL). Deshalb sind alle Tracking-Werte (UTM + Lead-Quelle / Leadgenerierungs-Art /
Location) bereits **fest im Zoho-Formular hinterlegt**. Die Agentur muss dazu **nichts** einstellen —
einfach den Formular-Block einbinden.

## Seite anlegen

- **Neue WordPress-Seite** mit dem Pfad **`/886`** (URL: `https://insektengitter.at/886`).
- Formular-Block: kompletten Inhalt von
  [`form-embeds/886-radio-kontaktformular.html`](./form-embeds/886-radio-kontaktformular.html)
  als **Custom HTML Block** einfügen. Das Zoho-Skript passt die Formularhöhe automatisch an.

## Seitenaufbau (Textvorschlag — bitte an das Website-Design anpassen)

Die folgenden Texte sind ein Vorschlag im Stil der übrigen Seiten. Formulierung/Design gern anpassen.

### Block 1: Überschrift + Einleitung (mit Radio-Bezug)

```html
<h1>Insektenschutz nach Maß – direkt vom Hersteller</h1>
<h2>Sie haben von uns bei Radio 886 gehört? Herzlich willkommen!</h2>
<p>
  Fliegengitter, Insektenschutz-Türen und Lichtschachtabdeckungen – maßgefertigt,
  montiert und aus einer Hand. Fordern Sie hier ganz unverbindlich Ihr persönliches
  Angebot an. Wir melden uns zeitnah bei Ihnen.
</p>
```

### Block 2: Formular (Custom HTML Block)

Hier den Inhalt von [`form-embeds/886-radio-kontaktformular.html`](./form-embeds/886-radio-kontaktformular.html) einfügen.

### Block 3: „So geht's weiter"

```html
<h3>So geht's weiter:</h3>
<p>1. <strong>Formular ausfüllen:</strong> Ein paar Angaben genügen.</p>
<p>2. <strong>Wir melden uns:</strong> Wir nehmen zeitnah Kontakt mit Ihnen auf.</p>
<p>3. <strong>Beratung &amp; Aufmaß:</strong> Sie erhalten Ihr unverbindliches Angebot.</p>
```

### Block 4: Kontakt

```html
<p>
  Bei Fragen erreichen Sie uns per E-Mail an
  <a href="mailto:office@insektengitter.at">office@insektengitter.at</a>
  oder telefonisch unter
  <a href="tel:+4322826022">+43 2282 60222</a>.
</p>
```

## Wireframe-Übersicht

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  [Block 1] H1 + Radio-Bezug + Einleitung     │
├──────────────────────────────────────────────┤
│  [Block 2] Zoho-Kontaktformular (Custom HTML)│
├──────────────────────────────────────────────┤
│  [Block 3] "So geht's weiter" (3 Schritte)   │
├──────────────────────────────────────────────┤
│  [Block 4] Kontakt                           │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```

---

# Teil 3 — Karriere-Kurzbewerbung (Nachtrag 2026-07-30)

## Worum geht es?

Bewerber sollen sich direkt auf der Karriere-Seite in unter zwei Minuten bewerben können — **ohne
Lebenslauf und ohne Anschreiben**. Dafür kommen auf die **bestehende** Seite `/karriere/` ein kurzes
Video und darunter ein Zoho-Kurzbewerbungsformular. Nach dem Absenden landet der Bewerber auf einer
**neuen Dankeseite `/danke-bewerbung`**.

Zwei Aufgaben also:

| # | Aufgabe | Seite |
|---|---------|-------|
| A | Video + Formular + Texte einfügen, einen bestehenden Textblock nach unten verschieben | `/karriere/` (**bestehend**) |
| B | Neue Seite mit kurzem Bestätigungstext anlegen | `/danke-bewerbung` (**neu**) |

---

## Aufgabe A · Bestehende Seite `/karriere/` erweitern

Die Seite bleibt inhaltlich vollständig erhalten. Oben kommen vier neue Blöcke dazu, und der lange
„35 Jahre"-Text wandert vom Seitenanfang ans Seitenende.

### Neue Blockreihenfolge

```
┌──────────────────────────────────────────────┐
│  [Block 1] Header-Bild + H1 "Karriere"       │  bestehend
├──────────────────────────────────────────────┤
│  [Block 2] Sub-Headline                      │  NEU
├──────────────────────────────────────────────┤
│  [Block 3] VIDEO (Custom HTML)               │  NEU
├──────────────────────────────────────────────┤
│  [Block 4] H2 "Kurzbewerbung" + CTA-Text     │  NEU
├──────────────────────────────────────────────┤
│  [Block 5] Zoho-Formular (Custom HTML)       │  NEU
├──────────────────────────────────────────────┤
│  [Block 6] Bewerbungs-Hinweis Fabian Hofmann │  bestehend,
│            / "Aktuelle Stellenanzeigen" PDFs │  unverändert
│            / Adresse + Öffnungszeiten        │
├──────────────────────────────────────────────┤
│  [Block 7] "Über uns als Arbeitgeber"        │  VERSCHOBEN
│            (der bisherige 35-Jahre-Text)     │  vom Seitenanfang
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```

### Block 2 · Sub-Headline (NEU, direkt unter der H1)

```html
<h2>
  Seit 35 Jahren fertigen, liefern und montieren wir Insektenschutz – mit Menschen,
  die oft von Anfang an dabei sind. Bei uns ist das keine Saisonarbeit, sondern ein
  ganzjähriger Job mit Perspektive.
</h2>
```

Falls euer Theme H2 sehr groß setzt, gern als hervorgehobener Absatz (Lead-Text) statt als H2 —
entscheidend ist die Position direkt unter der H1, nicht das Tag.

### Block 3 · Video (NEU, Custom HTML Block)

Datei: [`video-embeds/06_karriere.html`](./video-embeds/06_karriere.html) (Vimeo `1214165107`)

Kompletten Datei-Inhalt als **Custom HTML Block** einfügen — zwischen Sub-Headline und
Formular-Überschrift. Wie in Teil 1: 16:9, responsiv, kein Autoplay, Breite nach eurem Ermessen.
Auch hier gilt die freie Wahl der Methode — die reine Video-URL lautet
https://vimeo.com/1214165107.

### Block 4 · Überschrift + CTA (NEU)

```html
<h2>Kurzbewerbung</h2>
<p>
  <strong>Jetzt unkompliziert bewerben!</strong><br>
  Kein Lebenslauf, kein Anschreiben. Senden Sie uns einfach Ihre Kontaktdaten –
  wir melden uns telefonisch bei Ihnen.
</p>
```

### Block 5 · Zoho-Formular (NEU, Custom HTML Block)

Datei: [`form-embeds/karriere-kurzbewerbung.html`](./form-embeds/karriere-kurzbewerbung.html)

Kompletten Datei-Inhalt als **Custom HTML Block** direkt unter dem CTA-Text einfügen.

- Das Skript erzeugt den iFrame selbst — es muss **kein zusätzlicher Zoho-Code** eingefügt werden.
- Die Formularhöhe passt sich automatisch an den Inhalt an. Bitte **keine feste Höhe** über Theme
  oder CSS erzwingen, sonst wird das Formular abgeschnitten.
- Der Referrer wird automatisch vom Skript mitgeschickt. Die UTM-Werte (`utm_source`, `utm_medium`,
  `utm_campaign`) sind dagegen **fest als versteckte Feldwerte im Zoho-Formular hinterlegt** (wie
  bei der Radio-886-Landingpage) — nicht aus der Seiten-URL ausgelesen. An der Formular-URL selbst
  müsst ihr nichts ergänzen.

### Block 7 · „Über uns als Arbeitgeber" (VERSCHOBEN ans Seitenende)

Dieser Text steht aktuell direkt unter der H1 und wird dort durch die neue Sub-Headline ersetzt. Er
soll **nicht gelöscht**, sondern ans Ende der Seite verschoben werden:

```html
<h2>Über uns als Arbeitgeber</h2>
<p>
  Die Grünefeldt Insektengitter GmbH gibt es bereits seit 35 Jahren – der Personalstamm
  hat sich stetig vergrößert und einige Mitarbeiter sind „von Anfang an“ dabei.
</p>
<p>
  Unsere Mitarbeiter sind sowohl der Schlüssel zum Erfolg als auch gleichzeitig unsere
  Visitenkarte nach außen. Durch sie wird das Thema Insektengitter zur ganzjährigen
  Beschäftigung und macht unser stetiges Wachstum und unseren Erfolg aus.
</p>
```

> In diesem Textblock sind zwei kleine sprachliche Korrekturen gegenüber der aktuellen Live-Version
> schon eingearbeitet („Durch sie" statt „Durch Sie", „unser stetiges Wachstum" statt „unseren
> stetigen Wachstum"). Bitte die Fassung von hier übernehmen.

---

## Aufgabe B · Neue Seite `/danke-bewerbung` anlegen

Neue WordPress-Seite mit dem Pfad **`/danke-bewerbung`** (URL:
`https://insektengitter.at/danke-bewerbung`). Kein Formular, kein Video — bewusst kurz, im
bestehenden Website-Design mit Header und Footer wie überall.

### Seiteninhalt (vollständig)

```html
<h1>Vielen Dank für Ihre Bewerbung!</h1>

<p>
  Ihre Kurzbewerbung wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich
  telefonisch bei Ihnen, um alle weiteren Details persönlich zu besprechen.
</p>

<p>
  <strong>Ihr Ansprechpartner:</strong><br>
  Fabian Hofmann<br>
  Telefon: <a href="tel:+4322826022">+43 2282 / 60222</a>
</p>
```

### Vorgaben zur Seite

| Punkt | Vorgabe |
|-------|---------|
| URL-Pfad | genau `/danke-bewerbung` — auf diese Adresse wird die Formular-Weiterleitung gesetzt |
| Navigation | **nicht** ins Menü aufnehmen — die Seite wird nur nach dem Absenden erreicht |
| Suchmaschinen | auf **`noindex`** setzen (z.B. per SEO-Plugin) |
| Telefonnummer | als klickbarer `tel:`-Link, damit Bewerber am Handy direkt zurückrufen können |

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  H1 "Vielen Dank für Ihre Bewerbung!"        │
├──────────────────────────────────────────────┤
│  Bestätigungstext (2 Sätze)                  │
├──────────────────────────────────────────────┤
│  Ansprechpartner Fabian Hofmann + Telefon    │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```

---

## Weiterleitung auf die Dankeseite — macht der Auftraggeber

Die Weiterleitung nach dem Absenden wird **nicht** im Website-Code gesetzt, sondern im
Zoho-Forms-Backend („Thank You Page & Redirection"). Das übernimmt der Auftraggeber.

**Reihenfolge:**

1. Ihr legt `/danke-bewerbung` an und gebt kurz Bescheid, sobald die Seite live ist.
2. Der Auftraggeber schaltet daraufhin die Weiterleitung im Formular.
3. Gemeinsamer Test: Formular auf `/karriere/` absenden und prüfen, ob die Dankeseite erscheint.

Solange Schritt 2 nicht erfolgt ist, zeigt das Formular weiter seine Standard-Bestätigung direkt im
eingebetteten Bereich an — es geht also nichts verloren, falls sich die Seite verzögert.

---

# Teil 4 — Bugfix Empfehler-ID (Nachtrag 2026-08-04, dringend)

## Worum geht es?

Auf zwei bereits live eingebauten Seiten wird die Empfehler-ID (`REF-xxxxx`) manchmal nicht mehr
korrekt ins Formular übernommen: Wenn die REF-ID über das URL-Fragment (`#REF-05036`) reinkommt
und danach noch weitere Zeichen angehängt sind — zum Beispiel Tracking-Parameter, die unser
E-Mail-Marketing-Tool automatisch an Links anhängt (`#REF-05036&zma_cid=...&zma_src=...`) — hat
das bisherige Script die komplette Zeichenkette statt nur der REF-ID übernommen. Die nachgelagerte
Prüfung hat das dann als ungültig verworfen, ohne dass für den Besucher ein Fehler sichtbar wurde.

**Betroffen:**

| Seite | Script-Datei |
|-------|-------------|
| `/empfehlung-direkt/` | [`scripts/empfehlung-direkt.js`](./scripts/empfehlung-direkt.js) |
| `/unverbindliche-anfrage/` | [`scripts/unverbindliche-anfrage.js`](./scripts/unverbindliche-anfrage.js) |

## Was zu tun ist

Bitte auf beiden Seiten den bestehenden Custom-HTML-Block (den mit dem `<script>`-Tag, der das
Zoho-Formular per iFrame einbindet) durch den kompletten Inhalt der oben verlinkten Datei
ersetzen. Es ändert sich inhaltlich **nur eine Zeile** in der bestehenden Logik (wie die REF-ID
aus dem URL-Fragment gelesen wird), der Rest der Datei ist unverändert zur bisherigen Version.

**Dringlichkeit:** Wir haben aktuell eine laufende E-Mail-Kampagne an unsere CRM-Kontakte raus, bei
der ein Button direkt auf `/empfehlung-direkt/` mit genau dieser Art von URL zeigt. Eine zeitnahe
Umsetzung wäre daher sehr hilfreich.

---

## Kontakt bei Rückfragen

**Auftraggeber:** Marko Simic
**E-Mail:** office@insektengitter.at
**Telefon:** +43 2282 / 60222
