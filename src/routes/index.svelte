<style>
  h1 {
    color: var(--blue-blue);
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

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
<svelte:head>
  <title>caisy.io</title>
  <meta name="description" content="caisy wiki" />
  <meta name="keywords" content="caisy.io" />
  <meta name="author" content="caisy.io" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f1f3f6" />
  <meta name="msapplication-TileColor" content="#f1f3f6" />
  <meta name="theme-color" content="#f1f3f6" />
</svelte:head>



<h1>Recent articles</h1>

<ul>
  {#each articles as article}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="{article.slug}">{article.headline}</a>
    </li>
  {/each}
</ul>