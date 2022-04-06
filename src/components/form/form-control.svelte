<script>
  import '../index.d.js';

  import Icon from '../icon/icon.svelte';

  export let isLoading = false;

  /** @type {string}*/
  export let leftIconName = undefined;

  /** @type {string}*/
  export let rightIconName = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  /** @type {boolean}*/
  export let isExpended = false;

  $: classes = [
    `control`,
    leftIconName && `has-icons-left`,
    rightIconName && `has-icons-right`,
    isLoading && `is-loading`,
    isExpended && `is-expanded`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <slot />
  {#if leftIconName}
    <Icon {size} iconName={leftIconName} class="is-left" />
  {/if}
  {#if rightIconName}
    <Icon {size} iconName={rightIconName} class="is-right" />
  {/if}
</div>
