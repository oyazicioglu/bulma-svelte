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
  export let leftIconName = undefined;

  /** @type {string}*/
  export let rightIconName = undefined;

  /** @type {boolean}*/
  export let isLoading = false;

  /** @type {boolean}*/
  export let isMultiple = false;

  export let isFullwidth = true;

  /** @type {BulmaSelectOption[]} */
  export let options = [];

  /** @type {BulmaSelectOption} */
  export let selectedOption = undefined;

  export let value = undefined;

  export let validations = [];

  export let valid = true;

  export let validationsResult = undefined;

  export let name = 'select';

  /** @type {string}*/
  const id = IdCreator.create();

  /** @type { HTMLInputElement }*/
  let input = undefined;

  let element = undefined;
  let loaded = false;

  const validationDirective = new ValidationDirective();
  validations = validationDirective.createValidationsFromProps($$restProps, ...validations);

  const context = getContext(formContext);

  selectedOption = options.find((o) => o.selected);

  $: {
    value = selectedOption ? selectedOption.value : options.length > 0 ? options[0] : undefined;
  }

  onMount(async () => {
    element = new FormElement(input, 'select', name, label ? label : name, value, validations);
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

  const handleChange = () => {
    selectedOption = options.find((o) => o.value === value);
    updateValue();
  };

  onMount(async () => {
    updateValue();
  });

  $: classes = [
    `select`,
    size,
    color,
    state,
    isFullwidth && `is-fullwidth`,
    isRounded && `is-rounded`,
    isMultiple && `is-multiple`,
    isStatic && `is-static`,
    $$restProps.class,
  ]
    .filter(Boolean)
    .join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<FormField>
  {#if label}
    <label for={id} class="label">{label}</label>
  {/if}
  <FormControl {size} {leftIconName} {rightIconName} {isLoading}>
    <div class={classes} style={styles}>
      <select
        use:validationDirective.validation={{ element, loaded }}
        {name}
        {id}
        bind:value
        bind:this={input}
        on:validate={onValidate}
        on:change={handleChange}
        {...$$restProps}>
        {#each options as option}
          {#if option.selected}
            <option value={option.value} selected>{option.text}</option>
          {:else}
            <option value={option.value}>{option.text}</option>
          {/if}
        {/each}
      </select>
    </div>
  </FormControl>
  {#if helpText & valid}
    <p class="help">{helpText}</p>
  {/if}

  {#if !valid && validationsResult && validationsResult.errors && validationsResult.errors.length > 0}
    {#each validationsResult.errors as error}
      <p class="help is-danger">{error.message}</p>
    {/each}
  {/if}
</FormField>
