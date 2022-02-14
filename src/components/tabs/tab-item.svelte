<script>
	import tabStore from './tab-store';

	/** @type {CallableFunction}*/
	export let action = undefined;

	/** @type {strşbg}*/
	export let href = undefined;

	/** @type {boolean}*/
	export let isActive = false;

	const tabItem = {};

	if (isActive) {
		$tabStore = tabItem;
	}

	$: classes = [$tabStore === tabItem && `is-active`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<li
	{...$$restProps}
	class={classes}
	style={styles}
	on:click
	on:click={() => {
		$tabStore = tabItem;
		if (action) {
			action();
		}
	}}>
	<a {href}><slot /></a>
</li>
