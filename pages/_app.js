import "../styles/globals.css"
import '../styles/nprogress.css'
import Head from "next/head"
import nProgress from 'nprogress'
import Router from 'next/router'

Router.events.on("routeChangeStart", nProgress.start)
Router.events.on("routeChangeError", nProgress.done)
Router.events.on("routeChangeComplete", nProgress.done)

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TomasinoWeb R101</title>
                <meta charset='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta name='keywords' content='tomasinoweb, r101, ust' />
                <link rel='icon' href='/static/favicon.ico' />
                <link rel='shortcut icon' href='/images/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/static/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/static/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/static/favicon-16x16.png'
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
