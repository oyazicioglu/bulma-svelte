<script>
	import '../index.d.js';

	/** @type {boolean}*/
	export let hasAddons = false;

	/** @type { BulmaAlign } */
	export let align = undefined;

	$: classes = [`buttons`, align, hasAddons && `has-addons`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
