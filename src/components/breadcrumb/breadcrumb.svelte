<script>
  import '../index.d.js';

  /** @type { BulmaBreadcrumbItem[] } */
  export let items = [];

  /** @type { BulmaAlign } */
  export let align = undefined;

  /** @type { BulmaBreadcrumbSeperator } */
  export let seperator = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  $: classes = [`breadcrumb`, size, align, seperator, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <ul>
    {#each items as item}
      <li><a href={item.href}>{item.text}</a></li>
    {/each}
  </ul>
</div>
