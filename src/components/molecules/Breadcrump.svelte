<script>
  export let items = [];
</script>

<style>
  .breadcrump {
    font-family: Inter;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4e5e78;
  margin: 20px 0;
  }
  a,
  a:visited,
  a:active,
  a:default,
  a:-webkit-any-link {
    text-decoration: none;
    color: #4e5e78;
  }
</style>

<div class="breadcrump">
  {#each items as item, i}
    {#if item && item.title && item.href}
      {#if i !== 0}<span> {' / '}</span>{/if}
      <a href={item.href}>
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </a>
    {/if}
  {/each}
</div>
