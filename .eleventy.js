const htmlmin = require("html-minifier");
const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lazyImagesPlugin);
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync('_site/404.html');

        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.writeHead(404);
          res.end();
        });
      }
    }
  });

  eleventyConfig.setTemplateFormats([
    "njk", "css", "webmanifest", "xml", "html"
  ]);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/work/assets");

  return {
    dir: {
      input: "src"
    }
  }
};