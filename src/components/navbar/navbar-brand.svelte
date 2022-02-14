<script>
	import '../index.d.js';
	import NavbarBurger from './navbar-burger.svelte';

	/** @type {string}*/
	export let href = '/';

	/** @type { BulmaBrandImage } */
	export let brandImage = undefined;

	/** @type {string}*/
	export let dataTarget = 'main-menu';

	$: classes = [`navbar-brand`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	{#if brandImage}
		<a class="navbar-item" {href}>
			<img src={brandImage.path} width={brandImage.width} height={brandImage.height} alt="brand" />
		</a>
	{/if}

	<slot />
	<NavbarBurger {dataTarget} />
</div>
