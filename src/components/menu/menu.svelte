<script>
	$: classes = [`menu`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<aside {...$$restProps} class={classes} style={styles}>
	<slot />
</aside>
