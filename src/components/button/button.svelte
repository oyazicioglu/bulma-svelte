<script>
	import '../index.d.js';

	/** @type { BulmaColor } */
	export let color = undefined;

	/** @type { BulmaSize } */
	export let size = 'is-normal';

	/** @type { BulmaButtonState } */
	export let state = undefined;

	/** @type {boolean}*/
	export let isFullWidth = false;

	/** @type {boolean}*/
	export let isOutlined = false;

	/** @type {boolean}*/
	export let isInverted = false;

	/** @type {boolean}*/
	export let isRounded = false;

	/** @type {boolean}*/
	export let isLoading = false;

	/** @type {boolean}*/
	export let isStatic = false;

	/** @type {boolean}*/
	export let isGrouped = false;

	/** @type {boolean}*/
	export let hasAddons = false;

	/** @type {boolean}*/
	export let isSelected = false;

	/** @type {boolean}*/
	export let lighter = false;

	/** @type {CallableFunction}*/
	export let action = undefined;

	if (isInverted) {
		isOutlined = false;
	}

	$: classes = [
		`button`,
		color,
		size,
		state,
		isFullWidth && `is-fullwidth`,
		isOutlined && `is-outlined`,
		isInverted && `is-inverted`,
		isRounded && `is-rounded`,
		isLoading && `is-loading`,
		isStatic && `is-static`,
		isGrouped && `is-grouped`,
		hasAddons && `has-addons`,
		isSelected && `is-selected`,
		lighter && `is-light`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<button
	{...$$restProps}
	class={classes}
	style={styles}
	on:click
	on:click={() => {
		if (action) {
			action();
		}
	}}>
	<slot />
</button>
