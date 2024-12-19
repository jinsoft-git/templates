<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-slate-100 min-h-screen">
	{@render children()}
</div>
