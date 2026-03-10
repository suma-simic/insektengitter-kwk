# Seite 4: /unverbindliche-anfrage/

**WordPress-URL:** `insektengitter.at/unverbindliche-anfrage/`
**Script:** [`/scripts/unverbindliche-anfrage.js`](../scripts/unverbindliche-anfrage.js)
**Zweck:** Landingpage für empfohlene Interessenten. Sie kommen hierher über den Empfehlungslink und füllen ein Anfrageformular aus.

---

## Wie diese Seite aufgerufen wird

Interessenten erhalten den Link vom Empfehler (via E-Mail, WhatsApp etc.), z.B.:
```
https://insektengitter.at/unverbindliche-anfrage/?m=mail#REF-05036
```

URL-Parameter:
- `m` -- Medium (`mail`, `wa`, `share`, `crm`) -- wird für UTM-Tracking verwendet
- `#REF-xxxxx` -- Ref-ID des Empfehlers als Hash-Fragment
- alternativ: `?ref=REF-xxxxx` als Query-Parameter

---

## Seitenaufbau

### Block 1: Überschrift

```html
<h1>Ihre unverbindliche Anfrage</h1>
```

---

### Block 2: Script-Einbindung (Formular)

Hier den kompletten Inhalt von [`/scripts/unverbindliche-anfrage.js`](../scripts/unverbindliche-anfrage.js) als **Custom HTML Block** einfügen.

Das Script enthält bereits:
- Einleitungstext: "Bitte füllen Sie das Formular kurz aus -- wir melden uns zeitnah bei Ihnen."
- "So geht's weiter"-Box (3 Schritte: Formular ausfüllen, Kontaktaufnahme, Beratung)
- Datenschutz-Hinweis
- Zoho Forms iFrame ("Unverbindliche Anfrage")
- Ref-ID und KWK-Token werden automatisch an das Formular übergeben
- UTM-Tracking (`utm_source=referral`, `utm_campaign=unverbindliche_anfrage`, Medium je nach `?m=` Parameter)
- Auto-Resize per `postMessage`

> **Hinweis an Agentur:** Dieses Script enthält den gesamten Seiteninhalt (Text + Formular). Es muss nur die H1-Überschrift separat als WordPress-Block gesetzt werden, der Rest kommt aus dem Script.

---

## Wireframe-Übersicht

```
┌──────────────────────────────────────────────┐
│           HEADER / NAVIGATION                │
├──────────────────────────────────────────────┤
│  [Block 1] H1: Ihre unverbindliche Anfrage  │
├──────────────────────────────────────────────┤
│  [Block 2] Einleitungstext (aus Script)      │
│            "So geht's weiter"-Box (Script)   │
│            Datenschutz-Hinweis (Script)       │
│            Zoho-Formular (iFrame via Script) │
├──────────────────────────────────────────────┤
│           FOOTER                             │
└──────────────────────────────────────────────┘
```

---

## Zusammenspiel der Seiten

```
Bestandskunde besucht:
  /kunden-werben-kunden  ──→  Füllt Empfehlungsformular aus (Seite 1)
       │
       ├── oder erhält personalisierten Link zu:
       │   /empfehlung/?ref=REF-xxxxx  ──→  Teilt Link weiter (Seite 2)
       │        │
       │        └── Empfohlene Person klickt Link:
       │            /unverbindliche-anfrage/#REF-xxxxx  ──→  Füllt Anfrage aus (Seite 4)
       │
       └── oder nutzt:
           /empfehlung-direkt/?ref=REF-xxxxx  ──→  Trägt Empfehlung direkt ein (Seite 3)
```
