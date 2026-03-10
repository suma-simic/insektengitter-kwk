# Agentur-Briefing: Kunden werben Kunden

**Kunde:** Grünefeldt Insektengitter
**Domain:** insektengitter.at
**CMS:** WordPress (bestehende Kundeninstanz)
**Datum:** 10.03.2026

---

## Auftrag

Es sollen **4 Unterseiten** in der bestehenden WordPress-Instanz angelegt und eingerichtet werden.
Jede Seite bekommt spezifischen Text-Content und ein JavaScript-Snippet, das als HTML/Script-Block eingebunden wird.

Die Scripts liegen im Ordner [`/scripts/`](./scripts/) und werden auf der jeweiligen Seite **per Custom HTML Block** (oder Theme-Script-Einbindung) eingebettet.

---

## Seitenübersicht

| Nr. | URL-Pfad | Script-Datei | Briefing | Zweck |
|-----|----------|-------------|----------|-------|
| 1 | `/kunden-werben-kunden` | `kunden-werben-kunden.js` | [Seite 1](./seiten/01-kunden-werben-kunden.md) | Hauptseite: Empfehlungsformular |
| 2 | `/empfehlung/` | `empfehlung.js` | [Seite 2](./seiten/02-empfehlung.md) | Persönlicher Empfehlungslink + Share |
| 3 | `/empfehlung-direkt/` | `empfehlung-direkt.js` | [Seite 3](./seiten/03-empfehlung-direkt.md) | Empfehlung direkt einreichen |
| 4 | `/unverbindliche-anfrage/` | `unverbindliche-anfrage.js` | [Seite 4](./seiten/04-unverbindliche-anfrage.md) | Interessenten-Anfrageformular |

---

## Technische Hinweise

- **Formulare:** Alle Formulare werden als Zoho Forms iFrames eingebunden. Die Scripts erzeugen den iFrame automatisch -- es muss kein zusätzlicher Zoho-Code eingefügt werden.
- **Auto-Resize:** Jedes Script enthält einen `postMessage`-Listener, der die iFrame-Höhe automatisch an den Inhalt anpasst.
- **Tracking:** UTM-Parameter (`utm_source`, `utm_medium`, `utm_campaign`) werden automatisch an die Zoho-Form-URLs angehängt.
- **KWK-Token:** Die Scripts generieren eindeutige Tracking-Tokens (Format: `TXN-YYYYMMDD-...` bzw. `REF-xxxxx|timestamp`), die der Zuordnung von Empfehlungen dienen.
- **Einbindung:** Jedes Script ist ein vollständiger HTML/JS-Block (`<div>` + `<script>`). In WordPress am besten als **Custom HTML Block** in den Seiten-Editor einfügen.

---

## Ordnerstruktur

```
insektengitter-kwk/
  README.md                  <-- dieses Dokument
  scripts/
    kunden-werben-kunden.js  <-- Script für Seite 1
    empfehlung.js            <-- Script für Seite 2
    empfehlung-direkt.js     <-- Script für Seite 3
    unverbindliche-anfrage.js <-- Script für Seite 4
  seiten/
    01-kunden-werben-kunden.md   <-- Detailbriefing Seite 1
    02-empfehlung.md             <-- Detailbriefing Seite 2
    03-empfehlung-direkt.md      <-- Detailbriefing Seite 3
    04-unverbindliche-anfrage.md <-- Detailbriefing Seite 4
```

---

## Kontakt bei Rückfragen

**Auftraggeber:** Marko Simic
**E-Mail:** office@insektengitter.at
**Telefon:** +43 2282 / 60222
