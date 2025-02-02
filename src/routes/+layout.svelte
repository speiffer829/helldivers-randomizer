<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="inner-bg">{@render children()}</div>
