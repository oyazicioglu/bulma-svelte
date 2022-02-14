<script>
	/** @type {boolean}*/
	export let isSelected = false;

	$: classes = [isSelected && `is-selected`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<tr {...$$restProps} class={classes} style={styles}>
	<slot />
</tr>
