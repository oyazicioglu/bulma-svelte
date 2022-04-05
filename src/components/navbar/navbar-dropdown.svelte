<script>
	/** @type {boolean}*/
	export let isRight = false;

	/** @type {boolean}*/
	export let isBoxed = false;

	$: classes = [`navbar-dropdown`, isRight && `is-right`, isBoxed && `is-boxed`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
