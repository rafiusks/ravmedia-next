import Image from "next/image"
import Tech from "../components/Tech"

export default function Home({ techStack }) {
	return (
		<div>
			<main className="container h-[80vh] mx-auto flex justify-between flex-col">
				<div className="flex-grow text-center flex">
					<h1 className="text-7xl m-auto">Hi there</h1>
				</div>
				<div className="text-right pb-20">
					<p className="text-7xl m-8">&#8595;</p>
				</div>
			</main>
			<section className="h-screen w-full bg-gray-200 text-black flex">
				<div className="container m-auto flex-col bg-white h-[95%] p-4 shadow-lg rounded snap-center snap-mandatory">
					<div className="">
						<h2 className="py-12 text-5xl">
							Software Engineering Technologies
						</h2>
					</div>
					<div className="mt-10 mb-8 w-full">
						<div className="relative w-full h-80">
							<Image
								src="https://www.freecodecamp.org/news/content/images/2020/06/front-end-vs-back-end-engineer-2.jpg"
								alt="Skills"
								layout="fill"
							/>
							<div className="absolute flex w-full h-full z-50 top-0 bg-blend-multiply">
								<div className="w-[49%] h-full"></div>
								<div className="flex-grow border-8 bg-white border-white"></div>
								<div className="w-[49%] h-full"></div>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="p-4 space-y-5 w-[49%]">
							<div className="columns-2 space-y-5">
								{techStack.frontend?.map((tech) => (
									<Tech
										key={tech.img}
										img={tech.img}
										title={tech.title}
										pill={tech.pill}
									></Tech>
								))}
							</div>
						</div>
						<div className="flex-grow"></div>
						<div className="p-4 space-y-5 w-[49%]">
							<div className="columns-2 space-y-5">
								{techStack.backend?.map((tech) => (
									<Tech
										key={tech.img}
										img={tech.img}
										title={tech.title}
										pill={tech.pill}
									></Tech>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="h-screen w-full bg-gray-700 text-white p-4 snap-center">
				<section className="container mx-auto flex-col">
					<div className="">
						<h2 className="py-12 text-5xl">Leadership Skills</h2>
					</div>
					<div className="flex">
						<div className="p-4 space-y-5 w-[49%]">
							<div className="relative w-[700px] h-[670px]">
								<Image
									alt="Tech Lead"
									placeholder="dominantColor"
									src="/assets/fy4cyjjlg8v21.jpeg"
									layout="fill"
								/>
							</div>
						</div>
						<div className="flex-grow"></div>
						<div className="p-4 space-y-5 w-[49%]">
							<p>Continous work in progress</p>
						</div>
					</div>
				</section>
				<section></section>
			</section>
		</div>
	)
}

Home.title = "Home"

Home.getInitialProps = async (ctx) => {
	const techStack = {
		frontend: [
			{
				title: "React",
				img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
				pill: "TechPillJavaScript",
			},
			{
				title: "Laravel",
				img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
				pill: "TechPillJavaScript",
			},
			{
				title: "Vue 2/3",
				img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
				pill: "TechPillJavascript",
			},
			{
				title: "NuxtJS",
				img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
				pill: "TechPillJavascript",
			},
			{
				title: "Tailwind CSS",
				img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
				pill: "TechPillTailwind",
			},
		],
		backend: [
			{
				title: "Node.js",
				img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
				pill: "TechPillJavaScript",
			},
			{
				title: "Laravel",
				img: "https://laravel.com/img/logomark.min.svg",
				pill: "TechPillPhp",
			},
			{
				title: "Symfony",
				img: "https://seeklogo.com/images/S/symfony-logo-AA34C8FC16-seeklogo.com.png",
				pill: "TechPillPhp",
			},
			{
				title: "AWS",
				img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
				pill: "TechPillCloud",
			},
			{
				title: "Azure",
				img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
				pill: "TechPillCloud",
			},
			{
				title: "GCP",
				img: "https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png",
				pill: "TechPillCloud",
			},
		],
	}

	return { techStack }
}
