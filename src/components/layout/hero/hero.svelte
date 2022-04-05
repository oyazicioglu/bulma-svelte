<script>
  import '../../';

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type { BulmaHeroSize } */
  export let size = undefined;

  $: classes = [`hero`, color, size, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
