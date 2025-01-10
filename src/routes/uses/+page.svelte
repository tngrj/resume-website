<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import {
		Computer,
		Laptop2,
		Monitor,
		Mouse,
		Headset,
		Keyboard,
		Smartphone,
		Code2,
		Dice2,
		Dribbble
	} from 'lucide-svelte';
</script>

<div class="container mx-auto max-w-4xl px-8 sm:px-0">
	<div class="flex flex-col text-start">
		<div class="my-4">
			<h3 class="h3 mb-4">Hardware</h3>
			<Accordion>
				<AccordionItem open>
					<svelte:fragment slot="lead"><Laptop2 /></svelte:fragment>
					<svelte:fragment slot="summary">Macbook Air M2 13"</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">M2 Chip</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">16 GB RAM</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">512 GB </span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem open>
					<svelte:fragment slot="lead"><Computer /></svelte:fragment>
					<svelte:fragment slot="summary">Custom PC</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">Formd T1 v2.1</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">AMD Ryzen 5 5700X3D</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">GIGABYTE X570 I AORUS Pro Wi-Fi </span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">16 GB RAM</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">500 GB NVMe WD Black SN750</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem open>
					<svelte:fragment slot="lead"><Keyboard /></svelte:fragment>
					<svelte:fragment slot="summary">Custom Keyboard</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">QK65</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">NovelKeys Cream</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">GMK Dots R2</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><Monitor /></svelte:fragment>
					<svelte:fragment slot="summary">Dell 27" G2724D</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">QHD 2560 x 1440</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">144 Hz</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">1 ms GtG</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem disabled>
					<svelte:fragment slot="iconOpen">&nbsp</svelte:fragment>
					<svelte:fragment slot="lead"><Mouse /></svelte:fragment>
					<svelte:fragment slot="summary">Logitech G Pro X Superlight</svelte:fragment>
				</AccordionItem>
				<AccordionItem disabled>
					<svelte:fragment slot="iconOpen">&nbsp</svelte:fragment>
					<svelte:fragment slot="lead"><Headset /></svelte:fragment>
					<svelte:fragment slot="summary">Logitech G Pro Gaming</svelte:fragment>
				</AccordionItem>
				<AccordionItem disabled>
					<svelte:fragment slot="iconOpen">&nbsp</svelte:fragment>
					<svelte:fragment slot="lead"><Smartphone /></svelte:fragment>
					<svelte:fragment slot="summary">iPhone 14 256 GB</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
		<div class="my-4">
			<h3 class="h3 mb-4">Software</h3>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"><Code2 /></svelte:fragment>
					<svelte:fragment slot="summary">Development</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">Visual Studio Code</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">Postman</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">Safari</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">Firefox</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><Dribbble /></svelte:fragment>
					<svelte:fragment slot="summary">Design & Prototype</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">Sketch</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">Figma</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><Dice2 /></svelte:fragment>
					<svelte:fragment slot="summary">Other</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list">
							<li>
								<span>•</span>
								<span class="flex-auto">Notion</span>
							</li>
							<li>
								<span>•</span>
								<span class="flex-auto">Apple Music</span>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</div>
