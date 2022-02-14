<script>
	import { menuActive } from './navbar-store';

	$: classes = [`navbar-menu`, $menuActive && `is-active`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
