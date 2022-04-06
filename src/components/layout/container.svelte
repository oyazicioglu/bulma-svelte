<script>
  /** @type {string|number}*/
  export let width = undefined;

  /** @type {Boolean}*/
  export let isFluid = false;

  /** @type {Boolean}*/
  export let isFullHd = false;

  /** @type {Boolean}*/
  export let isWidescreen = false;

  /** @type {Boolean}*/
  export let isMaxWidescreen = false;

  /** @type {Boolean}*/
  export let isMaxDesktop = false;

  $: classes = [
    `container`,
    width,
    isFluid && `is-fluid`,
    isMaxWidescreen && `is-max-widescreen`,
    isWidescreen && `is-widescreen`,
    isFullHd && `is-fullhd`,
    isMaxDesktop && `is-max-desktop`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
