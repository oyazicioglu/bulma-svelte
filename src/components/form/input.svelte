<script>
  import { IdCreator } from '../id-creator';
  import FormControl from './form-control.svelte';
  import FormField from './form-field.svelte';

  /** @type { BulmaColor } */
  export let color = undefined;

  /** @type { BulmaSize } */
  export let size = 'is-normal';

  /** @type { BulmaInputState } */
  export let state = undefined;

  /** @type {string}*/
  export let label = undefined;

  /** @type {string}*/
  export let helpText = undefined;

  /** @type {boolean}*/
  export let isRounded = false;

  /** @type {boolean}*/
  export let isStatic = false;

  /** @type {string}*/
  export let value = undefined;

  /** @type {string}*/
  export let leftIconName = undefined;

  /** @type {string}*/
  export let rightIconName = undefined;

  /** @type {boolean}*/
  export let isLoading = false;

  /** @type {string}*/
  const id = IdCreator.create();

  $: classes = [`input`, size, color, state, isRounded && `is-rounded`, isStatic && `is-static`, $$restProps.class]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<FormField>
  {#if label}
    <label for={id} class="label">{label}</label>
  {/if}
  <FormControl {size} {leftIconName} {rightIconName} {isLoading}>
    <input {id} bind:value {...$$restProps} class={classes} style={styles} />
  </FormControl>
  {#if helpText}
    <p class="help">{helpText}</p>
  {/if}
</FormField>
