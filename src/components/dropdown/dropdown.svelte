<script>
  import { hideOnClickOutside } from '../hideOnClickOutside';
  import Icon from '../icon/icon.svelte';

  export let isActive = false;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  /** @type {boolean}*/
  export let isHoverable = false;

  /** @type {boolean}*/
  export let isRight = false;

  /** @type {boolean}*/
  export let isUp = false;

  /** @type {string}*/
  export let text = 'Dropdown';

  /** @type {string}*/
  export let iconName = 'angle-down';

  $: classes = [
    `dropdown`,
    size,
    isRight && `is-right`,
    isUp && `is-up`,
    isHoverable && `is-hoverable`,
    isActive && `is-active`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');

  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div
  use:hideOnClickOutside={() => {
    isActive = false;
  }}
  {...$$restProps}
  class={classes}
  style={styles}>
  <div class="dropdown-trigger">
    <button
      class="button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      on:click={() => {
        isActive = !isActive;
      }}>
      <span>{text}</span>
      <Icon {size} {iconName} />
    </button>
  </div>
  <slot />
</div>
