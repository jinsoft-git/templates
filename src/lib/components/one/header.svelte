<script lang="ts">
	import { onMount } from "svelte";

	const links = [
		{ name: 'home', href: '/templates/one' },
		{ name: 'menu', href: '/templates/one/menu' }
	];

  let currentUrl: String

  onMount(() => {
    currentUrl = window.location.pathname
  });
</script>

<header class="wrapper flex justify-between items-center py-3 border-b-label25 border-b">
	<a href="/templates/one" class="font-[Anton] font-normal text-2xl">5STARBBQ</a>
	<nav class="uppercase flex gap-12 font-light text-base">
		{#each links as { name, href }}
			<a {href} class="{currentUrl == href ? 'text-primary font-bold' : 'text-label'}">{name}</a>
		{/each}
	</nav>
</header>
