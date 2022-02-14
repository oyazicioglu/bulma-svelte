<script>
	import '../index.d.js';

	/** @type { BulmaSize } */
	export let size = undefined;

	$: classes = [`section`, size, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
