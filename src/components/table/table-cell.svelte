<script>
	/** @type {BulmaTextAlign}*/
	export let align = 'has-text-left';

	/** @type {BulmaTableCellVerticalAlign} */
	export let verticalAlign = 'middle';

	$: classes = [align, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [
		verticalAlign && `vertical-align:${verticalAlign}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<td {...$$restProps} class={classes} style={styles}>
	<slot />
</td>
