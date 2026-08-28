import Link from 'next/link';
import { Icon } from './Icons';
import { site, navServices } from '../data/site';

// variant: 'home'   -> los anclajes apuntan a las secciones de la propia home
//          'city'   -> a las secciones de la pagina de ciudad
//          'plain'  -> pagina sin esas secciones (legal): todo va a la home
export function Logo({ href = '/', light = false, ariaLabel }) {
  return (
    <Link className="logo" href={href} aria-label={ariaLabel}>
      <span className="logo__mark">
        <img
          src={light ? '/img/logo-light.png' : '/img/logo.png'}
          alt={site.brand}
          width={46}
          height={46}
        />
      </span>
      <span className="logo__text">
        <span className="logo__name">{site.brandFirst}</span>
        <span className="logo__tag">{site.brandRest}</span>
      </span>
    </Link>
  );
}

export default function Header({ variant = 'home' }) {
  const prefix = variant === 'plain' ? '/' : '';
  const homeHref = variant === 'home' ? '#top' : '/';
  const servicesHref = `${prefix}#services`;

  const dropHref = (svc) => {
    if (variant === 'plain') return `/#${svc.homeHash}`;
    if (variant === 'home') return `#${svc.homeHash}`;
    return `#${svc.hash}`;
  };

  return (
    <header className="header" id={variant === 'home' ? undefined : 'top'}>
      <div className="container header__inner">
        <Logo href="/" ariaLabel={`${site.brand} — home`} />

        <input className="nav-toggle" type="checkbox" id="nav-toggle" />
        <label className="nav-toggle-label" htmlFor="nav-toggle" aria-label="Open menu">
          <span />
        </label>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            <li>
              {variant === 'home' ? <a href={homeHref}>Home</a> : <Link href="/">Home</Link>}
            </li>
            <li className="navdrop">
              <a href={servicesHref}>
                Services
                <Icon name="chevronDown" className="navdrop__chev" />
              </a>
              <div className="navdrop__panel">
                {navServices.map((svc) => (
                  <a key={svc.label} href={dropHref(svc)}>
                    {svc.label}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href={`${prefix}#about`}>About us</a>
            </li>
            <li>
              <a href={`${prefix}#contact`}>Contact</a>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
          <a className="btn btn--primary btn--sm btn--quote" href={site.phone.href}>
            Call Now
          </a>
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
