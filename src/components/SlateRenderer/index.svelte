<script context="module">
  import Prism from "prismjs";

  //   nodes.map((node) => {
  //     switch (true) {
  //       case node.type === "list-item" && !!node.children:
  //         return `<li>${serialize(node.children)}</li>`;
  //       case node.type === "numbered-list" && !!node.children:
  //         return `<nl>${serialize(node.children)}</nl>`;
  //       case node.type === "link" && !!node.children:
  //         return `<a href="${node.url}" target="_blank">${serialize(
  //           node.children
  //         )}</a>`;
  //       case node.type === "heading-one" && !!node.children:
  //         return `<h1>${serialize(node.children)}</h1>`;
  //       case node.type === "heading-two" && !!node.children:
  //         return `<h2>${serialize(node.children)}</h2>`;
  //       case node.type === "heading-three" && !!node.children:
  //         return `<h3>${serialize(node.children)}</h3>`;
  //       case node.type === "heading-four" && !!node.children:
  //         return `<h4>${serialize(node.children)}</h4>`;
  //       case node.type === "heading-five" && !!node.children:
  //         return `<h5>${serialize(node.children)}</h5>`;
  //       case node.type === "heading-six" && !!node.children:
  //         return `<h6>${serialize(node.children)}</h6>`;
  //       case node.type === "paragraph" && !!node.children:
  //         return `<p>${serialize(node.children)}</p>`;
  //       case node.code === true && !!node.text && node.text !== "":
  //         return `<pre><code class="javascript">${node.text}</code></pre>`;
  //       default:
  //         return `${node.text}`;
  //     }
  //   });
</script>

<script>
  export let nodes;
  let i = 0;

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
  const _nodes = nodes;
</script>

{#if _nodes}
  {#each _nodes as node, i}
    {#if node.type === 'paragraph' && !!node.children}
      <p>
        <svelte:self nodes={node.children} />
      </p>
      <br />
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
      <!-- {#if !!node.children.find(n => n.code)}
        <Highlight
          language={typescript}
          code={node.children.map(n => n.text).join('')} />
      {:else}
        <p>
          <svelte:self nodes={node.children} />
        </p>
      {/if} -->
    {/if}
    {#if !!node.code}
      <pre>
        <code>
          {@html Prism.highlight(node.text, Prism.languages.javascript, 'javascript')}
        </code>
      </pre>
    {:else if node.type !== 'paragraph' && !node.children}{node.text}{/if}
  {/each}
{/if}
