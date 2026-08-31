import Link from 'next/link';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  mainCity,
  trustItems,
  aboutValues,
  aboutStats,
  steps,
  areaTags,
} from '../../data/site';

const title = `About ${site.brand} | Garage Door Crew in South Florida`;
const description = `Who we are: a mobile garage door crew dispatched from ${mainCity.name} and four more points across Miami-Dade, Broward and Palm Beach County. We come to you, 24/7. Call ${site.phone.display}.`;

export const metadata = {
  title: 'About Us',
  description,
  keywords: [
    'about Flowers Garage Door Repair',
    'garage door company South Florida',
    'local garage door technicians Miami',
    'mobile garage door repair Palm Beach County',
  ],
  alternates: { canonical: '/about-us/' },
  openGraph: {
    title,
    description:
      'A mobile garage door crew that works at your address, from Miami to Jupiter. How we work, what a visit looks like and where we dispatch from.',
    url: '/about-us/',
    images: [
      {
        url: '/img/why-garage.jpg',
        width: 1920,
        height: 1072,
        alt: 'Garage door technician working at a South Florida home',
      },
    ],
  },
  twitter: {
    title,
    description: 'The crew behind Flowers Garage Door Repair — mobile, local and answering 24/7.',
    images: ['/img/why-garage.jpg'],
  },
};

const aboutLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${site.url}/about-us/#page`,
      url: `${site.url}/about-us/`,
      name: title,
      description,
      isPartOf: { '@type': 'WebSite', url: `${site.url}/`, name: site.brand },
      about: {
        '@type': 'LocalBusiness',
        name: site.brand,
        url: `${site.url}/`,
        telephone: site.phone.schema,
        email: site.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: mainCity.addr1,
          addressLocality: mainCity.name,
          addressRegion: 'FL',
          postalCode: mainCity.zip,
          addressCountry: 'US',
        },
        areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: `${site.url}/about-us/` },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header current="/about-us" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              About Us
            </nav>
            <span className="hero__badge">
              <span className="dot" />
              Miami-Dade &middot; Broward &middot; Palm Beach County
            </span>
            <h1>
              The Crew Behind <span>{site.brand}</span>
            </h1>
            <p className="page-hero__lead">
              We are a mobile garage door outfit, not a showroom. The trucks leave our{' '}
              {mainCity.name} dispatch point every morning loaded with springs, cables, rollers and
              openers, and the repair happens where the door already is &mdash; in your driveway.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.long}
              </a>
              <Link className="btn btn--ghost btn--lg" href="/contact-us">
                <Icon name="mail" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CIFRAS ============ */}
        <section className="stat-strip">
          <div className="container stat-strip__grid">
            {aboutStats.map((s) => (
              <div className="stat-strip__item" key={s.label}>
                <strong>{s.figure}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ QUIENES SOMOS ============ */}
        <section className="section" id="story">
          <div className="container split">
            <div className="split__media">
              <div className="split__stat">
                <strong>{aboutStats[0].figure}</strong>
                <span>{aboutStats[0].label}</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2>The People Who Pull Into Your Driveway</h2>
              <p>
                {site.brand} is staffed by technicians who live in the same counties they drive to
                every day. That matters more here than it sounds: a door on a barrier-island street
                in {mainCity.name} rusts from the inside out, a warehouse door near the airport in
                Doral cycles a hundred times before lunch, and an HOA in Abacoa cares which panel
                style goes up. The same crew handles all three, because they have been doing it in
                these neighborhoods for years.
              </p>
              <p>
                We kept the operation deliberately simple. No subcontractors, no second crew sent to
                finish what a first crew started, no counter for you to visit. You call, a
                technician is dispatched from the closest of our five points, and the work is done at
                your address in one trip whenever the parts allow it &mdash; which, because the
                trucks carry the common failures, is most of the time.
              </p>
              <a className="btn btn--primary" href={site.phone.href}>
                <Icon name="phone" />
                Speak With a Technician
              </a>
            </div>
          </div>
        </section>

        {/* ============ CONFIANZA ============ */}
        <section className="trust">
          <div className="container trust__grid">
            {trustItems.map((t) => (
              <div className="trust__item" key={t.title}>
                <span className="trust__icon">
                  <Icon name={t.icon} />
                </span>
                <div>
                  <strong>{t.title}</strong>
                  <span>{t.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ COMO TRABAJAMOS ============ */}
        <section className="section section--soft" id="values">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">How We Work</span>
              <h2>Six Rules We Do Not Bend</h2>
              <p>
                None of this is a slogan. It is how the day is actually organised, and it is the
                reason a repair takes one visit instead of three.
              </p>
            </div>

            <div className="grid grid--3">
              {aboutValues.map((v) => (
                <article className="card" key={v.title}>
                  <span className="card__icon">
                    <Icon name={v.icon} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ QUE PASA EN UNA VISITA ============ */}
        <section className="section section--dark" id="process">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What to Expect</span>
              <h2>What a Visit From Us Actually Looks Like</h2>
              <p>
                Four steps, in this order, every time &mdash; whether it is a snapped spring at
                midnight or a new door measured on a Saturday morning.
              </p>
            </div>

            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step__num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DONDE TRABAJAMOS ============ */}
        <section className="section section--soft" id="where">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Where We Work</span>
              <h2>Five Dispatch Points, One Crew</h2>
              <p>
                Our main dispatch point is in {mainCity.name}. Four more let us reach the rest of
                Miami-Dade, Broward and Palm Beach County quickly. None of them is a store &mdash;
                they are where the trucks start the day.
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
            </div>

            <div className="area-tags">
              {areaTags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>Door making a noise it did not make last week?</h2>
              <p>
                Call the dispatch line and describe it. We will tell you whether it can wait until
                morning &mdash; and if it cannot, a technician is on the way.
              </p>
            </div>
            <div className="cta-band__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.display}
              </a>
              <Link className="btn btn--ghost btn--lg" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="plain" bottomPath="/about-us" />
      <CallBar secondHref="/#areas" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
    </>
  );
}
