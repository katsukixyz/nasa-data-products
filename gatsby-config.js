module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "nasa-data-products",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
