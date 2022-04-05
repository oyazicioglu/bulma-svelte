<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<th {...$$restProps} class={classes} style={styles}>
	<slot />
</th>
