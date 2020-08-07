<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  @font-face {
    font-family: "Inter";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("/fonts/inter-var.woff2") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: "Italic";
    src: url("/fonts/inter-italic.woff2") format("woff2");
  }
  :root {
    font-family: "Inter", Helvetica, Arial, sans-serif;
  }
  @supports (font-variation-settings: normal) {
    :root {
      font-family: "Inter", sans-serif;
    }
  }
  :root {
    --blue-blue: #0099ff;
    --blue-400: #99d6ff;
    --blue-300: #b3e0ff;
    --blue-900: #19a3ff;
    --blue-800: #33adff;
    --blue-700: #4db8ff;
    --blue-500: #80ccff;
    --blue-600: #66c2ff;
    --blue-200: #ccebff;
    --blue-100: #e6f5ff;
    --black-black: #0b1f44;
    --black-800: #3c4c69;
    --black-900: #233557;
    --black-700: #54627c;
    --black-600: #6d798f;
    --black-500: #858fa2;
    --black-400: #9da5b4;
    --black-300: #b6bcc7;
    --black-200: #ced2da;
    --black-100: #e7e9ec;
    --black-50: #f3f4f6;
    --green-green: #43cd9c;
    --green-800: #69d7b0;
    --green-700: #7bdcba;
    --green-500: #a1e6ce;
    --green-600: #8ee1c4;
    --green-900: #56d2a6;
    --green-400: #b4ebd7;
    --green-300: #c7f0e1;
    --green-200: #d9f5eb;
    --green-50: #f6fdfa;
    --green-100: #ecfaf5;
    --red-red: #ff5942;
    --red-900: #ff6a55;
    --red-800: #ff7a68;
    --red-700: #ff8b7b;
    --red-500: #ffaca1;
    --red-600: #ff9b8e;
    --red-400: #ffbdb3;
    --red-200: #ffded9;
    --red-300: #ffcdc6;
    --red-100: #ffeeec;
    --red-50: #fff7f6;
    --orange-orange: #ff9f0f;
    --orange-900: #ffa927;
    --orange-700: #ffbc57;
    --orange-800: #ffb23f;
    --orange-600: #ffc56f;
    --orange-500: #ffcf87;
    --orange-300: #ffe2b7;
    --orange-400: #ffd99f;
    --orange-200: #ffeccf;
    --orange-100: #fff5e7;
    --orange-50: #fffaf3;
    --text-priority-1: #0b1f44;
    --text-priority-2: #4e5e78;
    --text-priority-3: #8b94a7;
    --text-priority-4: #b0b6c1;
    --text-priority-5: #e2e8f3;
    --grey-grey: #444649;
    --grey-900: #5a5d61;
    --grey-800: #71747a;
    --grey-700: #888b92;
    --grey-400: #cbd1db;
    --solid-black: #0b1f44;
    --grey-300: #e2e8f3;
    --grey-600: #9ea2aa;
    --solid-white: #ffffff;
    --grey-500: #b5bac2;
    --blue-50: #f2faff;
    --grey-200: #e8edf5;
    --grey-100: #f3f6fa;
    --grey-50: #f9fafc;
    --solid-background: #f5f6fa;
  }
</style>

<svelte:head>
  <meta name="author" content="caisy.io" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f1f3f6" />
  <meta name="msapplication-TileColor" content="#f1f3f6" />
  <meta name="theme-color" content="#f1f3f6" />
  <link rel="stylesheet" href="/normalize.css" />
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
