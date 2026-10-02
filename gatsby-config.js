const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  trailingSlash: 'always',
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
        icons: [48, 72, 96, 144, 192, 256, 384, 512].map((size) => ({
          src: `favicons/icon-${size}x${size}.png`,
          sizes: `${size}x${size}`,
          type: 'image/png',
        })),
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        // id: "GTM-N6GN5KJ",
        id: "GTM-583PTB2J",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
  ],
};
