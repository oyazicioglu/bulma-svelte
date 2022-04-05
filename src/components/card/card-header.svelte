<script>
	$: classes = [`card-header`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<header {...$$restProps} class={classes} style={styles}>
	<slot />
</header>
