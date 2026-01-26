const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy('./*.svg')
  eleventyConfig.addPassthroughCopy('./*.html')
  // Copy all assets from photos (images, PDFs, etc.)
  eleventyConfig.addPassthroughCopy('./photos/')
  // Copy all certificate images
  eleventyConfig.addPassthroughCopy('./certificates/')
  // Copy all publication images
  eleventyConfig.addPassthroughCopy('./publications/')
  // Copy all project images
  eleventyConfig.addPassthroughCopy('./projects/')

  eleventyConfig.addShortcode('version', function () {
    return now
  })
};
