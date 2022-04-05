<script>
	import { IdCreator } from '../id-creator';
	import FormControl from './form-control.svelte';
	import FormField from './form-field.svelte';

	/** @type {string}*/
	export let helpText = undefined;

	/** @type {boolean}*/
	export let checked = false;

	/** @type {string}*/
	const id = IdCreator.create();

	$: classes = [`checkbox`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<FormField>
	<FormControl>
		<label class="checkbox">
			<input type="checkbox" bind:checked {...$$restProps} class={classes} style={styles} />
			<slot />
		</label>
	</FormControl>
	{#if helpText}
		<p class="help">{helpText}</p>
	{/if}
</FormField>
