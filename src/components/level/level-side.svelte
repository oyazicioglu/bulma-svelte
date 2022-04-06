<script>
  import '../index.d.js';

  /** @type { BulmaLevelSide } */
  export let side = 'level-left';

  $: classes = [side, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
