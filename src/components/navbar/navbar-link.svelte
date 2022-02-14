<script>
	/** @type {boolean}*/
	export let isArrowless = false;

	/** @type {string}*/
	export let href = undefined;

	$: classes = [`navbar-link`, isArrowless && `is-arrowless`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<a {href} {...$$restProps} class={classes} style={styles}>
	<slot />
</a>
