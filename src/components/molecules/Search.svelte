<script>
  export let searchTerm = "Type to search for documents";
</script>

<style>
  input {
    height: 62px;
    object-fit: contain;
    border-radius: 6px;
    box-shadow: 0 4px 175px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
  }
</style>

<input bind:value={searchTerm} />
<p>{searchTerm}</p>
