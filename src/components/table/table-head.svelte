<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<thead {...$$restProps} class={classes} style={styles}>
	<slot />
</thead>
