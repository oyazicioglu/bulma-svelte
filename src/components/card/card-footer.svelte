<script>
	$: classes = [`card-footer`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<footer {...$$restProps} class={classes} style={styles}>
	<slot />
</footer>
