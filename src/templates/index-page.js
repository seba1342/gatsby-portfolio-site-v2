/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class IndexPageComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //

  render() {
    return (
      <>
        <SEO frontmatterTitle={this.props.frontmatter.title} />

        <Layout className="index-page w-full relative m-auto mb-16">
          <section className="index-page__content b1">
            <p className="animation-appear" style={{ animationDelay: `100ms` }}>
              Hey{" "}
              <span role="img" aria-label="Sunglasses Emoji Face">
                😎
              </span>
            </p>
            <p className="animation-appear" style={{ animationDelay: `200ms` }}>
              My name is Seb and I&apos;m a developer and a designer living in
              Melbourne.
            </p>
            <p className="animation-appear" style={{ animationDelay: `300ms` }}>
              I currently work as a Developer for{" "}
              <a
                href="https://www.ferocia.com.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ferocia
              </a>{" "}
              where I work on Bendigo Bank&apos;s online banking platform.
            </p>
            <p className="animation-appear" style={{ animationDelay: `300ms` }}>
              I have also worked as a Junior Developer for{" "}
              <a
                href="https://loveandmoney.agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                Love + Money Agency
              </a>{" "}
              where I added a little bit to the internet everyday.
            </p>
            <p className="animation-appear" style={{ animationDelay: `400ms` }}>
              I am inspired to solve problems and love the overlap between art
              and science.
            </p>
            <p className="animation-appear" style={{ animationDelay: `500ms` }}>
              In my free time I enjoy playing{" "}
              <a
                href="https://twitter.com/kartklips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mario Kart
              </a>
              , listening to podcasts, playing basketball and binge watching
              cooking shows on Netflix.
            </p>
            <p className="animation-appear" style={{ animationDelay: `600ms` }}>
              You can find me on{" "}
              <a
                href="https://instagram.com/sebastien.bailouni"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/sebastien-bailouni-956002123/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.twitter.com/seba1342"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              , and{" "}
              <a
                href="https://www.strava.com/athletes/35219560"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strava
              </a>
              , or reach me via{" "}
              <a href="mailto:sbailouni@gmail.com">sbailouni@gmail.com</a>.
            </p>
            <p className="animation-appear" style={{ animationDelay: `700ms` }}>
              Head to my{" "}
              <Link to="/projects" className="link">
                projects
              </Link>{" "}
              page to see some of my work.
            </p>
          </section>
        </Layout>
      </>
    );
  }
}

const IndexPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter } = data.markdownRemark;

  return (
    <AppContext.Consumer>
      {(appContext) => (
        <IndexPageComponent
          appContext={appContext}
          frontmatter={frontmatter}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
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
