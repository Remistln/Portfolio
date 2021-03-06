import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/all';
import HeroSection from './HeroSection';
import stage2022 from "../assets/images/Rapport de stage 2022.pdf";
import Boutton from "./Bouton";

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular', serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gary-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 780px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyle>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          {/* On cherche si shownav est false. S'il l'est, le classNave va etre navItems et hide-items, sinon, juste navItems */}
          <div
            className="closeNavIcon"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bts"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              BTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stage"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Stage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certifications"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
                to={{pathname:"https://tourmaline-taffy-f2de7c.netlify.app"}} target="_blank"
            >
              Veille Technologique
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </NavMenuStyle>
  );
}
