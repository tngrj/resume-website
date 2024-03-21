<script>
	import { Linkedin, Github, Mail } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import typewriter from '../api/typewriter';
	let ready = false;
	onMount(() => (ready = true));

	const links = 'flex items-center mb-2 sm:mb-0 sm:mr-2';
</script>

<div class="text-white flex items-center justify-center h-full px-4 sm:px-0">
	{#if ready}
		<div class="text-start">
			<div in:typewriter={{ speed: 10 }}>
				<p class="text-2xl sm:text-4xl">Tng Renjie</p>
				<p class="text-lg sm:text-xl mt-2">Electrical & Electronic Engineering Undergraduate</p>
			</div>
			<div class="flex flex-col items-left sm:flex-row text-xs sm:text-sm mt-2">
				<a
					transition:fly={{ y: 50, duration: 1800, delay: 350 }}
					class={links}
					href="https://www.linkedin.com/in/tng-renjie/"
				>
					<Linkedin />&nbsp;LinkedIn
				</a>
				<a
					transition:fly={{ y: 50, duration: 1800, delay: 450 }}
					class={links}
					href="https://github.com/tngrj"
				>
					<Github />&nbsp;Github
				</a>
				<a
					transition:fly={{ y: 50, duration: 1800, delay: 550 }}
					class={links}
					href="mailto:rtng001@e.ntu.edu.sg"
				>
					<Mail />&nbsp;Email
				</a>
			</div>
		</div>
	{/if}
</div>
