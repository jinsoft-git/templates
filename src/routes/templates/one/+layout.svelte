<script lang="ts">
	import Footer from '$lib/components/one/footer.svelte';
	import Header from '$lib/components/one/header.svelte';

	let { children } = $props();
</script>

<main class="bg-[#FFFBFA] font-[Roboto] text-label">
  <Header />
	{@render children()}
	<Footer />
</main>
