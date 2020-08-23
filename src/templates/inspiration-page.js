/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import axios from "axios";

import InspirationItem from "~components/InspirationItem";
import Layout from "~components/Layout";
import Loader from "~components/Loader";
import SEO from "~components/SEO";

export default function InspirationPageComponent({ data }) {
  const [arenaData, setArenaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { frontmatter } = data.markdownRemark;

  useEffect(() => {
    axios
      .get(`https://api.are.na/v2/channels/the-interwebz?per=100`)
      .then(response => {
        setArenaData(response.data.contents.reverse());
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <SEO frontmatterTitle={frontmatter.title} />

      <Layout className="inspiration-page relative m-auto flex flex-col items-center">
        <p className="f3 xs:pb-4 pb-16 pt-4">
          Here are some websites and designs that inspire my work:
        </p>

        <section className="inspiration-page__items mb-16 flex flex-row flex-wrap items-end ">
          {loading ? (
            <div className="flex">
              <p className="b1 mr-1">Fetching inspiration</p>
              <Loader />
            </div>
          ) : (
            arenaData.map((item, index) => {
              const itemKey = index;

              return (
                <InspirationItem
                  baseClass={item.base_class}
                  image={item.image}
                  index={index}
                  key={itemKey}
                  title={item.title}
                  url={item.source?.url}
                />
              );
            })
          )}
        </section>
      </Layout>
    </>
  );
}

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
