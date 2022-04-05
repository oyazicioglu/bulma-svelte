<script>
	/** @type {boolean}*/
	export let isVCentered = false;

	/** @type {boolean}*/
	export let isMultiline = false;

	/** @type {boolean}*/
	export let isCentered = true;

	$: classes = [`columns`, isVCentered && `is-vcentered`, isMultiline && `is-multiline`, isCentered && `is-centered`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
