import { request, gql } from "graphql-request";
import slugify from "slugify";
import Html from "slate-html-serializer";

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
  ).allArticle.edges.map((e) => ({
    slug: slugify(
      `${
        e.node.navigationEntry && e.node.navigationEntry.slug
          ? e.node.navigationEntry.slug
          : ""
      }${e.node.headline}`
    ),
    text: e.node.text ? Html.serialize(e.node.text) : undefined,
    ...e.node,
  }));
};

export default getAllArticles;
