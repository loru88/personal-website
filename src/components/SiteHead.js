import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SiteHead = () => {
  const data = useStaticQuery(graphql`
    query SiteHeadQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content="Personal website of Lorenzo Adinolfi Software Engineer and Full Stack Developer"
      />
      <html lang="en" />
    </>
  );
};

export default SiteHead;
