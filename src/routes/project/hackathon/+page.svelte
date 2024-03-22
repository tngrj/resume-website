<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	let elemCarousel: HTMLDivElement;

	const imageNames = Array.from({ length: 9 }, (_, i) => `rgw-${i + 1}`);

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount
				: elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0
				: elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="container mx-auto sm:px-0 px-8">
	<h2 class="text-2xl text-white font-bold">Wireframe</h2>
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] sm:gap-4 gap-0 items-center">
		<button type="button" class="btn-icon variant-filled sm:block hidden" on:click={carouselLeft}>
			<ArrowLeft />
		</button>

		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each imageNames as imageName}
				<img
					class="snap-center w-[2048px] rounded-container-token"
					src="/hackathon/wireframe/{imageName}.png"
					alt={imageName}
					loading="lazy"
				/>
			{/each}
		</div>

		<button type="button" class="btn-icon variant-filled sm:block hidden" on:click={carouselRight}>
			<ArrowRight />
		</button>
	</div>
	<br />
	<div class="card p-4 grid grid-cols-6 gap-4">
		{#each imageNames as imageName, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img
					class="rounded-container-token"
					src="/hackathon/wireframe/{imageName}.png"
					alt={imageName}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>
