import Link from 'next/link';
import { Icon, ICONS } from './Icons';
import { Logo } from './Header';
import { site, cities, mainCity } from '../data/site';

function Social() {
  return (
    <div className="footer__social">
      {['facebook', 'instagram', 'x'].map((n) => (
        <a key={n} href="#" aria-label={n === 'x' ? 'X' : n[0].toUpperCase() + n.slice(1)}>
          <Icon name={n} />
        </a>
      ))}
    </div>
  );
}

// city = null en la home y en la pagina legal; el objeto de la ciudad en /Doral y compañia
export default function Footer({ variant = 'home', city = null, bottomPath = '' }) {
  const prefix = variant === 'plain' ? '/' : '';
  const addr = city || mainCity;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo href="/" light />
            <p className="footer__brandline">Your Local Garage Door Experts</p>
            <Social />
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>{variant === 'home' ? <a href="#top">Home</a> : <Link href="/">Home</Link>}</li>
              <li>
                <a href={`${prefix}#services`}>Services</a>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <a href={`${prefix}#areas`}>{variant === 'city' ? 'Locations' : 'Coverage areas'}</a>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>

          {variant === 'city' ? (
            <div>
              <h4>Contact</h4>
              <address>
                <a href={site.phone.href}>{site.phone.long}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <br />
                {addr.addr1}
                <br />
                {addr.name}, FL {addr.zip}
                <br />
                <br />
                {site.hoursLong}
                <br />
                {site.hoursSunday}
              </address>
            </div>
          ) : (
            <div>
              <h4>Locations</h4>
              <ul>
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="footer__quote">
            {variant === 'city' ? (
              <>
                <h4>Book a Visit</h4>
                <p>
                  Call us 24/7 and we put a truck on the way. Every repair in {addr.name} happens at
                  your address.
                </p>
              </>
            ) : (
              <>
                <h4>Contact</h4>
                <address>
                  <a href={site.phone.href}>{site.phone.long}</a>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <br />
                  <br />
                  {mainCity.addr1}
                  <br />
                  {mainCity.name}, FL {mainCity.zip}
                  <br />
                  <br />
                  {site.hoursLong}
                  <br />
                  {site.hoursSunday}
                </address>
              </>
            )}
            <a className="btn btn--primary btn--sm" href={site.phone.href}>
              Request a Visit
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {site.year} {site.brand}. All rights reserved.
          </span>
          <span>
            {site.domain}
            {bottomPath}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function CallBar({ secondHref = '#areas', secondLabel = 'Coverage Areas' }) {
  return (
    <div className="callbar">
      <a className="btn btn--primary" href={site.phone.href}>
        <Icon name="phone" />
        Call Now
      </a>
      <a className="btn btn--ghost" href={secondHref}>
        {secondLabel}
      </a>
    </div>
  );
}
