module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "nasa-data-products",
    description: "Code snippets for processing NASA datasets",
    author: "Katsuki Chan",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-plugin-prefetch-google-fonts",
    //   options: {
    //     fonts: [
    //       {
    //         family: "Inter",
    //         variants: ["300", "400", "500"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Inter",
            weights: ["100", "200", "300", "400", "500", "600"],
          },
        ],
      },
    },
  ],
};
