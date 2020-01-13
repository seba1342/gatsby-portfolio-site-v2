/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class AboutPageComponent extends Component {
  componentDidMount() {}

  //

  render() {
    return (
      <>
        <SEO frontmatterTitle={this.props.frontmatter.title} />

        <Layout className="about-page relative z-10"></Layout>
      </>
    );
  }
}

const AboutPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter } = data.markdownRemark;

  return (
    <AppContext.Consumer>
      {appContext => (
        <AboutPageComponent
          appContext={appContext}
          frontmatter={frontmatter}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
