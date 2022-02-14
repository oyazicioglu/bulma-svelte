<script>
	import { hideOnClickOutside } from '../hideOnClickOutside';

	/** @type {string}*/
	export let href = undefined;

	/** @type {boolean}*/
	export let hasDropdown = false;

	/** @type {boolean}*/
	export let isExpanded = false;

	/** @type {boolean}*/
	export let isTab = false;

	/** @type {boolean}*/
	export let isActive = false;

	/** @type {boolean}*/
	export let asDivider = false;

	/** @type {boolean}*/
	export let isUp = false;

	/** @type {boolean}*/
	export let isHoverable = false;

	$: classes = [
		`navbar-item`,
		isUp && `is-up`,
		isActive && `is-active`,
		isHoverable && `is-hoverable`,
		isActive && `is-active`,
		hasDropdown && `has-dropdown`,
		isTab && `is-tab`,
		isExpanded && `is-expanded`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

{#if asDivider}
	<hr class="navbar-divider" />
{:else if href}
	<a
		use:hideOnClickOutside={() => {
			isActive = false;
		}}
		{href}
		{...$$restProps}
		class={classes}
		style={styles}>
		<slot />
	</a>
{:else}
	<div
		use:hideOnClickOutside={() => {
			isActive = false;
		}}
		{...$$restProps}
		class={classes}
		style={styles}>
		<slot />
	</div>
{/if}
