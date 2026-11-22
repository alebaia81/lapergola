export interface ReviewItem {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  dateLabel: string;
  text: string;
  highlight?: string;
}

export const googleReviewsSummary = {
  rating: '4.3',
  totalReviews: '850+',
  googleReviewsUrl:
    'https://www.google.com/search?q=la+pergola+olza#lrd=0x4780ef5d6c536217:0x76b0387e7f5a38e6,1,,,,',
};

export const reviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Loredana',
    badge: 'Local Guide',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Aria familiare e cura nei dettagli',
    text: 'Si mangia benissimo. Prezzi bassi ma cibo fresco e preparato con cura. Lucio, cuoco e proprietario, prepara i piatti come un padre attento verso i figli. Si respira aria familiare. Carmen serve ai tavoli in modo eccellente, sempre attenta, paziente e gentile. L’ambiente sempre pulito e pieno di fiori rende tutto magico. Provare per credere.',
  },
  {
    id: 'rev-2',
    author: 'Marco G.',
    badge: 'Local Guide',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'La veranda e il giardino curatissimo',
    text: 'Qualità-prezzo veramente ottima, personale attento e preciso, il tutto in un ambiente bello e caldo. Il giardino è veramente ben curato e accogliente, in estate mangiare nella veranda aperta sul verde è un piacere unico.',
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    badge: 'Google',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Pesce ottimo nella Bassa Piacentina',
    text: 'Ottimo locale con cucina a base di pesce e prezzi più che ragionevoli. Ambiente curato e piacevole, piatti gustosi. La sala da pranzo "pergola" che dà il nome al locale è davvero caratteristica. Consigliatissimo anche il fritto misto, leggero e asciutto.',
  },
  {
    id: 'rev-4',
    author: 'Davide B.',
    badge: 'Local Guide',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Tagliolini neri e spalla cotta',
    text: 'Una certezza a Olza. Bello poter scegliere tra i piatti tipici piacentini come salumi, pisarei e spalla cotta e un menu di pesce ricchissimo. I tagliolini al nero di seppia con gamberi e gli spaghetti allo scoglio sono sempre una garanzia.',
  },
  {
    id: 'rev-5',
    author: 'Roberto C.',
    badge: 'Google',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Fritto misto e dolci fatti in casa',
    text: 'Veniamo spesso la domenica a pranzo in famiglia. Porzioni generose, servizio veloce e sorridente, un ottimo ed abbondante fritto misto e dolci della casa a 3,50 € che meritano sempre (le cialde con frutta, gelato e zabaione sono spettacolari).',
  },
  {
    id: 'rev-6',
    author: 'Andrea M.',
    badge: 'Local Guide',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Conto onesto e qualità vera',
    text: 'Trattoria storica dove ci si sente subito a casa. Sala interna in mattoni molto intima d’inverno e veranda splendida nella bella stagione. Prezzi onestissimi che ormai è difficile trovare altrove per questa qualità, soprattutto sul pesce.',
  },
  {
    id: 'rev-7',
    author: 'Paola T.',
    badge: 'Google',
    rating: 5,
    dateLabel: 'Recensione verificata',
    highlight: 'Ideale sia a pranzo che a cena',
    text: 'Posto tranquillo a pochi minuti da Monticelli d’Ongina e dall’uscita di Castelvetro. Parcheggio comodo, accoglienza calorosa e cucina sincera: dai risotti alla grigliata di mare non si sbaglia mai. Prenotazione consigliata nel weekend!',
  },
];
