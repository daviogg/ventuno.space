const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/static/style.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
