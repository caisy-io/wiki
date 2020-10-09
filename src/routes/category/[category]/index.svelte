<script context="module">
  import Card from "../../../components/molecules/Card.svelte"
  import Breadcrump from "../../../components/molecules/Breadcrump.svelte";
  import { getAllArticles } from "./../../_dataProvider";
  export async function preload({ params, query }) {
    const articels = await getAllArticles({ slug: params.category });
    return { articels, category: params.category };
  }
</script>

<script>
  export let articels;
  export let category;

  const breadcrumpItems = [
    { href: "/", title: "Home" },
    { href: `/category/${category}`, title: `${category}` },
  ];
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style: none;
  }
  li{
    margin-bottom: 2em;
  }
</style>

<Breadcrump items={breadcrumpItems} />
<ul>
  {#each articels as articel}
    {#if articel.headline && articel.id}
      <li>
        <a rel="prefetch" href={`/category/${category}/${articel.id}`}>
          <Card headline={articel.headline} />
        </a>
      </li>
    {/if}
  {/each}
</ul>
