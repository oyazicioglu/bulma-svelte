<script>
	/** @type {boolean}*/
	export let hasBackground = true;

	/** @type {boolean}*/
	export let isActive = false;

	/** @type {boolean}*/
	export let closeOnBackgroundClick = true;

	$: classes = [`modal`, isActive && `is-active`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	{#if hasBackground}
		<div
			class="modal-background"
			on:click={() => {
				if (closeOnBackgroundClick) {
					isActive = false;
				}
			}} />
	{/if}
	<slot style="z-index:1" />
	<button
		on:click={() => {
			isActive = false;
		}}
		class="modal-close is-medium"
		aria-label="close" />
</div>
