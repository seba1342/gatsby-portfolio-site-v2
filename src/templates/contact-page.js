/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class ContactPageComponent extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  //

  render() {
    return (
      <>
        <SEO frontmatterTitle={this.props.frontmatter.title} />
        <Layout className="contact-page relative bg-black"></Layout>
      </>
    );
  }
}

const ContactPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter } = data.markdownRemark;

  return (
    <AppContext.Consumer>
      {appContext => (
        <ContactPageComponent
          appContext={appContext}
          frontmatter={frontmatter}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
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
