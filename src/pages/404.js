/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { Link } from "gatsby";
import axios from "axios";

import Layout from "~components/Layout";
import { AppContext } from "~context/AppContext";

class PageNotFoundComponent extends Component {
  state = {
    url: false,
    gifLink: false
  };

  mounted = false;

  componentDidMount() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GATSBY_GIPHY_KEY}&tag=trippy`
      )
      .then(response => {
        const { data } = response.data;

        if (data && data.images) {
          this.setState({
            url: data.images.downsized_large.url,
            gifLink: data.url
          });
        }
      })
      .catch(error => {
        throw error;
      });
  }

  //

  render() {
    return (
      <Layout className="_404 relative m-auto">
        <section className="w-full h-full relative flex flex-col justify-center">
          <h1 className="f1 font-bold mb-2">four-oh-four</h1>

          <h2 className="f2 mb-2">Looks like you shouldn&apos;t be here.</h2>
          <p className="b1">
            But that&apos;s okay, we all get lost sometimes. Here&apos;s a
            handy&nbsp;
            <Link to="/">link</Link> to help you get back on track.
          </p>

          <div className="_404__gif__container">
            {this.state.url && this.state.gifLink && (
              <div className="w-full pt-8 pb-16 mx-auto animation-appear">
                <img
                  className="w-full"
                  style={{ animationDelay: `300ms`, objectFit: `contain` }}
                  src={this.state.url}
                  alt="Random photography gif"
                />
              </div>
            )}
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
