/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  let updatedSassLoader = false;

  const updateRules = rules => {
    rules.forEach(rule => {
      if (rule.oneOf) updateRules(rule.oneOf);
      if (rule.rules) updateRules(rule.rules);

      const loaders = Array.isArray(rule.use) ? rule.use : [rule.use];
      loaders.forEach(loader => {
        if (
          loader &&
          typeof loader === 'object' &&
          loader.loader &&
          loader.loader.includes('sass-loader')
        ) {
          loader.options = { ...loader.options, api: 'modern' };
          updatedSassLoader = true;
        }
      });
    });
  };

  updateRules(config.module.rules);

  if (updatedSassLoader) {
    actions.replaceWebpackConfig(config);
  }
};
