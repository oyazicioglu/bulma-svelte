<script>
  import '../index.d.js';

  /** @type { BulmaTextColor | BulmaTextLightShades | BulmaTextDarkShades | BulmaTextShade } */
  export let color = undefined;

  /** @type { BulmaTitleSize } */
  export let size = 'is-1';

  /** @type { BulmaTitleType } */
  export let type = 'title';

  /** @type {boolean}*/
  export let isSpaced = true;

  $: classes = [type, size, color, isSpaced && `is-spaced`, $$restProps.class].filter(Boolean).join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
</div>
