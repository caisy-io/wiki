<script>
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
    max-width: 940px;
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
  h1 {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
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
            <h1>Caisy Wiki</h1>
          </a>
        </li>
      </ul>
    </div>
    <div />
  </div>
</nav>
