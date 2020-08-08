import getAllArticles from "./_articles.js";
export async function get(req, res, next) {
  const lookup = new Map();

  const articles = await getAllArticles();

  articles.forEach((a) => {
    lookup.set(a.slug, JSON.stringify(a));
  });
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
