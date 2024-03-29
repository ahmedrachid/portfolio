import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ahmed Rachid Hazourli</h2>
        <p><a href="mailto:ahmedrachidhazourli@yahoo.fr">ahmedrachidhazourli@yahoo.fr</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ahmed Rachid.
        I am a Data Engineer & Scientist at <a href="https://www.vmware.com">VMware</a>. Before that, I was
        at <a href="https://global.brother/en">Brother Industries</a>, <a href="https://www.avivainvestors.com/en-gb/">Aviva Investors </a>
        and <a href="https://www.lissi.fr/home/">Laboratoire LISSI</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ahmed Rachid;Hazourli <Link to="/">ahmedrachid.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
