<script>
  import '../index.d.js';

  import Button from '../button/button.svelte';
  import Buttons from '../button/buttons.svelte';
  import Flexbox from '../flexbox/flexbox.svelte';
  import Select from '../form/select.svelte';
  import Icon from '../icon/icon.svelte';
  import Span from '../span/span.svelte';

  /** @type {BulmaSize}*/
  export let size = 'is-normal';

  /** @type {BulmaFlexJustifyContent}*/
  export let justifyContent = 'is-justify-content-flex-end';

  /** @type {BulmaSelectOption[]}*/
  export let limitOptions = [];

  export let recordCount = undefined;
  export let page = undefined;
  export let limit = undefined;

  let isNextButtonActive = false;
  let isPreviousButtonActive = false;
  let isStartButtonActive = false;
  let isEndButtonActive = false;
  let pageCount = undefined;

  limit = limitOptions.find((o) => o.selected).value;
  $: {
    pageCount = Math.ceil(recordCount / limit);
  }

  $: isNextButtonActive = page < pageCount;
  $: isEndButtonActive = page < pageCount;
  $: isPreviousButtonActive = page > 1;
  $: isStartButtonActive = page > 1;

  $: classes = [$$restProps.class].filter(Boolean).join(' ');
  $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<Flexbox class={classes} style={styles} {justifyContent} alignItems="is-align-items-center">
  <Flexbox
    class="mr-4"
    direction="is-flex-direction-row"
    alignItems="is-align-items-center"
    alignContent="is-align-content-center">
    <Span class="mr-5" color="has-text-grey" size="is-size-6">Sayfa: {page}/{pageCount}</Span>
    <Span class="pr-2">Kayıt Sayısı:</Span>
    <Select {size} options={limitOptions} bind:value={limit} />
  </Flexbox>
  <Buttons hasAddons align="is-right">
    <Button
      disabled={!isStartButtonActive}
      {size}
      on:click={() => {
        page = 1;
      }}><Icon iconName="angle-double-left" /></Button>
    <Button
      disabled={!isPreviousButtonActive}
      {size}
      on:click={() => {
        page--;
      }}><Icon iconName="angle-left" /></Button>
    <Button
      disabled={!isNextButtonActive}
      {size}
      on:click={() => {
        page++;
      }}><Icon iconName="angle-right" /></Button>
    <Button
      disabled={!isEndButtonActive}
      {size}
      on:click={() => {
        page = pageCount;
      }}><Icon iconName="angle-double-right" /></Button>
  </Buttons>
</Flexbox>
