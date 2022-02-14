<script>
	import '../index.d.js';
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
	export let leftIconName = undefined;

	/** @type {string}*/
	export let rightIconName = undefined;

	/** @type {boolean}*/
	export let isLoading = false;

	/** @type {boolean}*/
	export let isMultiple = false;

	/** @type {BulmaSelectOption[]} */
	export let options = [];

	/** @type {BulmaSelectOption} */
	export let selectedOption;

	/** @type {string}*/
	const id = IdCreator.create();

	selectedOption = options.find((o) => o.selected);

	const onChange = () => {
		selectedOption = options.find((o) => o.value === selectedOption.value);
	};

	$: classes = [
		`select`,
		size,
		color,
		state,
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
		<select {id} bind:value={selectedOption} {...$$restProps} on:change={onChange} class={classes} style={styles}>
			{#each options as option}
				<option selected={option.selected} value={option.value}>{option.text}</option>
			{/each}
		</select>
	</FormControl>
	{#if helpText}
		<p class="help">{helpText}</p>
	{/if}
</FormField>
