<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<header class="stripes border-yellow block border-x-5 px-1 py-2">
	<h1
		class="font-heading text-center text-2xl font-bold text-white uppercase md:text-4xl lg:text-4xl"
	>
		{title}
	</h1>
</header>
