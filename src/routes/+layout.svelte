<script lang="ts">
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<svelte:head>
  <title>Svelte Kit Template</title>
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />
