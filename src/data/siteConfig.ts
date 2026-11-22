export interface OpeningHour {
  days: string;
  hours: string;
}

export const siteConfig = {
  name: "Trattoria La Pergola",
  foundedYear: "1978",
  tagline: "Cucina Piacentina e Specialità di Mare a Olza",
  description:
    "Trattoria La Pergola a Olza di Monticelli d'Ongina (PC): salumi piacentini, pisarei, specialità di pesce, veranda estiva apribile sul giardino e sala storica con stufa in maiolica.",
  address: "Località Olza 6 (Via Olza Fogarole Cristo), 29010 Monticelli d'Ongina (PC)",
  locality: "Olza • Monticelli d'Ongina (PC)",
  phoneDisplay: "0523 829409",
  phoneRaw: "+390523829409",
  whatsappNumber: "390523829409", // Formato internazionale senza + o spazi
  email: "info@trattorialapergolaolza.it",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trattoria+La+Pergola+Localit%C3%A0+Olza+6+Monticelli+d%27Ongina+PC",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Trattoria+La+Pergola+Localit%C3%A0+Olza+6+29010+Monticelli+d%27Ongina+PC&z=15&output=embed",
  directionsNote:
    "A 5 minuti dal casello di Castelvetro Piacentino / Cremona (A21). Parcheggio comodo e gratuito proprio davanti all'ingresso.",
  openingHours: [
    { days: "Martedì - Sabato", hours: "12:00 - 14:30 / 19:30 - 22:30" },
    { days: "Domenica", hours: "12:00 - 15:00" },
    { days: "Lunedì", hours: "Chiuso" },
  ] as OpeningHour[],
  defaultWhatsAppMessage:
    "Ciao! Vorrei prenotare un tavolo alla Trattoria La Pergola.",
  lunchMenuNote:
    "Dal martedì al venerdì a pranzo proponiamo anche il menu di lavoro completo: servizio rapido, piatti del giorno preparati al momento e conto trasparente.",
  allergenNote:
    "Segnalaci eventuali allergie o intolleranze quando prenoti o direttamente al tavolo: la cucina è a disposizione per consigliarti.",
};
