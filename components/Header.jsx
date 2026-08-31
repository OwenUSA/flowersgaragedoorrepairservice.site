import Link from 'next/link';
import { Icon } from './Icons';
import { site, nav } from '../data/site';

export function Logo({ href = '/', light = false, ariaLabel }) {
  return (
    <Link className="logo" href={href} aria-label={ariaLabel}>
      <span className="logo__mark">
        <img
          src={light ? site.logo.footer : site.logo.header}
          alt={site.logo.alt}
          width={site.logo.width}
          height={site.logo.height}
        />
      </span>
      <span className="logo__text">
        <span className="logo__name">{site.brandFirst}</span>
        <span className="logo__tag">{site.brandRest}</span>
      </span>
    </Link>
  );
}

// `current` es el href de la pagina que se esta pintando; se marca en el nav.
// El id="top" lo lleva la topbar en la home, asi que aqui solo en el resto.
export default function Header({ current = '' }) {
  return (
    <header className="header" id={current === '/' ? undefined : 'top'}>
      <div className="container header__inner">
        <Logo href="/" ariaLabel={`${site.brand} — home`} />

        <input className="nav-toggle" type="checkbox" id="nav-toggle" />
        <label className="nav-toggle-label" htmlFor="nav-toggle" aria-label="Open menu">
          <span />
        </label>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={n.href === current ? 'is-current' : undefined}
                  aria-current={n.href === current ? 'page' : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn--primary btn--sm btn--quote" href="/contact-us">
            Book a Visit
          </Link>
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--primary btn--sm"
            href={site.phone.href}
            aria-label={`Call ${site.brand} at ${site.phone.display}`}
          >
            <Icon name="phone" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
