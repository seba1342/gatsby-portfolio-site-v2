/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import { AppContext } from "~context/AppContext";

// import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const HeaderComponent = ({ appContext, data }) => {
  const [menuActive, setMenuActive] = useState(false);

  const { title } = data.site.siteMetadata;

  return (
    <>
      <header className="header flex flex-row xs:justify-between justify-center items-center p-4 b1">
        <Link to="/" className="header__brand no-underline mx-4 xs:mx-0">
          <h2
            className="f3 font-bold animation-appear--from-top"
            style={{ animationDelay: `50ms` }}
          >
            {title}
          </h2>
        </Link>

        {appContext.device === `mobile` ? (
          <div>
            <button
              className="mx-4 animation-appear--from-top f3 pr-2"
              onClick={() => appContext.toggleDarkMode()}
              style={{ animationDelay: `100ms` }}
              type="button"
            >
              {appContext.darkMode ? `☀️` : `🌚`}
            </button>

            <button
              className="header__hamburger hamburger--spin animation-appear--from-top"
              onClick={() => setMenuActive(!menuActive)}
              style={{ animationDelay: `150ms` }}
              type="button"
            >
              <span
                className={`header__hamburger__box ${
                  appContext.darkMode ? `dark-mode` : ``
                }`}
              >
                <span className="header__hamburger__inner"></span>
              </span>
            </button>
          </div>
        ) : (
          <div className={`header__links flex flex-row ${menuActive}`}>
            <Link
              to="/"
              className="header__link mx-4"
              activeClassName="header__link--active"
            >
              <div
                className="animation-appear--from-top"
                style={{ animationDelay: `100ms` }}
              >
                /home
              </div>
            </Link>

            <Link
              to="/projects"
              className="header__link mx-4"
              activeClassName="header__link--active"
            >
              <div
                className="animation-appear--from-top"
                style={{ animationDelay: `200ms` }}
              >
                /projects
              </div>
            </Link>

            <Link
              to="/inspiration"
              className="header__link mx-4"
              activeClassName="header__link--active"
            >
              <div
                className="animation-appear--from-top"
                style={{ animationDelay: `200ms` }}
              >
                /inspo
              </div>
            </Link>

            <button
              className="mx-4 animation-appear--from-top b1"
              onClick={() => appContext.toggleDarkMode()}
              style={{ animationDelay: `300ms` }}
              type="button"
            >
              {appContext.darkMode ? `☀️` : `🌚`}
            </button>
          </div>
        )}
      </header>

      {appContext.device === `mobile` && (
        <div
          className={`header__links flex flex-col justify-between f2 ${
            menuActive ? `menu-active` : ``
          }`}
        >
          <Link
            to="/"
            className="header__link mx-4"
            activeClassName="header__link--active"
          >
            <div
              className="animation-appear--from-top"
              style={{ animationDelay: `100ms` }}
            >
              /home
            </div>
          </Link>

          <Link
            to="/projects"
            className="header__link mx-4"
            activeClassName="header__link--active"
          >
            <div
              className="animation-appear--from-top"
              style={{ animationDelay: `200ms` }}
            >
              /projects
            </div>
          </Link>

          <Link
            to="/inspiration"
            className="header__link mx-4"
            activeClassName="header__link--active"
          >
            <div
              className="animation-appear--from-top"
              style={{ animationDelay: `200ms` }}
            >
              /inspo
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

const Header = () => {
  return (
    <AppContext.Consumer>
      {appContext => (
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => (
            <HeaderComponent appContext={appContext} data={data} />
          )}
        />
      )}
    </AppContext.Consumer>
  );
};

export default Header;
