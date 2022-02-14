export function hideOnClickOutside(node, callback) {
	const onWindowClick = (e) => {
		if (!node.contains(e.target)) {
			callback();
		}
	};

	window.addEventListener('click', onWindowClick);

	return {
		destroy: () => {
			window.removeEventListener('click', onWindowClick);
		},
	};
}
