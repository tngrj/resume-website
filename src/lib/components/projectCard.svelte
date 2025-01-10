<script lang="ts">
	export let title: string;
	export let description: string;
	export let technologies: string[];
	export let projectName: string;
	export let year: string;
	export let imageSrc: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let href: string | undefined = undefined;
</script>

<a {href}>
	<div class="card card-hover overflow-hidden bg-surface-400 mb-8">
		{#if imageSrc}
			<header>
				<img src={imageSrc} alt={imageAlt || title} class="inset-0 w-full h-full object-cover" />
			</header>
		{/if}
		<div class="p-4 space-y-4">
			<h3 class="h3">{title}</h3>
			<article>
				<p>{description}</p>
			</article>
			<div class="flex flex-wrap gap-1">
				{#each technologies as tech}
					<span class="chip variant-soft-success text-success-900">{tech}</span>
				{/each}
			</div>
		</div>
		<hr class="opacity-50" />
		<footer class="p-4 card-footer flex justify-start items-center space-x-4">
			<div class="flex-auto flex justify-between items-center">
				<h6 data-toc-ignore class="font-bold">{projectName}</h6>
				<span class="badge variant-ghost-secondary">
					<p class="m-1">{year}</p>
				</span>
			</div>
		</footer>
	</div>
</a>
