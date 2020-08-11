<script>
  import { request, gql } from "graphql-request";
  import Button from "./Button.svelte";
  const query = gql`
    query allNavigationItem {
      allNavigationItem {
        edges {
          node {
            title
            slug
            subitem {
              ...NavigationItemL1
            }
          }
        }
      }
    }

    fragment NavigationItemL1 on NavigationItem {
      title
      slug
    }
  `;

  let promise = request(
    "https://caisy.io/api/v1/e/f7d8ac8f-70c1-4fb5-8beb-3e68533e2392/graphql",
    query
  ).then((res) => {
    const navItems = res.allNavigationItem.edges.map((e) => e.node);
    return navItems[0].title;
  });

  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to top, #0099ff, rgba(0, 153, 255, 0.64));
    align-items: center;   
  }
  nav > div {
    width: 100%; 
    max-width: 940px
  }
  nav > div > div > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  ul {
    margin: 0;
    padding: 0;
    width: inherit;
    height: auto;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--green-green);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    color: var(--solid-white);
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <div>
    <div>
      <ul>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === '/' ? 'page' : undefined}
            href="/">
            caisy
          </a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === '/' ? 'page' : undefined}
            href="/">
            <Button>Get in touch</Button>
          </a>
        </li>
      </ul>
    </div>
    <div />
  </div>
</nav>
