import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<layout className="bg-zinc-900 text-white flex flex-col w-screen min-h-screen">
			<Head>
				<title>{Component.title} | Rafael Vidal - Professional Portfolio</title>
				<meta
					name="description"
					content="Rafael Vidal's professional portfolio build using NextJS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="flex-grow">
				<Component {...pageProps} />
			</div>
			<Footer />
		</layout>
	)
}

export default MyApp
