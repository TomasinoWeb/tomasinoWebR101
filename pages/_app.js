import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TomasinoWeb R101 Application</title>
                <meta charset="utf-8"/>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta name="keywords" content="tomasinoweb, r101, ust" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
