import { request, gql } from "graphql-request";

export const destinctOnId = (value, index, self) => {
  value.count = self.filter(v => v.id === value.id).length
  return self.findIndex(v => v.id === value.id) === index;
}



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

export const getAllNavigationItem = async () => {
  const articles = await getAllArticles();
  return articles.map(a => a.navigationEntry).sort((a, b) => new Date(b._meta.updatedAt) - new Date(a._meta.updatedAt))
    .filter(destinctOnId);
}

export const getArticle = async ({ id }) => {
  const article = (await request(
    "https://caisy.io/api/v1/e/f7d8ac8f-70c1-4fb5-8beb-3e68533e2392/graphql",
    gql`
    query getArticle($id: ID!) {
      Article(id: $id) {
        headline
        _meta {
          publishedAt
          updatedAt
          locales
          id
        }
        text
      }
    }
    `, { id })).Article;
  return article;
}


export const getAllArticles = async (props) => {
  const slug = props && props.slug;
  const res = (
    await request(
      "https://caisy.io/api/v1/e/f7d8ac8f-70c1-4fb5-8beb-3e68533e2392/graphql",
      gql`
        query allArticle {
          allArticle {
            edges {
              node {
                id
                headline
                _meta {
                  publishedAt
                  updatedAt
                  locales
                  id
                }
                navigationEntry {
                  ... on NavigationItem {
                    _meta{
                      updatedAt
                    }
                    title
                    subitem {
                      __typename
                    }
                    description
                    id
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
  ).allArticle.edges.map(e => e.node)
    .sort((a, b) => new Date(b._meta.updatedAt) - new Date(a._meta.updatedAt))
    .filter(destinctOnId).map((e) => ({
      ...e,
      text: e.text ? e.text.content : undefined,
    }));

  if (slug) {
    res.filter(a => a.naviagtionEntry && a.naviagtionEntry.slug === slug).sort((a, b) => new Date(b._meta.updatedAt) - new Date(a._meta.updatedAt)).filter(destinctOnId)
  }
  return res;
};

export default getAllArticles;
