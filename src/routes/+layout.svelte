<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';
	import { page } from '$app/stores';
</script>

<Navigation />

<AppShell regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500-400">
			<div class="flex items-center top-8">
				<a href="/">
					<h2 class="h2 font-bold text-white">{$page.url.pathname}</h2>
				</a>
				<a class="anchor fixed right-28" href="/uses">Uses</a>
				<div class="fixed right-8">
					<LightSwitch />
				</div>
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
