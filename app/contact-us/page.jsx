import Link from 'next/link';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  mainCity,
  contactChannels,
  beforeYouCall,
  mapEmbed,
} from '../../data/site';

const title = `Contact ${site.brand} | 24/7 Garage Door Dispatch`;
const description = `Reach ${site.brand}: call or text ${site.phone.display}, email ${site.email}, or find the dispatch point closest to you. We come to you across Miami-Dade, Broward and Palm Beach County.`;

export const metadata = {
  title: 'Contact Us',
  description,
  keywords: [
    'contact garage door repair South Florida',
    'garage door repair phone number Jupiter FL',
    '24/7 garage door dispatch Miami',
    'emergency garage door service Palm Beach County',
  ],
  alternates: { canonical: '/contact-us/' },
  openGraph: {
    title,
    description:
      'Call or text 24/7, email the office, or find your closest dispatch point. Every repair happens at your address.',
    url: '/contact-us/',
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
    description: `Call or text ${site.phone.display} any hour. We come to you, from Miami to Jupiter.`,
    images: ['/img/hero-garage.jpg'],
  },
};

const contactLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${site.url}/contact-us/#page`,
      url: `${site.url}/contact-us/`,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', url: `${site.url}/`, name: site.brand },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
      name: site.brand,
      url: `${site.url}/`,
      telephone: site.phone.schema,
      email: site.email,
      image: `${site.url}/img/logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: mainCity.addr1,
        addressLocality: mainCity.name,
        addressRegion: 'FL',
        postalCode: mainCity.zip,
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: mainCity.lat, longitude: mainCity.lon },
      areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone.schema,
        contactType: 'customer service',
        areaServed: 'US-FL',
        availableLanguage: ['English', 'Spanish'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${site.url}/contact-us/` },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header current="/contact-us" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              Contact Us
            </nav>
            <span className="hero__badge">
              <span className="dot" />
              Dispatch answered 24 hours a day
            </span>
            <h1>
              Talk to a <span>{site.brandFirst}</span> Technician
            </h1>
            <p className="page-hero__lead">
              Tell us what the door is doing and we put a truck on the way. Nights, weekends and
              holidays included &mdash; the emergency line rings a technician, not a queue. Every
              repair, measurement and installation happens at your address.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.long}
              </a>
              <a className="btn btn--ghost btn--lg" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                Email the office
              </a>
            </div>
          </div>
        </section>

        {/* ============ VIAS DE CONTACTO ============ */}
        <section className="section" id="ways">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Ways to Reach Us</span>
              <h2>Three Ways to Get a Technician Moving</h2>
              <p>
                For anything that has the car trapped or the door hanging crooked, call. The other
                two are there for everything that can wait until the morning.
              </p>
            </div>

            <div className="grid grid--3">
              {contactChannels.map((ch) => (
                <article className="card" key={ch.title}>
                  <span className="card__icon">
                    <Icon name={ch.icon} />
                  </span>
                  <h3>{ch.title}</h3>
                  <p>{ch.text}</p>
                  <ul className="card__list">
                    {ch.items.map((i) => (
                      <li key={i}>
                        <Icon name="check" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  {ch.cta === 'call' ? (
                    <a className="btn btn--primary btn--block" href={site.phone.href}>
                      <Icon name="phone" />
                      {site.phone.display}
                    </a>
                  ) : (
                    <a className="btn btn--outline btn--block" href={`mailto:${site.email}`}>
                      <Icon name="mail" />
                      {site.email}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DESPACHO PRINCIPAL + MAPA ============ */}
        <section className="section section--soft" id="details">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Main Dispatch Point</span>
              <h2>Reach the Dispatch Desk Directly</h2>
              <p>
                Our main dispatch point is in {mainCity.name}. It is where the trucks start the day
                &mdash; there is no counter and no showroom, so please do not bring a door to us.
                We come to you.
              </p>
            </div>

            <div className="contact-grid">
              <div className="panel">
                <ul className="info-list">
                  <li>
                    <span className="info-icon">
                      <Icon name="phone" />
                    </span>
                    <div>
                      <strong>Phone &amp; text &mdash; 24/7 dispatch</strong>
                      <a href={site.phone.href}>+{site.phone.long}</a>
                    </div>
                  </li>
                  <li>
                    <span className="info-icon">
                      <Icon name="mailSquare" />
                    </span>
                    <div>
                      <strong>Email</strong>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                  </li>
                  <li>
                    <span className="info-icon">
                      <Icon name="pin" />
                    </span>
                    <div>
                      <strong>Main dispatch point</strong>
                      <span>
                        {mainCity.addr1}, {mainCity.name}, FL {mainCity.zip}
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="info-icon">
                      <Icon name="clock" />
                    </span>
                    <div>
                      <strong>Hours</strong>
                      <span>
                        {site.hoursLong} &mdash; {site.hoursSunday}
                      </span>
                    </div>
                  </li>
                </ul>

                <h3 style={{ marginTop: 30 }}>Dispatch Hours</h3>
                <ul className="hours">
                  <li>
                    <strong>Monday &ndash; Friday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                  </li>
                  <li>
                    <strong>Saturday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                  </li>
                  <li>
                    <strong>Sunday &amp; holidays</strong> <span>Emergency dispatch</span>
                  </li>
                  <li>
                    <strong>Emergency calls</strong> <span>Answered 24/7</span>
                  </li>
                </ul>

                <a
                  className="btn btn--primary btn--block"
                  href={site.phone.href}
                  style={{ marginTop: 26 }}
                >
                  <Icon name="phone" />
                  Call Now &mdash; {site.phone.display}
                </a>
              </div>

              <div>
                <div className="map-embed">
                  <iframe
                    title={`${site.brand} - ${mainCity.name} dispatch point`}
                    src={mapEmbed(mainCity.mapQuery)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="panel" style={{ marginTop: 26 }}>
                  <h3>Have this ready when you call</h3>
                  <p>
                    None of it is required &mdash; but every answer you have shortens the visit,
                    because it tells the technician which parts to load before leaving.
                  </p>
                  <ul className="checklist checklist--tight" style={{ marginBottom: 0 }}>
                    {beforeYouCall.map((b) => (
                      <li key={b.strong}>
                        <Icon name="check" />
                        <div>
                          <strong>{b.strong}</strong>
                          <span>{b.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOS CINCO PUNTOS ============ */}
        <section className="section" id="dispatch-points">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Coverage</span>
              <h2>Five Dispatch Points Between Miami and Jupiter</h2>
              <p>
                Pick the one closest to you for local detail, or just call the main line &mdash; we
                send whichever crew is nearest and free.
              </p>
            </div>

            <div className="grid grid--3">
              {cities.map((c) => (
                <article className={`area-card${c.main ? ' area-card--main' : ''}`} key={c.slug}>
                  <span className="area-card__tag">{c.tag}</span>
                  <h3>{c.name}, FL</h3>
                  <address>
                    <Icon name="pin" />
                    <span>
                      {c.addr1}
                      <br />
                      {c.name}, FL {c.zip}
                    </span>
                  </address>
                  <p className="area-card__meta">{c.coverageMeta}</p>
                  <Link className="area-card__link" href={`/${c.slug}`}>
                    View {c.name} service
                    <Icon name="arrowRight" />
                  </Link>
                </article>
              ))}

              <article
                className="area-card"
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  background: 'var(--deep-900)',
                  borderColor: 'var(--deep-900)',
                }}
              >
                <h3 style={{ color: '#fff' }}>Not sure which crew covers you?</h3>
                <p style={{ color: '#d3b2aa', fontSize: '.96rem' }}>
                  Call the dispatch line and we send the closest available technician &mdash;
                  anywhere from Miami to Jupiter.
                </p>
                <a className="btn btn--primary" href={site.phone.href} style={{ marginTop: 'auto' }}>
                  Call {site.phone.display}
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>
                Garage Door Emergency? <span>We&rsquo;re Awake.</span>
              </h2>
              <p>
                The dispatch line runs 24 hours a day, every day of the year. One call and a
                technician is on the way to you.
              </p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                {site.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="plain" bottomPath="/contact-us" />
      <CallBar secondHref="/#areas" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
    </>
  );
}
