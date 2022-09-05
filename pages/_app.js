import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TomasinoWeb</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
