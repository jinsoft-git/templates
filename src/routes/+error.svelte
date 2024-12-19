<script lang="ts">
	import Header from '$lib/components/header.svelte';
</script>

<div class="min-h-screen bg-slate-100">
	<div class="wrapper">
		<Header />
		<div class="flex flex-col items-center justify-center min-h-[calc(100vh-18rem)] gap-2">
			<div class="font-semibold text-lg">페이지를 찾을 수 없습니다.</div>
			<div>
				<a href="/" class="text-xl text-cyan-900 underline">홈으로 돌아가기</a>
			</div>
		</div>
	</div>
</div>
