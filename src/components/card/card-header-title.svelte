<script>
	/** @type {boolean}*/
	export let isCentered = false;
	$: classes = [`card-header-title`, isCentered && `is-centered`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<p {...$$restProps} class={classes} style={styles}>
	<slot />
</p>
