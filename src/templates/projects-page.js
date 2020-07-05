/* eslint-disable react/prop-types */

import React, { Component } from "react";
import { graphql, Link } from "gatsby";

import Layout from "~components/Layout";
import SEO from "~components/SEO";

import { AppContext } from "~context/AppContext";

class ProjectsPageComponent extends Component {
  ignoredPages = [`home`, `projects`, `contact`, `about`];

  componentDidMount() {}

  handleMouseOver = (event) => {
    console.log(event);
  };

  //

  render() {
    const { edges, frontmatter } = this.props;
    return (
      <>
        <SEO frontmatterTitle={frontmatter.title} />

        <Layout className="projects-page relative w-full m-auto mb-16">
          <p
            className="b1 pb-2 animation-appear"
            style={{ animationDelay: `100ms` }}
          >
            Here are some projects that I have worked on:
          </p>

          {edges.map((edge, index) => {
            // eslint-disable-next-line no-shadow
            const project = edge.node.frontmatter;
            const { fields } = edge.node;
            const projectKey = index;

            if (!this.ignoredPages.includes(project.title.toLowerCase())) {
              return (
                <div
                  key={projectKey}
                  className="projects-page__item my-4 xs:my-2 animation-appear"
                  onFocus={this.handleMouseOver}
                  onMouseOver={this.handleMouseOver}
                  onMouseLeave={this.handleMouseLeave}
                  style={{ animationDelay: `${(index + 1) * 100 + 100}ms` }}
                >
                  <Link className="projects-page__link" to={fields.slug}>
                    <h1 className="projects-page__title f3 font-bold">
                      {project.title}
                    </h1>

                    <p className="projects-page__excerpt b2 my-2">
                      {project.date}
                    </p>

                    <p className="projects-page__excerpt b1 mt-2 pb-4">
                      {project.excerpt}
                    </p>
                  </Link>
                </div>
              );
            }

            return <></>;
          })}
        </Layout>
      </>
    );
  }
}

const ProjectsPage = ({ data }) => {
  const { siteMetadata: metadata } = data.site;
  const { frontmatter } = data.markdownRemark;
  const { edges } = data.allMarkdownRemark;

  return (
    <AppContext.Consumer>
      {(appContext) => (
        <ProjectsPageComponent
          appContext={appContext}
          edges={edges}
          frontmatter={frontmatter}
          metadata={metadata}
        />
      )}
    </AppContext.Consumer>
  );
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { title: {}, templateKey: { eq: "project-page" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM YY")
            excerpt
            path
            title
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
          }
        }
      }
    }
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
