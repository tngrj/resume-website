<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto max-w-5xl px-8 sm:px-0 pb-48">
	<h3 class="h3 underline text-white">Experience</h3>

	<div class="card mb-4">
		<header class="card-header flex flex-col items-start">
			<div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<a class="anchor" href="https://www.infineon.com" target="_blank">
					<span class="hidden sm:inline">Infineon Technologies Asia Pacific Pte Ltd</span>
					<span class="sm:hidden">Infineon Technologies</span>
				</a>
				<span class="badge variant-ringed-success mt-2 sm:mt-0 sm:ml-4 self-start">
					<p class="m-1">May - Dec 2022</p>
				</span>
			</div>
			<strong class="mt-2">Digitalisation / Automation Project Engineer</strong>
		</header>
		<section class="p-4">
			<ul class="list">
				<li>
					<span>•</span>
					<span class="flex-auto">
						Contributed to the development of inventory database web application, including
						potential future expansion
					</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">Boosted productivity by digitalizing internal processes</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto"
						>Used Flask-Login to provide Role-Based Access Control (RBAC) for secure access
						management</span
					>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">
						Led the full project lifecycle utilising project management software, <strong
							>(KLUSA)</strong
						>, delivering the project one month ahead of schedule
					</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto"
						>Refined the project code structure for improved readability and scalability with the
						use of Flask Blueprints</span
					>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">
						Raised awareness of the project by creating informative posters, publications, and
						presentations for internal use
					</span>
				</li>
			</ul>
		</section>
		<footer class="card-footer flex flex-wrap gap-1">
			<span class="chip variant-ghost-success">HTML</span>
			<span class="chip variant-ghost-success">CSS</span>
			<span class="chip variant-ghost-success">JavaScript</span>
			<span class="chip variant-ghost-success">MySQL</span>
			<span class="chip variant-ghost-success">Python</span>
			<span class="chip variant-ghost-success">Flask</span>
			<span class="chip variant-ghost-success">RedHat OpenShift</span>
		</footer>
	</div>

	<div class="card mb-4">
		<header class="card-header flex flex-col items-start">
			<div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<a class="anchor" href="https://www.csit.gov.sg" target="_blank">
					<span class="hidden sm:inline">Centre for Strategic Infocomm Technologies</span>
					<span class="sm:hidden">CSIT</span>
				</a>
				<span class="badge variant-ringed-success mt-2 sm:mt-0 sm:ml-4 self-start">
					<p class="m-1">Mar - Apr 2019</p>
				</span>
			</div>
			<strong class="mt-2">Cybersecurity Software Researcher</strong>
		</header>
		<section class="p-4">
			<ul class="list">
				<li>
					<span>•</span>
					<span class="flex-auto"> Designed and developed in-house software </span>
				</li>
			</ul>
		</section>
		<footer class="card-footer">
			<span class="chip variant-ghost-success">HTML</span>
			<span class="chip variant-ghost-success">CSS</span>
			<span class="chip variant-ghost-success">JavaScript</span>
		</footer>
	</div>

	<h3 class="h3 underline text-white">Education</h3>

	<div class="card mb-4">
		<header class="card-header flex flex-col items-start">
			<div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<a
					class="anchor"
					href="https://www.ntu.edu.sg/eee/admissions/programmes/undergraduate-programmes/detail/bachelor-of-engineering-in-electrical-and-electronic-engineering-(eee)"
					target="_blank"
				>
					Nanyang Technological University
				</a>
				<span class="badge variant-ringed-success mt-2 sm:mt-0 sm:ml-4 self-start">
					<p class="m-1">Aug 2021 - June 2024</p>
				</span>
			</div>
			<strong class="mt-2">Bachelor of Engineering (Electrical and Electronic Engineering)</strong>
		</header>
		<section class="p-2"></section>
		<footer class="card-footer flex flex-wrap gap-1">
			<span class="chip variant-ghost-success">Data Structures & Algorithms</span>
			<span class="chip variant-ghost-success">Introduction to Data Science & AI</span>
			<span class="chip variant-ghost-success">Artificial Intelligence & Data Mining</span>
			<span class="chip variant-ghost-success">Machine Learning Design & Application</span>
			<span class="chip variant-ghost-success">Web Application Design</span>
			<span class="chip variant-ghost-success">Software Engineering</span>
			<span class="chip variant-ghost-success">Database Systems</span>
			<span class="chip variant-ghost-success">Computer Communications</span>
		</footer>
	</div>

	<div class="card mb-4">
		<header class="card-header flex flex-col items-start">
			<div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<a
					class="anchor"
					href="https://www.np.edu.sg/schools-courses/academic-schools/school-of-engineering/diploma-in-electrical-engineering"
					target="_blank"
				>
					Ngee Ann Polytechnic
				</a>
				<span class="badge variant-ringed-success mt-2 sm:mt-0 sm:ml-4 self-start">
					<p class="m-1">Apr 2016 - May 2019</p>
				</span>
			</div>
			<strong class="mt-2">Diploma in Electrical Engineering</strong>
		</header>
		<section class="p-2"></section>
		<footer class="card-footer flex flex-wrap gap-1">
			<span class="chip variant-ghost-success">GPA 3.90/4.00</span>
			<span class="chip variant-ghost-success">Silver Medalist</span>
		</footer>
	</div>

	<h3 class="h3 underline text-white">Online Certification</h3>

	<div class="card mb-4">
		<section class="p-4">
			<TreeView>
				<TreeViewItem>
					<div class="flex flex-col sm:flex-row">
						<strong class="mb-2 sm:mr-2 sm:mb-0">
							Web Design for Everybody: Basics of Web Development & Coding
						</strong>
						<div class="hidden mx-2 sm:block">-</div>

						<a
							class="anchor"
							href="https://coursera.org/share/09ab4a1d75611d767514d0b1aded77df"
							target="_blank"
						>
							Coursera
						</a>
					</div>
					<svelte:fragment slot="children">
						<TreeViewItem>Introduction to HTML5</TreeViewItem>
						<TreeViewItem>Introduction to CSS3</TreeViewItem>
						<TreeViewItem>Interactivity with JavaScript</TreeViewItem>
						<TreeViewItem>Advanced Styling with Responsive Design 3</TreeViewItem>
						<TreeViewItem>Web Design for Everybody Capstone</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
				<TreeViewItem>
					<div class="flex flex-col sm:flex-row">
						<strong class="mb-2 sm:mr-2 sm:mb-0"> PostgreSQL for Everybody </strong>
						<div class="hidden mx-2 sm:block">-</div>

						<a
							class="anchor"
							href="https://coursera.org/share/c9bb524c7e7c60e2880cb0ffb2e35fc2"
							target="_blank"
						>
							Coursera
						</a>
					</div>
					<svelte:fragment slot="children">
						<TreeViewItem>Database Design and Basic SQL in PostgreSQL</TreeViewItem>
						<TreeViewItem>Intermediate PostgreSQL</TreeViewItem>
						<TreeViewItem>JSON and Natural Language Processing in PostgreSQL</TreeViewItem>
						<TreeViewItem>Database Architecture, Scale, and NoSQL with Elasticsearch</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
				<TreeViewItem>
					<div class="flex flex-col sm:flex-row">
						<strong class="mb-2 sm:mr-2 sm:mb-0"> Python Basics </strong>
						<div class="hidden mx-2 sm:block">-</div>

						<a
							class="anchor"
							href="https://coursera.org/share/c00363eef57b8325ce3bea840a1466be"
							target="_blank"
						>
							Coursera
						</a>
					</div>
				</TreeViewItem>
			</TreeView>
		</section>
	</div>

	<div class="flex justify-center items-center mt-10">
		<a class="anchor" href="/Resume (Tng Renjie).pdf">Download a copy of my CV</a>
	</div>
</div>

<style>
	h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
</style>
