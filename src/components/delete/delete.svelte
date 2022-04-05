<script>
  /** @type { BulmaSize } */
  export let size = 'is-normal';

  $: classes = [`delete`, size, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles} on:click aria-label="delete">
  <slot />
</div>
