module.exports = function(eleventyConfig) {
  // Copy public/notes/ → _site/notes/ so PDFs are served at /notes/…
  eleventyConfig.addPassthroughCopy({ "public/notes": "notes" });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
