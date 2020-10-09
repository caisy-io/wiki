<style>
  :global(code),
  :global(pre) {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  :global(pre) {
    padding: 1em;
    margin: 0.5em 0;
  }

  :global(:not(pre) > code),
  :global(pre) {
    background: #272822;
  }

  /* Inline code */
  :global(:not(pre) > code) {
    display: inline-block;
    padding: 0 4px;
    margin: 0 0px;
    line-height: 1.5;
    white-space: normal;
  }

  :global(.token.comment),
  :global(.token.prolog),
  :global(.token.doctype),
  :global(.token.cdata) {
    color: #8292a2;
  }

  :global(.token.punctuation) {
    color: #f8f8f2;
  }

  :global(.token.namespace) {
    opacity: 0.7;
  }

  :global(.token.property),
  :global(.token.tag),
  :global(.token.constant),
  :global(.token.symbol),
  :global(.token.deleted) {
    color: #f92672;
  }

  :global(.token.boolean),
  :global(.token.number) {
    color: #ae81ff;
  }

  :global(.token.selector),
  :global(.token.attr-name),
  :global(.token.string),
  :global(.token.char),
  :global(.token.builtin),
  :global(.token.inserted) {
    color: #a6e22e;
  }

  :global(.token.operator),
  :global(.token.entity),
  :global(.token.url),
  :global(.token.string),
  :global(.token.variable) {
    color: #f8f8f2;
  }

  :global(.token.atrule),
  :global(.token.attr-value),
  :global(.token.function),
  :global(.token.class-name) {
    color: #e6db74;
  }

  :global(.token.keyword) {
    color: #66d9ef;
  }

  :global(.token.regex),
  :global(.token.important) {
    color: #fd971f;
  }

  :global(.token.important),
  :global(.token.bold) {
    font-weight: bold;
  }
  :global(.token.italic) {
    font-style: italic;
  }

  :global(.token.entity) {
    cursor: help;
  }
</style>

<pre class={'codeParagraph'}>
  <slot />
</pre>
