<script>
    export let width = 'auto';

    /** @type {BulmaTextAlign}*/
    export let align = 'has-text-left';

    $: classes = [align, $$restProps.class].filter(Boolean).join(' ');
    $: styles = [width && `width:${width}`, $$restProps.style].filter(Boolean).join(';');
</script>

<th on:click {...$$restProps} class={classes} style={styles}>
    <slot />
</th>
