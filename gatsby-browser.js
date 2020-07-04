/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "lazysizes";

import React from "react";
import AppProvider from "~context/AppContext";
import Header from "~components/Header";

import "~scss/index.scss";

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <Header />
      {element}
    </AppProvider>
  );
};
