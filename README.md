# Agentur-Nachtrag: Videos + neue Radio-Landingpage

**Kunde:** Grünefeldt Insektengitter
**Domain:** insektengitter.at
**CMS:** WordPress (bestehende Kundeninstanz)
**Datum:** 2026-07-20

---

## Worum geht es?

Zwei Punkte in diesem Nachtrag:

1. **Video-Einbindung** auf den 4 bestehenden Empfehlungs-Landingpages (Kunden werben Kunden) —
   je ein kurzes Video **oberhalb** des Formulars (bzw. der Teilen-Box). Siehe unten „Teil 1".
2. **Neue Landingpage `/886`** für eine Radiowerbung auf Radio 886, mit eigenem
   Zoho-Kontaktformular. Siehe unten „Teil 2".

An den bestehenden Formularen, Scripts oder Texten ändert sich **nichts** — beide Punkte sind
rein additiv.

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

## Kontakt bei Rückfragen

**Auftraggeber:** Marko Simic
**E-Mail:** office@insektengitter.at
**Telefon:** +43 2282 / 60222
