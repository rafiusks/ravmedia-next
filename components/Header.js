import Head from "next/head"

export default function Header() {
	return (
		<div>
			<Head>
				<title>Rafael Vidal - Professional Portfolio</title>
				<meta
					name="description"
					content="Rafael Vidal's professional portfolio build using NextJS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>Header</header>
		</div>
	)
}
