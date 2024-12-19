<script lang="ts">
	import type { Sample } from '$lib/model/Sample';

	let { sample }: { sample: Sample } = $props();
</script>

<a href={`/templates/${sample.url}`}>
	<div
		class="flex bg-white rounded-lg shadow-md p-4 flex-col gap-2 hover:scale-[105%] transition-transform"
	>
		<img
			src={`/src/lib/assets/img/${sample.img}.webp`}
			alt="marine"
			class="w-full h-64 rounded-md object-cover object-top"
		/>
		<div class="text-center font-semibold capitalize">{sample.description}</div>
	</div>
</a>
