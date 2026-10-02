import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/main.scss';
const Layout = ({ children, darkText }) => (
  <div id="wrapper" className={darkText ? 'dark-text' : ''}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default Layout;
