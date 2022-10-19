import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	return (
		<layout>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</layout>
	)
}

export default MyApp
