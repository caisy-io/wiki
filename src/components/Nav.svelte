<script>
  import { request, gql } from "graphql-request";

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
  ).then(res => {
    const navItems = res.allNavigationItem.edges.map(e => e.node);
    return navItems[0].title;
  });

  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid var(--blue-blue);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
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
    color: var(--blue-blue);
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'wiki' ? 'page' : undefined}
        href="wiki">
        wiki
      </a>
    </li>
  </ul>
</nav>
