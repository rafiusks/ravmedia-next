import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Header({ title }) {
	return (
		<div>
			<header className="container mx-auto py-12 flex justify-between">
				<div className="text-white bg-gray-700 p-5">
					<div className="flex">
						<div className="relative mr-2 h-20 w-20">
							<Image
								alt="This is me, Raf"
								placeholder="dominantColor"
								src="/assets/39D2D69B-1CA5-44C5-9B2A-4AE4017A3DED.jpg"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="flex-col">
							<h2 className="text-white text-4xl pb-2">Rafael Vidal</h2>
							<p>Software Engineer, Consultant, not a Designer</p>
						</div>
					</div>
				</div>
				<div className="flex-1 ml-20 text-right">
					<Link href="/" className="p-3 cursor-pointer">
						<a>Home</a>
					</Link>
					{/* <span className="mr-3"></span>
					<Link href="/about" className="p-3 cursor-pointer">
						<a>About</a>
					</Link>
					<span className="mr-3"></span>
					<Link href="/projects" className="p-3 cursor-pointer">
						<a>Projects</a>
					</Link>
					<span className="mr-3"></span>
					<Link href="/contact" className="p-3 cursor-pointer">
						<a>Contact</a>
					</Link> */}
				</div>
			</header>
		</div>
	)
}
