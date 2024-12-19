<script lang="ts">
	import Chicken from '$lib/assets/img/chicken.png';
	import GriledBBQ from '$lib/assets/img/griled_bbq.png';
</script>


<section class="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
	{#each { length: 20 }, index}
		<a
			href="/templates/one/menu/food"
			class="flex gap-2 flex-col bg-white drop-shadow-md p-4 rounded-md transition-transform hover:scale-[105%]"
		>
			<img
				src={index % 2 == 0 ? Chicken : GriledBBQ}
				alt="food"
				class="h-80 object-cover rounded-md"
			/>
			<div class="uppercase text-center">{index % 2 == 0 ? 'chicken' : 'griled bbq'}</div>
		</a>
	{/each}
</section>

