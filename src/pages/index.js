import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SiteHead from '../components/SiteHead';

export const Head = () => <SiteHead />;

const IndexPage = () => (
  <Layout>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <Header />
        <Footer />
      </div>
  </Layout>
);

export default IndexPage;
