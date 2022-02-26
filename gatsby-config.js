module.exports = {
    siteMetadata: {
      tabText: `Walkers`,
      pageTitle: `Walkers Properties & Lettings Page Title`,
      title: `Walkers Properties & Lettings Title`,
      siteUrl: `https://www.walkers4u.com`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
      },
    ]
}