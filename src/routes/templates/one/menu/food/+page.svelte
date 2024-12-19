<script lang="ts">
	import Chevron from '$lib/assets/img/chevron.svg';
	import NewDish from '$lib/assets/img/new-dish.png';
</script>

<section class="wrapper flex flex-col gap-2">
	<a href="/templates/one/menu" class="flex items-center gap-1 p-2">
		<img src={Chevron} alt="go to menu" class="h-4" />
		<div class="uppercase text-label75 text-lg leading-3">all</div>
	</a>
	<img src={NewDish} alt="good food" class="h-[450px] object-cover object-center rounded-md" />
	<div class="capitalize text-center text-4xl mt-4 font-bold">bulgogi</div>
	<div class="mx-auto">
		<p class="max-w-screen-md text-base text-label75 min-h-40 mt-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint consequatur animi in
			quo quaerat aspernatur! Ut tempora, at tempore, quis quo ullam animi dignissimos ipsum illo
			aliquid illum ad.
		</p>
	</div>
</section>
