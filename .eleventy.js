module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./pages");
  eleventyConfig.addGlobalData("kai_placeholder", "**Kai (解)**");

  return {
    dir: {
      input: "./pages",
      output: "./docs",
      includes: "_includes",
    },
  };
};
