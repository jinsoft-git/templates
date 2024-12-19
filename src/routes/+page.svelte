<script lang="ts">
	import SampleCard from '$lib/components/sample_card.svelte';
	import type { Sample } from '$lib/model/Sample';
	import sampeData from '$lib/assets/sample.json';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';

	onMount(async () => {
		homePages = sampeData as Sample[];
	});
	let homePages: Sample[] = [];
</script>

<section class="wrapper">
	<Header />
</section>

<section class="wrapper my-4">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each homePages as homePage, index (index)}
			<SampleCard sample={homePage} />
		{/each}
	</div>
</section>
