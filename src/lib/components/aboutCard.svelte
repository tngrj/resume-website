<script lang="ts">
	export let organisation: string;
	export let shortOrganisation: string | null = null;
	export let organisationUrl: string;
	export let position: string;
	export let date: string;
	export let details: string[] = [];
	export let skills: string[] = [];
</script>

<div class="card mb-4">
	<header class="card-header flex flex-col items-start">
		<div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
			<a class="anchor" href={organisationUrl} target="_blank">
				<span class="hidden sm:inline">{organisation}</span>
				<span class="sm:hidden">{shortOrganisation ?? organisation}</span>
			</a>
			<span class="badge variant-ringed-success mt-2 sm:mt-0 sm:ml-4 self-start">
				<p class="m-1">{date}</p>
			</span>
		</div>
		<strong class="mt-2">{position}</strong>
	</header>

	{#if details.length > 0}
		<section class="p-4">
			<ul class="list">
				{#each details as detail}
					<li>
						<span>•</span>
						<span class="flex-auto">{@html detail}</span>
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<section class="p-2"></section>
	{/if}

	{#if skills.length > 0}
		<footer class="card-footer flex flex-wrap gap-1">
			{#each skills as skill}
				<span class="chip variant-ghost-success">{skill}</span>
			{/each}
		</footer>
	{/if}
</div>
