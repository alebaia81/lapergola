import type { ImageMetadata } from 'astro';

import taglioliniNeriImg from '../assets/images/piatti/tagliolini-neri.jpg';
import spaghettiScoglioImg from '../assets/images/piatti/spaghetti-scoglio.jpg';
import pennetteCulatelloImg from '../assets/images/piatti/pennette-culatello.jpg';
import risottoPorciniImg from '../assets/images/piatti/risotto-porcini.jpg';
import risottoZafferanoImg from '../assets/images/piatti/risotto-zafferano.jpg';
import frittoMistoImg from '../assets/images/piatti/fritto-misto.jpg';
import grigliataMareImg from '../assets/images/piatti/grigliata-mare.jpg';
import insalataGamberiSalmoneImg from '../assets/images/piatti/insalata-gamberi-salmone.jpg';
import costataFerriImg from '../assets/images/piatti/costata-ferri.jpg';
import semifreddoGranellaImg from '../assets/images/piatti/semifreddo-granella.jpg';
import cialdaFruttaGelatoImg from '../assets/images/piatti/cialda-frutta-gelato.jpg';
import pannaCottaFruttiImg from '../assets/images/piatti/panna-cotta-frutti.jpg';
import salumiGnoccoImg from '../assets/images/piatti/salumi-gnocco.jpg';
import pisareiFasoImg from '../assets/images/piatti/pisarei-faso.jpg';
import spaghettiVongoleImg from '../assets/images/piatti/spaghetti-vongole.jpg';
import taglioliniGamberiAsparagiImg from '../assets/images/piatti/tagliolini-gamberi-asparagi.jpg';
import cialdaZabaioneCioccolatoImg from '../assets/images/piatti/cialda-zabaione-cioccolato.jpg';
import insalataDiMareImg from '../assets/images/piatti/insalata-di-mare.jpg';
import cozzeAlVaporeImg from '../assets/images/piatti/cozze-al-vapore.jpg';
import fragoleMazzancolleImg from '../assets/images/piatti/fragole-mazzancolle.jpg';
import carpaccioTonnoImg from '../assets/images/piatti/carpaccio-tonno.jpg';
import codeGamberiSalsaRosaImg from '../assets/images/piatti/code-gamberi-salsa-rosa.jpg';
import tominoScamorzaImg from '../assets/images/piatti/tomino-scamorza.jpg';
import sgombroCarciofiImg from '../assets/images/piatti/sgombro-carciofi.jpg';
import risottoFruttiMareImg from '../assets/images/piatti/risotto-frutti-mare.jpg';
import risottoBrieSalmoneImg from '../assets/images/piatti/risotto-brie-salmone.jpg';
import pisareiAsticeImg from '../assets/images/piatti/pisarei-astice.jpg';
import tortelliPesceZafferanoImg from '../assets/images/piatti/tortelli-pesce-zafferano.jpg';
import risottoRadicchioSpallaImg from '../assets/images/piatti/risotto-radicchio-spalla-cotta.jpg';
import risottoAsparagiCrudoImg from '../assets/images/piatti/risotto-asparagi-crudo.jpg';

export type MenuCategoryId =
  | 'antipasti'
  | 'primi'
  | 'secondi-pesce'
  | 'secondi-carne'
  | 'contorni'
  | 'dolci';

export type DishBadge = 'Tradizione' | 'Mare' | 'Vegetariano' | 'Fatto in casa';

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  description?: string;
  price: string;
  badges?: DishBadge[];
  image?: ImageMetadata;
  imageAlt?: string;
  featuredOnHome?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export const menuCategories: MenuCategory[] = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi Piatti' },
  { id: 'secondi-pesce', label: 'Secondi di Pesce' },
  { id: 'secondi-carne', label: 'Secondi di Carne' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'dolci', label: 'Desserts' },
];

export const menuItems: MenuItem[] = [
  // ANTIPASTI
  {
    id: 'salumi-piacentini',
    category: 'antipasti',
    name: 'Salumi Piacentini',
    description: 'Coppa, salame e pancetta della nostra provincia, affettati al momento.',
    price: '7,00 €',
    badges: ['Tradizione'],
    image: salumiGnoccoImg,
    imageAlt: 'Tagliere di Salumi Piacentini tradizionali',
    featuredOnHome: true,
  },
  {
    id: 'insalata-di-mare',
    category: 'antipasti',
    name: 'Insalata di mare',
    description: 'Calamari, seppie, polpo e gamberi lessati al punto giusto, conditi con olio buono, limone e prezzemolo.',
    price: '8,50 €',
    badges: ['Mare'],
    image: insalataDiMareImg,
    imageAlt: 'Insalata di mare con polpo, calamari, seppie, gamberi, olio e limone',
    featuredOnHome: true,
  },
  {
    id: 'cozze-al-vapore',
    category: 'antipasti',
    name: 'Cozze al vapore',
    description: 'Aperte in casseruola al vino bianco con aglio dolce, pepe nero e prezzemolo tritato.',
    price: '8,00 €',
    badges: ['Mare'],
    image: cozzeAlVaporeImg,
    imageAlt: 'Cozze al vapore al vino bianco con prezzemolo fresco e pepe nero',
    featuredOnHome: true,
  },
  {
    id: 'fragole-mazzancolle',
    category: 'antipasti',
    name: "Fragole e mazzancolle all'aceto balsamico",
    description: 'Code di mazzancolle scottate abbinate a fragole fresche e gocce di balsamico invecchiato.',
    price: '8,00 €',
    badges: ['Mare'],
    image: fragoleMazzancolleImg,
    imageAlt: "Fragole fresche e code di mazzancolle scottate all'aceto balsamico",
  },
  {
    id: 'carpaccio-tonno',
    category: 'antipasti',
    name: 'Carpaccio di tonno e rucola',
    description: 'Fettine sottili di tonno servite con rucola croccante, olio extravergine e pepe.',
    price: '8,00 €',
    badges: ['Mare'],
    image: carpaccioTonnoImg,
    imageAlt: 'Carpaccio di tonno rosso con rucola selvatica e olio extravergine',
  },
  {
    id: 'code-gamberi-salsa-rosa',
    category: 'antipasti',
    name: 'Code gamberi in salsa rosa',
    description: 'Il grande classico delle feste: code di gambero tenere su foglia d’insalata con salsa cocktail della casa.',
    price: '8,00 €',
    badges: ['Mare'],
    image: codeGamberiSalsaRosaImg,
    imageAlt: 'Code di gamberi in salsa rosa servite su foglia di lattuga fresca',
  },
  {
    id: 'tomino-scamorza',
    category: 'antipasti',
    name: 'Tomino e scamorza affumicata grigliati con insalata',
    description: 'Formaggi passati sulla piastra fino a fondere il cuore, accompagnati da insalata fresca.',
    price: '7,00 €',
    badges: ['Vegetariano'],
    image: tominoScamorzaImg,
    imageAlt: 'Tomino fuso e scamorza affumicata alla piastra con insalata fresca',
    featuredOnHome: true,
  },
  {
    id: 'sgombro-carciofi',
    category: 'antipasti',
    name: "Filetti di sgombro affumicato e carciofi sott'olio",
    description: 'Sgombro dal gusto morbido e leggermente affumicato servito con spicchi di carciofo teneri.',
    price: '8,00 €',
    badges: ['Mare'],
    image: sgombroCarciofiImg,
    imageAlt: "Filetti di sgombro affumicato serviti con spicchi di carciofi sott'olio",
  },

  // PRIMI PIATTI
  {
    id: 'pisarei-e-fasoi',
    category: 'primi',
    name: 'Pisarei e fasoi',
    description: 'Il piatto simbolo di Piacenza: gnocchetti di pane e farina tirati a mano con sugo ricco di fagioli borlotti.',
    price: '6,00 €',
    badges: ['Tradizione', 'Fatto in casa'],
    image: pisareiFasoImg,
    imageAlt: 'Piatto di Pisarei e fasoi fatti a mano',
    featuredOnHome: true,
  },
  {
    id: 'tagliolini-neri-gamberi',
    category: 'primi',
    name: 'Tagliolini neri con gamberi e basilico',
    description: 'Pasta all’uovo al nero di seppia saltata con code di gambero, pomodorini freschi e foglie di basilico.',
    price: '7,00 €',
    badges: ['Mare'],
    image: taglioliniNeriImg,
    imageAlt: 'Tagliolini al nero di seppia con gamberi, pomodorini e basilico',
    featuredOnHome: true,
  },
  {
    id: 'risotto-porcini-speck-taleggio',
    category: 'primi',
    name: 'Risotto porcini, speck e taleggio',
    description: 'Riso mantecato all’onda con funghi porcini, listarelle di speck croccante e cremosità di taleggio.',
    price: '7,00 €',
    badges: ['Tradizione'],
    image: risottoPorciniImg,
    imageAlt: 'Risotto cremoso ai funghi porcini, speck e taleggio',
    featuredOnHome: true,
  },
  {
    id: 'spaghetti-scoglio',
    category: 'primi',
    name: 'Spaghetti allo scoglio',
    description: 'Cozze, vongole e gamberi legati da un sughetto di mare profumato al vino bianco e prezzemolo.',
    price: '8,00 €',
    badges: ['Mare'],
    image: spaghettiScoglioImg,
    imageAlt: 'Spaghetti allo scoglio con cozze, vongole e gamberi',
    featuredOnHome: true,
  },
  {
    id: 'risotto-frutti-mare',
    category: 'primi',
    name: 'Risotto ai frutti di mare',
    description: 'Cottura lenta nel fumetto di pesce con calamari, cozze, vongole e gamberi.',
    price: '7,00 €',
    badges: ['Mare'],
    image: risottoFruttiMareImg,
    imageAlt: 'Risotto cremoso ai frutti di mare con cozze, vongole, calamari e gamberi',
  },
  {
    id: 'gnocchi-mazzancolle-vongole',
    category: 'primi',
    name: 'Gnocchi mazzancolle e vongole',
    description: 'Gnocchi di patate soffici avvolti dal sapore sapido delle vongole veraci e dalla dolcezza delle mazzancolle.',
    price: '8,00 €',
    badges: ['Mare'],
    image: spaghettiVongoleImg,
    imageAlt: 'Primo di mare con vongole veraci, gamberi e prezzemolo fresco',
    featuredOnHome: true,
  },
  {
    id: 'pennette-culatello-gorgonzola',
    category: 'primi',
    name: 'Pennette culatello e gorgonzola',
    description: 'Salsa vellutata al gorgonzola dolce arricchita da straccetti di culatello stagionato.',
    price: '6,00 €',
    badges: ['Tradizione'],
    image: pennetteCulatelloImg,
    imageAlt: 'Pennette con crema al gorgonzola e straccetti di culatello',
    featuredOnHome: true,
  },
  {
    id: 'risotto-brie-salmone',
    category: 'primi',
    name: 'Risotto brie e salmone affumicato',
    description: 'Incontro delicato tra la morbidezza del formaggio brie fuso e il profumo del salmone affumicato.',
    price: '7,00 €',
    badges: ['Mare'],
    image: risottoBrieSalmoneImg,
    imageAlt: 'Risotto vellutato al brie con straccetti di salmone affumicato',
  },
  {
    id: 'pisarei-astice',
    category: 'primi',
    name: "Pisarei con polpa d'Astice",
    description: 'I nostri pisarei fatti a mano incontrano il mare in un sugo ricco alla polpa d’astice.',
    price: '7,00 €',
    badges: ['Mare', 'Fatto in casa'],
    image: pisareiAsticeImg,
    imageAlt: "Pisarei fatti a mano conditi con sugo ricco alla polpa d'astice",
    featuredOnHome: true,
  },
  {
    id: 'tortelli-pesce-zafferano',
    category: 'primi',
    name: 'Tortelli di pesce, crema allo zafferano',
    description: 'Pasta ripiena di mare servita su una salsa morbida e dorata allo zafferano.',
    price: '7,00 €',
    badges: ['Mare', 'Fatto in casa'],
    image: tortelliPesceZafferanoImg,
    imageAlt: 'Tortelli ripieni di pesce serviti su crema dorata allo zafferano',
  },
  {
    id: 'maccheroncini-scampi',
    category: 'primi',
    name: 'Maccheroncini agli scampi',
    description: 'Pasta fresca tirata nel sugo cremoso di scampi sfumati al brandy e pomodoro.',
    price: '7,00 €',
    badges: ['Mare'],
    image: taglioliniGamberiAsparagiImg,
    imageAlt: 'Pasta fresca saltata con crostacei e verdure',
    featuredOnHome: true,
  },
  {
    id: 'risotto-carciofi-seppie',
    category: 'primi',
    name: 'Risotto carciofi e seppie',
    description: 'Un grande abbinamento di stagione tra la tenerezza delle seppioline e i carciofi a spicchi.',
    price: '7,00 €',
    badges: ['Mare'],
    image: risottoZafferanoImg,
    imageAlt: 'Risotto cremoso con carciofi e seppie',
    featuredOnHome: true,
  },
  {
    id: 'risotto-radicchio-spalla-cotta',
    category: 'primi',
    name: 'Risotto radicchio e spalla cotta di San Secondo',
    description: 'La nota amarognola del radicchio rosso bilanciata dalla sapidità della celebre spalla cotta.',
    price: '6,00 €',
    badges: ['Tradizione'],
    image: risottoRadicchioSpallaImg,
    imageAlt: 'Risotto cremoso al radicchio rosso e spalla cotta di San Secondo',
  },
  {
    id: 'risotto-asparagi-crudo',
    category: 'primi',
    name: 'Risotto asparagi, crudo e scamorza affumicata',
    description: 'Mantecato con punte di asparagi verdi, prosciutto crudo dolce e scamorza filante.',
    price: '6,00 €',
    image: risottoAsparagiCrudoImg,
    imageAlt: 'Risotto mantecato con asparagi verdi, prosciutto crudo e scamorza affumicata',
  },
  {
    id: 'gnocchi-pasticciati',
    category: 'primi',
    name: 'Gnocchi pasticciati',
    description: 'Conditi con il nostro ragù ricco e una tocco di panna come nella tradizione emiliana di casa.',
    price: '6,00 €',
    badges: ['Tradizione'],
  },
  {
    id: 'zuppa-cipolle',
    category: 'primi',
    name: 'Zuppa di cipolle gratinata',
    description: 'Cipolle bionde stufate lentamente, crostini di pane e gratinatura dorata al forno.',
    price: '6,00 €',
    badges: ['Vegetariano'],
  },

  // SECONDI DI PESCE
  {
    id: 'filetto-branzino-erbe',
    category: 'secondi-pesce',
    name: 'Filetto di branzino alle erbe',
    description: 'Cotto delicatamente alla piastra con trito di erbe aromatiche e olio extravergine.',
    price: '11,00 €',
    badges: ['Mare'],
  },
  {
    id: 'grigliata-di-mare',
    category: 'secondi-pesce',
    name: 'Grigliata di mare',
    description: 'Gamberoni, seppie e filetti di pesce arrostiti sulla griglia e profumati al prezzemolo e limone.',
    price: '11,00 €',
    badges: ['Mare'],
    image: grigliataMareImg,
    imageAlt: 'Grigliata mista di mare con seppia, gamberone e filetti di pesce',
    featuredOnHome: true,
  },
  {
    id: 'fritto-misto',
    category: 'secondi-pesce',
    name: 'Fritto misto calamari e gamberi',
    description: 'Anelli di calamaro e code di gambero dalla panatura leggera, asciutta e croccante, serviti con limone.',
    price: '11,00 €',
    badges: ['Mare'],
    image: frittoMistoImg,
    imageAlt: 'Fritto misto dorato di calamari e gamberi con salsa tartara e limone',
    featuredOnHome: true,
  },
  {
    id: 'gamberoni-grigliati',
    category: 'secondi-pesce',
    name: 'Gamberoni grigliati',
    description: 'Gamberoni interi cotti alla piastra con un filo d’olio, sale marino e spicchio di limone.',
    price: '12,00 €',
    badges: ['Mare'],
  },
  {
    id: 'insalata-gamberi-rucola-salmone',
    category: 'secondi-pesce',
    name: 'Insalata di gamberi, rucola e salmone',
    description: 'Piatto fresco e leggero con salmone affumicato, code di gambero, rucola selvatica e pomodorini.',
    price: '9,00 €',
    badges: ['Mare'],
    image: insalataGamberiSalmoneImg,
    imageAlt: 'Insalata fresca con salmone affumicato, gamberi e rucola',
    featuredOnHome: true,
  },
  {
    id: 'filetto-branzino-panato',
    category: 'secondi-pesce',
    name: 'Filetto di branzino panato e grigliato',
    description: 'Avvolto in una panatura rustica alle erbe che mantiene la carne morbida e succosa sulla griglia.',
    price: '10,00 €',
    badges: ['Mare'],
  },

  // SECONDI DI CARNE
  {
    id: 'costata-ai-ferri',
    category: 'secondi-carne',
    name: 'Costata di manzo ai ferri',
    description: 'Taglio scelto di manzo cotto ai ferri con trito di erbe fresche.',
    price: '11,00 €',
    image: costataFerriImg,
    imageAlt: 'Costata di manzo ai ferri alle erbe con insalata verde',
    featuredOnHome: true,
  },
  {
    id: 'filetto-manzo',
    category: 'secondi-carne',
    name: 'Filetto di manzo alla griglia o al gorgonzola',
    description: 'Il taglio più tenero, servito semplice alla griglia oppure nappato con fonduta calda di gorgonzola.',
    price: '12,00 €',
  },
  {
    id: 'carpaccio-rucola-grana',
    category: 'secondi-carne',
    name: 'Carpaccio rucola e grana',
    description: 'Fettine sottili di manzo crudo con letto di rucola, scaglie di Grana Padano e olio extravergine.',
    price: '12,00 €',
  },
  {
    id: 'costolette-agnello',
    category: 'secondi-carne',
    name: 'Costolette di agnello scottadito',
    description: 'Arrostite vive sulla piastra per gustarle caldissime e saporite.',
    price: '10,00 €',
  },

  // CONTORNI
  {
    id: 'patate-al-forno',
    category: 'contorni',
    name: 'Patate al forno',
    description: 'Spicchi dorati al rosmarino.',
    price: '1,50 €',
    badges: ['Vegetariano'],
  },
  {
    id: 'insalata-mista',
    category: 'contorni',
    name: 'Insalata mista',
    description: 'Foglie verdi, radicchio e pomodori freschi.',
    price: '3,00 €',
    badges: ['Vegetariano'],
  },
  {
    id: 'verdure-grigliate',
    category: 'contorni',
    name: 'Verdure grigliate',
    description: 'Zucchine, melanzane e peperoni passati alla piastra e conditi a crudo.',
    price: '3,50 €',
    badges: ['Vegetariano'],
  },

  // DESSERTS
  {
    id: 'semifreddo-amaretto',
    category: 'dolci',
    name: "Semifreddo all'amaretto",
    description: 'Morbido semifreddo artigianale dal profumo intenso di amaretti sbriciolati.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
    image: semifreddoGranellaImg,
    imageAlt: 'Coppa di semifreddo della casa con granella croccante',
    featuredOnHome: true,
  },
  {
    id: 'sorbetto-limoncello',
    category: 'dolci',
    name: 'Sorbetto al Limoncello',
    description: 'Fresco e digestivo, ideale a fine pasto dopo i piatti di pesce.',
    price: '3,50 €',
  },
  {
    id: 'creme-brulee',
    category: 'dolci',
    name: 'Crème brulè',
    description: 'Crema cotta alla vaniglia con crosticina sottile di zucchero caramellato.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
  },
  {
    id: 'torta-panna-fragole-torrone',
    category: 'dolci',
    name: 'Torta panna, fragole e scaglie di torrone',
    description: 'Pan di Spagna soffice farcito con panna montata, fragole e croccantezza di torrone.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
  },
  {
    id: 'tarte-tatin',
    category: 'dolci',
    name: 'Tarte Tatin',
    description: 'Torta rovesciata alle mele caramellate nel burro e pasta sfoglia fragrante.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
  },
  {
    id: 'panna-cotta-fragole',
    category: 'dolci',
    name: 'Panna cotta, salsa fragole',
    description: 'Preparata in casa e servita con coulis di fragole o frutti di bosco.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
    image: pannaCottaFruttiImg,
    imageAlt: 'Panna cotta guarnita con frutti di bosco freschi e salsa',
    featuredOnHome: true,
  },
  {
    id: 'cialde-frutta-gelato-zabaione',
    category: 'dolci',
    name: 'Cialde con frutta fresca, gelato alla crema e zabaione',
    description: 'Cestino di cialda croccante ripieno di macedonia fresca, gelato alla crema e colata di zabaione.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
    image: cialdaFruttaGelatoImg,
    imageAlt: 'Cialda croccante con frutta fresca, gelato alla crema e zabaione',
    featuredOnHome: true,
  },
  {
    id: 'semifreddo-torroncino',
    category: 'dolci',
    name: 'Semifreddo al torroncino',
    description: 'Classico semifreddo della casa con granella di torrone.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
    image: cialdaZabaioneCioccolatoImg,
    imageAlt: 'Cialda e semifreddo con crema allo zabaione e cioccolato',
    featuredOnHome: true,
  },
  {
    id: 'tiramisu',
    category: 'dolci',
    name: 'Tiramisù',
    description: 'Savoiardi inzuppati nel caffè, crema al mascarpone e cacao amaro.',
    price: '3,50 €',
    badges: ['Fatto in casa'],
  },
];
