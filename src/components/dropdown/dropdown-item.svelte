<script>
  /** @type { string } */
  export let href = undefined;

  export let isDivider = false;

  export let asLink = true;

  /**@type { CallableFunction }*/
  export let action = undefined;

  $: classes = [`dropdown-item`, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

{#if isDivider}
  <hr class="dropdown-divider" />
{:else if asLink}
  <a {href} {...$$restProps} class={classes} style={styles}>
    <slot />
  </a>
{:else}
  <div
    {...$$restProps}
    class={classes}
    style={styles}
    on:click
    on:click={() => {
      action();
    }}>
    <slot />
  </div>
{/if}
