import { request, gql } from "graphql-request";

const getAllArticles = async () => {
  return (
    await request(
      "https://caisy.io/api/v1/e/f7d8ac8f-70c1-4fb5-8beb-3e68533e2392/graphql",
      gql`
        query allArticle {
          allArticle {
            edges {
              node {
                headline
                _meta {
                  publishedAt
                  updatedAt
                  locales
                  id
                }
                navigationEntry {
                  ... on NavigationItem {
                    slug
                  }
                }
                text
              }
            }
          }
        }
      `
    )
  ).allArticle.edges.map((e) => e.node);
};

export default getAllArticles;
