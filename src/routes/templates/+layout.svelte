<script lang="ts">
	import AnnounceBar from '$lib/components/announce_bar.svelte';

	let { children } = $props();
</script>

	<AnnounceBar />
  {@render children()}
