<script>
	/** @type {boolean}*/
	export let isBordered = false;

	/** @type {boolean}*/
	export let isStriped = true;

	/** @type {boolean}*/
	export let isNarrow = false;

	/** @type {boolean}*/
	export let isHoverable = true;

	/** @type {boolean}*/
	export let isFullWidth = true;

	/** @type {HTMLElement}*/
	export let ref = undefined;

	$: classes = [
		`table`,
		isBordered && `is-bordered`,
		isStriped && `is-striped`,
		isNarrow && `is-narrow`,
		isHoverable && `is-hoverable`,
		isFullWidth && `is-fullwidth`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<table bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</table>
