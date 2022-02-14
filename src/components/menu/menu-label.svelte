<script>
	/** @type {string}*/
	export let label = undefined;

	$: classes = [`menu-label`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<p {...$$restProps} class={classes} style={styles}>
	{label}
</p>
