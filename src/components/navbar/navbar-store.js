import { writable } from 'svelte/store';

const menuActive = writable(false);

export { menuActive };
