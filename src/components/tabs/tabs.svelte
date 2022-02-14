<script>
	import '../index.d.js';

	/** @type { BulmaTabAlign } */
	export let align = undefined;

	/** @type { BulmaSize } */
	export let size = 'is-normal';

	/** @type {boolean}*/
	export let isBoxed = false;

	/** @type {boolean}*/
	export let isToggle = false;

	/** @type {boolean}*/
	export let isToggleRounded = false;

	/** @type {boolean}*/
	export let isFullWidth = false;

	$: classes = [
		`tabs`,
		align,
		size,
		isBoxed && `is-boxed`,
		isToggle && `is-toggle`,
		isToggleRounded && `is-toggle-rounded`,
		isFullWidth && `is-fullwidth`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<ul><slot /></ul>
</div>
