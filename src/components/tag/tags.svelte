<script>
	/** @type {boolean}*/
	export let hasAddons = false;

	$: classes = [`tags`, hasAddons && `has-addons`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
