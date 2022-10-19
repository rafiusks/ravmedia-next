import Head from "next/head"
import Image from "next/image"

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col ">
			<Head>
				<title>Rafael Vidal - Professional Portfolio</title>
				<meta
					name="description"
					content="Rafael Vidal's professional portfolio build using NextJS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>Header</header>

			<main className="flex-grow">main content</main>

			<footer className="">footer</footer>
		</div>
	)
}
