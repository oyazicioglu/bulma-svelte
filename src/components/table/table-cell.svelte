<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<td {...$$restProps} class={classes} style={styles}>
	<slot />
</td>
