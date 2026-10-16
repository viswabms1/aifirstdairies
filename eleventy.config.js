export default function (eleventyConfig) {
  // Copy static assets through unchanged
  eleventyConfig.addPassthroughCopy("src/css");

  // Human-friendly dates, e.g. "16 Oct 2026"
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    })
  );

  // ISO dates for the feed
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString());

  // Newest posts first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // Rough reading time
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 220)) + " min read";
  });

  // First letter(s) of an author name, for the avatar circle
  eleventyConfig.addFilter("initials", (name) =>
    String(name || "?")
      .split(/\s+/)
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
