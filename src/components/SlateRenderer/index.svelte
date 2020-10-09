<script context="module">
  import Prism from "prismjs";
</script>

<script>
  import CodeParagraph from "../atoms/CodeParagraph.svelte";

  export let nodes;
  let i = 0;
  if (nodes) {
    while (i < nodes.length) {
      if (
        nodes[i] &&
        nodes[i].text &&
        nodes[i].code &&
        nodes[i + 1] &&
        nodes[i + 1].text &&
        nodes[i + 1].code
      ) {
        nodes[i].text = nodes[i].text + nodes[i + 1].text;
        nodes.splice(i + 1, 1);
      } else {
        i++;
      }
    }

    i = 0;
    while (i < nodes.length) {
      let allChildElementasAreCode = true;
      let hasText = false;
      if (nodes[i] && nodes[i].type === "paragraph" && !!nodes[i].children) {
        nodes[i].children.map((c) => {
          if (c && !c.code && c.text !== "" && c.text !== " ") {
            allChildElementasAreCode = false;
          }
        });
        nodes[i].children.map((c) => {
          if (c && c.text && c.text !== "" && c.text !== " ") {
            hasText = true;
          }
        });
        if (allChildElementasAreCode && hasText) {
          nodes[i].codeParagraph = true;
          // nodes[i].text = nodes[i].children.map(n => n.text).join("<br><>");
          // console.log(` nodes[i]`, nodes[i]);
        }
        i++;
      } else {
        i++;
      }
    }
  }

  const _nodes = nodes;
</script>

{#if _nodes}
  {#each _nodes as node, i}
    {#if node.type === 'paragraph' && !!node.children}
      {#if !node.codeParagraph}
        <p>
          <svelte:self nodes={node.children} />
        </p>
        <br />
      {:else}
        <CodeParagraph>
          <svelte:self nodes={node.children} />
        </CodeParagraph>
      {/if}
    {:else if node.type === 'heading-one' && !!node.children}
      <h1>
        <svelte:self nodes={node.children} />
      </h1>
    {:else if node.type === 'heading-two' && !!node.children}
      <h2>
        <svelte:self nodes={node.children} />
      </h2>
    {:else if node.type === 'heading-three' && !!node.children}
      <h3>
        <svelte:self nodes={node.children} />
      </h3>
    {:else if node.type === 'heading-four' && !!node.children}
      <h4>
        <svelte:self nodes={node.children} />
      </h4>
    {:else if node.type === 'heading-five' && !!node.children}
      <h5>
        <svelte:self nodes={node.children} />
      </h5>
    {:else if node.type === 'heading-six' && !!node.children}
      <h6>
        <svelte:self nodes={node.children} />
      </h6>
    {:else if node.type === 'numbered-list' && !!node.children}
      <nl>
        <svelte:self nodes={node.children} />
      </nl>
    {:else if node.type === 'list-item' && !!node.children}
      <li>
        <svelte:self nodes={node.children} />
      </li>
    {:else if node.type === 'link' && !!node.children}
      <a href="${node.url}" target="_blank">
        <svelte:self nodes={node.children} />
      </a>
    {/if}
    {#if !!node.code}
        <code>
          {@html Prism.highlight(node.text, Prism.languages.javascript, 'javascript')}
        </code>
    {:else if node.type !== 'paragraph' && !node.children}{node.text}{/if}
  {/each}
{/if}
