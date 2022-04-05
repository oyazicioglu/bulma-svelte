<script>
  /** @type {boolean}*/
  export let hasAddons = false;

  /** @type { BulmaAlign } */
  export let align = undefined;

  /** @type {Boolean} */
  export let areSmall = false;

  /** @type {Boolean} */
  export let areMedium = false;

  /** @type {Boolean} */
  export let areLarge = false;

  $: classes = [
    `buttons`,
    align,
    hasAddons && `has-addons`,
    areSmall && `are-small`,
    areMedium && `are-small`,
    areLarge && `are-large`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
