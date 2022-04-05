<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<tfoot {...$$restProps} class={classes} style={styles}>
	<slot />
</tfoot>
