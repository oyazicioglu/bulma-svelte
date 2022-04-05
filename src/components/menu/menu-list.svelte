<script>
	$: classes = [`menu-list`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<ul {...$$restProps} class={classes} style={styles}>
	<slot />
</ul>
