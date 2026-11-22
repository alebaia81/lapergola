# Project Specification: Trattoria La Pergola — Olza (PC)

## 1. Visione e Obiettivo del Progetto
Creare un sito web moderno, reattivo, veloce e ad alta conversione per **Trattoria La Pergola**, storica trattoria situata a **Olza (frazione di Monticelli d'Ongina, PC)**. 
Il sito deve trasmettere immediatamente l'autenticità, il calore e l'accoglienza della cucina tradizionale piacentina/emiliana, valorizzando gli spazi iconici del locale (la veranda luminosa immersa nel verde e la sala interna in mattoni a vista con stufa in maiolica) e facilitando la prenotazione immediata dei tavoli tramite **WhatsApp**.

---

## 2. Stack Tecnologico Consigliato
* **Framework:** **Astro** (v4/v5) con generazione statica (SSG) per ottenere prestazioni massime (100/100 Lighthouse), caricamento istantaneo su rete mobile e SEO locale ottimale.
* **Styling:** **Tailwind CSS** per un design responsive mobile-first, pulito e manutenibile.
* **Interattività leggera:** Vanilla TypeScript / Alpine.js (o isole Astro minime) per:
  * Filtro rapido delle categorie del Menu in homepage.
  * Lightbox modale per la Gallery fotografica.
  * Generatore dinamico del messaggio di prenotazione WhatsApp.
* **Ottimizzazione Asset:** Componente nativo `<Image />` di Astro per conversione automatica in WebP/AVIF e lazy loading.
* **SEO & Dati Strutturati:** Schema.org JSON-LD (`@type: "Restaurant"`) integrato nell'head per massimizzare la visibilità su Google Search e Google Maps.

---

## 3. Identità Visiva e Design System
La palette cromatica e la tipografia sono estratte direttamente dall'architettura e dagli interni reali della trattoria:

### Palette Colori
* **Sfondo Principale (Cream / Panna caldo):** `#FAF7F2` (dà respiro alle fotografie e rende il menu estremamente leggibile).
* **Sfondo Secondario / Card (Sabbia / Lino):** `#F2ECE1`
* **Colore Primario (Terracotta / Mattone caldo):** `#B85A3A` (richiama l'intonaco della veranda e i mattoni a vista della sala interna).
* **Primario Hover (Terracotta scuro):** `#96452A`
* **Colore Secondario / Accento (Verde Salvia / Pergola):** `#4A6B53` (richiama il verde delle piante, le vetrate sul giardino e il tovagliato).
* **Testo Principale (Carbone caldo / Legno scuro):** `#2C241E`
* **Testo Secondario (Grigio caldo):** `#5C5248`
* **WhatsApp CTA (Verde brand ottimizzato):** `#25D366` (con testo scuro `#111B21` o bianco ad alto contrasto `#128C7E`).

### Tipografia (Google Fonts)
* **Titoli & Display:** `Cormorant Garamond` o `Playfair Display` (Serif classico, elegante, caldo, evoca tradizione e ospitalità).
* **Corpo testo, Menu & UI:** `Plus Jakarta Sans` o `Inter` (Sans-serif pulito, ottima leggibilità su smartphone per prezzi e descrizioni piatti).

---

## 4. Architettura dell'Informazione e Struttura Pagine

Il sito avrà una struttura snella, intuitiva e focalizzata sulla conversione:

### A. Componenti Globali (Tutte le pagine)
1. **Header / Navbar Sticky:**
   * Logo testuale elegante: *Trattoria La Pergola* (sottotitolo: *Olza • Dal [Anno]*).
   * Link di navigazione: `Home`, `Il Menu` (ancora `#menu`), `Chi Siamo` (`/chi-siamo`), `Gallery` (`/gallery`), `Contatti` (ancora `#contatti`).
   * Pulsante CTA fisso in navbar: **"Prenota su WhatsApp"** (icona WA + testo breve su mobile).
2. **Floating Action Button (Mobile & Desktop):**
   * Pulsante fluttuante in basso a destra per aprire il widget rapido di prenotazione WhatsApp da qualsiasi punto della navigazione.
3. **Footer:**
   * Indirizzo completo con link diretto a Google Maps.
   * Orari di apertura e giorno di chiusura settimanale.
   * Numero di telefono cliccabile (`tel:`) e link WhatsApp.
   * Note su allergeni, accessibilità e parcheggio.

---

### B. Homepage (`src/pages/index.astro`)
1. **Hero Section Emozionale:**
   * Immagine hero a pieno schermo (la veranda luminosa con vista sul verde o un tavolo imbandito) con overlay scuro sfumato per garantire il massimo contrasto del testo.
   * **Headline:** *"Il sapore autentico della tradizione piacentina, sotto la nostra pergola."*
   * **Subheadline:** *"Cucina casalinga, pasta fatta a mano e l'accoglienza di una volta a Olza."*
   * **Doppia CTA:**
     * Primaria: `Prenota il tuo tavolo su WhatsApp`
     * Secondaria: `Scopri il Menu` (scroll morbido alla sezione `#menu`).
2. **Anteprima "La Nostra Atmosfera" (3 Pilastri):**
   * Breve sezione visiva con 3 card/highlight:
     * *La Veranda sul Verde:* Luminosa e accogliente in ogni stagione.
     * *La Sala del Camino e della Stufa:* Intima, con mattoni a vista e calore familiare.
     * *Pasta Fatta in Casa:* Pisarei, tortelli e ricette tramandate con materie prime locali.
   * Link alla pagina `/chi-siamo`.
3. **IL MENU IN PRIMA PAGINA (`#menu`):**
   * **Requisito fondamentale:** Il menu deve essere immediatamente consultabile in homepage senza dover scaricare PDF scomodi su smartphone.
   * **Struttura dati separata (`src/data/menu.ts`):** Facile da aggiornare modificando un semplice array JSON/TS.
   * **Filtri a schede (Tab interattivi):** `Tutti`, `Antipasti`, `Primi della Tradizione`, `Secondi & Griglia`, `Dolci della Casa`, `Vini del Territorio`.
   * **Card Piatto:** Nome del piatto, badge opzionali (`Fatto in casa`, `Specialità`, `Vegetariano`), breve descrizione appetitosa degli ingredienti, prezzo chiaro allineato a destra.
   * Box informativo a fondo menu: *"Menu fisso pranzo di lavoro disponibile dal martedì al venerdì"* + nota coperto e intolleranze.
4. **Mini-Gallery & Rimando alla Gallery Completa:**
   * Griglia asimmetrica (Bento grid) con 4-5 scatti migliori degli interni e dei piatti.
   * Pulsante: `Esplora tutta la Gallery` -> `/gallery`.
5. **Sezione Prenotazione Rapida WhatsApp (`#prenota`):**
   * Form interattivo leggero (nessun backend richiesto!) che compila automaticamente il messaggio WhatsApp:
     * Campo **Nome**
     * Campo **Numero di persone** (es. 2, 4, 6+)
     * Campo **Data**
     * Campo **Turno** (Pranzo / Cena)
     * Campo **Note** (es. *Preferenza veranda*, *Seggiolone*, *Allergie*)
   * Al click su **"Invia richiesta su WhatsApp"**, apre `https://wa.me/[NUMERO_TELEFONO]?text=[TESTO_ENCODED]` con il messaggio già pronto da inviare.
6. **Dove Siamo & Orari (`#contatti`):**
   * Mappa interattiva (embed Google Maps lazy-loaded) + pulsante `Apri Navigatore`.
   * Riepilogo chiaro orari, telefono fisso per chiamate dirette e indicazioni stradali (vicinanza uscita autostrada Castelvetro Piacentino / Cremona).

---

### C. Pagina "Chi Siamo" (`src/pages/chi-siamo.astro`)
* **Hero Interna:** Titolo *"La nostra storia, la nostra cucina"* con foto storica o dettaglio della sala in mattoni.
* **Racconto Editoriale:**
  * La storia della Trattoria La Pergola a Olza: il legame con il territorio della Bassa Piacentina, il rispetto per le stagioni e la filosofia dell'ospitalità genuina.
  * Il racconto dei due ambienti: la luminosità della veranda immersa nelle piante e il fascino rustico della sala interna con i mattoni antichi e la stufa in maiolica.
* **I Produttori & Il Territorio:** Sezione dedicata alla filiera corta (Salumi DOP piacentini, formaggi locali, vini dei Colli Piacentini come Gutturnio e Ortrugo).
* **CTA finale:** Invito a venire a trovarli con pulsante WhatsApp.

---

### D. Pagina "Gallery" (`src/pages/gallery.astro`)
* **Filtri Categoria:** `Tutte le foto`, `La Veranda`, `La Sala Interna`, `I Nostri Piatti`.
* **Layout Masonry / Griglia Responsive:** Immagini ottimizzate ad alta resa visiva con didascalie descrittive.
* **Lightbox Modale:** Click su qualsiasi foto per ingrandirla a schermo intero con navigazione `Avanti / Indietro` (supporto swipe su mobile e frecce tastiera su desktop).

---

## 5. Struttura Cartelle del Progetto (Astro)

```text
trattoria-la-pergola/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── veranda-principale.jpg
│   │       ├── sala-intonaco-caldo.jpg
│   │       ├── sala-mattoni-stufa.jpg
│   │       └── piatti/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── WhatsAppBookingForm.astro
│   │   ├── MenuSection.astro
│   │   ├── GalleryGrid.astro
│   │   └── SeoSchema.astro
│   ├── data/
│   │   ├── siteConfig.ts      # Contatti, numero WA, orari, link Maps
│   │   └── menu.ts            # Dati strutturati di tutte le portate
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro        # Home + Menu + Prenotazione WA
│   │   ├── chi-siamo.astro    # Storia, filosofia e ambienti
│   │   └── gallery.astro      # Galleria fotografica completa
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 6. Dati Configurabili (`src/data/siteConfig.ts` - Segnaposto da compilare)

```typescript
export const siteConfig = {
  name: "Trattoria La Pergola",
  tagline: "Cucina Tipica Piacentina a Olza",
  address: "Via [Inserire Via e Civico], 29010 Olza di Monticelli d'Ongina (PC)",
  phoneDisplay: "0523 [XXXXXX]",
  phoneRaw: "+390523XXXXXX",
  whatsappNumber: "393XXXXXXXXX", // Formato internazionale senza + o spazi
  email: "info@trattorialapergolaolza.it",
  googleMapsUrl: "https://maps.google.com/?q=Trattoria+La+Pergola+Olza",
  openingHours: [
    { days: "Martedì - Sabato", hours: "12:00 - 14:30 / 19:30 - 22:30" },
    { days: "Domenica", hours: "12:00 - 15:00" },
    { days: "Lunedì", hours: "Chiuso" }
  ],
  defaultWhatsAppMessage: "Ciao! Vorrei prenotare un tavolo presso Trattoria La Pergola."
};
```

---

## 7. Prompt Esecutivo per Antigravity
> **Istruzione per l'agente di sviluppo:**
> Genera l'intero progetto web utilizzando **Astro + Tailwind CSS + TypeScript** seguendo rigorosamente le specifiche di questo documento.
> 1. Implementa la palette cromatica calda (`#FAF7F2` sfondo, `#B85A3A` terracotta, `#4A6B53` verde salvia) e i font Google `Cormorant Garamond` e `Plus Jakarta Sans`.
> 2. Crea il file `src/data/menu.ts` popolandolo con piatti tipici della tradizione piacentina (es. *Salumi Piacentini DOP con gnocco fritto/torta fritta*, *Pisarei e fasö*, *Tortelli con la coda burro e salvia*, *Anolini in brodo*, *Coppa arrosto*, *Punta di vitello ripiena*, *Sbrisolona e semifreddi della casa*) così che il menu in homepage sia subito completo, realistico e modificabile.
> 3. Assicurati che il componente `WhatsAppBookingForm.astro` funzioni interamente lato client, validando i campi base e aprendo correttamente l'URL `https://wa.me/...` con il messaggio precompilato ben formattato (usando `encodeURIComponent`).
> 4. Garantisci che tutte le sezioni siano 100% responsive (testate da `360px` mobile fino a `1440px` desktop), accessibili (contrasto WCAG AA, attributi `alt` descrittivi, focus visibili) e prive di errori di build.