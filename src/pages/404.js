import React from 'react';
import Layout from '../components/layout';
import SiteHead from '../components/SiteHead';

export const Head = () => <SiteHead />;

const NotFoundPage = () => (
  <Layout darkText>
    <h1>NOT FOUND</h1>
    <p>Not a valid URL</p>
  </Layout>
);

export default NotFoundPage;
