<script>
	export let width = 'min-content';

	/** @type {BulmaTextAlign}*/
	export let align = 'has-text-left';

	$: classes = [align, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [width && `width:${width}`, $$restProps.style]
		.filter(Boolean)
		.join(';');
</script>

<th {...$$restProps} class={classes} style={styles}>
	<slot />
</th>
