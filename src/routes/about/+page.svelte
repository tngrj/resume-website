<script lang="ts">
	import AboutCard from '$lib/components/aboutCard.svelte';
	import { RecursiveTreeView } from '@skeletonlabs/skeleton';

	let certifications = [
		{
			title: 'Google Project Management',
			organization: 'Coursera',
			url: 'https://coursera.org/share/153d47f6f6a776f90695c252876aedde',
			courses: [
				'Foundations of Project Management',
				'Project Initiation: Starting a Successful Project',
				'Project Planning: Putting It All Together',
				'Project Execution: Running the Project',
				'Agile Project Management',
				'Capstone: Applying Project Management in the Real World'
			]
		},
		{
			title: 'Google UX Design',
			organization: 'Coursera',
			url: 'https://coursera.org/share/08cfc415c0b37bce8b5cdd1146ea03b2',
			courses: [
				'Foundations of User Experience (UX) Design',
				'Start the UX Design Process: Empathize, Define, and Ideate',
				'Build Dynamic User Interfaces (UI) for Websites',
				'Conduct UX Research and Test Early Concepts',
				'Create High-Fidelity Designs and Prototypes in Figma',
				'Build Wireframes and Low-Fidelity Prototypes',
				'Design a User Experience for Social Good & Prepare for Jobs'
			]
		},
		{
			title: 'Web Design for Everybody: Basics of Web Development & Coding',
			shortTitle: 'Web Design for Everybody',
			organization: 'Coursera',
			url: 'https://coursera.org/share/09ab4a1d75611d767514d0b1aded77df',
			courses: [
				'Introduction to HTML5',
				'Introduction to CSS3',
				'Interactivity with JavaScript',
				'Advanced Styling with Responsive Design 3',
				'Web Design for Everybody Capstone'
			]
		},
		{
			title: 'PostgreSQL for Everybody',
			organization: 'Coursera',
			url: 'https://coursera.org/share/c9bb524c7e7c60e2880cb0ffb2e35fc2',
			courses: [
				'Database Design and Basic SQL in PostgreSQL',
				'Intermediate PostgreSQL',
				'JSON and Natural Language Processing in PostgreSQL',
				'Database Architecture, Scale, and NoSQL with Elasticsearch'
			]
		},
		{
			title: 'Python Basics',
			organization: 'Coursera',
			url: 'https://coursera.org/share/c00363eef57b8325ce3bea840a1466be'
		}
	];

	let myTreeViewNodes = certifications.map((cert, index) => {
		let node = {
			id: `cert-${index}`,
			content: `
                <div class="flex flex-col sm:flex-row">
                    <strong class="block sm:hidden mb-2 sm:mr-2 sm:mb-0">${cert.shortTitle || cert.title}</strong>
                    <strong class="hidden sm:block mb-2 sm:mr-2 sm:mb-0">${cert.title}</strong>
                    <div class="hidden mx-2 sm:block">-</div>
                    <a class="anchor" href="${cert.url}" target="_blank">${cert.organization}</a>
                </div>
            `,
			children: cert.courses
				? cert.courses.map((course, courseIndex) => ({
						id: `cert-${index}-course-${courseIndex}`,
						content: course
					}))
				: []
		};
		return node;
	});
</script>

<div class="container mx-auto max-w-4xl px-8 sm:px-0 pb-32">
	<h3 class="h3 font-bold">Experience</h3>
	<hr class="mb-4 opacity-50" />
	<AboutCard
		organisation="Synapxe Pte Ltd"
		shortOrganisation="Synapxe"
		organisationUrl="https://www.synapxe.sg"
		position="Systems Analyst"
		date="Sept 2024 - Present"
		details={[
			'Provide primary support to end-users, resolving application-specific and cross-team issues efficiently',
			'Design, build, test, and implement system workflows and changes to meet organizational needs',
			'Act as a liaison between end-users, business stakeholders, and Epic representatives, ensuring alignment on deliverables and workflows',
			'Conduct training sessions, troubleshoot technical issues, and maintain communication with leadership on project progress',
			'Collaborate with teams to ensure the system meets business goals and operational requirements'
		]}
	/>

	<AboutCard
		organisation="Infineon Technologies Asia Pacific Pte Ltd"
		shortOrganisation="Infineon Technologies"
		organisationUrl="https://www.infineon.com"
		position="Digitalisation / Automation Project Engineer (Internship)"
		date="May - Dec 2022"
		details={[
			'Contributed to the development of inventory database web application, including potential future expansion',
			'Boosted productivity by digitalising internal processes',
			'Used Flask-Login to provide Role-Based Access Control (RBAC) for secure access management',
			'Led the full project lifecycle utilising project management software, <strong>(KLUSA)</strong>, delivering the project one month ahead of schedule',
			'Refined the project code structure for improved readability and scalability with the use of Flask Blueprints',
			'Raised awareness of the project by creating informative posters, publications, and presentations for internal use'
		]}
		skills={['HTML', 'CSS', 'JavaScript', 'MySQL', 'Python', 'Flask', 'Red Hat OpenShift']}
	/>

	<h3 class="h3 font-bold">Education</h3>
	<hr class="mb-4 opacity-50" />
	<AboutCard
		organisation="Nanyang Technological University"
		organisationUrl="https://www.ntu.edu.sg/eee/admissions/programmes/undergraduate-programmes/detail/bachelor-of-engineering-in-electrical-and-electronic-engineering-(eee)"
		position="Bachelor of Engineering (Electrical and Electronic Engineering)"
		date="Aug 2021 - June 2024"
		skills={[
			'Data Structures & Algorithms',
			'Introduction to Data Science & AI',
			'Artificial Intelligence & Data Mining',
			'Machine Learning Design & Application',
			'Web Application Design',
			'Software Engineering',
			'Database Systems',
			'Computer Communications'
		]}
	/>

	<AboutCard
		organisation="Ngee Ann Polytechnic"
		organisationUrl="https://www.np.edu.sg/schools-courses/academic-schools/school-of-engineering/diploma-in-electrical-engineering"
		position="Diploma in Electrical Engineering"
		date="Apr 2016 - May 2019"
		skills={['GPA 3.90/4.00', 'Silver Medalist']}
	/>

	<h3 class="h3 font-bold">Online Certification</h3>
	<hr class="mb-4 opacity-50" />
	<div class="card bg-surface-400 mb-8">
		<section class="p-4">
			<RecursiveTreeView nodes={myTreeViewNodes} />
		</section>
	</div>

	<div class="flex justify-center items-center">
		<a class="anchor" href="/Resume (Tng Renjie).pdf">Download a copy of my CV</a>
	</div>
</div>
