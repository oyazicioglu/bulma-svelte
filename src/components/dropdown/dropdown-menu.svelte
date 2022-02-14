<script>
	import { IdCreator } from '../id-creator';

	/** @type {string}*/
	const id = IdCreator.create();

	$: classes = [`dropdown-menu`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {id} {...$$restProps} class={classes} style={styles} role="menu">
	<div class="dropdown-content">
		<slot />
	</div>
</div>
