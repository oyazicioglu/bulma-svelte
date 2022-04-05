<script>
  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type {string}*/
  export let iconName = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  $: classes = [`icon`, color, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<span {...$$restProps} class={classes} style={styles}>
  <i class="las la-{iconName} {size}" />
</span>
