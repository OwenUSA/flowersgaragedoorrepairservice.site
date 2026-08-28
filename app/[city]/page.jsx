import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import { site, cities, getCity, cityServices, offerCatalog, mapEmbed } from '../../data/site';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Garage Door Repair in ${c.name}, FL ${c.zip} | ${site.brandFirst} Garage Door`;
  const description = `Garage door repair in ${c.name}, FL ${c.zip}: springs, openers, cables and new doors. Same-day service, we come to you, 24/7 emergency dispatch. Call ${site.phone.display}.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `garage door repair ${c.name}`,
      `garage door spring replacement ${c.name}`,
      `garage door opener repair ${c.name}`,
      `garage door installation ${c.name} FL`,
      `emergency garage door service ${c.name}`,
    ],
    alternates: { canonical: `/${c.slug}/` },
    openGraph: {
      title,
      description: `Same-day garage door repair in ${c.name}, FL. Springs, openers, cables and new doors. The technician comes to you, 24/7.`,
      url: `/${c.slug}/`,
      images: [
        {
          url: '/img/hero-garage.jpg',
          width: 1920,
          height: 1072,
          alt: 'Garage door of a South Florida home at golden hour',
        },
      ],
    },
    twitter: {
      title,
      description: `Same-day garage door repair in ${c.name}, FL. We come to you, 24/7 emergency dispatch.`,
      images: ['/img/hero-garage.jpg'],
    },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': c.name,
      'geo.position': `${c.lat};${c.lon}`,
      ICBM: `${c.lat}, ${c.lon}`,
    },
  };
}

function jsonLd(c) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${site.url}/${c.slug}#business`,
        name: `${site.brand} - ${c.name}`,
        alternateName: site.brand,
        url: `${site.url}/${c.slug}`,
        telephone: site.phone.schema,
        email: site.email,
        image: `${site.url}/img/hero-garage.jpg`,
        logo: `${site.url}/img/logo.png`,
        description: `Mobile garage door repair in ${c.name}, FL ${c.zip}: spring replacement, opener repair, cables, off-track doors and new door installation. Same-day service and 24/7 emergency dispatch.`,
        parentOrganization: { '@type': 'Organization', name: site.brand, url: `${site.url}/` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: c.addr1,
          addressLocality: c.name,
          addressRegion: 'FL',
          postalCode: c.zip,
          addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lon },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '07:00',
            closes: '21:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: c.name },
          { '@type': 'AdministrativeArea', name: c.county },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Garage door services in ${c.name}`,
          itemListElement: offerCatalog.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, areaServed: { '@type': 'City', name: c.name } },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Coverage areas', item: `${site.url}/#areas` },
          { '@type': 'ListItem', position: 3, name: c.name, item: `${site.url}/${c.slug}` },
        ],
      },
    ],
  };
}

const features = [
  { title: 'Same-Day Service', text: 'Most repairs completed in a single visit.' },
  { title: 'We Come to You', text: (c) => `The technician works at your ${c} address.` },
  { title: 'Written Estimate', text: 'On paper, on site, before any work begins.' },
  { title: '24/7 Emergency', text: 'Someone answers at 3 AM, weekends included.' },
];

export default async function CityPage({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();
  const others = cities.filter((o) => o.slug !== c.slug);

  return (
    <>
      <Header variant="city" />

      {/* ============ HERO ============ */}
      <section className="hero hero--loc">
        <div className="container hero__loc-inner">
          <div className="hero__copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#areas">Locations</Link>
              <span>/</span>
              {c.name}
            </nav>
            <span className="pin-badge">
              <Icon name="pin" />
              FL &middot; {c.zip}
            </span>
            <h1>
              Garage Door Repair in{' '}
              <span>
                {c.name}, FL {c.zip}
              </span>
            </h1>
            <p className="hero__desc">
              {site.brand} covers{' '}
              <strong>
                {c.name}, FL {c.zip}
              </strong>{' '}
              from our {c.street} dispatch point. Snapped springs, frayed cables, noisy openers,
              off-track panels and full new-door installation &mdash; our {c.name} technicians arrive
              with the parts on the truck and work{' '}
              <em>at your address, the same day, with a written estimate before anything starts</em>.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.long}
              </a>
              <a className="btn btn--ghost btn--lg" href="#contact">
                <Icon name="pin" />
                See the coverage map
              </a>
            </div>
          </div>

          <div className="feature-row">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__top">
                  <Icon name="check" />
                  <strong>{f.title}</strong>
                </div>
                <p>{typeof f.text === 'function' ? f.text(c.name) : f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COVERAGE MAP + DETAILS ============ */}
      <section className="section" id="contact">
        <div className="container loc-grid">
          <div className="map-embed">
            <iframe
              title={`Map of the ${site.brand} dispatch point in ${c.name}, FL`}
              src={mapEmbed(c.mapQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="detail-card">
            <h2>Garage door service in {c.name} &mdash; coverage</h2>
            <p className="detail-card__note">
              This is where the {c.name} trucks start the day, not a showroom &mdash; there is no
              counter to visit. Call and the technician drives to your door.
            </p>
            <ul className="detail-list">
              <li>
                <Icon name="pin" />
                <div>
                  <strong>Dispatch point</strong>
                  <span>
                    {c.addr1}
                    <br />
                    {c.name}, FL {c.zip}
                  </span>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <strong>Phone</strong>
                  <a href={site.phone.href}>{site.phone.long}</a>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <strong>Hours</strong>
                  <span>
                    {site.hoursLong}
                    <br />
                    {site.hoursSunday}
                  </span>
                </div>
              </li>
            </ul>
            <a className="btn btn--primary btn--block" href={site.phone.href}>
              <Icon name="phone" />
              Book a Visit in {c.name}
            </a>
          </div>
        </div>
      </section>

      {/* ============ ABOUT / WHY ============ */}
      <section className="section section--soft" id="about">
        <div className="container feature-split feature-split--flip">
          <div
            className="photo photo--why"
            role="img"
            aria-label={`${site.brand} technician replacing a torsion spring above a residential garage door in ${c.name}, FL`}
          >
            <span className="photo__label">{c.name} service crew</span>
          </div>
          <div className="feature-split__text">
            <h2>
              Why {c.name} chooses {site.brand}
            </h2>
            <p>
              Every technician dispatched from our {c.street} point rolls out with a fully stocked
              service vehicle, so most {c.name} jobs are finished in a single visit &mdash; and the
              whole job happens in your driveway, not in a shop.
            </p>
            <ul className="check-pills">
              {[
                `Serving all of ${c.name}, FL ${c.zip} and the surrounding neighborhoods`,
                'Mobile crew — we come to you, seven days a week',
                'Springs, rollers, cables and openers already on the truck',
                'Written workmanship warranty on every repair',
                '24/7 emergency dispatch, including weekends and holidays',
              ].map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ HOW A VISIT WORKS ============ */}
      <section className="section">
        <div className="container feature-split">
          <div className="feature-split__text">
            <h2>How a {c.name} garage door visit works</h2>
            <p>
              No guessing games. You know what the technician found, what it takes to fix it and what
              happens next &mdash; before a single tool comes out of the truck.
            </p>
            <ul className="check-pills">
              {[
                `Measured and inspected on site, at your ${c.name} address`,
                'Written estimate handed to you before we start',
                'Same crew at night and on weekends — no third-party contractors',
                'Door balanced and the safety reverse tested before we leave',
              ].map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="photo photo--process"
            role="img"
            aria-label="Close-up of a galvanized torsion spring, rollers and cable drum being replaced on a garage door"
          >
            <span className="photo__label">Spring &amp; hardware replacement</span>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section section--soft" id="services">
        <div className="container">
          <div className="section-head">
            <h2>Our Garage Door Services in {c.name}</h2>
            <p>Everything your garage door needs, from one crew.</p>
          </div>
          <div className="grid grid--3">
            {cityServices.map((s) => (
              <article className="svc-card" id={s.id} key={s.id}>
                <span className="svc-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title(c.name)}</h3>
                <p className="svc-card__sub">{s.sub}</p>
                <ul className="svc-checks">
                  {s.checks.map((ch) => (
                    <li key={ch}>
                      <Icon name="check" strokeWidth={3} /> {ch}
                    </li>
                  ))}
                </ul>
                <a className="svc-more" href={site.phone.href}>
                  {s.cta} <Icon name="arrowRight" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCAL NOTE ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Local Knowledge</span>
            <h2>Garage door service built for {c.name}</h2>
            <p>{c.note}</p>
          </div>
        </div>
      </section>

      {/* ============ NEIGHBORHOODS ============ */}
      <section className="section section--soft">
        <div className="container">
          <div
            className="section-head section-head--left"
            style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 28 }}
          >
            <h2 style={{ marginBottom: '.2em' }}>Where we work in {c.name}</h2>
            <p>
              Same crew, same hours, anywhere in {c.county} &mdash; and the truck comes to your
              driveway.
            </p>
          </div>
          <ul className="neighborhoods">
            {c.neighborhoods.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ OTHER NEARBY LOCATIONS ============ */}
      <section className="section" id="areas">
        <div className="container">
          <div
            className="section-head section-head--left"
            style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 36 }}
          >
            <h2 style={{ marginBottom: '.2em' }}>Other nearby locations</h2>
            <p>
              {site.brand} covers Miami-Dade, Broward and Palm Beach County from five dispatch
              points.
            </p>
          </div>
          <div className="nearby-grid">
            {others.map((o) => (
              <Link className="nearby-card" href={`/${o.slug}`} key={o.slug}>
                <Icon name="pin" />
                <strong>
                  {site.brand} &mdash; {o.name}
                </strong>
                <span>
                  {o.name}, FL {o.zip}
                </span>
                <em>
                  View location <Icon name="arrowRight" />
                </em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta-final">
        <div className="container cta-final__inner">
          <div>
            <h2>
              Ready to fix <span>that door?</span>
            </h2>
            <p>
              Talk to a local {c.name} technician today &mdash; we come to you, day or night.
            </p>
          </div>
          <div className="cta-final__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              Call Now
            </a>
            <a className="btn btn--ghost btn--lg" href="#contact">
              Request a Visit
            </a>
          </div>
        </div>
      </section>

      <Footer variant="city" city={c} bottomPath={`/${c.slug}`} />
      <CallBar secondHref="#areas" secondLabel="Nearby Locations" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(c)) }}
      />
    </>
  );
}
