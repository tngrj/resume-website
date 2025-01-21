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

	function carouselThumbnail(index: number): void {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="container mx-auto max-w-4xl px-4 sm:px-0 flex flex-col items-center">
	<article class="prose dark:prose-invert lg:prose-lg prose-hr:mb-8">
		<h3>GoogleXdEEEvelopers Tech4Tomorrow Hackathon</h3>
		<hr />
		<p>
			As part of the NTU Tech4Tomorrow Hackathon, our team developed <strong>RetrenchGoWhere</strong
			>, a comprehensive platform designed to support mid-career individuals facing job
			displacement. The platform offers resources and tools to assist users in navigating their
			career transitions effectively.
		</p>
		<p>
			I implemented and developed a dynamic platform integrating AI-driven job recommendations with
			personalised upskilling resources. Built with SvelteKit, Google Cloud Functions, and Vertex
			AI, utilising pre-labelled job data to provide tailored job suggestions and skill enhancement
			paths.
		</p>
		<ol>
			<li>
				<strong>Job Recommendations</strong>
				<p>
					Users input their job title, industry, and upload their resumes, which are parsed using
					<code>pdfjs-dist</code>. Vertex AI generates potential job roles by analysing resume
					content and the user's current job title.
				</p>
			</li>
			<li>
				<strong>Cloud Run Processing</strong>
				<p>
					The recommendations from Vertex AI are further refined through a Cloud Run function. This
					function uses TF-IDF vectorisation and cosine similarity to match the user's input against
					preprocessed job postings stored in Google Cloud Storage, filtered by industry and
					relevance.
				</p>
			</li>
			<li>
				<strong>Interactive Job Listings</strong>
				<p>
					Job categories and opportunities are displayed in a collapsible component. Users can
					explore grouped job listings, view details, and analyse job-specific data.
				</p>
			</li>
			<li>
				<strong>MySkillsFuture Integration</strong>
				<p>
					Each job listing links to relevant upskilling courses on MySkillsFuture, transforming job
					titles into URL-friendly formats. This allows users to explore relevant courses for skill
					enhancement and career advancement.
				</p>
			</li>
		</ol>

		<h4>IT Demo</h4>
		<video controls class="rounded-container-token">
			<source src="/hackathon/IT.mov" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<h4>Business Demo</h4>
		<video controls class="rounded-container-token">
			<source src="/hackathon/Business.mov" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<h4>Wireframe</h4>
	</article>

	<div class="grid grid-cols-[auto_1fr_auto] gap-0 mt-4 items-center">
		<button
			type="button"
			class="btn-icon hidden sm:inline-flex self-center"
			on:click={carouselLeft}
		>
			<ArrowLeft />
		</button>
		<div
			bind:this={elemCarousel}
			class="mx-2 snap-x snap-mandatory w-[707px] scroll-smooth flex overflow-x-auto"
		>
			{#each imageNames as imageName}
				<img
					class="snap-center w-[2048px] rounded-container-token"
					src="/hackathon/wireframe/{imageName}.png"
					alt={imageName}
					loading="lazy"
				/>
			{/each}
		</div>
		<button
			type="button"
			class="btn-icon hidden sm:inline-flex self-center"
			on:click={carouselRight}
		>
			<ArrowRight />
		</button>
	</div>
	<br />
	<div class="card bg-surface-400 p-4 grid grid-cols-5 gap-4">
		{#each imageNames as imageName, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img
					class="rounded-container-token"
					src={`/hackathon/wireframe/${imageName}.png`}
					alt={imageName}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>
