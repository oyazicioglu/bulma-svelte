<script>
  import '../index.d.js';

  import Delete from '../delete/delete.svelte';

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type {string}*/
  export let textContent = '';

  /** @type {boolean}*/
  export let isLight = false;

  /** @type {boolean}*/
  export let hasCloseButton = false;

  $: classes = [`notification`, color, isLight && `is-light`, $$restProps.class].filter(Boolean).join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  {#if hasCloseButton}
    <Delete on:click />
  {/if}
  {@html textContent}
  <slot />
</div>
