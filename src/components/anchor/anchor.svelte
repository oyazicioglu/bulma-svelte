<script>
  /** @type { BulmaTextColor } */
  export let color = undefined;

  /** @type {string}*/
  export let href = undefined;

  $: classes = [`anchor`, color, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<a {href} {...$$restProps} class={classes} style={styles}>
  <slot />
</a>
