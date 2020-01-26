import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { AppContext } from "~context/AppContext";

import Header from "~components/Header";

export default function Layout({ children, className }) {
  return (
    <AppContext.Consumer>
      {appContext => (
        <>
          <Helmet
            bodyAttributes={{
              class: `m-auto ${
                appContext.darkMode
                  ? `bg-dark-grey text-antique-white`
                  : `bg-antique-white text-dark-grey layout__background-animation`
              }`
            }}
          />

          <Header />

          <main className={`layout mt-4 xs:mt-0 ${className}`}>{children}</main>
        </>
      )}
    </AppContext.Consumer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
