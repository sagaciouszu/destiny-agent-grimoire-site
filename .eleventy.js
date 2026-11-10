const fs = require("fs");
const crypto = require("crypto");
const { execFileSync } = require("child_process");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addFilter("split", (value, separator) => String(value).split(separator));

  eleventyConfig.addFilter("commas", (value) =>
    Number(value).toLocaleString("en-US"),
  );

  eleventyConfig.addFilter("bySpeaker", (voices, speaker) =>
    voices.filter((voice) => voice.speaker === speaker),
  );

  eleventyConfig.addFilter("uniqueSpeakers", (voices) =>
    [...new Set(voices.map((voice) => voice.speaker))],
  );

  eleventyConfig.addFilter("byStatus", (items, status) =>
    items.filter((item) => item.status === status),
  );

  eleventyConfig.addFilter("popularTopics", (voices) => {
    const priority = [
      "on grief",
      "on the Hive",
      "on the Traveler",
      "on the Vanguard",
      "on the Guardian",
      "on hope",
      "on the Witness",
      "on the Darkness",
      "on the Light",
      "on the Cabal",
      "on the City",
      "on Gambit",
      "on the Nine",
    ];
    const counts = new Map();
    voices.forEach((voice) => {
      counts.set(voice.topic, (counts.get(voice.topic) || 0) + 1);
    });
    return [...counts.entries()]
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        const ai = priority.indexOf(a[0]);
        const bi = priority.indexOf(b[0]);
        if (ai !== -1 || bi !== -1) {
          return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        }
        return a[0].localeCompare(b[0]);
      })
      .slice(0, 6)
      .map(([topic]) => topic);
  });

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
    pathPrefix: "/destiny-agent-grimoire-site/",
    templateFormats: ["md", "njk"],
  };
};
