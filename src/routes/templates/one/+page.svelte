<script lang="ts">
	import NewDish from '$lib/assets/img/new-dish.png';
	import Chicken from '$lib/assets/img/chicken.png';
	import GriledBBQ from '$lib/assets/img/griled_bbq.png';
	import Soup from '$lib/assets/img/soup.png';
	import Map from '$lib/assets/img/map.png';
	import Phone from '$lib/assets/img/phone.svg';
	import SectionTitle from '$lib/components/one/section_title.svelte';
	import type { Sample } from '$lib/model/Sample';

	const flavors: Sample[] = [
		{
			id: 1,
			url: '/',
			description: 'Chicken',
			img: Chicken
		},
		{
			id: 2,
			url: 'Soy Chicken',
			description: 'Griled BBQ',
			img: GriledBBQ
		},
		{
			id: 3,
			url: 'Soy Chicken',
			description: 'Soup',
			img: Soup
		}
	];

	const workingHours = [
		{
			day: 'Sunday',
			hours: '11:00 AM - 9:00 PM'
		},
		{
			day: 'Monday',
			hours: 'Closed'
		},
		{
			day: 'Tuesday',
			hours: '10:00 AM - 10:00 PM'
		},
		{
			day: 'Wednesday',
			hours: '10:00 AM - 10:00 PM'
		},
		{
			day: 'Thursday',
			hours: '10:00 AM - 10:00 PM'
		},
		{
			day: 'Friday',
			hours: '10:00 AM - 10:00 PM'
		},
		{
			day: 'Saturday',
			hours: '10:00 AM - 10:00 PM'
		}
	];
</script>

<section class="wrapper flex gap-4 justify-between py-14 border-b-label25 border-b">
	<div class="flex flex-col justify-center items-center flex-1 gap-4">
		<div class="capitalize text-center text-4xl font-bold">our new dish</div>
		<div class="capitalize text-center text-3xl">soy chicken</div>
		<p class="text-label75 text-base">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint, nulla necessitatibus a
			aspernatur fugiat nemo soluta. Ipsam beatae blanditiis eos sequi modi minus
		</p>
		<a href="/" class="bg-primary w-fit px-4 py-2 rounded-lg drop-shadow-lg">
			<div class="text-white capitalize text-lg">learn more</div>
		</a>
	</div>
	<img
		src={NewDish}
		alt="food"
		class="h-[360px] object-cover object-center min-w-10 flex-1 rounded-md"
	/>
</section>

<section class="wrapper flex flex-col py-14 gap-4 border-b border-b-label25">
	<div class="flex justify-between items-center">
		<SectionTitle title="Authentic Flavors Of Korea" />
		<a href="/templates/one/menu"><p class="text-label75 text-base font-light">show more</p></a>
	</div>
	<div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each flavors as flavor (flavor.id)}
			<a href="/templates/one/menu" class="bg-white rounded-lg shadow-md flex flex-col gap-2 p-4">
				<div class="text-lg font-medium">{flavor.description}</div>
				<img
					src={flavor.img}
					alt="flavor"
					class="h-[320px] object-cover object-center rounded-md"
				/>
			</a>
		{/each}
	</div>
</section>

<section class="wrapper flex flex-col py-14 border-b border-b-label25 gap-4">
	<SectionTitle title="Address" />
	<div class="flex gap-16 items-center">
		<img
			src={Map}
			alt="map"
			class="h-[450px] object-cover object-center rounded-md min-w-8 w-full"
		/>
		<div class="flex flex-col gap-4 items-center w-full">
			<div class="flex-1 text-xl font-bold">123 E Washington Ave, Madison, WI 53703, USA</div>
			<div class="flex items-center gap-4">
				<img src={Phone} alt="phone" class="h-6 w-6" />
				<div class="text-lg font-medium">+1 608-251-8529</div>
			</div>
		</div>
	</div>
</section>

<section class="wrapper flex flex-col py-14 gap-4 items-center">
	<div class="capitalize text-2xl border-b-2 border-b-label">opening hours</div>
	<table>
		<tbody>
			{#each workingHours as { day, hours }}
				<tr>
					<th class="text-left font-normal">{day}</th>
					<td class="text-center font-normal pl-8">{hours}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
