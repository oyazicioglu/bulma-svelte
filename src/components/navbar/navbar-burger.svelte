<script>
	import { menuActive } from './navbar-store';
	import { hideOnClickOutside } from '../hideOnClickOutside';

	/** @type {string}*/
	export let dataTarget = 'main-menu';

	/** @type {boolean}*/
	export let activeOnMobile = false;

	$: classes = [`navbar-burger`, ($menuActive || activeOnMobile) && `is-active`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<a
	use:hideOnClickOutside={() => {
		$menuActive = false;
	}}
	href="/"
	on:click|preventDefault={() => {
		$menuActive = !$menuActive;
	}}
	{...$$restProps}
	class={classes}
	style={styles}
	role="button"
	aria-label="menu"
	aria-expanded="false"
	data-target={dataTarget}>
	<span aria-hidden="true" />
	<span aria-hidden="true" />
	<span aria-hidden="true" />
</a>
