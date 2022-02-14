<script>
	import '../index.d.js';

	/** @type { BulmaColor } */
	export let color = undefined;

	/** @type { BulmaSize } */
	export let size = 'is-normal';

	/** @type { BulmaTitleType } */
	export let type = 'title';

	/** @type {boolean}*/
	export let isSpaced = true;

	$: classes = [type, size, color, isSpaced && `is-spaced`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
