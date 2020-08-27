import { request, gql } from "graphql-request";
import slugify from "slugify";

export const getAllArticles = async () => {
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
                    title
                    description
                  }
                }
                text
              }
            }
          }
        }
      `
    )
  ).allArticle.edges.map((e) => ({
    ...e.node,
    slug: slugify(`${e.node.headline}`),
    text: e.node.text ? e.node.text.content : undefined,
  }));
};
