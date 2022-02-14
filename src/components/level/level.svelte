<script>
	/** @type {boolean}*/
	export let horizontalOnMobile = false;

	$: classes = [`level`, horizontalOnMobile && `is-modile`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
