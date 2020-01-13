/* eslint-disable react/prop-types */

import React, { Component } from "react";
import Layout from "~components/Layout";
import { AppContext } from "~context/AppContext";

class PageNotFoundComponent extends Component {
  mounted = false;

  componentDidMount() {
    setTimeout(() => {
      this.mounted = true;
    }, 300);

    this.props.appContext.setDark(false);
    this.props.appContext.setMenuMode(`home`);
  }

  //

  render() {
    return (
      <Layout className={`_404 relative ${this.mounted ? `mounted` : ``}`}>
        <section className="w-full h-full relative flex items-center justify-center">
          <div className="_404__canvas fixed w-full h-full left-0 top-0 right-0 bottom-0 z-10 no-pointer">
            <h3 className="_404__canvas__rotator _404__canvas__emoji absolute gpu f1">
              <span role="img" aria-label="Skull">
                💀
              </span>
            </h3>

            <h3 className="_404__canvas__rotator _404__canvas__bork absolute f1 italic">
              bork
            </h3>

            <h3 className="_404__canvas__rotator _404__canvas__error absolute f1">
              Error
            </h3>

            <h3 className="_404__canvas__rotator _404__canvas__404--0 absolute f1">
              404
            </h3>

            <h3 className="_404__canvas__rotator _404__canvas__fuck absolute f1">
              Fuck
            </h3>

            <h3 className="_404__canvas__rotator _404__canvas__404--1 absolute f1">
              404
            </h3>
          </div>

          <div className="relative grid z-20">
            <hgroup className="grid-end--6 grid-start--4 relative text-center">
              <h1 className="f2">This page is borken.</h1>

              <p className="_404__text b3">
                But then again, one day all of the heat in the universe is going
                to die. So it’s probably not a huge deal, in the scheme of
                things.
              </p>
            </hgroup>

            <a
              href="https://www.multivax.com/last_question.html"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-end--12 relative flex flex-wrap flex-row justify-center"
              data-cursor="pointer"
            >
              <h4 className="w-50 relative block text-center b1 ws-nowrap no-pointer">
                Heat Death &amp; Entropy
              </h4>

              <h4 className="w-50 pl-4 relative block text-center b1 ws-nowrap no-pointer">
                Isaac Asimov
              </h4>
            </a>
          </div>
        </section>
      </Layout>
    );
  }
}

const PageNotFoundPage = () => {
  return (
    <AppContext.Consumer>
      {appContext => <PageNotFoundComponent appContext={appContext} />}
    </AppContext.Consumer>
  );
};

export default PageNotFoundPage;
