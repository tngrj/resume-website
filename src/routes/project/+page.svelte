<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
</script>

<div class="grid grid-cols-5 mt-4">
	<div class="hidden text-white md:block md:sticky top-0 self-start ml-8 col-span-1">
		<TableOfContents active="text-white">Projects</TableOfContents>
	</div>
	<div
		use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}
		class="col-span-5 pb-96 md:col-span-3 space-y-8 mx-8 md:mx-0"
	>
		<div class="card card-hover overflow-hidden">
			<header>
				<img
					src="fyp-landing-page.png"
					alt="FYP Landing Page"
					class="inset-0 w-full h-full object-cover"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3">Database + Dashboard</h3>
				<article>
					<p>
						A web-based dashboard for efficient data management, visualization, and project resource
						tracking, improving organisational efficiency.
					</p>
				</article>
				<div class="flex flex-wrap gap-1">
					<span class="chip variant-ghost-success">SvelteKit</span>
					<span class="chip variant-ghost-success">Prisma</span>
					<span class="chip variant-ghost-success">PostgreSQL</span>
					<span class="chip variant-ghost-success">Lucia</span>
					<span class="chip variant-ghost-success">Tailwind</span>
					<span class="chip variant-ghost-success">Skeleton UI</span>
				</div>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 card-footer flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 data-toc-ignore class="font-bold">NTU Final Year Project</h6>
					<span class="badge variant-ringed-success">
						<p class="m-1">2024</p>
					</span>
				</div>
			</footer>
		</div>
		<div class="card card-hover overflow-hidden">
			<a href="/project/hackathon">
				<header>
					<img
						src="/hackathon/hackathon-landing-page.png"
						alt="Landing Page"
						class="inset-0 w-full h-full object-cover"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3">RetrenchGoWhere</h3>
					<article>
						<p>
							A platform for recently laid-off workers to discover job opportunities based on their
							previous experience and also develop new skills.
						</p>
					</article>
					<div class="flex flex-wrap gap-1">
						<span class="chip variant-ghost-success">SvelteKit</span>
						<span class="chip variant-ghost-success">Google Vertex AI</span>
						<span class="chip variant-ghost-success">Tailwind</span>
						<span class="chip variant-ghost-success">Skeleton UI</span>
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="p-4 card-footer flex justify-start items-center space-x-4">
					<div class="flex-auto flex justify-between items-center">
						<h6 data-toc-ignore class="font-bold">GoogleXdEEEvelopers Tech4Tomorrow Hackathon</h6>
						<span class="badge variant-ringed-success">
							<p class="m-1">2024</p>
						</span>
					</div>
				</footer>
			</a>
		</div>
		<div class="card card-hover overflow-hidden">
			<header>
				<img
					src="/resume-landing-page.png"
					alt="Landing Page"
					class="inset-0 w-full h-full object-cover"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3">Resume Website</h3>
				<article>
					<p>
						This website contains a repository of my projects and social links. It's also
						open-sourced!
					</p>
				</article>
				<div class="flex flex-wrap gap-1">
					<span class="chip variant-ghost-success">SvelteKit</span>
					<span class="chip variant-ghost-success">Tailwind</span>
					<span class="chip variant-ghost-success">Skeleton UI</span>
				</div>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 card-footer flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 data-toc-ignore class="font-bold">This website!</h6>
					<span class="badge variant-ringed-success">
						<p class="m-1">2024</p>
					</span>
				</div>
			</footer>
		</div>
		<div class="card card-hover overflow-hidden">
			<header>
				<img
					src="/4717-landing-page.png"
					alt="Landing Page"
					class="inset-0 w-full h-full object-cover"
				/>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3">Go Doc!</h3>
				<article>
					<p>
						A user-friendly clinic portal offering easy appointment booking, doctor profiles, and
						email confirmations for convenience.
					</p>
				</article>
				<div class="flex flex-wrap gap-1">
					<span class="chip variant-ghost-success">PHP</span>
				</div>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 card-footer flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 data-toc-ignore class="font-bold">NTU Module Project</h6>
					<span class="badge variant-ringed-success">
						<p class="m-1">2023</p>
					</span>
				</div>
			</footer>
		</div>
		<div class="card card-hover overflow-hidden">
			<div class="p-4 space-y-4">
				<h3 class="h3">Report Sick Telegram Bot</h3>
				<article>
					<p>A Telegram bot designed to help Duty Officers handle sick reports more efficiently.</p>
				</article>
				<div class="flex flex-wrap gap-1">
					<span class="chip variant-ghost-success">telegraf.js</span>
				</div>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 card-footer flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 data-toc-ignore class="font-bold">SAF Personal Project</h6>
					<span class="badge variant-ringed-success">
						<p class="m-1">2021</p>
					</span>
				</div>
			</footer>
		</div>
		<div class="card card-hover overflow-hidden">
			<div class="p-4 space-y-4">
				<h3 class="h3">Chatter</h3>
				<article>
					<p>
						WebRTC-powered video conferencing website designed for smart health video consultations.
					</p>
				</article>
				<div class="flex flex-wrap gap-1">
					<span class="chip variant-ghost-success">Bulma</span>
					<span class="chip variant-ghost-success">Express</span>
					<span class="chip variant-ghost-success">Firebase</span>
				</div>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 card-footer flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 data-toc-ignore class="font-bold">Ngee Ann Poly Final Year Project</h6>
					<span class="badge variant-ringed-success">
						<p class="m-1">2019</p>
					</span>
				</div>
			</footer>
		</div>
	</div>
	<div class="col-span-1" />
</div>
