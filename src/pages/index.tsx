import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

interface Post {
  node: {
    frontmatter: {
      title: string;
    };
  };
}

interface PostQuery {
  data: {
    posts: {
      edges: Post[];
    };
  };
}

const IndexPage: React.FC<PostQuery> = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <ul>
        {data.posts.edges.map(({ node }, i) => {
          const { title } = node.frontmatter;
          return (
            <li key={i} className="mb-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostQuery {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
