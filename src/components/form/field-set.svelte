<script>
	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<fieldset {...$$restProps} class={classes} style={styles}>
	<slot />
</fieldset>
