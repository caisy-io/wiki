import { request, gql } from "graphql-request";
import slugify from "slugify";

const serializeSateToHtml = (nodes) => {
  const res = nodes.map((node) => {
    switch (true) {
      case node.type === "list-item" && !!node.children:
        return `<li>${serialize(node.children)}</li>`;
      case node.type === "numbered-list" && !!node.children:
        return `<nl>${serialize(node.children)}</nl>`;
      case node.type === "link" && !!node.children:
        return `<a href="${node.url}" target="_blank">${serialize(
          node.children
        )}</a>`;
      case node.type === "heading-one" && !!node.children:
        return `<h1>${serialize(node.children)}</h1>`;
      case node.type === "heading-two" && !!node.children:
        return `<h2>${serialize(node.children)}</h2>`;
      case node.type === "heading-three" && !!node.children:
        return `<h3>${serialize(node.children)}</h3>`;
      case node.type === "heading-four" && !!node.children:
        return `<h4>${serialize(node.children)}</h4>`;
      case node.type === "heading-five" && !!node.children:
        return `<h5>${serialize(node.children)}</h5>`;
      case node.type === "heading-six" && !!node.children:
        return `<h6>${serialize(node.children)}</h6>`;
      case node.type === "paragraph" && !!node.children:
        return `<p>${serialize(node.children)}</p>`;
      case node.code === true && !!node.text && node.text !== "":
        return `<pre><code class="javascript">${node.text}</code></pre>`;
      default:
        return `${node.text}`;
    }
  });
  return res;
};

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
    ...e.node,
    slug: slugify(
      `${
        e.node.navigationEntry && e.node.navigationEntry.slug
          ? e.node.navigationEntry.slug
          : ""
      }${e.node.headline}`
    ),
    text: e.node.text ? e.node.text.content : undefined,
  }));
};

export default getAllArticles;
