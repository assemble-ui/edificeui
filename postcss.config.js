// postcss.config.js

module.exports = async ({ file, options }) => {
  return {
    plugins: {
      "postcss-import": {},
      // Add other PostCSS plugins as needed
    },
  };
};
