/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql } from "gatsby";
import axios from "axios";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class InspirationPageComponent extends Component {
  state = {
    arenaData: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(`https://api.are.na/v2/channels/the-interwebz`)
      .then(response => {
        // handle success
        console.log(response.data.contents);
        this.setState({ arenaData: response.data.contents, loading: false });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  //

  render() {
    const { frontmatter } = this.props;
    return (
      <>
        <SEO frontmatterTitle={frontmatter.title} />

        <Layout className="inspiration-page relative m-auto">
          <p className="">
            Here are some websites and designs that inspire my work:
          </p>

          <section className="inspiration-page__items pb-16 flex flex-row flex-wrap items-end ">
            {!this.state.loading ? (
              this.state.arenaData.map((item, index) => {
                const itemKey = index;

                return (
                  item.title &&
                  item.image.display.url &&
                  item.source.url && (
                    <a
                      className="inspiration-page__item w-1/2 xs:w-full p-1 py-4 xs:py-6 animation-appear"
                      key={itemKey}
                      href={item.source.url}
                      rel="noopener noreferrer"
                      style={{ animationDelay: `${(index + 1) * 100 + 100}ms` }}
                      target="_blank"
                    >
                      <div className="inspiration-page__item--elevate">
                        <h1
                          key={itemKey}
                          className="inspiration-page__item__title b1 text-center xs:relative pb-4"
                        >
                          {item.title}
                        </h1>

                        <p className="inspiration-page__item__url b2 text-center xs:relative pb-4">
                          {item.source.url}
                        </p>

                        <img
                          alt="arena post"
                          className="inspiration-page__item__image m-auto"
                          src={item.image.square.url}
                        />
                      </div>
                    </a>
                  )
                );
              })
            ) : (
              <p>Fetching inspiration...</p>
            )}
          </section>
        </Layout>
      </>
    );
  }
}

const InspirationPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter } = data.markdownRemark;

  return (
    <AppContext.Consumer>
      {appContext => (
        <InspirationPageComponent
          appContext={appContext}
          frontmatter={frontmatter}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default InspirationPage;

export const InspirationPageQuery = graphql`
  query InspirationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        keywords
      }
    }
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
        twitterUsername
      }
    }
  }
`;
