<script>
  import '../../index.d.js';

  /** @type { BulmaTileContextModifier } */
  export let contextModifier = 'is-ancestor';

  export let isVertical = false;

  /** @type { BulmaColumnNumericSize } */
  export let horizontalSize = undefined;

  $: classes = [`tile`, contextModifier, horizontalSize, isVertical && `is-vertical`, $$restProps.class]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
