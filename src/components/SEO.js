import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        image
        keywords
        title
        titleTemplate
        twitterUsername
        url
      }
    }
  }
`;

const SEO = ({
  frontmatterTitle,
  frontmatterDescription,
  frontmatterKeywords,
  pathName
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          description,
          image,
          keywords,
          title,
          titleTemplate,
          twitterUsername,
          url
        }
      }
    }) => {
      const seo = {
        description: frontmatterDescription || description,
        image: `${url}/${image}`,
        keywords: frontmatterKeywords || keywords,
        title: frontmatterTitle || title,
        url: `${url}/${pathName || `/`}`
      };

      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <html lang="en" />

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          {seo.keywords && <meta name="keywords" content={seo.keywords} />}

          {seo.url && <meta property="og:url" content={seo.url} />}

          {seo.title && <meta property="og:title" content={seo.title} />}

          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}

          {seo.image && <meta property="og:image" content={seo.image} />}

          <meta name="twitter:card" content="summary_large_image" />

          {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
          )}

          {seo.title && <meta name="twitter:title" content={seo.title} />}

          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}

          {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  frontmatterDescription: PropTypes.string,
  frontmatterKeywords: PropTypes.string,
  frontmatterTitle: PropTypes.string,
  pathName: PropTypes.string
};

SEO.defaultProps = {
  frontmatterDescription: null,
  frontmatterKeywords: null,
  frontmatterTitle: null,
  pathName: null
};
