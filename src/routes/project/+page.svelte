<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<div class="grid grid-cols-5 mt-4 md:pb-36">
	<div class="hidden md:block md:sticky top-0 self-start ml-8 col-span-1">
		<TableOfContents indentStyles={{ h3: '' }} active="text-white"
			><p class="underline">Projects</p></TableOfContents
		>
	</div>
	<div
		use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}
		class="col-span-5 pb-16 md:pb-96 md:col-span-3 space-y-8 mx-8 md:mx-0"
	>
		<ProjectCard
			title="Database + Dashboard"
			description="A web-based dashboard for efficient data management, visualization, and project resource tracking, improving organisational efficiency."
			technologies={['SvelteKit', 'Prisma', 'PostgreSQL', 'Lucia', 'Tailwind', 'Skeleton UI']}
			projectName="NTU Final Year Project"
			year="2024"
			imageSrc="fyp-landing-page.png"
			imageAlt="FYP Landing Page"
		/>
		<ProjectCard
			title="RetrenchGoWhere"
			description="A platform for recently laid-off workers to discover job opportunities based on their previous experience and also develop new skills."
			technologies={['SvelteKit', 'Google Vertex AI', 'Tailwind', 'Skeleton UI']}
			projectName="GoogleXdEEEvelopers Tech4Tomorrow Hackathon"
			year="2024"
			imageSrc="/hackathon/hackathon-landing-page.png"
			imageAlt="Landing Page"
			href="/project/hackathon"
		/>

		<ProjectCard
			title="Resume Website"
			description="This website contains a repository of my projects and social links. It's also open-sourced!"
			technologies={['SvelteKit', 'Tailwind', 'Skeleton UI']}
			projectName="This website!"
			year="2024"
			imageSrc="/resume-landing-page.png"
			imageAlt="Landing Page"
		/>

		<ProjectCard
			title="Go Doc!"
			description="A user-friendly clinic portal offering easy appointment booking, doctor profiles, and email confirmations for convenience."
			technologies={['PHP']}
			projectName="NTU Module Project"
			year="2023"
			imageSrc="/4717-landing-page.png"
			imageAlt="Landing Page"
		/>

		<ProjectCard
			title="Report Sick Telegram Bot"
			description="A Telegram bot designed to help Duty Officers handle sick reports more efficiently."
			technologies={['telegraf.js']}
			projectName="SAF Personal Project"
			year="2021"
		/>

		<ProjectCard
			title="Chatter"
			description="WebRTC-powered video conferencing website designed for smart health video consultations."
			technologies={['Bulma', 'Express', 'Firebase']}
			projectName="Ngee Ann Poly Final Year Project"
			year="2019"
		/>
	</div>
</div>
