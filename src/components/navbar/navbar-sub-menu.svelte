<script>
	import '../index.d.js';

	/** @type {BulmaNavbarSubmenuside}*/
	export let side = 'navbar-start';

	$: classes = [side, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
