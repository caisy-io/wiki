<script>
  export let headline;
  export let description;
  export let subline;
</script>

<style>
  .card {
    border-radius: 6px;
    padding: 24px 24px 48px 24px;
    background-color: #ffffff;
    text-decoration: none;
    position: relative;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }
  .subline {
    position: absolute;
    left: 24px;
    bottom: 24px;
    height: 14px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #8b94a7;
  }
  h1 {
    height: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4e5e78;
  }
  p {
    font-family: Inter;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #0b1f44;
  }
</style>

<div class="card">
  <h1>{headline}</h1>
  {#if !!description}
    <p>{description}</p>
  {/if}
  {#if !!subline}<span class="subline">{subline}</span>{/if}
</div>
