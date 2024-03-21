<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto max-w-5xl text-white px-8 sm:px-0 pb-48">
	<div class="flex flex-col text-start">
		<h3 class="h3 underline">Experience</h3>

		<div class="mb-4">
			<div class="flex flex-col sm:flex-row">
				<strong class="mr-2">Digitalisation / Automation Project Engineer</strong>
				<div class="hidden mx-2 sm:block">-</div>
				<a class="anchor" href="https://www.infineon.com" target="_blank">
					Infineon Technologies Asia Pacific Pte Ltd
				</a>
				<span class="mt-2 sm:mt-0 sm:ml-auto">May - Dec 2022</span>
			</div>
			<div>
				<small>
					<em>
						<strong>Technologies:</strong> HTML, CSS, JavaScript, jQuery, MySQL, Python, Flask, Red Hat
						OpenShift
					</em>
				</small>
			</div>
			<div class="my-2">
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
			</div>
		</div>

		<div class="mb-4">
			<div class="flex flex-col sm:flex-row">
				<strong class="mr-2">Cybersecurity Software Researcher</strong>
				<div class="flex flex-col sm:flex-row"></div>
				<div class="hidden mx-2 sm:block">-</div>

				<a class="anchor" href="https://www.csit.gov.sg" target="_blank">
					Centre for Strategic Infocomm Technologies
				</a>
				<span class="mt-2 sm:mt-0 sm:ml-auto">Mar - Apr 2019</span>
			</div>
			<div>
				<small>
					<em>
						<strong>Technologies:</strong> HTML, CSS, JavaScript
					</em>
				</small>
			</div>
			<div class="my-2">
				<ul class="list">
					<li>
						<span>•</span>
						<span class="flex-auto"> Designed and developed in-house software </span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="flex flex-col text-start">
		<h3 class="h3 underline">Education</h3>
		<div class="mb-4">
			<div class="flex flex-col sm:flex-row">
				<strong class="mr-2"
					>Bachelor of Engineering (Electrical and Electronic Engineering)
				</strong>
				<div class="hidden mx-2 sm:block">-</div>
				<a
					class="anchor"
					href="https://www.ntu.edu.sg/eee/admissions/programmes/undergraduate-programmes/detail/bachelor-of-engineering-in-electrical-and-electronic-engineering-(eee)"
					target="_blank"
				>
					Nanyang Technological University
				</a>
				<span class="mt-2 sm:mt-0 sm:ml-auto">Aug 2021 - <strong>June 2024</strong></span>
			</div>
			<div>
				<small>
					<em>
						<strong>Relevant Modules:</strong> Data Structures & Algorithms, Introduction to Data Science
						& Artificial Intelligence, Artificial Intelligence & Data Mining, Machine Learning Design
						& Application, Web Application Design, Software Engineering, Database Systems, Computer Communications
					</em>
				</small>
			</div>
		</div>
		<div class="mb-4">
			<div class="flex flex-col sm:flex-row">
				<strong class="mb-2 sm:mr-2 sm:mb-0">Diploma in Electrical Engineering</strong>
				<div class="hidden mx-2 sm:block">-</div>

				<a
					class="anchor"
					href="https://www.np.edu.sg/schools-courses/academic-schools/school-of-engineering/diploma-in-electrical-engineering"
					target="_blank"
				>
					Ngee Ann Polytechnic
				</a>
				<span class="mt-2 sm:mt-0 sm:ml-auto">Apr 2016 - May 2019</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col text-start">
		<h3 class="h3 underline">Online Certification</h3>

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
