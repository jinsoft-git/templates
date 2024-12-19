<script lang="ts">
	import FiveLogo from '$lib/assets/img/five_logo.svg';

	let { children } = $props();
	const categories = ['all', 'dining', 'bbq', 'beverage', 'alcohol'];
	let selectedCategory = $state(categories[0]);
</script>

<img src={FiveLogo} alt="logo" class="h-24 object-contain object-center mx-auto my-6" />
<section class="wrapper flex justify-center gap-6">
	{#each categories as category}
		<button
			class="uppercase border-b-2 {selectedCategory == category
				? ' border-b-primary'
				: 'border-b-transparent'}"
			onclick={() => (selectedCategory = category)}
		>
			{category}
		</button>
	{/each}
</section>
{@render children()}
