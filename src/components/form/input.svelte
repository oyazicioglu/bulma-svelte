<script>
  import '../index.d.js';

  import { getContext, onMount } from 'svelte';
  import { IdCreator } from '../id-creator';
  import FormControl from './form-control.svelte';
  import FormField from './form-field.svelte';
  import { formContext } from './form.svelte';
  import { FormElement } from './FormElement.js';
  import { ValidationDirective } from './validations/ValidationDirective.js';

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

  export let validations = [];

  export let valid = true;

  export let name = 'input';

  export let validationsResult = undefined;

  /** @type { HTMLInputElement }*/
  let input = undefined;

  /** @type {string}*/
  const id = IdCreator.create();

  let element = undefined;
  let loaded = false;

  const validationDirective = new ValidationDirective();
  validations = validationDirective.createValidationsFromProps($$restProps, ...validations);

  const context = getContext(formContext);

  onMount(async () => {
    element = new FormElement(input, $$restProps.type, name, label ? label : name, value, validations);

    if (context) {
      context.registerElement(element);
    }

    loaded = true;
  });

  const onValidate = (e) => {
    validationsResult = e.detail;
    valid = validationsResult.isValid;

    if (context) {
      context.checkFormValidation();
    }
  };

  const updateValue = () => {
    if (!element) {
      return;
    }

    element.setValue(value);
    valid = element.isValid();

    validationDirective.validation(input, { element, loaded });
  };

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
    <input
      bind:this={input}
      use:validationDirective.validation={{ element, loaded }}
      {id}
      bind:value
      on:input={updateValue}
      on:blur={updateValue}
      on:validate={onValidate}
      on:click
      on:focus
      {...$$restProps}
      class={classes}
      class:is-danger={!valid}
      style={styles} />
  </FormControl>
  {#if helpText & valid}
    <p class="help">{helpText}</p>
  {/if}

  {#if !valid && validationsResult && validationsResult.errors.length > 0}
    {#each validationsResult.errors as error}
      <p class="help is-danger">{error.message}</p>
    {/each}
  {/if}
</FormField>
