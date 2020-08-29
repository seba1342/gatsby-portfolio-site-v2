/* eslint-disable react/prop-types */

import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "~context/AppContext";

const Header = () => {
  const appContext = useContext(AppContext);
  const [menuActive, setMenuActive] = useState(false);

  if (!motion || !AnimatePresence) {
    return null;
  }

  return (
    <>
      <header className="header flex flex-row xs:justify-between justify-center items-center p-4 b1">
        <Link
          to="/"
          className="header__brand no-underline mx-4 xs:mx-0"
          onClick={() => setMenuActive(false)}
        >
          <h2
            className="f3 font-bold animation-appear--from-top"
            style={{ animationDelay: `50ms` }}
          >
            Seb Bailouni
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
        <AnimatePresence>
          {menuActive && (
            <motion.div
              className="header__links flex flex-col justify-between f2"
              animate={{ height: 125, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/"
                className="header__link mx-4"
                activeClassName="header__link--active"
                onClick={() => setMenuActive(false)}
              >
                /home
              </Link>

              <Link
                to="/projects"
                className="header__link mx-4"
                activeClassName="header__link--active"
                onClick={() => setMenuActive(false)}
              >
                /projects
              </Link>

              <Link
                to="/inspiration"
                className="header__link mx-4"
                activeClassName="header__link--active"
                onClick={() => setMenuActive(false)}
              >
                /inspo
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;
