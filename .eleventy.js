const fs = require("fs");
const crypto = require("crypto");
const { execFileSync } = require("child_process");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("split", (value, separator) => String(value).split(separator));

  eleventyConfig.addFilter("assetHash", (urlPath) => {
    try {
      const file = urlPath.replace(/^\//, "");
      return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
    } catch (error) {
      return "dev";
    }
  });

  eleventyConfig.addFilter("gitDate", (inputPath) => {
    try {
      return execFileSync("git", ["log", "-1", "--format=%cs", "--", inputPath], {
        encoding: "utf8",
      }).trim();
    } catch (error) {
      return "";
    }
  });

  const md = markdownIt({ html: true, linkify: true }).use(markdownItAnchor, {
    slugify: (value) => value
      .trim()
      .toLowerCase()
      .replace(/\./g, "-")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "#",
      placement: "after",
      class: "heading-anchor",
      ariaHidden: false,
      renderAttrs: () => ({ "aria-label": "Permalink to this section" }),
    }),
  });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    pathPrefix: "/grimoire-site/",
    templateFormats: ["md", "njk"],
  };
};
