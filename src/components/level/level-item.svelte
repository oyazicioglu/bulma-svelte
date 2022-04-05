<script>
	/** @type {boolean}*/
	export let centered = false;

	$: classes = [`level-item`, centered && `has-text-centered`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
