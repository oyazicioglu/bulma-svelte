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
	export let value;

	/** @type {boolean}*/
	export let isLoading = false;

	/** @type {boolean}*/
	export let hasFixedSize = false;

	const id = IdCreator.create();

	$: classes = [
		`textarea`,
		size,
		color,
		state,
		isRounded && `is-rounded`,
		hasFixedSize && `has-fixed-size`,
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
	<FormControl {size} {isLoading}>
		<textarea {id} bind:value {...$$restProps} class={classes} style={styles} />
	</FormControl>
	{#if helpText}
		<p class="help">{helpText}</p>
	{/if}
</FormField>
