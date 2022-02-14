<script>
	import Icon from '../icon/icon.svelte';

	/** @type { string }*/
	export let iconName = undefined;

	$: classes = [`card-header-icon`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<button {...$$restProps} class={classes} style={styles}>
	<Icon {iconName} aria-hidden="true" />
</button>
