<script>
	import Content from '../content/content.svelte';

	$: classes = [`card-content`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<Content><slot /></Content>
</div>
