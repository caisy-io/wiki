<script context="module">
  import Breadcrump from "../components/molecules/Breadcrump.svelte";
  import { getAllNavigationItem } from "./_dataProvider";
  export async function preload({ params, query }) {
    const naviagtionItems = await getAllNavigationItem();
    return { naviagtionItems };
  }
</script>

<script>import Card from "../components/molecules/Card.svelte";

  export let naviagtionItems;

  const breadcrumpItems = [
    { href: "/", title: "Home" }
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

<ul>
  {#each naviagtionItems as navItem}
    {#if navItem.title && navItem.slug}
      <li>
        <a rel="prefetch" href={`/category/${navItem.slug}`}>
          <Card 
            headline={navItem.title}
            description={navItem.description}
            subline={"View "+ navItem.count + " articles"}
          />
        </a>
      </li>
    {/if}
  {/each}
</ul>
