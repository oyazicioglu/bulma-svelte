<script>
	/** @type {string|number}*/
	export let width = undefined;

	/** @type {string}*/
	export let isFluid = false;

	$: classes = [`container`, width, isFluid && `is-fluid`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
