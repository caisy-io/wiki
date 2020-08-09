import { request, gql } from "graphql-request";
import slugify from "slugify";

const serialize = (nodes, parent = true, tags) => {
  // const { document } = value;
  console.log(`nodes `, nodes);
  const res = nodes.map((node) => {
    const _tags = tags || [];
    switch (true) {
      case node.type === "list-item" && !!node.children:
        return `<li>${serialize(node.children)}</li>`;
      case node.type === "numbered-list" && !!node.children:
        return `<nl>${serialize(node.children)}</nl>`;
      case node.type === "link" && !!node.children:
        return `<a>${serialize(node.children)}</a>`;
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
      case node.type === "paragraph" && !!node.children && !_tags.includes("p"):
        _tags.push("p");
        return `<p>${serialize(node.children, true, _tags)}</p>`;
      case !!node.type && !!node.children:
        console.warn(`node.type ${node.type} is not handlend`);
        break;
      case !!node.code && !!node.text && parent:
        console.log(`node code`, node, parent);
        _tags.push("pre");
        _tags.push("code");
      case !!node.bold && !!node.text:
        _tags.push("b");
      default:
        return `${_tags.map((t) => `<${t}>`).join("")}${node.text}${_tags
          .map((t) => `</${t}>`)
          .join("")}`;
    }
  });
  console.log(`res `, res, nodes);
  // const elements = document.nodes.map(this.serializeNode).filter((el) => el);
  // if (options.render === false) return elements;
  // // return elements.toArray();
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
    text: e.node.text ? serialize(e.node.text.content, false) : undefined,
  }));
};

export default getAllArticles;
