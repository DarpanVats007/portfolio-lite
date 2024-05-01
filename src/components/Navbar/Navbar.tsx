import "./Navbar.css";

import { FC, useState } from "react";
import { contact, projects, skills } from "../../assets/portfolio";

export const Navbar: FC = () => {
  const [showNavList, setShowNavList] = useState<boolean>(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav__list glass border__radius">
      <ul
        style={{ display: showNavList ? "flex" : undefined }}
        className="nav__list no-glass "
      >
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      {/* <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button> */}
    </nav>
  );
};
