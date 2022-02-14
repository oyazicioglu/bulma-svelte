<script>
	import '../index.d.js';

	/** @type { BulmaImageRatio } */
	export let ratio = undefined;

	export let isFullWidth = false;

	/** @type {string}*/
	export let imagePath = undefined;

	/** @type {string}*/
	export let alternativeText = undefined;

	/** @type {string[]}*/
	export let srcSet = [];

	$: classes = [`image`, ratio, isFullWidth && `is-fullwidth`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<figure {...$$restProps} class={classes} style={styles}>
	<img src={imagePath} alt={alternativeText} srcSet={srcSet.join(',')} />
</figure>
