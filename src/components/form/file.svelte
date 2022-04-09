<script>
  import '../index.d.js';
  import Icon from '../icon/icon.svelte';

  /** @type {string}*/
  export let label = 'Choose a file';

  /** @type {string}*/
  export let iconName = 'file-upload';

  /** @type {boolean}*/
  export let hasName = true;

  /** @type {File[]}*/
  export let files = undefined;

  /** @type {boolean}*/
  export let isFullWidth = false;

  /** @type {boolean}*/
  export let isBoxed = false;

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  /** @type { BulmaAlign } */
  export let align = undefined;

  $: classes = [
    `file`,
    color,
    size,
    align,
    isBoxed && `is-boxed`,
    isFullWidth && `is-fullwidth`,
    hasName && `has-name`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
  <label class="file-label">
    <input class="file-input" multiple type="file" name="resume" bind:files />
    <span class="file-cta">
      <Icon {size} {iconName} />
      <span class="file-label">
        {label}
      </span>
    </span>
    {#if hasName && files}
      {#each files as file}
        <span class="file-name">{file.name}</span>
      {/each}
    {/if}
  </label>
</div>
