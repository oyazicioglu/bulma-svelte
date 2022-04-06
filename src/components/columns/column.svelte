<script>
  import '../index.d.js';

  /** @type {BulmaColumnSize}*/
  export let size = undefined;

  /** @type {BulmaColumnOffset}*/
  export let offset = undefined;

  /** @type {boolean}*/
  export let isNarrow = false;

  /** @type {BulmaColumnNarrowBreakpoint}*/
  export let narrowBreakpoint = undefined;

  /** @type {BulmaColumnBreakpoint}*/
  export let breakpoint = undefined;

  /** @type {BulmaColumnGap}*/
  export let gap = undefined;

  /** @type {boolean}*/
  export let gapless = false;

  $: classes = [
    `column`,
    size,
    breakpoint,
    gap,
    offset,
    narrowBreakpoint,
    isNarrow && `is-narrow`,
    gapless && `is-gapless`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
