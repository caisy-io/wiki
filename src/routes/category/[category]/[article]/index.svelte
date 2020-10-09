<script context="module">
  import Breadcrump from "../../../../components/molecules/Breadcrump.svelte";
  import SlateRenderer from "../../../../components/SlateRenderer/index.svelte";
  import { getArticle } from "../../../_dataProvider.js";
  export async function preload({ params, query, ...rest }) {
    const article = await getArticle({ id: params.article });
    return { article, params };
  }
</script>

<script>
  export let article;
  export let params;
  const category = params && params.category;
  const breadcrumpItems = [
    { href: "/", title: "Home" },
    { href: `/category/${category}`, title: `${category}` },
    {
      href: `/category/${category}/${article.id}`,
      title: `${article.headline}`,
    },
  ];
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .content :global(h6) {
    font-size: 1.1em;
    margin: 1.2em 0 0 0;
    font-weight: 500;
  }
  .content :global(h3) {
    font-size: 1.3em;
    margin: 1.4em 0 0 0;
    font-weight: 500;
  }
  .content {
    font-family: "Inter";
  }
  .content :global(p) {
    display: inline;
    margin: 0;
    padding: 0;
  }
  .date {
    color: #0099ff;
  }
  .content :global(p),
  .content :global(pre) {
    margin: 0;
    padding: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .articleBody {
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
    border-radius: 6px;
    background-color: #ffffff;
    padding: 32px 16.66%;
  }
  .headline {
    text-align: center;
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4e5e78;
    margin-bottom: 64px;
  }
</style>

<Breadcrump items={breadcrumpItems} />

<svelte:head>
  {#if article && article.headline}
    <title>{'Caisy Wiki | '}{article.headline}</title>
  {/if}
</svelte:head>

{#if article && article.headline}
  {#if article.text && article.text.content}
    <div class="articleBody">
      <h1 class="headline">{article.headline}</h1>
      {#if article && article._meta && article._meta.publishedAt}
        <div class="date">
          <i>
            <span>{'Published at ' + new Date(article._meta.publishedAt).toLocaleDateString()}</span>
          </i>
        </div>
      {/if}
      <div class="content">
        <SlateRenderer nodes={article.text.content} />
      </div>
    </div>
    <Breadcrump items={breadcrumpItems} />
  {/if}
{/if}
