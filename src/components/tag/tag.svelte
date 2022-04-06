<script>
  import '../index.d.js';

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  /** @type {boolean}*/
  export let isLight = false;

  /** @type {boolean}*/
  export let isRounded = false;

  /** @type {boolean}*/
  export let isDelete = false;

  $: classes = [
    `tag`,
    color,
    size,
    isLight && `is-light`,
    isRounded && `is-rounded`,
    isDelete && `is-delete`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
