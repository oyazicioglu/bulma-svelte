<script>
  /** @type {boolean}*/
  export let hasAddons = false;

  /** @type {boolean}*/
  export let isGrouped = false;

  /** @type {BulmaFieldGroupAlign}*/
  export let groupAlign = undefined;

  /** @type {boolean}*/
  export let isHorizontal = false;

  $: classes = [
    `field`,
    groupAlign,
    isHorizontal && `is-horizontal`,
    hasAddons && `has-addons`,
    isGrouped && `is-grouped`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
