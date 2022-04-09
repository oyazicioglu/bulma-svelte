<script>
  import '../index.d.js';

  /** @type { BulmaTextColor | BulmaTextShade } */
  export let color = undefined;

  /** @type { BulmaTextSize } */
  export let size = undefined;

  /** @type {BulmaTextAlign}*/
  export let align = 'has-text-left';

  $: classes = [size, color, align, $$restProps.class].filter(Boolean).join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<span {...$$restProps} class={classes} style={styles}>
  <slot />
</span>
