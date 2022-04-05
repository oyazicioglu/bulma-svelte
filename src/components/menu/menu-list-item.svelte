<script>
	/** @type {string}*/
	export let href = undefined;

	/** @type {string}*/
	export let text;

	/** @type {boolean}*/
	export let isActive = false;

	$: classes = [$$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<li {...$$restProps} class={classes} style={styles}>
	<a {href} class:is-active={isActive}>{text}</a>
	{#if $$slots.default}
		<ul>
			<slot />
		</ul>
	{/if}
</li>
