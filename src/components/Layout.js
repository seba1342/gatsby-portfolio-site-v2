import React, { useContext } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { AppContext } from "~context/AppContext";

export default function Layout({ children, className }) {
  const appContext = useContext(AppContext);

  return (
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

      <main className={`layout mt-4 xs:mt-0 ${className}`}>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
