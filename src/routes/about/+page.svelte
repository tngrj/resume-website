<script lang="ts">
	import AboutCard from '$lib/components/aboutCard.svelte';
	import { RecursiveTreeView } from '@skeletonlabs/skeleton';

	let certifications = [
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

<div class="container mx-auto max-w-5xl px-8 sm:px-0 pb-48">
	<h3 class="h3 underline text-white">Experience</h3>

	<AboutCard
		organisation="Infineon Technologies Asia Pacific Pte Ltd"
		shortOrganisation="Infineon Technologies"
		organisationUrl="https://www.infineon.com"
		position="Digitalisation / Automation Project Engineer"
		date="May - Dec 2022"
		details={[
			'Contributed to the development of inventory database web application, including potential future expansion',
			'Boosted productivity by digitalising internal processes',
			'Used Flask-Login to provide Role-Based Access Control (RBAC) for secure access management',
			'Led the full project lifecycle utilising project management software, <strong>(KLUSA)</strong>, delivering the project one month ahead of schedule',
			'Refined the project code structure for improved readability and scalability with the use of Flask Blueprints',
			'Raised awareness of the project by creating informative posters, publications, and presentations for internal use'
		]}
		skills={['HTML', 'CSS', 'JavaScript', 'MySQL', 'Python', 'Flask', 'RedHat OpenShift']}
	/>

	<AboutCard
		organisation="Centre for Strategic Infocomm Technologies"
		shortOrganisation="CSIT"
		organisationUrl="https://www.csit.gov.sg"
		position="Cybersecurity Software Researcher"
		date="Mar - Apr 2019"
		details={['Designed and developed in-house software']}
		skills={['HTML', 'CSS', 'JavaScript']}
	/>

	<h3 class="h3 underline text-white">Education</h3>

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

	<h3 class="h3 underline text-white">Online Certification</h3>

	<div class="card mb-4">
		<section class="p-4">
			<RecursiveTreeView nodes={myTreeViewNodes} />
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
