<script context="module">
  import getAllArticles from "./_articles.js";
  export async function preload({ params, query }) {
    const articles = await getAllArticles();
    return { articles };
  }
</script>

<script>
  export let articles;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Wiki</title>
</svelte:head>

<h1>Recent articles</h1>

<ul>
  {#each articles as article}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="wiki/{article.navigationEntry.slug}">
        {article.headline}
      </a>
    </li>
  {/each}
</ul>
