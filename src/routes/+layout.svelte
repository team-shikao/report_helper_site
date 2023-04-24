<script>
	import Header from '$lib/Header.svelte';
	import '$lib/reset.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
    main {
        min-height: calc(100% - 45px);
        padding: 0;
        overflow: hidden;
    }
</style>