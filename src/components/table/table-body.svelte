<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<tbody {...$$restProps} class={classes} style={styles}>
	<slot />
</tbody>
