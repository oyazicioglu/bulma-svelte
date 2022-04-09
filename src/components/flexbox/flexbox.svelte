<script>
  import '../index.d.js';

  /** @type {BulmaFlexDirection}*/
  export let direction = undefined;

  /** @type {BulmaFlexJustifyContent}*/
  export let justifyContent = undefined;

  /** @type {BulmaFlexAlignContent}*/
  export let alignContent = undefined;

  /** @type {BulmaFlexAlignItems}*/
  export let alignItems = undefined;

  /** @type {BulmaFlexAlignSelf}*/
  export let alignSelf = undefined;

  /** @type {BulmaFlexGrow}*/
  export let grow = undefined;

  /** @type {BulmaFlexShrink}*/
  export let shrink = undefined;

  $: classes = [
    `is-flex`,
    direction && `${direction}`,
    justifyContent && `${justifyContent}`,
    alignContent && `${alignContent}`,
    alignItems && `${alignItems}`,
    alignSelf && `${alignSelf}`,
    grow && `${grow}`,
    shrink && `${shrink}`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
