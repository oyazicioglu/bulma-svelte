<script>
  import '../index.d.js';

  import { IdCreator } from '../id-creator';
  import FormControl from './form-control.svelte';
  import FormField from './form-field.svelte';

  /** @type {string}*/
  export let helpText = undefined;

  /** @type {BulmaRadioOption}*/
  export let options = [];

  /** @type {string}*/
  export let selectedRadio;

  selectedRadio = options.find((r) => r.selected);

  const id = IdCreator.create();

  $: classes = [`radio`, $$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<FormField>
  <FormControl {id}>
    {#each options as option}
      <label class="radio">
        <input bind:group={selectedRadio} type="radio" value={option} {...$$restProps} class={classes} style={styles} />
        {option.text}
      </label>
    {/each}
  </FormControl>
  {#if helpText}
    <p class="help">{helpText}</p>
  {/if}
</FormField>
