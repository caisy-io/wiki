<script context="module">
  import { getAllArticles } from "./../../_dataProvider";
  export async function preload({ params, query }) {
    const articels = await getAllArticles({ slug: params.category });
    return { articels, category: params.category };
  }
</script>

<script>
  export let articels;
  export let category;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<ul>
  {#each articels as articel}
    {#if articel.headline && articel.id}
      <li>
        <a rel="prefetch" href={`/category/${category}/${articel.id}`}>
          <h1>{articel.headline}</h1>
        </a>
      </li>
    {/if}
  {/each}
</ul>
