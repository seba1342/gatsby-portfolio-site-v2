/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class ProjectPageComponent extends Component {
  componentDidMount() {}

  //

  render() {
    const { frontmatter, html } = this.props;

    return (
      <>
        <SEO frontmatterTitle={frontmatter.title} />

        <Layout className="project-page relative w-full m-auto mb-16">
          <Link to="/projects" className="project-page__back">
            <div className="back relative animation-appear">
              <span
                className="back-arrow absolute"
                role="img"
                aria-label="left arrow emoji"
              >
                ⬅&nbsp;
              </span>
              <span className="hover:underline">Back</span>
            </div>
          </Link>

          <h1
            className="project-page__title f2 font-bold animation-appear my-4"
            style={{ animationDelay: `200ms` }}
          >
            {frontmatter.title}
          </h1>

          <p
            className="project-page__title b1 animation-appear"
            style={{ animationDelay: `300ms` }}
          >
            {frontmatter.excerpt}
          </p>

          {frontmatter.projectLink ? (
            <a
              href={frontmatter.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={frontmatter.featuredImage.childImageSharp.fluid}
                className="animation-appear my-8"
                imgStyle={{ borderRadius: 5 }}
                style={{ animationDelay: `400ms` }}
              />
            </a>
          ) : (
            <Img
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              className="animation-appear my-8"
              imgStyle={{ borderRadius: 5 }}
              style={{ animationDelay: `400ms` }}
            />
          )}

          <div
            className="animation-appear b1"
            style={{ animationDelay: `500ms` }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Layout>
      </>
    );
  }
}

const ProjectPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter, html } = data.markdownRemark;

  return (
    <AppContext.Consumer>
      {(appContext) => (
        <ProjectPageComponent
          appContext={appContext}
          frontmatter={frontmatter}
          html={html}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default ProjectPage;

export const ProjectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        excerpt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }
        projectLink
        title
      }
      html
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
