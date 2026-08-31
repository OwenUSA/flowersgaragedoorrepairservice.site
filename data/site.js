// Todo el contenido del sitio vive aqui. Las paginas y los componentes solo lo pintan.
// Cambiar el telefono, el correo o una direccion es cambiar una linea de este archivo.

export const site = {
  brand: 'Flowers Garage Door Repair',
  brandFirst: 'Flowers',
  brandRest: 'Garage Door Repair',
  domain: 'flowersgaragedoorrepairservice.site',
  url: 'https://flowersgaragedoorrepairservice.site',
  phone: {
    href: 'tel:+15612508965',
    display: '(561) 250-8965',
    long: '1 (561) 250-8965',
    schema: '+1-561-250-8965',
  },
  logo: {
    header: '/img/logo.png',
    footer: '/img/logo-light.png',
    width: 46,
    height: 46,
    alt: 'Flowers Garage Door Repair',
  },
  email: 'service@flowersgaragedoorrepairservice.site',
  privacyEmail: 'privacy@flowersgaragedoorrepairservice.site',
  hours: 'Mon &ndash; Sat 7:00 AM &ndash; 9:00 PM',
  hoursLong: 'Mon – Sat: 7:00 AM – 9:00 PM',
  hoursSunday: 'Sun & holidays: emergency dispatch 24/7',
  heroHome: '/img/home-hero.jpg',
  heroCity: '/img/hero-garage.jpg',
  legalUpdated: 'August 28, 2026',
  year: 2026,
};

// La ciudad del despacho principal, que es la que sale en la barra superior y el pie
export const mainCitySlug = 'Jupiter';

export const cities = [
  {
    slug: 'Jupiter',
    name: 'Jupiter',
    zip: '33458',
    addr1: '126 N River Dr W',
    street: 'North River Drive West',
    county: 'Palm Beach County',
    // OJO: coordenadas aproximadas a la manzana. Sustituir por el pin real de Google Business.
    lat: 26.9355,
    lon: -80.1005,
    mapQuery: '126 N River Dr W Jupiter FL 33458',
    tag: 'Main Dispatch',
    coverageMeta: 'Where the trucks start the day · Dispatch desk open 24/7',
    main: true,
    note:
      'Jupiter sits on the northern coastal strip of Palm Beach County, where the wind zone is unforgiving and most of the housing stock lives inside an HOA. That means two things for a garage door here: the replacement has to carry the right wind-load rating and permit, and the panel style and color usually have to match what the association already approved. We handle both, and on the older Abacoa and Jupiter Farms doors we can usually rebuild the hardware instead of replacing the whole door.',
    neighborhoods: ['Jupiter', 'Abacoa', 'Jupiter Farms', 'Tequesta', 'Juno Beach', 'Palm Beach Gardens', 'North Palm Beach', 'Hobe Sound', 'Singer Island', 'Jupiter Inlet Colony'],
  },
  {
    slug: 'DelrayBeach',
    name: 'Delray Beach',
    zip: '33483',
    addr1: '550 SE 6th Ave, Ste 17',
    street: 'SE 6th Avenue',
    county: 'Palm Beach County',
    lat: 26.459,
    lon: -80.069,
    mapQuery: '550 SE 6th Ave Delray Beach FL 33483',
    tag: 'Palm Beach County',
    coverageMeta: 'Serving Delray Beach, Boynton Beach, Boca Raton & Highland Beach',
    note:
      'Delray Beach sits in the wind-borne debris region, so any new door we install here is wind-load rated for the opening and permitted through Palm Beach County. Add the salt air coming off A1A and you get the other half of our local work: rollers, hinges, cables and bottom brackets that rust from the inside out on the barrier-island and beachside streets. On the older downtown homes we mostly rebalance single-car doors and swap corroded hardware for galvanized parts.',
    neighborhoods: ['Delray Beach', 'Atlantic Avenue', 'Lake Ida', 'Tropic Isle', 'Del-Ida Park', 'Highland Beach', 'Gulf Stream', 'Ocean Ridge', 'Boynton Beach', 'Boca Raton', 'Lake Worth'],
  },
  {
    slug: 'Doral',
    name: 'Doral',
    zip: '33122',
    addr1: '6700 NW 77th Ct, Unit 1017',
    street: 'NW 77th Court',
    county: 'Miami-Dade County',
    lat: 25.821,
    lon: -80.3245,
    mapQuery: '6700 NW 77th Ct Doral FL 33122',
    tag: 'Miami-Dade County',
    coverageMeta: 'Serving all of Miami, Doral, Hialeah & Miami Springs',
    note:
      'Miami-Dade is a High-Velocity Hurricane Zone, so every new door we install around Doral carries a Miami-Dade County Product Approval and the correct wind-load rating for the opening. We handle the permit paperwork and the final inspection, and we can reinforce an existing door with approved bracing when a full replacement is not on the table. The warehouse belt around the airport also keeps us busy with rolling steel doors and high-cycle springs that see a hundred cycles a day.',
    neighborhoods: ['Doral', 'Downtown Doral', 'Fontainebleau', 'Sweetwater', 'Miami Springs', 'Hialeah', 'Medley', 'Westchester', 'Miami', 'Coral Gables', 'Kendall', 'Miami Beach'],
  },
  {
    slug: 'FortLauderdale',
    name: 'Fort Lauderdale',
    zip: '33301',
    addr1: '599 SW 2nd Ave, Fl 191',
    street: 'SW 2nd Avenue',
    county: 'Broward County',
    lat: 26.1195,
    lon: -80.147,
    mapQuery: '599 SW 2nd Ave Fort Lauderdale FL 33301',
    tag: 'Broward County',
    coverageMeta: 'Serving Fort Lauderdale, Plantation, Sunrise & Davie',
    note:
      'Broward County is also a High-Velocity Hurricane Zone, so new doors here need an approved wind-load rating and a permit before the first panel goes up. The canal-front and beachside houses east of Federal Highway give us the other steady job: brackets, cables and rollers eaten by salt and humidity. In the townhouse and HOA communities west of I-95 we work around association rules on panel style and color, and we can match an existing door instead of replacing the whole row.',
    neighborhoods: ['Fort Lauderdale', 'Las Olas', 'Victoria Park', 'Rio Vista', 'Coral Ridge', 'Wilton Manors', 'Oakland Park', 'Plantation', 'Sunrise', 'Davie', 'Dania Beach', 'Pompano Beach'],
  },
  {
    slug: 'WestPalmBeach',
    name: 'West Palm Beach',
    zip: '33401',
    addr1: '500 S Australian Ave, Fl 10',
    street: 'South Australian Avenue',
    county: 'Palm Beach County',
    lat: 26.7095,
    lon: -80.0555,
    mapQuery: '500 S Australian Ave West Palm Beach FL 33401',
    tag: 'Palm Beach County',
    coverageMeta: 'Serving West Palm Beach, Wellington, Lake Worth & Royal Palm Beach',
    note:
      'West Palm Beach runs from downtown condo garages and historic El Cid and Northwood bungalows out to the newer suburbs past Okeechobee Boulevard, and each end of that range breaks differently. Downtown we mostly service commercial and multi-unit doors that cycle all day; in the older neighborhoods it is corroded hardware and doors that were never balanced properly; out west it is openers and worn springs on twenty-year-old builder doors. All of it is in the wind-borne debris region, so replacements are permitted and wind-load rated.',
    neighborhoods: ['West Palm Beach', 'Downtown', 'Northwood', 'El Cid', 'Flamingo Park', 'Palm Beach', 'Riviera Beach', 'Lake Worth Beach', 'Greenacres', 'Wellington', 'Royal Palm Beach', 'Haverhill'],
  },
];

export const mainCity = cities.find((c) => c.slug === mainCitySlug);

export const getCity = (slug) => cities.find((c) => c.slug === slug);

// Navbar: cuatro paginas reales, sin desplegable de Services.
// Excepcion consciente de Owen (31 ago 2026), igual que en Trevino.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

// Rejilla de servicios de la home
export const homeServices = [
  {
    id: 'springs',
    icon: 'grid',
    title: 'Garage Door Springs',
    text: 'Torsion and extension springs replaced with high-cycle, code-compliant parts. We always recommend replacing springs in pairs so the door stays balanced.',
    bullets: ['Broken torsion spring replacement', 'Extension spring & safety cable service', 'Door balance and tension adjustment'],
  },
  {
    id: 'openers',
    icon: 'opener',
    title: 'Garage Door Openers',
    text: 'Chain, belt and screw-drive openers diagnosed, repaired or replaced. We install quiet belt-drive and Wi-Fi smart openers from the brands you already trust.',
    bullets: ['Motor, gear & circuit board repair', 'Safety sensor alignment', 'Remote, keypad & smart app setup'],
  },
  {
    id: 'cables',
    icon: 'gear',
    title: 'Cables, Rollers & Tracks',
    text: 'Frayed cables, cracked rollers and bent tracks are the most common cause of a door coming off its rails. We straighten, realign or replace as needed.',
    bullets: ['Off-track door correction', 'Nylon roller upgrades', 'Hinge, bracket & drum replacement'],
  },
  {
    id: 'installation',
    icon: 'doorHouse',
    title: 'Garage Door Installation',
    text: 'Steel, aluminum, wood and glass doors built for Florida weather — including hurricane-rated, wind-load approved models for coastal properties.',
    bullets: ['Measured on site at your home', 'Insulated & impact-rated options', 'Full haul-away of your old door'],
  },
  {
    id: 'overhead',
    icon: 'shieldBar',
    title: 'Overhead & Commercial Doors',
    text: 'Warehouses, storefronts and HOA properties. We service rolling steel doors, sectional doors, gate operators and high-cycle commercial systems.',
    bullets: ['Rolling steel & sectional service', 'Loading dock & high-cycle springs', 'Scheduled preventive maintenance'],
  },
  {
    id: 'emergency',
    icon: 'bolt',
    title: '24/7 Emergency Service',
    text: 'A garage door stuck open leaves your home exposed. Our emergency crews run nights, weekends and holidays across the entire coverage area.',
    bullets: ['Door stuck open or closed', 'Storm & impact damage', 'Temporary securing of the opening'],
  },
];

// Rejilla de servicios de las paginas de ciudad
export const cityServices = [
  {
    id: 'repair',
    icon: 'wrench',
    title: (city) => `Garage Door Repair in ${city}`,
    sub: 'Fast, reliable repairs for all makes and models.',
    checks: ['Same-day service', 'Off-track doors, cables and rollers', 'Tune-ups and safety reverse testing'],
    cta: 'Book a repair',
  },
  {
    id: 'installation',
    icon: 'doorHouse',
    title: () => 'Garage Door Installation',
    sub: 'New doors measured and fitted at your home.',
    checks: ['Measured on site', 'Hurricane-rated options', 'Old door hauled away'],
    cta: 'Ask about a new door',
  },
  {
    id: 'emergency',
    icon: 'bolt',
    title: () => '24/7 Emergency Service',
    sub: 'Garage door service when you need it most.',
    checks: ['24/7 dispatch', 'Door stuck open or closed', 'Opening secured on the spot'],
    cta: 'Call the night line',
  },
  {
    id: 'overhead',
    icon: 'shieldCheck',
    title: () => 'Overhead & Commercial Doors',
    sub: 'Rolling steel, sectional and high-cycle systems.',
    checks: ['Warehouses and storefronts', 'Loading dock & high-cycle springs', 'Scheduled maintenance for HOAs'],
    cta: 'Talk about your property',
  },
  {
    id: 'openers',
    icon: 'opener',
    title: () => 'Garage Door Openers',
    sub: 'Smart, quiet and reliable opener service.',
    checks: ['All major opener brands', 'Wi-Fi enabled openers', 'Safety sensor alignment'],
    cta: 'Fix my opener',
  },
  {
    id: 'springs',
    icon: 'grid',
    title: () => 'Garage Door Springs',
    sub: 'Torsion and extension springs replaced safely.',
    checks: ['High-cycle springs', 'Replaced in balanced pairs', 'Same-day fixes'],
    cta: 'Replace a broken spring',
  },
];

export const trustItems = [
  { icon: 'clock', title: '24/7 Emergency', text: 'Nights, weekends & holidays' },
  { icon: 'truck', title: 'We Come to You', text: 'Every repair happens at your door' },
  { icon: 'pin', title: 'Miami to Jupiter', text: 'Five dispatch points, one crew' },
  { icon: 'trophy', title: 'Warranty Backed', text: 'Workmanship guaranteed in writing' },
];

export const heroPoints = ['Same-day appointments', 'We come to you', 'Someone answers at 3 AM', 'Workmanship warranty'];

export const heroCardItems = [
  { icon: 'clock', strong: 'Fast response', text: ' — the emergency line rings a technician, day or night.' },
  { icon: 'shieldCheck', strong: 'Written estimate', text: ' handed to you on site before the work starts.' },
  { icon: 'truck', strong: 'Stocked trucks', text: ' so most repairs finish in one visit.' },
  { icon: 'pin', strong: '5 dispatch points', text: ' covering Miami and all of South Florida.' },
];

export const aboutChecklist = [
  { strong: 'We come to you', text: 'The technician works at your home or property — you never have to move the door.' },
  { strong: 'One-visit repairs', text: 'Springs, rollers, cables and openers ride on every truck.' },
  { strong: 'Florida-ready materials', text: 'Galvanized, corrosion-resistant hardware for coastal humidity and salt air.' },
  { strong: 'Written warranty', text: 'The workmanship on every repair is guaranteed on the invoice.' },
];

export const steps = [
  { n: 1, title: 'Call or Request', text: 'Tell us what the door is doing. We book a same-day or next-morning window that fits your schedule.' },
  { n: 2, title: 'Full Inspection', text: 'The technician tests springs, cables, tracks, rollers and the opener — a 25-point check, not a guess.' },
  { n: 3, title: 'Written Estimate', text: 'You get the plan in writing, with the options explained in plain English. Nothing is done until you say yes.' },
  { n: 4, title: 'Repair & Test', text: 'We complete the work, balance the door, test the safety reverse and clean up before we leave.' },
];

export const whatBreaks = [
  {
    icon: 'grid',
    title: 'The bang, then nothing',
    text: 'A torsion spring lets go with a sound like a gunshot and the door will not budge. Never try to force it open with the opener — call us and keep the car where it is.',
  },
  {
    icon: 'opener',
    title: 'It closes, then reverses',
    text: 'Nine times out of ten it is a safety sensor knocked out of alignment or a lens fogged by humidity. It is a quick fix, and it is not something to disable.',
  },
  {
    icon: 'shieldCheck',
    title: 'Grinding, rust and salt',
    text: 'Coastal air eats rollers, hinges and cables from the inside out. We swap them for galvanized and nylon parts that survive a Florida summer.',
  },
];

export const areaTags = [
  'Miami', 'Miami Beach', 'Doral', 'Hialeah', 'Coral Gables', 'Kendall', 'Pinecrest', 'Aventura',
  'Fort Lauderdale', 'Plantation', 'Sunrise', 'Davie', 'Boca Raton', 'Delray Beach', 'Boynton Beach',
  'West Palm Beach', 'Palm Beach Gardens', 'Jupiter',
];

export const faq = [
  {
    q: 'How fast can you get to my house?',
    a: 'In most of our coverage area we offer same-day service, and emergency calls are typically handled within two to four hours. Because we dispatch from five points between Miami and Jupiter, there is usually a technician close to you at any hour.',
  },
  {
    q: 'Do I need to bring anything to your office?',
    a: 'No. Flowers Garage Door Repair is a mobile service: the addresses listed on this site are dispatch points, not showrooms. The technician drives to your home or property with the parts and tools already on the truck.',
  },
  {
    q: 'Should both springs be replaced at the same time?',
    a: 'We recommend it. A pair of springs wears at the same rate, so when one breaks the other is usually close behind. Replacing both keeps the door balanced, protects the opener and avoids a second service call a few weeks later.',
  },
  {
    q: 'Can I replace a broken torsion spring myself?',
    a: 'We strongly advise against it. A torsion spring stores enough energy to cause serious injury when it releases, and the job requires winding bars and proper tensioning. It is the single most common DIY garage door injury, and a technician can do it safely in under an hour.',
  },
  {
    q: 'Do you install hurricane-rated garage doors?',
    a: 'Yes. We install wind-load and impact-rated doors that meet Florida building code requirements, including Miami-Dade County approved products for coastal and high-velocity hurricane zones.',
  },
  {
    q: 'Do you service commercial properties and HOAs?',
    a: 'We do. We handle rolling steel doors, sectional commercial doors, gate operators and high-cycle systems, and we offer scheduled preventive maintenance for property managers, warehouses and condo associations.',
  },
  {
    q: 'Is your work under warranty?',
    a: 'Every repair and installation comes with a written workmanship warranty. The exact term depends on the component, and your technician lists it on the invoice before you sign.',
  },
];

// Los 7 servicios del hasOfferCatalog del JSON-LD
export const offerCatalog = [
  'Garage door repair',
  'Garage door spring replacement',
  'Garage door opener repair and installation',
  'Cables, rollers and track repair',
  'New garage door installation',
  'Overhead and commercial door service',
  '24/7 emergency garage door service',
];

export const mapEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=m&z=15&output=embed`;

// ============================================================ About Us
export const aboutValues = [
  {
    icon: 'truck',
    title: 'The door never moves',
    text: 'We are a mobile operation, not a shop. Springs, cables, rollers, openers and hardware ride on the truck, so the repair happens in your driveway while you keep the car where it is.',
  },
  {
    icon: 'shieldCheck',
    title: 'Nothing starts without a yes',
    text: 'The technician inspects the whole door, explains what failed and hands you the plan in writing. You decide what gets done. No work begins before you say so.',
  },
  {
    icon: 'gear',
    title: 'Built for Florida weather',
    text: 'Salt air and humidity eat galvanised steel from the inside out. We fit corrosion-resistant hardware and wind-load rated doors, and we pull the county permit when a replacement needs one.',
  },
  {
    icon: 'clock',
    title: 'Someone answers at 3 AM',
    text: 'The emergency line rings a technician, not a call centre queue. A car trapped behind a jammed door at midnight is exactly the call we are set up for.',
  },
  {
    icon: 'wrench',
    title: 'Our own technicians',
    text: 'No subcontractors and no handing your job to a second crew. The person who inspects the door is the person who repairs it and signs the work.',
  },
  {
    icon: 'trophy',
    title: 'We come back if it fails',
    text: 'If a repair we performed fails inside the warranty period we return and make it right at no charge. That is the whole policy, printed on the invoice.',
  },
];

export const aboutStats = [
  { figure: '4,800+', label: 'Garage doors serviced in South Florida' },
  { figure: '5', label: 'Dispatch points, from Miami to Jupiter' },
  { figure: '24/7', label: 'Emergency line, holidays included' },
  { figure: '1 visit', label: 'What most repairs take, start to finish' },
];

// ============================================================ Contact Us
export const contactChannels = [
  {
    icon: 'phone',
    title: 'Call the dispatch line',
    text: 'The fastest way to get a truck moving. Tell us what the door is doing and we book a window the same day whenever the schedule allows.',
    items: ['Answered 24 hours, holidays included', 'Emergency calls jump the queue', 'No menu to work through'],
    cta: 'call',
  },
  {
    icon: 'mailSquare',
    title: 'Text us a photo',
    text: 'A picture of the spring, the opener label or the panel that came off track tells us which parts to load before the technician leaves.',
    items: ['Send it to the same number', 'Useful for quotes on a new door', 'Reply during dispatch hours'],
    cta: 'call',
  },
  {
    icon: 'mail',
    title: 'Email the office',
    text: 'Best for property managers, HOA work and anything with paperwork attached — permits, association approvals or a schedule across several units.',
    items: ['Answered next business day', 'Attach plans or approvals', 'Commercial and multi-unit welcome'],
    cta: 'mail',
  },
];

export const beforeYouCall = [
  { strong: 'Is the door stuck open or closed?', text: 'It changes how urgent the visit is and which parts we load.' },
  { strong: 'Did you hear a bang?', text: 'That is almost always a torsion spring. Do not run the opener again.' },
  { strong: 'What brand is the opener?', text: 'The label is on the motor housing — it saves the technician a trip for parts.' },
  { strong: 'Single or double door?', text: 'A double door carries different spring weights and hardware.' },
  { strong: 'Your address and a gate code', text: 'We come to you, so the crew needs to be able to reach the driveway.' },
];
