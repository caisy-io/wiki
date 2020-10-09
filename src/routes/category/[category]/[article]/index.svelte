<script context="module">
  import SlateRenderer from "../../../../components/SlateRenderer/index.svelte";
  import { getArticle } from "../../../_dataProvider.js";
  export async function preload({ params, query, ...rest }) {
    console.log(` rest`, rest);
    console.log(` params.article`, params.article);
    const articele = await getArticle({ id: params.article });
    console.log(` articele`, articele);
    if(articele){
      return { articele };
    }
  }
</script>

<script>
  export let article;
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
  .content :global(code),
  .content :global(pre) {
    display: inline;
    margin: 0;
    padding: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  {#if article && article.headline}
    <title>{article.headline}</title>
  {/if}
</svelte:head>

{#if article && article.headline}
  <h1>{article.headline}</h1>

  <div class="content">
    <SlateRenderer nodes={article.text} />
  </div>
{/if}
