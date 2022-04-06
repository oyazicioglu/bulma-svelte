<script>
  import '../index.d.js';

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  $: classes = [`message`, color, size, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<article {...$$restProps} class={classes} style={styles}>
  <slot />
</article>
