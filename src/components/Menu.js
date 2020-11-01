/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

import { AppContext } from "~context/AppContext";

export default function Menu({ active, setActive }) {
  const appContext = useContext(AppContext);

  if (!motion || !AnimatePresence) {
    return null;
  }
  return (
    <div
      className={`header__links w-full absolute bg-dark-grey text-antique-white rounded-sm z-0 ${
        appContext.darkMode ? `dark-mode` : ``
      }`}
    >
      <AnimatePresence>
        {active ? (
          <motion.div
            className="flex flex-col justify-center items-center f2 w-full"
            animate={{ height: 225, opacity: 1 }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/"
              className="header__link no-underline text-center"
              onClick={() => setActive(false)}
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="header__link no-underline text-center"
              onClick={() => setActive(false)}
            >
              Projects
            </Link>

            <Link
              to="/inspiration"
              className="header__link no-underline text-center mb-8"
              onClick={() => setActive(false)}
            >
              Inspo
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
