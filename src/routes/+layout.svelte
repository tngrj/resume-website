<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<Navigation />

<AppShell regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500-400">
			<svelte:fragment slot="lead">
				<a href="/">
					<h3 class="h3 font-bold">{$page.url.pathname}</h3>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="anchor fixed right-28" href="/uses">Uses</a>
				<div class="fixed right-8">
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
