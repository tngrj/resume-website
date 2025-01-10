<script lang="ts">
	import { page } from '$app/stores';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { GanttChart, Home, User } from 'lucide-svelte';

	const nav = 'flex flex-col items-center';
</script>

<div>
	<TabGroup
		justify="justify-center"
		active="bg-gradient-to-br variant-gradient-warning-success text-surface-600"
		hover="hover:bg-gradient-to-br variant-gradient-warning-success text-surface-600"
		flex="flex-1 lg:flex-none"
		rounded="rounded-lg"
		border="border-0 rounded-lg outline outline-offset-2 outline-primary-500"
		class="rounded-lg fixed z-50 -translate-x-1/2 bottom-8 left-1/2 bg-surface-300 dark:bg-surface-600 bg-opacity-60 w-auto"
	>
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>
			<svelte:fragment slot="lead">
				<div class={nav}>
					<Home />
					<span class="hidden md:inline">Home</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
		<span class="mx-1"></span>
		<TabAnchor href="/project" selected={$page.url.pathname === '/project'}>
			<svelte:fragment slot="lead">
				<div class={nav}>
					<GanttChart />
					<span class="hidden md:inline">Projects</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
		<span class="mx-1"></span>
		<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>
			<svelte:fragment slot="lead">
				<div class={nav}>
					<User />
					<span class="hidden md:inline">About</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
	</TabGroup>
</div>
