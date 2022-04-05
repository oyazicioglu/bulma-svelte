<script>
  /** @type {boolean}*/
  export let isTransparent = false;

  /** @type { BulmaNavbarFixedPosition } */
  export let fixedPosition = undefined;

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type {boolean}*/
  export let isSpaced = false;

  /** @type {boolean}*/
  export let hasShadow = false;

  $: classes = [
    `navbar`,
    color,
    fixedPosition,
    isSpaced && `is-spaced`,
    hasShadow && `has-shadow`,
    isTransparent && `is-transparent`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles} role="navigation" aria-label="main navigation">
  <slot />
</div>
