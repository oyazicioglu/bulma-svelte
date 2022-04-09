<script context="module">
  import { slide } from 'svelte/transition';
  export const formContext = { id: IdCreator.create() };
</script>

<script>
  import { onMount, setContext } from 'svelte';
  import { FormModel } from './FormModel.js';
  import { IdCreator } from '../id-creator.js';

  /** @type {HTMLElement} */
  export let ref = undefined;

  /** @type {Object} */
  export let formError = undefined;

  /** @type {Boolean} */
  export let valid = false;

  /** @type {Object} */
  export let formData = undefined;

  /** @type {string} */
  export let name = 'form';

  const id = IdCreator.create();
  const form = new FormModel();

  const registerElement = (element) => {
    form.registerElement(element);
  };

  const checkFormValidation = () => {
    valid = form.isValid();
    refreshFormData();
  };

  onMount(async () => {
    refreshFormData();
  });

  const refreshFormData = () => {
    formData = form.getFormData();
  };

  setContext(formContext, {
    registerElement,
    checkFormValidation,
  });
</script>

<form on:submit|preventDefault on:submit {name} {id} bind:this={ref} class="form" style={$$restProps.style}>
  <slot />
  {#if formError}
    <div transition:slide class="validation-container mt-10 p-6">
      <p class="validation-error">
        {`${formError.errorNo} : ${formError.message}`}
      </p>
    </div>
  {/if}
</form>

<style lang="scss">
</style>
